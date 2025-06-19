"use client"

import { Menu, Search, Bell, User } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="lg:hidden text-gray-600 hover:text-[#003a78]">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex items-center ml-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#003a78] rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">Ali Tarek</span>
          </div>
        </div>
      </div>
    </header>
  )
}
