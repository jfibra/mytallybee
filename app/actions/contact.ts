"use server"

export async function submitContactForm(formData: FormData) {
  console.log("[v0] Server action called")

  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      company: (formData.get("company") as string) || "",
      message: formData.get("message") as string,
    }

    console.log("[v0] Form data extracted:", { name: data.name, email: data.email })

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      console.log("[v0] Missing required fields")
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

    const apiUrl = `${baseUrl}/api/send-email`
    console.log("[v0] Calling email API at:", apiUrl)

    // Call the email API with proper error handling
    let response
    try {
      response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(25000), // 25 second timeout (Vercel has 30s limit)
      })
      console.log("[v0] Fetch completed. Response status:", response.status)
    } catch (fetchError) {
      console.error("[v0] Fetch error:", fetchError)
      return {
        success: false,
        message: "Network error occurred. Please try again.",
      }
    }

    let responseText = ""
    try {
      responseText = await response.text()
      console.log("[v0] Email API response received")
    } catch (textError) {
      console.error("[v0] Error reading response text:", textError)
      return {
        success: false,
        message: "Error reading server response.",
      }
    }

    if (response.ok) {
      console.log("[v0] Email sent successfully")
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      }
    } else {
      console.error("[v0] Email API error - Status:", response.status)

      // Try to parse error message
      try {
        const errorData = JSON.parse(responseText)
        return {
          success: false,
          message: errorData.error || "Failed to send email. Please try again.",
        }
      } catch (parseError) {
        return {
          success: false,
          message: "Server error occurred. Please try again.",
        }
      }
    }
  } catch (error) {
    console.error("[v0] Server action error:", error instanceof Error ? error.message : "Unknown error")

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
