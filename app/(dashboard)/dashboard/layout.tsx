'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Briefcase, Users, MessageCircle, Settings, Menu, X, Bell, User, LogOut } from 'lucide-react'

import '../../globals.css'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Articles', href: '/dashboard/articles', icon: FileText },
  { name: 'Projects', href: '/dashboard/projects', icon: Briefcase },
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageCircle },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function ControlPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
      <html>
        <body>
          <div className="min-h-screen bg-[#f1f0ec] flex justify-between">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className=" z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`relative h-screen max-h-screen z-50 w-60 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:inset-0`}>
          <div className="flex items-center justify-between h-16 px-6 bg-white">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#fed850] rounded-full flex items-center justify-center mr-3">
                <span className="text-[#003a78] font-bold text-sm">AT</span>
              </div>
              <span className="text-[#003a78] font-bold text-lg">Control Panel</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-[#003a78] hover:text-[#fed850]"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#fed850] text-[#003a78]'
                          : 'text-[#003a78]   hover:text-[#fed850] hover:bg-[#003a78]'
                      }`}
                    >
                      <item.icon size={20} className="mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#fed850] rounded-full flex items-center justify-center mr-3">
                  <User size={20} className="text-[#003a78]" />
                </div>
                <div>
                  <p className="text-[#003a78] font-medium text-sm">Ali Tarek</p>
                  <p className="text-[#003a78] text-xs">Administrator</p>
                </div>
              </div>
              <button className="flex items-center mt-3 text-[#A52422] hover:text-[#A52422]/80 hover:underline cursor-pointer text-sm">
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex-1">
          {/* Top navigation */}
          <header className="bg-white border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-600 hover:text-[#003a78]"
                >
                  <Menu size={24} />
                </button>

                <p className='text-xl font-semibold text-[#003a78]'>CONTROL PANEL</p>
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

          {/* Page content */}
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
        </body>
      </html>
  )
}
