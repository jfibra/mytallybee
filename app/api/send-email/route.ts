import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  console.log('=== SEND EMAIL API CALLED ===')
  
  try {
    console.log('Step 1: Reading request body...')
    const body = await request.json()
    console.log('Step 2: Request body received:', body)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log('Step 3: Missing required fields')
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    console.log('Step 4: Environment variables check:', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USERNAME: !!process.env.SMTP_USERNAME,
      SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
      RECIPIENT_EMAIL: !!process.env.RECIPIENT_EMAIL,
      // Show actual values for debugging
      SMTP_HOST_VALUE: process.env.SMTP_HOST,
      SMTP_PORT_VALUE: process.env.SMTP_PORT,
      SMTP_USERNAME_VALUE: process.env.SMTP_USERNAME,
      RECIPIENT_EMAIL_VALUE: process.env.RECIPIENT_EMAIL
    })

    console.log('Step 5: Creating transporter...')
    
    // Create transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME || 'noreply@alienshipper.com',
        pass: 'Tiger1981#!',
      },
      debug: true,
      logger: true
    })

    console.log('Step 6: ✅ Transporter created successfully')

    // Verify SMTP connection
    try {
      console.log('Step 7: Verifying SMTP connection...')
      await transporter.verify()
      console.log('Step 8: ✅ SMTP connection verified')
    } catch (verifyError) {
      console.error('Step 8: ❌ SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email server connection failed. Please check SMTP settings.' },
        { status: 500 }
      )
    }

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission - MyTallyBee</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #001f3f 0%, #003366 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">MyTallyBee</h1>
            <p style="color: #f59e0b; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">New Contact Form Submission</p>
          </div>
          
          <!-- Content -->
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #001f3f; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${body.email}" style="color: #f59e0b;">${body.email}</a>
                </td>
              </tr>
              ${body.phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="tel:${body.phone}" style="color: #f59e0b;">${body.phone}</a>
                </td>
              </tr>
              ` : ''}
              ${body.company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${body.company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Date:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            
            <h3 style="color: #001f3f; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${body.message}</div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${body.email}?subject=Re: Your inquiry to MyTallyBee" 
                 style="display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-right: 10px;">
                Reply to ${body.name}
              </a>
              ${body.phone ? `
              <a href="tel:${body.phone}" 
                 style="display: inline-block; background: #001f3f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Call ${body.name}
              </a>
              ` : ''}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">
              This email was sent from the MyTallyBee contact form at 
              <a href="https://mytallybee.com" style="color: #f59e0b;">mytallybee.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Email options
    const mailOptions = {
      from: `"MyTallyBee Contact Form" <${process.env.SMTP_USERNAME}>`,
      to: process.env.RECIPIENT_EMAIL || 'johnryfibra2@gmail.com',
      subject: `🔔 New Contact from ${body.name} - MyTallyBee`,
      html: htmlContent,
      replyTo: body.email,
    }

    console.log('Step 9: Sending email...')
    console.log('Mail options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo
    })

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Step 10: ✅ Email sent successfully!')
    console.log('Message ID:', info.messageId)

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('=== EMAIL API ERROR ===')
    console.error('Error details:', error)
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack')
    
    return NextResponse.json(
      { 
        error: 'Failed to send email: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    )
  }
}