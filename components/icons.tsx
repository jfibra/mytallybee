import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
  size?: number
}

/**
 * Custom icon components for Tallybee value propositions
 */

export function IconAccurate({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
      aria-hidden="true"
    >
      {/* Ledger lines background */}
      <rect x="3" y="6" width="18" height="1" fill="currentColor" opacity="0.2" />
      <rect x="3" y="10" width="18" height="1" fill="currentColor" opacity="0.2" />
      <rect x="3" y="14" width="18" height="1" fill="currentColor" opacity="0.2" />
      <rect x="3" y="18" width="18" height="1" fill="currentColor" opacity="0.2" />

      {/* Checkmark */}
      <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSimple({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
      aria-hidden="true"
    >
      {/* Hand */}
      <path
        d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8a2 2 0 1 1 4 0v6a10 10 0 0 1-10 10H9.5a3.5 3.5 0 0 1-2.4-1L3 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gear/cog */}
      <circle cx="17" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M17 2v4M19 4h-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export function IconTransparent({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
      aria-hidden="true"
    >
      {/* Receipt */}
      <path
        d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Receipt lines */}
      <rect x="7" y="7" width="10" height="1" fill="currentColor" opacity="0.4" />
      <rect x="7" y="10" width="8" height="1" fill="currentColor" opacity="0.4" />
      <rect x="7" y="13" width="6" height="1" fill="currentColor" opacity="0.4" />

      {/* Eye */}
      <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 16s1.5-2 4-2 4 2 4 2-1.5 2-4 2-4-2-4-2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}
