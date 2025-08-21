import { cn } from "@/lib/utils"

interface LogoBeeProps {
  className?: string
  showText?: boolean
}

/**
 * Tallybee logo component with friendly bee and optional wordmark
 */
export function LogoBee({ className, showText = true }: LogoBeeProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Bee SVG Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Bee body with ledger stripes */}
        <ellipse cx="16" cy="18" rx="8" ry="10" fill="currentColor" className="text-brand-navy" />
        <rect x="10" y="14" width="12" height="1.5" fill="currentColor" className="text-brand-amber" />
        <rect x="10" y="18" width="12" height="1.5" fill="currentColor" className="text-brand-amber" />
        <rect x="10" y="22" width="12" height="1.5" fill="currentColor" className="text-brand-amber" />

        {/* Wings */}
        <ellipse
          cx="12"
          cy="12"
          rx="4"
          ry="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand-blue"
          opacity="0.7"
        />
        <ellipse
          cx="20"
          cy="12"
          rx="4"
          ry="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand-blue"
          opacity="0.7"
        />

        {/* Head */}
        <circle cx="16" cy="8" r="3" fill="currentColor" className="text-brand-navy" />

        {/* Antennae */}
        <line x1="14" y1="6" x2="13" y2="4" stroke="currentColor" strokeWidth="1" className="text-brand-navy" />
        <line x1="18" y1="6" x2="19" y2="4" stroke="currentColor" strokeWidth="1" className="text-brand-navy" />
        <circle cx="13" cy="4" r="1" fill="currentColor" className="text-brand-amber" />
        <circle cx="19" cy="4" r="1" fill="currentColor" className="text-brand-amber" />
      </svg>

      {/* Wordmark */}
      {showText && <span className="text-2xl font-bold text-brand-navy tracking-tight">Tallybee</span>}
    </div>
  )
}
