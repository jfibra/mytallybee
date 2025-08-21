"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Animated bee that flies to the top when clicked
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFlying, setIsFlying] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsFlying(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Reset flying animation after scroll completes
    setTimeout(() => {
      setIsFlying(false)
    }, 1000)
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-4 bg-brand-amber hover:bg-amber-500 text-brand-navy rounded-full shadow-lg transition-all duration-300 group",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        isFlying && "animate-bounce",
      )}
      aria-label="Scroll to top"
    >
      {/* Bee SVG */}
      <div className={cn("relative transition-transform duration-300", isFlying && "animate-pulse")}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-navy">
          {/* Bee body */}
          <ellipse cx="12" cy="14" rx="4" ry="6" fill="currentColor" />

          {/* Bee stripes */}
          <rect x="8" y="11" width="8" height="1" fill="#ffc107" />
          <rect x="8" y="13" width="8" height="1" fill="#ffc107" />
          <rect x="8" y="15" width="8" height="1" fill="#ffc107" />

          {/* Wings */}
          <ellipse
            cx="9"
            cy="10"
            rx="3"
            ry="2"
            fill="rgba(255,255,255,0.7)"
            className={cn("origin-center", isFlying ? "animate-ping" : "animate-pulse")}
          />
          <ellipse
            cx="15"
            cy="10"
            rx="3"
            ry="2"
            fill="rgba(255,255,255,0.7)"
            className={cn("origin-center", isFlying ? "animate-ping" : "animate-pulse")}
          />

          {/* Head */}
          <circle cx="12" cy="8" r="2" fill="currentColor" />

          {/* Antennae */}
          <line x1="11" y1="6" x2="10" y2="4" stroke="currentColor" strokeWidth="1" />
          <line x1="13" y1="6" x2="14" y2="4" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="4" r="0.5" fill="currentColor" />
          <circle cx="14" cy="4" r="0.5" fill="currentColor" />
        </svg>

        {/* Arrow overlay when not flying */}
        {!isFlying && (
          <ArrowUp
            size={12}
            className="absolute inset-0 m-auto text-white opacity-60 group-hover:opacity-100 transition-opacity"
          />
        )}
      </div>

      {/* Flight trail effect */}
      {isFlying && <div className="absolute inset-0 rounded-full bg-brand-amber animate-ping opacity-75"></div>}
    </button>
  )
}
