"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("animate-pulse rounded-md bg-gray-200", className)} {...props} />
})
Skeleton.displayName = "Skeleton"

// Pre-built skeleton components
const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className }) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")} />
    ))}
  </div>
)

const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("rounded-xl border border-gray-200 p-6", className)}>
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/3" />
      <SkeletonText lines={2} />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  </div>
)

const SkeletonTable: React.FC<{ rows?: number; columns?: number; className?: string }> = ({
  rows = 5,
  columns = 4,
  className,
}) => (
  <div className={cn("space-y-4", className)}>
    {/* Header */}
    <div className="flex space-x-4">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className="h-4 flex-1" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-8 flex-1" />
        ))}
      </div>
    ))}
  </div>
)

const SkeletonAvatar: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  return <Skeleton className={cn("rounded-full", sizeClasses[size], className)} />
}

const SkeletonButton: React.FC<{ size?: "sm" | "md" | "lg"; className?: string }> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "h-8 w-20",
    md: "h-10 w-24",
    lg: "h-12 w-28",
  }

  return <Skeleton className={cn("rounded-lg", sizeClasses[size], className)} />
}

export { Skeleton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonAvatar, SkeletonButton }
