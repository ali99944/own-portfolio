'use client'

import { useState, useEffect, useRef } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export default function Select({ options, value, onChange, placeholder = 'Select an option', className, disabled }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value) || { value: '', label: placeholder }
  const handleToggle = () => !disabled && setIsOpen(!isOpen)
  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className || ''}`} ref={selectRef}>
      <div
        className="w-full bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white cursor-pointer flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200  disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleToggle}
        // disabled={disabled}`
      >
        <span className="truncate">{selectedOption.label}</span>
        {/* <svg
          className={`fill-current h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg> */}
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg z-10 shadow-sm">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 hover:bg-[#fed850] hover:text-[#003a78] cursor-pointer transition-colors duration-200 text-start"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}