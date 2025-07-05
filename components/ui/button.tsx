"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#fed850] text-[#003a78] hover:bg-[#fed850]/90 focus-visible:ring-[#fed850]",
        secondary: "bg-[#003a78] text-white hover:bg-[#003a78]/90 focus-visible:ring-[#003a78]",
        outline:
          "border border-[#003a78] text-[#003a78] bg-transparent hover:bg-[#003a78] hover:text-white focus-visible:ring-[#003a78]",
        ghost: "text-[#003a78] bg-transparent hover:bg-[#f1f0ec] focus-visible:ring-[#003a78]",
        link: "text-[#003a78] underline-offset-4 hover:underline focus-visible:ring-[#003a78]",
        danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        neutral: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus-visible:ring-gray-400",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon: Icon, iconPosition = "left", loading, children, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} disabled={isDisabled} {...props}>
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {Icon && iconPosition === "left" && !loading && <Icon className={cn("h-4 w-4", children && "mr-2")} />}
        {children}
        {Icon && iconPosition === "right" && !loading && <Icon className={cn("h-4 w-4", children && "ml-2")} />}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
