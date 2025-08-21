import { cn } from "@/lib/utils"
import { BackgroundGrid } from "./background-grid"
import type React from "react" // Declare React to fix the undeclared variable error

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  showGrid?: boolean
  as?: keyof JSX.IntrinsicElements
}

/**
 * Reusable section wrapper with consistent padding and optional grid background
 */
export function Section({
  children,
  className,
  containerClassName,
  showGrid = false,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component className={cn("relative section-padding", className)}>
      {showGrid && <BackgroundGrid />}
      <div className={cn("container-width", containerClassName)}>{children}</div>
    </Component>
  )
}
