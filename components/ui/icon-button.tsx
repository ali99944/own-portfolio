"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#fed850] text-[#003a78] hover:bg-[#fed850]/90 focus-visible:ring-[#fed850]",
        secondary: "bg-[#003a78] text-white hover:bg-[#003a78]/90 focus-visible:ring-[#003a78]",
        outline:
          "border border-[#003a78] text-[#003a78] bg-transparent hover:bg-[#003a78] hover:text-white focus-visible:ring-[#003a78]",
        ghost: "text-[#003a78] bg-transparent hover:bg-[#f1f0ec] focus-visible:ring-[#003a78]",
        danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        neutral: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:ring-gray-400",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: LucideIcon
  loading?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon: Icon, loading, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading

    const iconSize = {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
    }[size || "md"]

    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <div
            className="animate-spin rounded-full border-2 border-current border-t-transparent"
            style={{ width: iconSize, height: iconSize }}
          />
        ) : (
          <Icon size={iconSize} />
        )}
      </button>
    )
  },
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
