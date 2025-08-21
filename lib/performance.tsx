"use client"

import { useEffect } from "react"

/**
 * Performance monitoring utilities
 */

/**
 * Web Vitals tracking hook
 */
export function useWebVitals() {
  useEffect(() => {
    if (typeof window !== "undefined" && "web-vitals" in window) {
      // Dynamic import to avoid loading web-vitals in SSR
      import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(sendToAnalytics)
        getFID(sendToAnalytics)
        getFCP(sendToAnalytics)
        getLCP(sendToAnalytics)
        getTTFB(sendToAnalytics)
      })
    }
  }, [])
}

/**
 * Send Web Vitals to analytics
 */
function sendToAnalytics(metric: any) {
  // Console logging for development
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Web Vital:", metric.name, metric.value)
  }

  // Send to Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  // Send to custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "web_vital",
        metric: metric.name,
        value: metric.value,
        id: metric.id,
        timestamp: new Date().toISOString(),
      }),
    }).catch((error) => {
      console.error("Web Vitals tracking failed:", error)
    })
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window !== "undefined") {
    // Preload hero image
    const heroImage = new Image()
    heroImage.src = "/hero-image.jpg"

    // Preload Calendly script
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = "https://assets.calendly.com/assets/external/widget.js"
    link.as = "script"
    document.head.appendChild(link)
  }
}

/**
 * Lazy load images with intersection observer
 */
export function useLazyImages() {
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.classList.remove("lazy")
              imageObserver.unobserve(img)
            }
          }
        })
      })

      const lazyImages = document.querySelectorAll("img[data-src]")
      lazyImages.forEach((img) => imageObserver.observe(img))

      return () => {
        lazyImages.forEach((img) => imageObserver.unobserve(img))
      }
    }
  }, [])
}
