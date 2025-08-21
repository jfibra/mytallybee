"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoadingBeeProps {
  isLoading?: boolean
  message?: string
}

/**
 * Animated bee loading component with flight path
 */
export function LoadingBee({ isLoading = true, message = "Loading..." }: LoadingBeeProps) {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100)
    }, 50)

    return () => clearInterval(interval)
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center">
        {/* Flight path container */}
        <div className="relative w-64 h-32 mx-auto mb-8">
          {/* Flight path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 128" fill="none">
            <path
              d="M20 64 Q128 20 236 64 Q128 108 20 64"
              stroke="#ffc107"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-30"
            />
          </svg>

          {/* Animated bee */}
          <div
            className="absolute transition-all duration-75 ease-linear"
            style={{
              left: `${position}%`,
              top: `${50 + Math.sin((position * Math.PI) / 50) * 20}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className={cn("relative", position > 50 ? "scale-x-[-1]" : "")}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-lg">
                {/* Wings */}
                <ellipse cx="12" cy="14" rx="4" ry="3" fill="rgba(255,255,255,0.8)" className="animate-ping" />
                <ellipse cx="20" cy="14" rx="4" ry="3" fill="rgba(255,255,255,0.8)" className="animate-ping" />

                {/* Body */}
                <ellipse cx="16" cy="18" rx="5" ry="8" fill="#001f3f" />

                {/* Stripes */}
                <rect x="11" y="14" width="10" height="1.5" fill="#ffc107" />
                <rect x="11" y="17" width="10" height="1.5" fill="#ffc107" />
                <rect x="11" y="20" width="10" height="1.5" fill="#ffc107" />

                {/* Head */}
                <circle cx="16" cy="10" r="3" fill="#001f3f" />

                {/* Eyes */}
                <circle cx="14" cy="9" r="1" fill="white" />
                <circle cx="18" cy="9" r="1" fill="white" />
                <circle cx="14" cy="9" r="0.5" fill="black" />
                <circle cx="18" cy="9" r="0.5" fill="black" />

                {/* Antennae */}
                <line x1="14" y1="7" x2="13" y2="5" stroke="#001f3f" strokeWidth="1" />
                <line x1="18" y1="7" x2="19" y2="5" stroke="#001f3f" strokeWidth="1" />
                <circle cx="13" cy="5" r="0.8" fill="#ffc107" />
                <circle cx="19" cy="5" r="0.8" fill="#ffc107" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-brand-navy">{message}</h3>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Page loading wrapper component
 */
export function PageLoader({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <>
      <LoadingBee isLoading={isLoading} message="Preparing your experience..." />
      {children}
    </>
  )
}
