import { cn } from "@/lib/utils"
import type React from "react"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

/**
 * Value proposition card component for showcasing key benefits
 */
export function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300",
        className,
      )}
    >
      <div className="mb-4 p-3 rounded-xl bg-brand-amber/10 text-brand-navy">{icon}</div>
      <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
