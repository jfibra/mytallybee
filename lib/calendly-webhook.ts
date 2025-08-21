import { createHmac } from "crypto"

/**
 * Verify Calendly webhook signature
 * Uses HMAC-SHA256 with the webhook signing key
 */
export function verifyCalendlyWebhook(payload: string, signature: string): boolean {
  try {
    const webhookKey = process.env.NEXT_CALENDLY_WEBHOOK_KEY

    if (!webhookKey) {
      console.error("NEXT_CALENDLY_WEBHOOK_KEY environment variable is not set")
      return false
    }

    // Calendly sends signature in format: t=timestamp,v1=signature
    const signatureParts = signature.split(",")
    let timestamp = ""
    let receivedSignature = ""

    for (const part of signatureParts) {
      const [key, value] = part.split("=")
      if (key === "t") {
        timestamp = value
      } else if (key === "v1") {
        receivedSignature = value
      }
    }

    if (!timestamp || !receivedSignature) {
      console.error("Invalid signature format")
      return false
    }

    // Create the signed payload (timestamp + payload)
    const signedPayload = timestamp + "." + payload

    // Generate expected signature
    const expectedSignature = createHmac("sha256", webhookKey).update(signedPayload, "utf8").digest("hex")

    // Compare signatures using timing-safe comparison
    return timingSafeEqual(receivedSignature, expectedSignature)
  } catch (error) {
    console.error("Error verifying Calendly webhook signature:", error)
    return false
  }
}

/**
 * Timing-safe string comparison to prevent timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }

  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }

  return result === 0
}

/**
 * Test webhook signature verification with sample data
 * This function can be used for testing the webhook verification
 */
export function testWebhookVerification() {
  const testPayload = JSON.stringify({
    event: "invitee.created",
    payload: {
      invitee: {
        uuid: "test-uuid",
        email: "test@example.com",
        name: "Test User",
      },
    },
  })

  const testKey = "test-webhook-key"
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const signedPayload = timestamp + "." + testPayload
  const signature = createHmac("sha256", testKey).update(signedPayload, "utf8").digest("hex")
  const fullSignature = `t=${timestamp},v1=${signature}`

  console.log("Test webhook data:")
  console.log("Payload:", testPayload)
  console.log("Signature:", fullSignature)
  console.log("Key:", testKey)

  // Temporarily set the webhook key for testing
  const originalKey = process.env.NEXT_CALENDLY_WEBHOOK_KEY
  process.env.NEXT_CALENDLY_WEBHOOK_KEY = testKey

  const isValid = verifyCalendlyWebhook(testPayload, fullSignature)
  console.log("Verification result:", isValid)

  // Restore original key
  if (originalKey) {
    process.env.NEXT_CALENDLY_WEBHOOK_KEY = originalKey
  } else {
    delete process.env.NEXT_CALENDLY_WEBHOOK_KEY
  }

  return isValid
}
