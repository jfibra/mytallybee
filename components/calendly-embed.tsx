"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendlyEmbedProps {
  url?: string
  className?: string
  prefill?: {
    name?: string
    email?: string
  }
}

interface CalendlyModalProps extends CalendlyEmbedProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function CalendlyEmbed({
  url = "https://calendly.com/johnryfibra2/30min",
  className,
  prefill,
}: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [iframeUrl, setIframeUrl] = useState<string>("")

  // Validate URL
  useEffect(() => {
    if (!url) {
      setError("No Calendly URL provided")
      return
    }

    if (url.includes("your-username") || url.includes("placeholder")) {
      setError("Calendly integration is being configured. Please check back soon or contact us directly.")
      return
    }

    if (!url.includes("calendly.com")) {
      setError("Invalid Calendly URL format")
      return
    }

    setError(null)
  }, [url])

  // Build iframe URL with prefill parameters (client-side only)
  useEffect(() => {
    if (!url || error || typeof window === "undefined") return

    const buildUrl = () => {
      const iframeUrl = new URL(url)

      // Add prefill parameters if provided
      if (prefill?.name) {
        iframeUrl.searchParams.set("name", prefill.name)
      }
      if (prefill?.email) {
        iframeUrl.searchParams.set("email", prefill.email)
      }

      // Add embed parameters
      iframeUrl.searchParams.set("embed_domain", window.location.hostname)
      iframeUrl.searchParams.set("embed_type", "Inline")

      return iframeUrl.toString()
    }

    setIframeUrl(buildUrl())
  }, [url, error, prefill])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setError("Failed to load calendar. Please try refreshing the page.")
  }

  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  if (error) {
    return (
      <div className={cn("calendly-inline-widget", className)}>
        <div className="min-h-[600px] w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-amber-500 mb-4 text-4xl">🐝</div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">Calendar Temporarily Unavailable</h3>
            <p className="text-gray-600 mb-6 max-w-md">{error}</p>
            <div className="space-y-3">
              <button
                onClick={handleRetry}
                className="block w-full px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Try Again
              </button>
              <a
                href="/contact"
                className="block w-full px-4 py-2 bg-brand-amber text-brand-navy rounded-lg hover:bg-amber-400 transition-colors font-medium"
              >
                Contact Us Instead
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!iframeUrl) {
    return (
      <div className={cn("calendly-inline-widget", className)}>
        <div className="min-h-[600px] w-full rounded-lg border border-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Loading calendar...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("calendly-inline-widget relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Loading calendar...</p>
          </div>
        </div>
      )}
      <iframe
        src={iframeUrl}
        width="100%"
        height="600"
        frameBorder="0"
        title="Calendly Scheduling"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        className="rounded-lg"
        allow="microphone; camera"
      />
    </div>
  )
}

export function CalendlyModal({
  isOpen,
  onClose,
  url = "https://calendly.com/johnryfibra2/30min",
  title = "Schedule a Consultation",
  prefill,
  className,
}: CalendlyModalProps) {
  const openCalendlyPopup = () => {
    if (!url || !url.includes("calendly.com") || typeof window === "undefined") return

    const popupUrl = new URL(url)

    // Add prefill parameters
    if (prefill?.name) {
      popupUrl.searchParams.set("name", prefill.name)
    }
    if (prefill?.email) {
      popupUrl.searchParams.set("email", prefill.email)
    }

    // Open in popup window
    const popup = window.open(popupUrl.toString(), "calendly", "width=800,height=700,scrollbars=yes,resizable=yes")

    // Close modal when popup opens
    if (popup) {
      onClose()
    }
  }

  // Handle escape key
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Auto-open popup when modal opens
  useEffect(() => {
    if (isOpen) {
      openCalendlyPopup()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className={cn("relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6", className)}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-brand-navy">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="text-center">
          <div className="text-amber-500 mb-4 text-4xl">🐝</div>
          <p className="text-gray-600 mb-6">Opening Calendly in a new window...</p>
          <button
            onClick={openCalendlyPopup}
            className="px-6 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Open Calendar
          </button>
        </div>
      </div>
    </div>
  )
}
