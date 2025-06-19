"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, Edit, Eye, Copy, Filter, Star, Clock, Users, Briefcase } from 'lucide-react'

interface ProjectTemplate {
  id: string
  name: string
  description: string
  category: string
  industry: string
  duration: string
  teamSize: string
  complexity: "beginner" | "intermediate" | "advanced"
  tags: string[]
  phases: TemplatePhase[]
  tasks: TemplateTask[]
  deliverables: string[]
  estimatedBudget: number
  isPopular: boolean
  usageCount: number
  rating: number
  createdBy: string
  createdAt: string
  lastUsed: string
  thumbnail: string
}

interface TemplatePhase {
  id: string
  name: string
  description: string
  duration: number
  order: number
}

interface TemplateTask {
  id: string
  name: string
  description: string
  phaseId: string
  estimatedHours: number
  priority: "low" | "medium" | "high"
  dependencies: string[]
  assigneeRole: string
  order: number
}

const mockTemplates: ProjectTemplate[] = [
  {
    id: "1",
    name: "E-commerce Website Development",
    description: "Complete e-commerce platform with payment integration, inventory management, and admin dashboard",
    category: "Web Development",
    industry: "E-commerce",
    duration: "12-16 weeks",
    teamSize: "4-6 people",
    complexity: "advanced",
    tags: ["React", "Node.js", "Payment Gateway", "Database", "API"],
    phases: [
      { id: "p1", name: "Discovery & Planning", description: "Requirements gathering and project planning", duration: 2, order: 1 },
      { id: "p2", name: "Design & Prototyping", description: "UI/UX design and interactive prototypes", duration: 3, order: 2 },
      { id: "p3", name: "Frontend Development", description: "User interface implementation", duration: 4, order: 3 },
      { id: "p4", name: "Backend Development", description: "Server-side logic and database", duration: 4, order: 4 },
      { id: "p5", name: "Integration & Testing", description: "System integration and quality assurance", duration: 2, order: 5 },
      { id: "p6", name: "Deployment & Launch", description: "Production deployment and go-live", duration: 1, order: 6 }
    ],
    tasks: [
      { id: "t1", name: "Stakeholder interviews", description: "Conduct interviews with key stakeholders", phaseId: "p1", estimatedHours: 16, priority: "high", dependencies: [], assigneeRole: "Project Manager", order: 1 },
      { id: "t2", name: "Requirements documentation", description: "Document functional and technical requirements", phaseId: "p1", estimatedHours: 24, priority: "high", dependencies: ["t1"], assigneeRole: "Business Analyst", order: 2 },
      { id: "t3", name: "Wireframe creation", description: "Create wireframes for all major pages", phaseId: "p2", estimatedHours: 40, priority: "high", dependencies: ["t2"], assigneeRole: "UX Designer", order: 3 },
      { id: "t4", name: "UI design", description: "Design visual interface and style guide", phaseId: "p2", estimatedHours: 60, priority: "high", dependencies: ["t3"], assigneeRole: "UI Designer", order: 4 }
    ],
    deliverables: [
      "Requirements Document",
      "Technical Specification",
      "UI/UX Design Files",
      "Frontend Application",
      "Backend API",
      "Database Schema",
      "Test Documentation",
      "Deployment Guide"
    ],
    estimatedBudget: 75000,
    isPopular: true,
    usageCount: 156,
    rating: 4.8,
    createdBy: "Ali Tarek",
    createdAt: "2024-01-10T00:00:00Z",
    lastUsed: "2024-01-20T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "2",
    name: "Mobile App Development (React Native)",
    description: "Cross-platform mobile application with user authentication, real-time features, and push notifications",
    category: "Mobile Development",
    industry: "Technology",
    duration: "10-14 weeks",
    teamSize: "3-5 people",
    complexity: "intermediate",
    tags: ["React Native", "Firebase", "Push Notifications", "Authentication", "API"],
    phases: [
      { id: "p1", name: "Planning & Research", description: "Market research and technical planning", duration: 2, order: 1 },
      { id: "p2", name: "Design & Prototyping", description: "Mobile UI/UX design", duration: 2, order: 2 },
      { id: "p3", name: "Development", description: "App development and features", duration: 6, order: 3 },
      { id: "p4", name: "Testing & QA", description: "Testing on multiple devices", duration: 2, order: 4 },
      { id: "p5", name: "App Store Submission", description: "Prepare and submit to app stores", duration: 2, order: 5 }
    ],
    tasks: [],
    deliverables: [
      "Market Research Report",
      "Technical Architecture",
      "Mobile App Design",
      "iOS Application",
      "Android Application",
      "Backend API",
      "Testing Documentation",
      "App Store Assets"
    ],
    estimatedBudget: 45000,
    isPopular: true,
    usageCount: 89,
    rating: 4.6,
    createdBy: "Sarah Johnson",
    createdAt: "2024-01-08T00:00:00Z",
    lastUsed: "2024-01-19T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "3",
    name: "Corporate Website Redesign",
    description: "Modern corporate website with CMS, SEO optimization, and responsive design",
    category: "Web Development",
    industry: "Corporate",
    duration: "6-8 weeks",
    teamSize: "2-4 people",
    complexity: "intermediate",
    tags: ["WordPress", "SEO", "Responsive", "CMS", "Analytics"],
    phases: [
      { id: "p1", name: "Discovery", description: "Current site analysis and requirements", duration: 1, order: 1 },
      { id: "p2", name: "Design", description: "New design and user experience", duration: 2, order: 2 },
      { id: "p3", name: "Development", description: "Website development and CMS setup", duration: 3, order: 3 },
      { id: "p4", name: "Content Migration", description: "Content migration and SEO setup", duration: 1, order: 4 },
      { id: "p5", name: "Launch", description: "Testing, launch, and training", duration: 1, order: 5 }
    ],
    tasks: [],
    deliverables: [
      "Site Analysis Report",
      "Design Mockups",
      "Responsive Website",
      "Content Management System",
      "SEO Setup",
      "Analytics Integration",
      "Training Materials"
    ],
    estimatedBudget: 25000,
    isPopular: false,
    usageCount: 67,
    rating: 4.4,
    createdBy: "Mike Chen",
    createdAt: "2024-01-05T00:00:00Z",
    lastUsed: "2024-01-18T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "4",
    name: "Software Product Launch",
    description: "Complete product launch strategy including marketing, sales enablement, and customer onboarding",
    category: "Product Launch",
    industry: "Software",
    duration: "8-12 weeks",
    teamSize: "6-10 people",
    complexity: "advanced",
    tags: ["Marketing", "Sales", "Product Management", "Customer Success", "Analytics"],
    phases: [
      { id: "p1", name: "Pre-launch Planning", description: "Strategy and planning phase", duration: 3, order: 1 },
      { id: "p2", name: "Marketing Campaign", description: "Marketing materials and campaigns", duration: 4, order: 2 },
      { id: "p3", name: "Sales Enablement", description: "Sales training and materials", duration: 2, order: 3 },
      { id: "p4", name: "Launch Execution", description: "Product launch and monitoring", duration: 2, order: 4 },
      { id: "p5", name: "Post-launch Optimization", description: "Performance analysis and optimization", duration: 1, order: 5 }
    ],
    tasks: [],
    deliverables: [
      "Launch Strategy Document",
      "Marketing Materials",
      "Sales Playbook",
      "Customer Onboarding Flow",
      "Launch Campaign",
      "Performance Dashboard",
      "Post-launch Report"
    ],
    estimatedBudget: 85000,
    isPopular: true,
    usageCount: 34,
    rating: 4.9,
    createdBy: "Emma Wilson",
    createdAt: "2024-01-03T00:00:00Z",
    lastUsed: "2024-01-17T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "5",
    name: "Digital Marketing Campaign",
    description: "Multi-channel digital marketing campaign with social media, email, and paid advertising",
    category: "Marketing",
    industry: "Digital Marketing",
    duration: "4-6 weeks",
    teamSize: "3-5 people",
    complexity: "beginner",
    tags: ["Social Media", "Email Marketing", "PPC", "Content", "Analytics"],
    phases: [
      { id: "p1", name: "Strategy & Planning", description: "Campaign strategy and planning", duration: 1, order: 1 },
      { id: "p2", name: "Content Creation", description: "Create marketing content and assets", duration: 2, order: 2 },
      { id: "p3", name: "Campaign Launch", description: "Launch across all channels", duration: 1, order: 3 },
      { id: "p4", name: "Optimization", description: "Monitor and optimize performance", duration: 2, order: 4 }
    ],
    tasks: [],
    deliverables: [
      "Campaign Strategy",
      "Content Calendar",
      "Creative Assets",
      "Email Templates",
      "Social Media Posts",
      "Ad Campaigns",
      "Performance Report"
    ],
    estimatedBudget: 15000,
    isPopular: false,
    usageCount: 78,
    rating: 4.2,
    createdBy: "David Brown",
    createdAt: "2024-01-01T00:00:00Z",
    lastUsed: "2024-01-16T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "6",
    name: "Data Analytics Implementation",
    description: "Business intelligence and data analytics platform implementation with dashboards and reporting",
    category: "Data & Analytics",
    industry: "Technology",
    duration: "10-14 weeks",
    teamSize: "4-6 people",
    complexity: "advanced",
    tags: ["Data Analytics", "Business Intelligence", "Dashboards", "ETL", "Reporting"],
    phases: [
      { id: "p1", name: "Data Assessment", description: "Current data landscape analysis", duration: 2, order: 1 },
      { id: "p2", name: "Architecture Design", description: "Data architecture and platform design", duration: 2, order: 2 },
      { id: "p3", name: "Data Pipeline Development", description: "ETL processes and data pipelines", duration: 4, order: 3 },
      { id: "p4", name: "Dashboard Development", description: "Analytics dashboards and reports", duration: 3, order: 4 },
      { id: "p5", name: "Training & Deployment", description: "User training and system deployment", duration: 3, order: 5 }
    ],
    tasks: [],
    deliverables: [
      "Data Assessment Report",
      "Technical Architecture",
      "Data Pipeline",
      "Analytics Dashboards",
      "Reporting System",
      "User Training Materials",
      "Documentation"
    ],
    estimatedBudget: 95000,
    isPopular: false,
    usageCount: 23,
    rating: 4.7,
    createdBy: "Lisa Zhang",
    createdAt: "2023-12-28T00:00:00Z",
    lastUsed: "2024-01-15T00:00:00Z",
    thumbnail: "/placeholder.svg?height=200&width=300"
  }
]

const categories = ["All", "Web Development", "Mobile Development", "Marketing", "Product Launch", "Data & Analytics"]
const industries = ["All", "Technology", "E-commerce", "Corporate", "Software", "Digital Marketing"]
const complexities = ["All", "Beginner", "Intermediate", "Advanced"]

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<ProjectTemplate[]>(mockTemplates)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [industryFilter, setIndustryFilter] = useState("All")
  const [complexityFilter, setComplexityFilter] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  // const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === "All" || template.category === categoryFilter
    const matchesIndustry = industryFilter === "All" || template.industry === industryFilter
    const matchesComplexity = complexityFilter === "All" || template.complexity === complexityFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesIndustry && matchesComplexity
  }).sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.usageCount - a.usageCount
      case "rating":
        return b.rating - a.rating
      case "recent":
        return new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleUseTemplate = (templateId: string) => {
    // In a real app, this would navigate to create project with template
    console.log("Using template:", templateId)
    // Update usage count
    setTemplates(prev => prev.map(template => 
      template.id === templateId 
        ? { ...template, usageCount: template.usageCount + 1, lastUsed: new Date().toISOString() }
        : template
    ))
  }

  const handleCloneTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template) {
      const clonedTemplate = {
        ...template,
        id: Date.now().toString(),
        name: `${template.name} (Copy)`,
        usageCount: 0,
        createdAt: new Date().toISOString(),
        lastUsed: new Date().toISOString()
      }
      setTemplates(prev => [clonedTemplate, ...prev])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Project Templates</h1>
            <p className="text-blue-100">Pre-built templates to jumpstart your projects</p>
          </div>
          <Link
            href="/control-panel/templates/create"
            className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-medium"
          >
            <Plus size={18} className="mr-2" />
            Create Template
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Templates</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{templates.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <Briefcase size={24} className="text-[#fed850]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Popular Templates</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{templates.filter(t => t.isPopular).length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Star size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Usage</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {templates.reduce((sum, template) => sum + template.usageCount, 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {(templates.reduce((sum, template) => sum + template.rating, 0) / templates.length).toFixed(1)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Star size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-500" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>

            <select
              value={complexityFilter}
              onChange={(e) => setComplexityFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
            >
              {complexities.map((complexity) => (
                <option key={complexity} value={complexity}>
                  {complexity}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="recent">Recently Used</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl  border border-gray-200 overflow-hidden">
            {/* Template Image */}
            <div className="relative h-48 bg-gradient-to-br from-[#003a78] to-[#003a78]/80">
              <img
                src={template.thumbnail || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Briefcase size={32} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">{template.category}</p>
                </div>
              </div>
              {template.isPopular && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center px-2 py-1 bg-[#fed850] text-[#003a78] rounded-full text-xs font-medium">
                    <Star size={12} className="mr-1" />
                    Popular
                  </div>
                </div>
              )}
            </div>

            {/* Template Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{template.name}</h3>
                <div className="flex items-center text-sm text-gray-600 ml-2">
                  <Star size={14} className="mr-1 text-yellow-500" />
                  {template.rating}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{template.description}</p>

              {/* Template Meta */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock size={14} className="mr-1" />
                    {template.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={14} className="mr-1" />
                    {template.teamSize}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(template.complexity)}`}>
                    {template.complexity}
                  </span>
                  <span className="text-sm text-gray-600">{template.usageCount} uses</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[#003a78] text-white text-xs rounded-full">
                    {tag}
                  </span>
                ))}
                {template.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{template.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Budget */}
              <div className="mb-4">
                <span className="text-sm text-gray-600">Est. Budget: </span>
                <span className="text-lg font-semibold text-[#003a78]">
                  ${template.estimatedBudget.toLocaleString()}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUseTemplate(template.id)}
                  className="flex-1 px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
                >
                  Use Template
                </button>
                <Link
                  href={`/control-panel/templates/${template.id}`}
                  className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
                  title="View Details"
                >
                  <Eye size={16} />
                </Link>
                <button
                  onClick={() => handleCloneTemplate(template.id)}
                  className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
                  title="Clone Template"
                >
                  <Copy size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors" title="Edit Template">
                  <Edit size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="bg-white rounded-xl  border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || categoryFilter !== "All" || industryFilter !== "All" || complexityFilter !== "All"
              ? "Try adjusting your search or filters"
              : "Get started by creating your first template"}
          </p>
          <Link
            href="/control-panel/templates/create"
            className="inline-flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
          >
            <Plus size={18} className="mr-2" />
            Create Template
          </Link>
        </div>
      )}
    </div>
  )
}
