"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SelectOption {
value: string
label: string
disabled?: boolean
}

export interface SelectProps {
options: SelectOption[]
value?: string
defaultValue?: string
placeholder?: string
disabled?: boolean
error?: string
label?: string
className?: string
onChange?: (value: string) => void
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
(
  { options, value, defaultValue, placeholder = "Select an option", disabled, error, label, className, onChange },
  ref,
) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "")
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === selectedValue)

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue)
    setIsOpen(false)
    onChange?.(optionValue)
  }

  return (
    <div className={cn("w-full", className)} ref={ref}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <div className="relative" ref={selectRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-gray-300 focus-visible:ring-[#003a78] focus-visible:border-[#003a78]",
          )}
        >
          <span className={cn(selectedOption ? "text-gray-900" : "text-gray-500")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-md">
            <div className="max-h-60 overflow-auto py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-sm transition-colors",
                    option.disabled ? "cursor-not-allowed text-gray-400" : "hover:bg-[#f1f0ec] text-gray-900",
                    selectedValue === option.value && "bg-[#003a78] text-white hover:bg-[#003a78]",
                  )}
                >
                  <span>{option.label}</span>
                  {selectedValue === option.value && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
},
)
Select.displayName = "Select"

export { Select }
