'use client'

import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en')

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-[#003a78] flex items-center">
              <span>AT</span>
            </Link>
            <span className="text-xl font-semibold dark:text-white hidden md:inline">Ali Tarek</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                About
              </Link>
              <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-[#fed850] text-black font-medium rounded-lg hover:bg-[#fed850]/90 transition"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
            <div className="flex flex-col items-start  space-y-0">
              <Link href="#about" className="text-gray-600 hover:bg-[#fed850] w-full p-3 dark:text-gray-300 hover:text-[#003a78] transition" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="#projects" className="text-gray-600 hover:bg-[#fed850] w-full p-3 dark:text-gray-300 hover:text-[#003a78] transition" onClick={toggleMobileMenu}>
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 hover:bg-[#fed850] w-full p-3 dark:text-gray-300 hover:text-[#003a78] transition" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar