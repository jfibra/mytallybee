import { cn } from "@/lib/utils"
import type React from "react"
import Image from "next/image"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  image?: string
}

/**
 * Value proposition card component for showcasing key benefits
 */
export function ValueCard({ icon, title, description, className, image }: ValueCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden",
        className,
      )}
    >
      {image && (
        <div className="absolute inset-0 opacity-5">
          <Image
            src={image}
            alt={`${title} illustration`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 p-3 rounded-xl bg-brand-amber/10 text-brand-navy">{icon}</div>
        <h3 className="text-xl font-semibold text-brand-navy mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
