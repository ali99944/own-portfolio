"use client"

import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react"
import { cn } from "@/lib/utils"

const notificationVariants = cva("relative w-full max-w-sm rounded-lg border p-4 shadow-lg", {
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

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title?: string
  description?: string
  dismissible?: boolean
  onDismiss?: () => void
  autoClose?: boolean
  duration?: number
}

// Inline Notification Component
const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      className,
      variant = "default",
      title,
      description,
      dismissible = true,
      onDismiss,
      autoClose = false,
      duration = 5000,
      children,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(true)
    const Icon = iconMap[variant as keyof typeof iconMap] || iconMap.default

    useEffect(() => {
      if (autoClose && duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          onDismiss?.()
        }, duration)

        return () => clearTimeout(timer)
      }
    }, [autoClose, duration, onDismiss])

    const handleDismiss = () => {
      setIsVisible(false)
      onDismiss?.()
    }

    if (!isVisible) return null

    return (
      <div ref={ref} className={cn(notificationVariants({ variant }), className)} {...props}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon className={cn("h-5 w-5", iconColorMap[variant as keyof typeof iconColorMap])} />
          </div>
          <div className="ml-3 flex-1">
            {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
            <div className="text-sm">{description || children}</div>
          </div>
          {dismissible && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={handleDismiss}
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
Notification.displayName = "Notification"

// Floating Notification Component
export interface FloatingNotificationProps extends NotificationProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
}

const FloatingNotification: React.FC<FloatingNotificationProps> = ({ position = "top-right", className, ...props }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  }

  if (!mounted) return null

  return createPortal(
    <div className={cn("fixed z-50", positionClasses[position])}>
      <Notification className={className} {...props} />
    </div>,
    document.body,
  )
}

export { Notification, FloatingNotification, notificationVariants }
