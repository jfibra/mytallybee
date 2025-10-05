import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  console.log("[v0] Send email API called")

  try {
    console.log("[v0] Reading request body...")
    const body = await request.json()
    console.log("[v0] Request body received")

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USERNAME ||
      !process.env.SMTP_PASSWORD ||
      !process.env.RECIPIENT_EMAIL
    ) {
      console.error("[v0] Missing required environment variables")
      return NextResponse.json(
        { error: "Email service is not properly configured. Please contact support." },
        { status: 500 },
      )
    }

    console.log("[v0] Environment variables validated")
    console.log("[v0] Creating transporter...")

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT),
      secure: Number.parseInt(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
      pool: false, // Disable connection pooling for serverless
      maxConnections: 1, // Only one connection at a time
      connectionTimeout: 10000, // 10 second connection timeout
      greetingTimeout: 10000, // 10 second greeting timeout
      socketTimeout: 15000, // 15 second socket timeout
      debug: process.env.NODE_ENV === "development",
      logger: process.env.NODE_ENV === "development",
    })

    console.log("[v0] Transporter created successfully")

    try {
      console.log("[v0] Verifying SMTP connection...")
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("SMTP verification timeout")), 10000)),
      ])
      console.log("[v0] SMTP connection verified")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed:", verifyError)
      return NextResponse.json({ error: "Email server connection failed. Please try again later." }, { status: 500 })
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
           Header 
          <div style="background: linear-gradient(135deg, #001f3f 0%, #003366 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">MyTallyBee</h1>
            <p style="color: #f59e0b; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">New Contact Form Submission</p>
          </div>
          
           Content 
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
              ${
                body.phone
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="tel:${body.phone}" style="color: #f59e0b;">${body.phone}</a>
                </td>
              </tr>
              `
                  : ""
              }
              ${
                body.company
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${body.company}</td>
              </tr>
              `
                  : ""
              }
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
              ${
                body.phone
                  ? `
              <a href="tel:${body.phone}" 
                 style="display: inline-block; background: #001f3f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Call ${body.name}
              </a>
              `
                  : ""
              }
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
      to: process.env.RECIPIENT_EMAIL,
      subject: `🔔 New Contact from ${body.name} - MyTallyBee`,
      html: htmlContent,
      replyTo: body.email,
    }

    console.log("[v0] Sending email...")

    const info = (await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Email send timeout")), 20000)),
    ])) as nodemailer.SentMessageInfo

    console.log("[v0] Email sent successfully. Message ID:", info.messageId)

    transporter.close()

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("[v0] Email API error:", error instanceof Error ? error.message : "Unknown error")

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    )
  }
}
