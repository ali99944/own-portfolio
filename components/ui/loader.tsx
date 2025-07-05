"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "spinner" | "dots" | "pulse" | "bars"
  className?: string
}

const Loader: React.FC<LoaderProps> = ({ size = "md", variant = "spinner", className }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  }

  if (variant === "spinner") {
    return (
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-[#003a78] border-t-transparent",
          sizeClasses[size],
          className,
        )}
      />
    )
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-[#003a78] rounded-full animate-bounce",
              size === "sm" ? "w-1 h-1" : size === "md" ? "w-2 h-2" : size === "lg" ? "w-3 h-3" : "w-4 h-4",
            )}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    )
  }

  if (variant === "pulse") {
    return <div className={cn("bg-[#003a78] rounded-full animate-pulse", sizeClasses[size], className)} />
  }

  if (variant === "bars") {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-[#003a78] animate-pulse",
              size === "sm" ? "w-1 h-4" : size === "md" ? "w-1 h-6" : size === "lg" ? "w-2 h-8" : "w-2 h-12",
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>
    )
  }

  return null
}

// Full page loader
const PageLoader: React.FC<{ message?: string }> = ({ message = "Loading..." }) => (
  <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
    <div className="text-center">
      <Loader size="xl" className="mx-auto mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
)

// Inline loader
const InlineLoader: React.FC<{ message?: string; size?: "sm" | "md" | "lg" }> = ({ message, size = "md" }) => (
  <div className="flex items-center justify-center p-4">
    <Loader size={size} className="mr-2" />
    {message && <span className="text-gray-600">{message}</span>}
  </div>
)

// Button loader
const ButtonLoader: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => (
  <Loader size={size} className="text-current" />
)

export { Loader, PageLoader, InlineLoader, ButtonLoader }
