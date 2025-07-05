"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react"
import { cn } from "@/lib/utils"

const alertVariants = cva("relative w-full rounded-lg border p-4", {
  variants: {
    variant: {
      default: "bg-white border-gray-200 text-gray-900",
      success: "bg-green-50 border-green-200 text-green-900",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
      error: "bg-red-50 border-red-200 text-red-900",
      info: "bg-blue-50 border-blue-200 text-blue-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const iconMap = {
  default: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
}

const iconColorMap = {
  default: "text-gray-500",
  success: "text-green-500",
  warning: "text-yellow-500",
  error: "text-red-500",
  info: "text-blue-500",
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, dismissible, onDismiss, children, ...props }, ref) => {
    const Icon = iconMap[variant as keyof typeof iconMap]

    return (
      <div ref={ref} className={cn(alertVariants({ variant }), className)} {...props}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon className={cn("h-5 w-5", iconColorMap[variant as keyof typeof iconColorMap])} />
          </div>
          <div className="ml-3 flex-1">
            {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
            <div className="text-sm">{children}</div>
          </div>
          {dismissible && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={onDismiss}
                  className={cn(
                    "inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                    iconColorMap[variant as keyof typeof iconColorMap],
                    "hover:bg-black/5",
                  )}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  },
)
Alert.displayName = "Alert"

export { Alert, alertVariants }
