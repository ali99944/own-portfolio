'use client'

import { LayoutDashboard, FileText, Briefcase, Users, MessageCircle, Eye, Heart, Download, Calendar, Clock, Star } from 'lucide-react'

const stats = [
  {
    name: 'Total Articles',
    value: '24',
    change: '+12%',
    changeType: 'increase',
    icon: FileText,
  },
  {
    name: 'Active Projects',
    value: '8',
    change: '+3',
    changeType: 'increase',
    icon: Briefcase,
  },
  {
    name: 'Total Users',
    value: '1,234',
    change: '+18%',
    changeType: 'increase',
    icon: Users,
  },
  {
    name: 'Messages',
    value: '42',
    change: '+7',
    changeType: 'increase',
    icon: MessageCircle,
  },
]

const recentArticles = [
  {
    title: 'Getting Started with React Hooks',
    views: 1234,
    likes: 89,
    date: '2024-01-15',
    status: 'published'
  },
  {
    title: 'Advanced TypeScript Patterns',
    views: 987,
    likes: 67,
    date: '2024-01-12',
    status: 'published'
  },
  {
    title: 'Building Scalable Node.js Applications',
    views: 756,
    likes: 45,
    date: '2024-01-10',
    status: 'draft'
  },
]

const recentProjects = [
  {
    name: 'E-commerce Platform',
    status: 'In Progress',
    progress: 75,
    dueDate: '2024-02-15',
    priority: 'high'
  },
  {
    name: 'Mobile Learning App',
    status: 'Review',
    progress: 90,
    dueDate: '2024-01-30',
    priority: 'medium'
  },
  {
    name: 'Portfolio Website',
    status: 'Completed',
    progress: 100,
    dueDate: '2024-01-20',
    priority: 'low'
  },
]

export default function ControlPanelHome() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Ali!</h1>
            <p className="text-blue-100">Here&apos;s what&apos;s happening with your content and projects today.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-[#fed850] rounded-full flex items-center justify-center">
              <LayoutDashboard size={32} className="text-[#003a78]" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-4  border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className={`text-sm mt-2 ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
                <stat.icon size={24} className="text-[#fed850]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Articles */}
        <div className="bg-white rounded-xl  border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Articles</h2>
              <button className="text-[#003a78] hover:text-[#003a78]/80 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#f1f0ec] rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <Heart size={16} className="mr-1" />
                        {article.likes}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    article.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-xl  border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
              <button className="text-[#003a78] hover:text-[#003a78]/80 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="p-4 bg-[#f1f0ec] rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.priority === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : project.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{project.status}</span>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {project.dueDate}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#003a78] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {project.progress}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors">
            <FileText size={20} className="mr-2" />
            New Article
          </button>
          <button className="flex items-center justify-center p-4 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors">
            <Briefcase size={20} className="mr-2" />
            New Project
          </button>
          <button className="flex items-center justify-center p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download size={20} className="mr-2" />
            Export Data
          </button>
          <button className="flex items-center justify-center p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Star size={20} className="mr-2" />
            View Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
