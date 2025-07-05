"use client"

import type React from "react"
import { type LucideIcon, FileText, ImageIcon, Search, Inbox, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface PlaceholderProps {
  icon?: LucideIcon
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

const Placeholder: React.FC<PlaceholderProps> = ({ icon: Icon = FileText, title, description, action, className }) => (
  <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)}>
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <Icon size={32} className="text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    {description && <p className="text-gray-600 mb-6 max-w-md">{description}</p>}
    {action && <Button onClick={action.onClick}>{action.label}</Button>}
  </div>
)

// Pre-built placeholder components
const EmptyState: React.FC<{
  title: string
  description?: string
  action?: { label: string; onClick: () => void }
  className?: string
}> = ({ title, description, action, className }) => (
  <Placeholder icon={Inbox} title={title} description={description} action={action} className={className} />
)

const NoResults: React.FC<{
  searchTerm?: string
  onClear?: () => void
  className?: string
}> = ({ searchTerm, onClear, className }) => (
  <Placeholder
    icon={Search}
    title="No results found"
    description={searchTerm ? `No results for "${searchTerm}"` : "Try adjusting your search criteria"}
    action={onClear ? { label: "Clear search", onClick: onClear } : undefined}
    className={className}
  />
)

const ErrorState: React.FC<{
  title?: string
  description?: string
  onRetry?: () => void
  className?: string
}> = ({
  title = "Something went wrong",
  description = "We encountered an error. Please try again.",
  onRetry,
  className,
}) => (
  <Placeholder
    icon={AlertCircle}
    title={title}
    description={description}
    action={onRetry ? { label: "Try again", onClick: onRetry } : undefined}
    className={className}
  />
)

const NoData: React.FC<{
  type: string
  onAdd?: () => void
  className?: string
}> = ({ type, onAdd, className }) => (
  <Placeholder
    icon={FileText}
    title={`No ${type} yet`}
    description={`Get started by creating your first ${type.toLowerCase()}`}
    action={onAdd ? { label: `Add ${type}`, onClick: onAdd } : undefined}
    className={className}
  />
)

const ImagePlaceholder: React.FC<{
  width?: number
  height?: number
  text?: string
  className?: string
}> = ({ width = 300, height = 200, text = "Image", className }) => (
  <div
    className={cn(
      "flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg",
      className,
    )}
    style={{ width, height }}
  >
    <div className="text-center">
      <ImageIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
      <span className="text-sm text-gray-500">{text}</span>
    </div>
  </div>
)

export { Placeholder, EmptyState, NoResults, ErrorState, NoData, ImagePlaceholder }
