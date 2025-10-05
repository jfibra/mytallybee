import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  className?: string
  children?: React.ReactNode
}

/**
 * QuickBooks Online Specialist badge component
 */
export function Badge({ className, children }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue/10 border border-brand-blue/20",
        className,
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* QuickBooks-style checkmark with ledger lines */}
        <rect x="2" y="6" width="16" height="1" fill="currentColor" className="text-brand-blue" opacity="0.3" />
        <rect x="2" y="9" width="16" height="1" fill="currentColor" className="text-brand-blue" opacity="0.3" />
        <rect x="2" y="12" width="16" height="1" fill="currentColor" className="text-brand-blue" opacity="0.3" />
        <path
          d="M6 10L8.5 12.5L14 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-blue"
        />
      </svg>
      <span className="text-sm font-medium text-brand-blue">{children || "QuickBooks ProAdvisor Certified"}</span>
    </div>
  )
}
