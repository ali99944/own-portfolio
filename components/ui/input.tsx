'use client'

import { ReactNode } from 'react'

interface InputProps {
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  icon?: ReactNode
}

export default function Input({ type = 'text', value, onChange, placeholder, className, disabled, icon }: InputProps) {
  return (
    <div className={`relative ${className || ''}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-[#003a78] disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white"
        disabled={disabled}
      />
      {icon && <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">{icon}</div>}
    </div>
  )
}