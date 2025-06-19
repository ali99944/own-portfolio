"use client"

import { useState } from "react"
import {
  Search,
  Mail,
  MailOpen,
  Star,
  Archive,
  Reply,
  Forward,
  MoreHorizontal,
  Calendar,
  User,
  CheckCircle,
} from "lucide-react"

interface Message {
  id: string
  name: string
  email: string
  service: string
  subject: string
  message: string
  projectDetails: string
  date: string
  status: "unread" | "read" | "replied" | "archived"
  priority: "low" | "medium" | "high"
  starred: boolean
}

const mockMessages: Message[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    service: "web",
    subject: "E-commerce Website Development",
    message:
      "Hi Ali, I'm looking to build a modern e-commerce website for my retail business. I need a responsive design with payment integration and inventory management.",
    projectDetails:
      "The project involves creating a full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features needed: user authentication, product catalog, shopping cart, payment processing (Stripe), order management, and admin dashboard.",
    date: "2024-01-15T10:30:00Z",
    status: "unread",
    priority: "high",
    starred: true,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@techstartup.com",
    service: "mobile",
    subject: "Mobile App for Fitness Tracking",
    message:
      "Hello! We're a fitness startup looking to develop a mobile app for iOS and Android. The app should track workouts, nutrition, and provide personalized recommendations.",
    projectDetails:
      "React Native app with features: workout tracking, nutrition logging, progress analytics, social features, push notifications, and integration with wearable devices. Backend API needed for user data and analytics.",
    date: "2024-01-14T14:20:00Z",
    status: "read",
    priority: "medium",
    starred: false,
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@enterprise.com",
    service: "systems",
    subject: "Enterprise System Integration",
    message:
      "We need help integrating our existing CRM with a new inventory management system. Looking for someone with experience in enterprise solutions.",
    projectDetails:
      "Integration project involving Salesforce CRM and custom inventory system. Need to create APIs, data synchronization, automated workflows, and reporting dashboard. Timeline: 3 months.",
    date: "2024-01-13T09:15:00Z",
    status: "replied",
    priority: "high",
    starred: true,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@nonprofit.org",
    service: "web",
    subject: "Non-profit Website Redesign",
    message:
      "Our non-profit organization needs a website redesign to better showcase our mission and make it easier for people to donate and volunteer.",
    projectDetails:
      "Website redesign with focus on storytelling, donation integration, volunteer management, event calendar, and blog. Need SEO optimization and accessibility compliance.",
    date: "2024-01-12T16:45:00Z",
    status: "archived",
    priority: "low",
    starred: false,
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.w@consulting.com",
    service: "web",
    subject: "Consulting Firm Portfolio Site",
    message:
      "Looking to create a professional portfolio website for our consulting firm. Need to showcase our services, case studies, and team members.",
    projectDetails:
      "Professional website with service pages, case study showcase, team profiles, contact forms, and blog. Need content management system and SEO optimization.",
    date: "2024-01-11T11:30:00Z",
    status: "read",
    priority: "medium",
    starred: false,
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || message.status === statusFilter
    const matchesPriority = priorityFilter === "all" || message.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  const updateMessageStatus = (messageId: string, newStatus: Message["status"]) => {
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, status: newStatus } : msg)))
  }

  const toggleStar = (messageId: string) => {
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, starred: !msg.starred } : msg)))
  }

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "unread":
        return <Mail size={16} className="text-blue-600" />
      case "read":
        return <MailOpen size={16} className="text-gray-600" />
      case "replied":
        return <CheckCircle size={16} className="text-green-600" />
      case "archived":
        return <Archive size={16} className="text-gray-400" />
    }
  }

  const getPriorityColor = (priority: Message["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50"
      case "medium":
        return "text-yellow-600 bg-yellow-50"
      case "low":
        return "text-green-600 bg-green-50"
    }
  }

  const getServiceLabel = (service: string) => {
    switch (service) {
      case "web":
        return "Web Development"
      case "mobile":
        return "Mobile App Development"
      case "systems":
        return "Systems Creation"
      default:
        return service
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
        <p className="text-blue-100">Manage and respond to client inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl  border border-gray-200">
            {/* Search and Filters */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative mb-4">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>

              <div className="flex space-x-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>

                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Messages List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-[#f1f0ec] transition-colors ${
                    selectedMessage?.id === message.id ? "bg-[#f1f0ec]" : ""
                  } ${message.status === "unread" ? "bg-blue-50" : ""}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(message.status)}
                      <span className="font-medium text-gray-900 text-sm">{message.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleStar(message.id)
                        }}
                        className={`p-1 rounded ${message.starred ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"}`}
                      >
                        <Star size={14} fill={message.starred ? "currentColor" : "none"} />
                      </button>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(message.priority)}`}
                      >
                        {message.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{message.subject}</p>
                  <p className="text-xs text-gray-500 truncate">{message.message}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{new Date(message.date).toLocaleDateString()}</span>
                    <span className="text-xs bg-[#003a78] text-white px-2 py-1 rounded">
                      {getServiceLabel(message.service)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white rounded-xl  border border-gray-200">
              {/* Message Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMessage.subject}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {selectedMessage.name}
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="mr-1" />
                        {selectedMessage.email}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(selectedMessage.date).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(selectedMessage.priority)}`}
                    >
                      {selectedMessage.priority} priority
                    </span>
                    {getStatusIcon(selectedMessage.status)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateMessageStatus(selectedMessage.id, "replied")}
                    className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    <Reply size={16} className="mr-2" />
                    Reply
                  </button>
                  <button
                    onClick={() => updateMessageStatus(selectedMessage.id, "archived")}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Archive size={16} className="mr-2" />
                    Archive
                  </button>
                  <button
                    onClick={() => toggleStar(selectedMessage.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      selectedMessage.starred
                        ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Star size={16} className="mr-2" fill={selectedMessage.starred ? "currentColor" : "none"} />
                    {selectedMessage.starred ? "Unstar" : "Star"}
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Requested</h3>
                  <span className="inline-block px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm font-medium">
                    {getServiceLabel(selectedMessage.service)}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Message</h3>
                  <div className="bg-[#f1f0ec] rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">{selectedMessage.message}</p>
                  </div>
                </div>

                {selectedMessage.projectDetails && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
                    <div className="bg-[#f1f0ec] rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">{selectedMessage.projectDetails}</p>
                    </div>
                  </div>
                )}

                {/* Quick Reply */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Reply</h3>
                  <div className="space-y-4">
                    <textarea
                      placeholder="Type your reply..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                          <Forward size={20} />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <MoreHorizontal size={20} />
                        </button>
                      </div>
                      <button
                        onClick={() => updateMessageStatus(selectedMessage.id, "replied")}
                        className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                      >
                        Send Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl  border border-gray-200 p-12 text-center">
              <Mail size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a message</h3>
              <p className="text-gray-600">Choose a message from the list to view its details and reply</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
