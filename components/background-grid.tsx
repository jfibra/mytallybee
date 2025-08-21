import { cn } from "@/lib/utils"

interface BackgroundGridProps {
  className?: string
}

/**
 * Subtle ledger grid pattern for decorative backgrounds
 */
export function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)} aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.02]">
        <defs>
          <pattern id="ledger-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-brand-navy"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ledger-grid)" />
      </svg>
    </div>
  )
}
