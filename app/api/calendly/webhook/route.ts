import { type NextRequest, NextResponse } from "next/server"
import { verifyCalendlyWebhook } from "@/lib/calendly-webhook"

/**
 * Calendly webhook handler
 * Handles invitee.created and invitee.canceled events
 */
export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await request.text()
    const signature = request.headers.get("calendly-webhook-signature")

    // Verify webhook signature
    if (!signature) {
      console.error("Missing Calendly webhook signature")
      return NextResponse.json({ error: "Missing signature" }, { status: 401 })
    }

    const isValid = verifyCalendlyWebhook(body, signature)
    if (!isValid) {
      console.error("Invalid Calendly webhook signature")
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    // Parse the webhook payload
    let payload
    try {
      payload = JSON.parse(body)
    } catch (error) {
      console.error("Invalid JSON payload:", error)
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
    }

    // Extract event information
    const { event, payload: eventPayload } = payload
    const eventType = event?.split(".")[0] // e.g., "invitee" from "invitee.created"
    const eventAction = event?.split(".")[1] // e.g., "created" from "invitee.created"

    // Handle supported events
    if (eventType === "invitee") {
      await handleInviteeEvent(eventAction, eventPayload)
    } else {
      console.log("Unhandled event type:", event)
    }

    // Log successful webhook processing
    console.log("Calendly webhook processed successfully:", {
      event,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error processing Calendly webhook:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

/**
 * Handle invitee events (created, canceled)
 */
async function handleInviteeEvent(action: string, payload: any) {
  try {
    const invitee = payload?.invitee
    const event = payload?.event

    if (!invitee || !event) {
      console.error("Missing invitee or event data in payload")
      return
    }

    const eventData = {
      action,
      invitee: {
        uuid: invitee.uuid,
        email: invitee.email,
        name: invitee.name,
        status: invitee.status,
        created_at: invitee.created_at,
        updated_at: invitee.updated_at,
      },
      event: {
        uuid: event.uuid,
        name: event.name,
        start_time: event.start_time,
        end_time: event.end_time,
        location: event.location,
      },
      timestamp: new Date().toISOString(),
    }

    if (action === "created") {
      console.log("📅 New Calendly booking created:")
      console.log("Invitee:", `${invitee.name} (${invitee.email})`)
      console.log("Event:", event.name)
      console.log("Time:", `${event.start_time} - ${event.end_time}`)
      console.log("Location:", event.location?.location || "Not specified")

      // TODO: Add to database or send notification
      // await addBookingToDatabase(eventData)
      // await sendBookingNotification(eventData)
    } else if (action === "canceled") {
      console.log("❌ Calendly booking canceled:")
      console.log("Invitee:", `${invitee.name} (${invitee.email})`)
      console.log("Event:", event.name)
      console.log("Original time:", `${event.start_time} - ${event.end_time}`)

      // TODO: Update database or send cancellation notification
      // await updateBookingStatus(eventData)
      // await sendCancellationNotification(eventData)
    }

    // Store event data for future processing (currently just logging)
    console.log("Event data:", JSON.stringify(eventData, null, 2))
  } catch (error) {
    console.error("Error handling invitee event:", error)
  }
}

/**
 * TODO: Database integration examples
 *
 * async function addBookingToDatabase(eventData: any) {
 *   // Add booking to database
 *   const booking = await db.bookings.create({
 *     data: {
 *       calendlyUuid: eventData.invitee.uuid,
 *       email: eventData.invitee.email,
 *       name: eventData.invitee.name,
 *       eventName: eventData.event.name,
 *       startTime: new Date(eventData.event.start_time),
 *       endTime: new Date(eventData.event.end_time),
 *       status: 'scheduled',
 *       createdAt: new Date(eventData.timestamp),
 *     }
 *   })
 *   return booking
 * }
 *
 * async function updateBookingStatus(eventData: any) {
 *   // Update booking status in database
 *   await db.bookings.updateMany({
 *     where: { calendlyUuid: eventData.invitee.uuid },
 *     data: { status: 'canceled' }
 *   })
 * }
 *
 * async function sendBookingNotification(eventData: any) {
 *   // Send email notification to business owner
 *   await sendEmail({
 *     to: 'bookings@tallybee.com',
 *     subject: `New Booking: ${eventData.event.name}`,
 *     text: `New booking from ${eventData.invitee.name} (${eventData.invitee.email})`
 *   })
 * }
 */
