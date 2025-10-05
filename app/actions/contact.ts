"use server"

export async function submitContactForm(formData: FormData) {
  console.log('=== SERVER ACTION CALLED ===')
  
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "",
      company: formData.get("company") as string || "",
      message: formData.get("message") as string,
    }

    console.log('Form data extracted:', data)

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      console.log('Missing required fields')
      return { 
        success: false, 
        message: 'Please fill in all required fields.' 
      }
    }

    console.log('About to call email API...')

    // Call the email API with absolute URL and proper error handling
    let response
    try {
      console.log('Making fetch request to email API...')
      response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('Fetch completed. Response status:', response.status)
    } catch (fetchError) {
      console.error('Fetch error:', fetchError)
      return {
        success: false,
        message: 'Network error occurred. Please try again.'
      }
    }

    let responseText = ''
    try {
      responseText = await response.text()
      console.log('Email API response text:', responseText)
    } catch (textError) {
      console.error('Error reading response text:', textError)
      return {
        success: false,
        message: 'Error reading server response.'
      }
    }

    if (response.ok) {
      console.log('✅ Email API success')
      return { 
        success: true, 
        message: "Thank you! Your message has been sent successfully." 
      }
    } else {
      console.error('❌ Email API error - Status:', response.status)
      console.error('❌ Email API error - Response:', responseText)
      
      // Try to parse error message
      try {
        const errorData = JSON.parse(responseText)
        return {
          success: false,
          message: errorData.error || 'Failed to send email. Please try again.'
        }
      } catch (parseError) {
        return {
          success: false,
          message: 'Server error occurred. Please try again.'
        }
      }
    }
    
  } catch (error) {
    console.error('=== SERVER ACTION ERROR ===')
    console.error('Error type:', typeof error)
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack')
    
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.' 
    }
  }
}