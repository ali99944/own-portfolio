'use client'

import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: LucideIcon
  className?: string
  disabled?: boolean
}

export default function Button({ children, onClick, variant = 'primary', icon: Icon, className, disabled }: ButtonProps) {
  const baseStyles = 'px-6 py-2 font-semibold rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-white text-[#003a78] hover:bg-gray-200',
    secondary: 'bg-[#fed850] text-black hover:bg-[#fed850]/90',
    outline: 'bg-transparent border border-[#003a78] text-[#003a78] hover:bg-[#003a78] hover:text-white',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      disabled={disabled}
    >
      {Icon && <Icon size={16} className="inline mr-2" />}
      {children}
    </button>
  )
}