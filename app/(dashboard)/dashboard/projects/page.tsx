"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, Edit, Trash2, Eye, Calendar, Clock, Users, DollarSign, AlertCircle } from "lucide-react"
import DataTable, { Column } from "@/components/datatable"
import Select from "@/components/ui/select"

interface Project {
  id: string
  name: string
  description: string
  client: string
  status: "planning" | "in-progress" | "review" | "completed" | "on-hold" | "cancelled"
  priority: "low" | "medium" | "high" | "urgent"
  startDate: string
  endDate: string
  budget: number
  spent: number
  progress: number
  teamMembers: string[]
  tags: string[]
  lastActivity: string
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform Redesign",
    description: "Complete redesign of the e-commerce platform with modern UI/UX and improved performance.",
    client: "TechCorp Inc.",
    status: "in-progress",
    priority: "high",
    startDate: "2024-01-15T00:00:00Z",
    endDate: "2024-03-15T00:00:00Z",
    budget: 25000,
    spent: 15000,
    progress: 65,
    teamMembers: ["John Doe", "Jane Smith", "Mike Johnson"],
    tags: ["React", "E-commerce", "UI/UX"],
    lastActivity: "2024-01-20T14:30:00Z",
  },
  {
    id: "2",
    name: "Mobile Banking App",
    description: "Native mobile application for banking services with biometric authentication.",
    client: "SecureBank",
    status: "review",
    priority: "urgent",
    startDate: "2024-01-01T00:00:00Z",
    endDate: "2024-02-28T00:00:00Z",
    budget: 45000,
    spent: 42000,
    progress: 95,
    teamMembers: ["Sarah Wilson", "David Brown", "Lisa Chen"],
    tags: ["React Native", "Banking", "Security"],
    lastActivity: "2024-01-19T16:45:00Z",
  },
  {
    id: "3",
    name: "Corporate Website",
    description: "Modern corporate website with CMS integration and SEO optimization.",
    client: "Global Solutions Ltd.",
    status: "planning",
    priority: "medium",
    startDate: "2024-02-01T00:00:00Z",
    endDate: "2024-04-01T00:00:00Z",
    budget: 15000,
    spent: 2000,
    progress: 15,
    teamMembers: ["Alex Turner", "Emma Davis"],
    tags: ["Next.js", "CMS", "SEO"],
    lastActivity: "2024-01-18T10:20:00Z",
  },
  {
    id: "4",
    name: "Inventory Management System",
    description: "Custom inventory management system with real-time tracking and analytics.",
    client: "RetailMax",
    status: "completed",
    priority: "medium",
    startDate: "2023-11-01T00:00:00Z",
    endDate: "2024-01-10T00:00:00Z",
    budget: 35000,
    spent: 33000,
    progress: 100,
    teamMembers: ["Tom Wilson", "Kate Johnson", "Ryan Lee"],
    tags: ["Node.js", "Analytics", "Real-time"],
    lastActivity: "2024-01-10T17:00:00Z",
  },
  {
    id: "5",
    name: "Learning Management Platform",
    description: "Educational platform with video streaming, quizzes, and progress tracking.",
    client: "EduTech Academy",
    status: "on-hold",
    priority: "low",
    startDate: "2024-01-20T00:00:00Z",
    endDate: "2024-05-20T00:00:00Z",
    budget: 55000,
    spent: 8000,
    progress: 20,
    teamMembers: ["Chris Martin", "Amy Zhang"],
    tags: ["React", "Video", "Education"],
    lastActivity: "2024-01-16T09:15:00Z",
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesPriority = priorityFilter === "all" || project.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "planning":
        return "bg-blue-100 text-blue-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "review":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "on-hold":
        return "bg-gray-100 text-gray-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
    }
  }

  const getPriorityColor = (priority: Project["priority"]) => {
    switch (priority) {
      case "low":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-orange-100 text-orange-800"
      case "urgent":
        return "bg-red-100 text-red-800"
    }
  }

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId))
  }

  const columns: Column<Project>[] = [
    {
      key: "name",
      title: "Project",
      sortable: true,
      width: "30%",
      render: (_, project) => (
        <div className="max-w-md flex-1">
          <h3 className="font-semibold text-gray-900 truncate hover:text-[#003a78] cursor-pointer">{project.name}</h3>
          <p className="text-sm text-gray-600 truncate mt-1">{project.description}</p>
          <p className="text-sm text-[#003a78] font-medium mt-1">{project.client}</p>
          <div className="flex items-center mt-2 space-x-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[#003a78] text-white text-xs rounded-full">
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && <span className="text-xs text-gray-500">+{project.tags.length - 2}</span>}
          </div>
        </div>
      ),
    },
    {
      key: "status",
      title: "Status",
      sortable: true,
      width: "12%",
      render: (_, project) => (
        <div className="space-y-2">
          <span className={`px-3 py-1 mb-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {project.status.replace("-", "")}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-[#003a78] h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-600">{project.progress}% complete</div>
        </div>
      ),
    },
    {
      key: "priority",
      title: "Priority",
      sortable: true,
      width: "10%",
      render: (_, project) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(project.priority)}`}>
          {project.priority}
        </span>
      ),
    },
    {
      key: "timeline",
      title: "Timeline",
      sortable: true,
      width: "15%",
      render: (_, project) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-900">
            <Calendar size={14} className="mr-1" />
            {new Date(project.startDate).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <AlertCircle size={14} className="mr-1" />
            {new Date(project.endDate).toLocaleDateString()}
          </div>
          <div className="text-xs text-gray-500">
            {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
          </div>
        </div>
      ),
    },
    {
      key: "budget",
      title: "Budget",
      sortable: true,
      width: "12%",
      render: (_, project) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-900">
            <DollarSign size={14} className="mr-1" />${project.budget.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">${project.spent.toLocaleString()} spent</div>
          <div className="text-xs text-gray-500">{Math.round((project.spent / project.budget) * 100)}% used</div>
        </div>
      ),
    },
    {
      key: "team",
      title: "Team",
      width: "10%",
      render: (_, project) => (
        <div className="flex items-center">
          <Users size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-900">{project.teamMembers.length}</span>
        </div>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      width: "11%",
      render: (_, project) => (
        <div className="flex items-center space-x-1">
          <Link
            href={`/control-panel/projects/manage/${project.id}`}
            className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
            title="Manage"
          >
            <Edit size={16} />
          </Link>
          <button
            onClick={() => window.open(`/projects/${project.id}`, "_blank")}
            className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
            title="View"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleDeleteProject(project.id)
            }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ]

  const emptyState = (
    <div className="p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Edit size={32} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
      <p className="text-gray-600 mb-6">
        {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
          ? "Try adjusting your search or filters"
          : "Get started by creating your first project"}
      </p>
      <Link
        href="/control-panel/projects/create"
        className="inline-flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
      >
        <Plus size={18} className="mr-2" />
        Create Project
      </Link>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-blue-100">Manage your client projects and track progress</p>
          </div>
          <Link
            href="/control-panel/projects/create"
            className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-medium"
          >
            <Plus size={18} className="mr-2" />
            New Project
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{projects.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <Edit size={24} className="text-[#fed850]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {projects.filter((p) => p.status === "in-progress").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {projects.filter((p) => p.status === "completed").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Eye size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                ${projects.reduce((sum, project) => sum + project.budget, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Toolbar */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e)}
                options={[
                  { value: "all", label: "All Status" },
                  { value: "planning", label: "Planning" },
                  { value: "in-progress", label: "In Progress" },
                  { value: "review", label: "Review" },
                  { value: "completed", label: "Completed" },
                  { value: "on-hold", label: "On Hold" },
                  { value: "cancelled", label: "Cancelled" },
                ]}
              />
            </div>

            <Select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e)}
                options={[
                  { value: "all", label: "All Priority" },
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                  { value: "urgent", label: "Urgent" },
                ]}
              />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={filteredProjects}
        columns={columns}
        pageSize={2}
        emptyState={emptyState}
        onRowClick={(project) => {
          window.location.href = `/control-panel/projects/manage/${project.id}`
        }}
      />
    </div>
  )
}
