"use client"

import React from "react"
import { X, type LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[#003a78] text-white",
        secondary: "bg-[#fed850] text-[#003a78]",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
        info: "bg-blue-100 text-blue-800",
        neutral: "bg-gray-100 text-gray-800",
        outline: "border border-[#003a78] text-[#003a78] bg-transparent",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  icon?: LucideIcon
  onRemove?: () => void
  removable?: boolean
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, size, icon: Icon, onRemove, removable, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(chipVariants({ variant, size }), className)} {...props}>
        {Icon && <Icon className="mr-1.5 h-3 w-3" />}
        {children}
        {(removable || onRemove) && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1.5 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    )
  },
)
Chip.displayName = "Chip"

export { Chip, chipVariants }
