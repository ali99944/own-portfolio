"use client"

import React, { useState, useRef, useEffect } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DropdownItem {
  key: string
  label: string
  icon?: LucideIcon
  disabled?: boolean
  danger?: boolean
  onClick?: () => void
}

export interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: "left" | "right"
  className?: string
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, items, align = "left", className }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleItemClick = (item: DropdownItem) => {
      if (!item.disabled) {
        item.onClick?.()
        setIsOpen(false)
      }
    }

    return (
      <div className={cn("relative", className)} ref={ref}>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" ref={dropdownRef}>
          {trigger}
        </div>

        {isOpen && (
          <div
            className={cn(
              "absolute z-50 mt-1 w-56 rounded-lg border border-gray-200 bg-white shadow-lg",
              align === "right" ? "right-0" : "left-0",
            )}
          >
            <div className="py-1">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    className={cn(
                      "flex w-full items-center px-3 py-2 text-sm transition-colors",
                      item.disabled
                        ? "cursor-not-allowed text-gray-400"
                        : item.danger
                          ? "text-red-600 hover:bg-red-50"
                          : "text-gray-900 hover:bg-[#f1f0ec]",
                    )}
                  >
                    {Icon && <Icon className={cn("mr-3 h-4 w-4", item.danger ? "text-red-600" : "text-gray-400")} />}
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  },
)
Dropdown.displayName = "Dropdown"

export { Dropdown }
