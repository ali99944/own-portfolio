"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Briefcase, Users, MessageCircle, Settings, User, LogOut } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Articles", href: "/dashboard/articles", icon: FileText },
  { name: "Projects", href: "/dashboard/projects", icon: Briefcase },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Messages", href: "/dashboard/messages", icon: MessageCircle },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#003a78] transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 bg-[#003a78]">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#fed850] rounded-full flex items-center justify-center mr-3">
            <span className="text-[#003a78] font-bold text-sm">AT</span>
          </div>
          <span className="text-white font-bold text-lg">Control Panel</span>
        </div>
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
                    isActive ? "bg-[#fed850] text-[#003a78]" : "text-white hover:bg-white/10 hover:text-[#fed850]"
                  }`}
                  onClick={onClose}
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
              <p className="text-white font-medium text-sm">Ali Tarek</p>
              <p className="text-blue-200 text-xs">Administrator</p>
            </div>
          </div>
          <button className="flex items-center mt-3 text-blue-200 hover:text-white text-sm">
            <LogOut size={16} className="mr-2" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
