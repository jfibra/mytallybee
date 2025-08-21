import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

/**
 * Animated skeleton loading component
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
        "animate-[shimmer_2s_infinite]",
        className,
      )}
    />
  )
}

/**
 * Card skeleton for loading states
 */
export function CardSkeleton() {
  return (
    <div className="p-6 border border-gray-200 rounded-lg space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-20 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  )
}

/**
 * Hero section skeleton
 */
export function HeroSkeleton() {
  return (
    <div className="container-width py-20 space-y-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-12 w-40 mx-auto rounded-full" />
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  )
}

/**
 * Navigation skeleton
 */
export function NavSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <Skeleton className="h-8 w-32" />
      <div className="flex gap-4">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
    </div>
  )
}
