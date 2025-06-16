'use client'

import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-[#003a78] flex items-center">
                <span>AT</span>
              </Link>
              <span className="text-xl font-semibold dark:text-white">Ali Tarek</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                About
              </Link>
              <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#003a78] transition">
                Contact
              </Link>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {true ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar