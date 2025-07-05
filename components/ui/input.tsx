"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus-visible:ring-[#003a78] focus-visible:border-[#003a78]",
        error: "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
        success: "border-green-500 focus-visible:ring-green-500 focus-visible:border-green-500",
      },
      size: {
        sm: "h-9 px-2 text-xs",
        md: "h-10 px-3",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
)

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants>  {
  label?: string
  error?: string
  success?: string
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  onRightIconClick?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      label,
      error,
      success,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      onRightIconClick,
      ...props
    },
    ref,
  ) => {
    const inputVariant = error ? "error" : success ? "success" : variant

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
        <div className="relative">
          {LeftIcon && (
            <LeftIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          )}
          <input
            className={cn(
              inputVariants({ variant: inputVariant, size, className }),
              LeftIcon && "pl-10",
              RightIcon && "pr-10",
            )}
            ref={ref}
            {...props}
          />
          {RightIcon && (
            <button
              type="button"
              onClick={onRightIconClick}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <RightIcon className="h-4 w-4" />
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {success && <p className="mt-1 text-sm text-green-600">{success}</p>}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input, inputVariants }
