"use server"

import { sendEmail } from "./email"

interface ContactFormData {
  name: string
  email: string
  company: string
  transactionVolume: string
  message: string
}

interface ActionResult {
  success: boolean
  error?: string
}

/**
 * Server action to handle contact form submissions
 */
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    // Server-side validation
    if (!data.name?.trim()) {
      return { success: false, error: "Name is required" }
    }

    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { success: false, error: "Valid email is required" }
    }

    if (!data.transactionVolume) {
      return { success: false, error: "Transaction volume is required" }
    }

    if (!data.message?.trim() || data.message.trim().length < 10) {
      return { success: false, error: "Please provide more details about your needs" }
    }

    // Prepare email content
    const emailContent = `
New Quote Request from Tallybee Website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not provided"}
Monthly Transaction Volume: ${data.transactionVolume}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Send email (mock function for now)
    const emailResult = await sendEmail({
      to: "quotes@tallybee.com", // This would be the actual business email
      subject: `New Quote Request from ${data.name}`,
      text: emailContent,
      replyTo: data.email,
    })

    if (!emailResult.success) {
      console.error("Failed to send email:", emailResult.error)
      return { success: false, error: "Failed to send your request. Please try again." }
    }

    // Log successful submission (in production, this might go to a database)
    console.log("Contact form submitted successfully:", {
      name: data.name,
      email: data.email,
      company: data.company,
      transactionVolume: data.transactionVolume,
      timestamp: new Date().toISOString(),
    })

    return { success: true }
  } catch (error) {
    console.error("Error processing contact form:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
