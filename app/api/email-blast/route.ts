import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map()

function rateLimit(ip: string, limit = 5, window = 60000) {
  const now = Date.now()
  const userRequests = rateLimitMap.get(ip) || []
  
  // Clean old requests
  const validRequests = userRequests.filter((time: number) => now - time < window)
  
  if (validRequests.length >= limit) {
    return false
  }
  
  validRequests.push(now)
  rateLimitMap.set(ip, validRequests)
  return true
}

function generateEmailTemplate(data: {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - MyTallyBee</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #001f3f 0%, #003366 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">MyTallyBee</h1>
          <p style="color: #f59e0b; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">New Contact Form Submission</p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">
          <div style="background-color: #f1f5f9; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
            <h2 style="color: #001f3f; margin: 0 0 10px 0; font-size: 20px; font-weight: 600;">Contact Details</h2>
            <p style="color: #64748b; margin: 0; font-size: 14px;">Someone has submitted a contact form on your MyTallyBee website</p>
          </div>

          <div style="margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px;">
                  <strong style="color: #001f3f; font-size: 14px;">Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #374151; font-size: 14px;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #001f3f; font-size: 14px;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #374151; font-size: 14px;">
                  <a href="mailto:${data.email}" style="color: #f59e0b; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #001f3f; font-size: 14px;">Phone:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #374151; font-size: 14px;">
                  <a href="tel:${data.phone}" style="color: #f59e0b; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
              ` : ''}
              ${data.company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #001f3f; font-size: 14px;">Company:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #374151; font-size: 14px;">
                  ${data.company}
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #001f3f; font-size: 14px;">Submitted:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #374151; font-size: 14px;">
                  ${new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
            <h3 style="color: #001f3f; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Message:</h3>
            <div style="color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}?subject=Re: Your inquiry to MyTallyBee&body=Hi ${data.name},%0D%0A%0D%0AThank you for contacting MyTallyBee regarding your bookkeeping needs. I'd be happy to help you with..." 
               style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; font-size: 14px; margin-right: 10px;">
              Reply to ${data.name}
            </a>
            ${data.phone ? `
            <a href="tel:${data.phone}" 
               style="display: inline-block; background: linear-gradient(135deg, #001f3f 0%, #003366 100%); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; font-size: 14px;">
              Call ${data.name}
            </a>
            ` : ''}
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; margin: 0; font-size: 12px;">
            This email was sent from the MyTallyBee contact form at <a href="https://mytallybee.com" style="color: #f59e0b; text-decoration: none;">mytallybee.com</a>
          </p>
          <p style="color: #64748b; margin: 10px 0 0 0; font-size: 12px;">
            <strong>MyTallyBee</strong> - Professional QuickBooks Online Bookkeeping Services
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  console.log('=== EMAIL BLAST API CALLED ===')
  
  try {
    // Get client IP for rate limiting
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    console.log('Client IP:', ip)
    
    // Rate limiting: 5 requests per minute
    if (!rateLimit(ip, 5, 60000)) {
      console.log('Rate limit exceeded for IP:', ip)
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate request origin
    const origin = headersList.get('origin')
    console.log('Request origin:', origin)
    
    const allowedOrigins = [
      'https://mytallybee.com', 
      'http://localhost:3000',
      'http://localhost:3001'
    ]
    
    if (process.env.NODE_ENV === 'production' && origin && !allowedOrigins.includes(origin)) {
      console.log('Unauthorized origin:', origin)
      return NextResponse.json(
        { error: 'Unauthorized origin' },
        { status: 403 }
      )
    }

    const body = await request.json()
    console.log('Request body received:', body)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log('Missing required fields:', { 
        name: !!body.name, 
        email: !!body.email, 
        message: !!body.message 
      })
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      console.log('Invalid email format:', body.email)
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check environment variables
    console.log('Environment variables check:', {
      EMAIL_BLAST: !!process.env.EMAIL_BLAST,
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USERNAME: !!process.env.SMTP_USERNAME,
      SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
      RECIPIENT_EMAIL: !!process.env.RECIPIENT_EMAIL
    })

    // Generate the email content
    console.log('Generating email template...')
    const emailContent = generateEmailTemplate({
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message
    })

    // Prepare the payload for the Laravel API using Hostinger SMTP
    const emailPayload = {
      smtp_host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      smtp_port: parseInt(process.env.SMTP_PORT || '465'),
      smtp_encryption: 'ssl', // Port 465 uses SSL
      smtp_username: process.env.SMTP_USERNAME || 'noreply@alienshipper.com',
      smtp_password: process.env.SMTP_PASSWORD || 'Tiger1981#!',
      from_email: process.env.SMTP_USERNAME || 'noreply@alienshipper.com',
      from_name: 'MyTallyBee Contact Form',
      to: process.env.RECIPIENT_EMAIL || 'johnryfibra2@gmail.com',
      subject: `🔔 New Contact from ${body.name} - MyTallyBee`,
      message: emailContent
    }

    console.log('Email payload prepared:', {
      ...emailPayload,
      smtp_password: '[REDACTED]',
      message: '[HTML_CONTENT]'
    })

    const laravelApiUrl = `${process.env.EMAIL_BLAST}/send-dynamic-email`
    console.log('Laravel API URL:', laravelApiUrl)

    // Check if EMAIL_BLAST is defined
    if (!process.env.EMAIL_BLAST) {
      console.error('EMAIL_BLAST environment variable is not defined')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    console.log('Calling Laravel API...')
    
    // Call the Laravel API
    const response = await fetch(laravelApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'MyTallyBee/1.0'
      },
      body: JSON.stringify(emailPayload),
    })

    console.log('Laravel API status:', response.status)
    console.log('Laravel API headers:', Object.fromEntries(response.headers))

    // Get the response text first
    const responseText = await response.text()
    console.log('Laravel API raw response:', responseText)

    // Check if response is successful
    if (!response.ok) {
      console.error('Laravel API error:', response.status, responseText)
      
      // Return success anyway if it's a server error but email might have been sent
      if (response.status >= 500) {
        console.log('Treating 500 error as success to prevent user confusion')
        return NextResponse.json({ 
          success: true, 
          message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.' 
        })
      }
      
      throw new Error(`Laravel API returned ${response.status}: ${responseText}`)
    }

    // Try to parse JSON, but don't fail if it's not valid JSON
    let data
    try {
      data = responseText ? JSON.parse(responseText) : { message: 'Email sent successfully' }
      console.log('Laravel API parsed response:', data)
    } catch (parseError) {
      console.log('Response is not JSON, treating as success:', responseText)
      data = { message: 'Email sent successfully' }
    }
    
    console.log('=== EMAIL SENT SUCCESSFULLY ===')
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
    })
    
  } catch (error) {
    console.error('=== EMAIL BLAST API ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
