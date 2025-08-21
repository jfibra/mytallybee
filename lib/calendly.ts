/**
 * Calendly configuration and utilities
 */

export const CALENDLY_CONFIG = {
  // Default event URLs - replace with actual Calendly URLs
  discoveryCall: "https://calendly.com/tallybee/30min-discovery-call",
  consultation: "https://calendly.com/tallybee/consultation",

  // Default prefill options
  defaultPrefill: {
    // These can be populated from user context if available
    name: "",
    email: "",
  },
}

/**
 * Generate Calendly URL with prefill parameters
 */
export function generateCalendlyUrl(baseUrl: string, prefill?: Record<string, string>): string {
  if (!prefill || Object.keys(prefill).length === 0) {
    return baseUrl
  }

  const url = new URL(baseUrl)
  Object.entries(prefill).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })

  return url.toString()
}

/**
 * Check if Calendly script is loaded
 */
export function isCalendlyLoaded(): boolean {
  return typeof window !== "undefined" && !!window.Calendly
}

/**
 * Load Calendly script dynamically
 */
export function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isCalendlyLoaded()) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Calendly script"))

    document.head.appendChild(script)
  })
}
