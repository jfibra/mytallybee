"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

/**
 * Analytics component with vendor-agnostic tracking
 * Can be easily swapped for Google Analytics, Plausible, etc.
 */
function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    trackPageView(pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ""))
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}

/**
 * Track page view - vendor agnostic
 */
function trackPageView(url: string) {
  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Page view:", url)
  }

  // Google Analytics 4 (gtag)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }

  // Plausible Analytics
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible("pageview", { u: url })
  }

  // Custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "pageview",
        url,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      }),
    }).catch((error) => {
      console.error("Analytics tracking failed:", error)
    })
  }
}

/**
 * Track custom events - vendor agnostic
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Event:", eventName, properties)
  }

  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, properties)
  }

  // Plausible Analytics
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: properties })
  }

  // Custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: eventName,
        properties,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
    }).catch((error) => {
      console.error("Event tracking failed:", error)
    })
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    plausible: (eventName: string, options?: { props?: any; u?: string }) => void
  }
}
