interface EmailData {
  to: string
  subject: string
  text: string
  replyTo?: string
}

interface EmailResult {
  success: boolean
  error?: string
}

/**
 * Mock email function - replace with real SMTP/Resend integration later
 * This function is structured to be easily replaced with a real email service
 */
export async function sendEmail(data: EmailData): Promise<EmailResult> {
  try {
    // Mock delay to simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log email content (in development)
    console.log("📧 Mock Email Sent:")
    console.log("To:", data.to)
    console.log("Subject:", data.subject)
    console.log("Reply-To:", data.replyTo || "Not set")
    console.log("Content:")
    console.log(data.text)
    console.log("---")

    // Simulate occasional failures for testing
    if (Math.random() < 0.05) {
      // 5% chance of failure for testing
      throw new Error("Mock email service failure")
    }

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    }
  }
}

/**
 * TODO: Replace with real email service integration
 *
 * Example with Resend:
 *
 * import { Resend } from 'resend'
 *
 * const resend = new Resend(process.env.RESEND_API_KEY)
 *
 * export async function sendEmail(data: EmailData): Promise<EmailResult> {
 *   try {
 *     const result = await resend.emails.send({
 *       from: 'noreply@tallybee.com',
 *       to: data.to,
 *       subject: data.subject,
 *       text: data.text,
 *       replyTo: data.replyTo,
 *     })
 *
 *     return { success: true }
 *   } catch (error) {
 *     return { success: false, error: error.message }
 *   }
 * }
 */
