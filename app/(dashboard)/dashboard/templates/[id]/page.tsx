"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  Circle,
  Edit,
  Copy,
  Download,
  Share2,
  Briefcase,
  Target,
  FileText,
  User,
} from "lucide-react"

// Using the same interfaces from the templates page
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
  objectives?: string[]
  requirements?: string[]
  risks?: string[]
  successCriteria?: string[]
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

// Mock template data with more details
const mockTemplate: ProjectTemplate = {
  id: "1",
  name: "E-commerce Website Development",
  description:
    "Complete e-commerce platform with payment integration, inventory management, and admin dashboard. This template includes all phases from discovery to deployment, with detailed tasks, timelines, and deliverables for a successful e-commerce project.",
  category: "Web Development",
  industry: "E-commerce",
  duration: "12-16 weeks",
  teamSize: "4-6 people",
  complexity: "advanced",
  tags: ["React", "Node.js", "Payment Gateway", "Database", "API", "Responsive Design", "SEO"],
  phases: [
    {
      id: "p1",
      name: "Discovery & Planning",
      description: "Requirements gathering, stakeholder interviews, and project planning",
      duration: 2,
      order: 1,
    },
    {
      id: "p2",
      name: "Design & Prototyping",
      description: "UI/UX design, wireframes, and interactive prototypes",
      duration: 3,
      order: 2,
    },
    {
      id: "p3",
      name: "Frontend Development",
      description: "User interface implementation with React",
      duration: 4,
      order: 3,
    },
    {
      id: "p4",
      name: "Backend Development",
      description: "Server-side logic, API development, and database design",
      duration: 4,
      order: 4,
    },
    {
      id: "p5",
      name: "Integration & Testing",
      description: "System integration, payment gateway setup, and quality assurance",
      duration: 2,
      order: 5,
    },
    {
      id: "p6",
      name: "Deployment & Launch",
      description: "Production deployment, performance optimization, and go-live",
      duration: 1,
      order: 6,
    },
  ],
  tasks: [
    {
      id: "t1",
      name: "Stakeholder interviews",
      description: "Conduct interviews with key stakeholders to understand business requirements",
      phaseId: "p1",
      estimatedHours: 16,
      priority: "high",
      dependencies: [],
      assigneeRole: "Project Manager",
      order: 1,
    },
    {
      id: "t2",
      name: "Requirements documentation",
      description: "Document functional and technical requirements",
      phaseId: "p1",
      estimatedHours: 24,
      priority: "high",
      dependencies: ["t1"],
      assigneeRole: "Business Analyst",
      order: 2,
    },
    {
      id: "t3",
      name: "Technical architecture",
      description: "Design system architecture and technology stack",
      phaseId: "p1",
      estimatedHours: 20,
      priority: "high",
      dependencies: ["t2"],
      assigneeRole: "Technical Lead",
      order: 3,
    },
    {
      id: "t4",
      name: "Wireframe creation",
      description: "Create wireframes for all major pages and user flows",
      phaseId: "p2",
      estimatedHours: 40,
      priority: "high",
      dependencies: ["t2"],
      assigneeRole: "UX Designer",
      order: 4,
    },
    {
      id: "t5",
      name: "UI design",
      description: "Design visual interface, style guide, and design system",
      phaseId: "p2",
      estimatedHours: 60,
      priority: "high",
      dependencies: ["t4"],
      assigneeRole: "UI Designer",
      order: 5,
    },
    {
      id: "t6",
      name: "Prototype development",
      description: "Create interactive prototypes for user testing",
      phaseId: "p2",
      estimatedHours: 32,
      priority: "medium",
      dependencies: ["t5"],
      assigneeRole: "Frontend Developer",
      order: 6,
    },
    {
      id: "t7",
      name: "Frontend setup",
      description: "Set up React application with routing and state management",
      phaseId: "p3",
      estimatedHours: 16,
      priority: "high",
      dependencies: ["t3"],
      assigneeRole: "Frontend Developer",
      order: 7,
    },
    {
      id: "t8",
      name: "Product catalog",
      description: "Implement product listing, filtering, and search functionality",
      phaseId: "p3",
      estimatedHours: 48,
      priority: "high",
      dependencies: ["t7"],
      assigneeRole: "Frontend Developer",
      order: 8,
    },
    {
      id: "t9",
      name: "Shopping cart",
      description: "Develop shopping cart and checkout flow",
      phaseId: "p3",
      estimatedHours: 40,
      priority: "high",
      dependencies: ["t8"],
      assigneeRole: "Frontend Developer",
      order: 9,
    },
    {
      id: "t10",
      name: "User authentication",
      description: "Implement user registration, login, and profile management",
      phaseId: "p3",
      estimatedHours: 32,
      priority: "high",
      dependencies: ["t7"],
      assigneeRole: "Frontend Developer",
      order: 10,
    },
  ],
  deliverables: [
    "Requirements Document",
    "Technical Specification",
    "System Architecture Diagram",
    "UI/UX Design Files",
    "Interactive Prototypes",
    "Frontend Application",
    "Backend API",
    "Database Schema",
    "Payment Gateway Integration",
    "Admin Dashboard",
    "Test Documentation",
    "Deployment Guide",
    "User Manual",
    "Training Materials",
  ],
  objectives: [
    "Create a scalable e-commerce platform that can handle high traffic",
    "Implement secure payment processing with multiple payment methods",
    "Develop an intuitive user experience that maximizes conversion rates",
    "Build a comprehensive admin dashboard for inventory and order management",
    "Ensure mobile responsiveness and cross-browser compatibility",
    "Implement SEO best practices for better search engine visibility",
  ],
  requirements: [
    "React 18+ for frontend development",
    "Node.js and Express for backend API",
    "PostgreSQL or MongoDB for database",
    "Stripe or PayPal for payment processing",
    "AWS or similar cloud hosting platform",
    "SSL certificate for secure transactions",
    "CDN for image and asset delivery",
    "Email service for notifications",
  ],
  risks: [
    "Payment gateway integration complexity",
    "Third-party API dependencies",
    "Security vulnerabilities in payment processing",
    "Performance issues with large product catalogs",
    "Browser compatibility challenges",
    "Scope creep during development",
  ],
  successCriteria: [
    "Page load times under 3 seconds",
    "99.9% uptime after launch",
    "Successful payment processing rate above 98%",
    "Mobile conversion rate within 10% of desktop",
    "Zero critical security vulnerabilities",
    "Client approval of all deliverables",
  ],
  estimatedBudget: 75000,
  isPopular: true,
  usageCount: 156,
  rating: 4.8,
  createdBy: "Ali Tarek",
  createdAt: "2024-01-10T00:00:00Z",
  lastUsed: "2024-01-20T00:00:00Z",
  thumbnail: "/placeholder.svg?height=400&width=600",
}

export default function TemplateDetailPage() {
  const params = useParams()
  const router = useRouter()
  const templateId = params.id as string
  const [template] = useState<ProjectTemplate>(mockTemplate)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // In a real app, fetch template data based on templateId
    console.log("Loading template:", templateId)
  }, [templateId])

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleUseTemplate = () => {
    // In a real app, this would navigate to create project with this template
    router.push(`/control-panel/projects/create?template=${templateId}`)
  }

  const tabs = [
    { id: "overview", name: "Overview", icon: FileText },
    { id: "phases", name: "Phases", icon: Calendar },
    { id: "tasks", name: "Tasks", icon: CheckCircle },
    { id: "deliverables", name: "Deliverables", icon: Target },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/control-panel/templates"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{template.name}</h1>
                {template.isPopular && (
                  <div className="flex items-center px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm font-medium">
                    <Star size={14} className="mr-1" />
                    Popular
                  </div>
                )}
              </div>
              <p className="text-blue-100">
                {template.category} • {template.industry}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="flex items-center text-white mb-1">
                <Star size={16} className="mr-1 text-[#fed850]" />
                <span className="font-semibold">{template.rating}</span>
                <span className="text-blue-200 ml-1">({template.usageCount} uses)</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getComplexityColor(template.complexity)}`}>
                {template.complexity}
              </span>
            </div>
            <button
              onClick={handleUseTemplate}
              className="flex items-center px-6 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
            >
              <Briefcase size={18} className="mr-2" />
              Use This Template
            </button>
          </div>
        </div>
      </div>

      {/* Template Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Duration</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{template.duration}</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-[#fed850]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Size</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{template.teamSize}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Est. Budget</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">${template.estimatedBudget.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{template.tasks.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <CheckCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Template Actions */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <p className="text-sm text-gray-600">Get started with this template</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Copy size={16} className="mr-2" />
              Clone Template
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download size={16} className="mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Share2 size={16} className="mr-2" />
              Share
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Edit size={16} className="mr-2" />
              Edit Template
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl  border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-[#003a78] text-[#003a78]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon size={20} className="mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{template.description}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#003a78] text-white rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              {template.objectives && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Objectives</h3>
                  <div className="space-y-3">
                    {template.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start p-4 bg-[#f1f0ec] rounded-lg">
                        <Target size={16} className="text-[#003a78] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {template.requirements && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {template.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                        <CheckCircle size={16} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900 text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Risks & Success Criteria */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {template.risks && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Potential Risks</h3>
                    <div className="space-y-2">
                      {template.risks.map((risk, index) => (
                        <div key={index} className="flex items-start p-3 bg-red-50 rounded-lg">
                          <Circle size={16} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-900 text-sm">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {template.successCriteria && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Criteria</h3>
                    <div className="space-y-2">
                      {template.successCriteria.map((criteria, index) => (
                        <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                          <CheckCircle size={16} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-900 text-sm">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Template Info */}
              <div className="bg-[#f1f0ec] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Template Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Created By</label>
                    <div className="flex items-center">
                      <User size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-900">{template.createdBy}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
                    <span className="text-gray-900">{new Date(template.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Used</label>
                    <span className="text-gray-900">{new Date(template.lastUsed).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Usage Count</label>
                    <span className="text-gray-900">{template.usageCount} times</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phases Tab */}
          {activeTab === "phases" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Phases</h3>
                <div className="text-sm text-gray-600">
                  {template.phases.length} phases • {template.phases.reduce((sum, phase) => sum + phase.duration, 0)}{" "}
                  weeks total
                </div>
              </div>

              <div className="space-y-4">
                {template.phases.map((phase, index) => (
                  <div key={phase.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-[#003a78] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.name}</h4>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {phase.duration} weeks
                            </div>
                            <div className="flex items-center">
                              <CheckCircle size={14} className="mr-1" />
                              {template.tasks.filter((task) => task.phaseId === phase.id).length} tasks
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">Phase {phase.order}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === "tasks" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Template Tasks</h3>
                <div className="text-sm text-gray-600">
                  {template.tasks.length} tasks • {template.tasks.reduce((sum, task) => sum + task.estimatedHours, 0)}{" "}
                  hours total
                </div>
              </div>

              {template.phases.map((phase) => {
                const phaseTasks = template.tasks.filter((task) => task.phaseId === phase.id)
                if (phaseTasks.length === 0) return null

                return (
                  <div key={phase.id} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#003a78] text-white rounded-full flex items-center justify-center text-xs font-semibold">
                        {phase.order}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{phase.name}</h4>
                      <span className="text-sm text-gray-500">({phaseTasks.length} tasks)</span>
                    </div>

                    <div className="space-y-3 ml-9">
                      {phaseTasks.map((task) => (
                        <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-900 mb-2">{task.name}</h5>
                              <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  {task.estimatedHours}h
                                </div>
                                <div className="flex items-center">
                                  <User size={14} className="mr-1" />
                                  {task.assigneeRole}
                                </div>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                                >
                                  {task.priority}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Deliverables Tab */}
          {activeTab === "deliverables" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Deliverables</h3>
                <div className="text-sm text-gray-600">{template.deliverables.length} deliverables</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {template.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center p-4 bg-[#f1f0ec] rounded-lg">
                    <FileText size={20} className="text-[#003a78] mr-3 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{deliverable}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">About Deliverables</h4>
                <p className="text-gray-700">
                  These deliverables represent the key outputs and artifacts that will be produced during the project.
                  Each deliverable has specific acceptance criteria and will be reviewed and approved by stakeholders
                  before the project moves to the next phase.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
