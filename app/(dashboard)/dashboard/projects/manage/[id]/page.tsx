"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Edit,
  Plus,
  Calendar,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  Circle,
  FileText,
  MessageSquare,
  Upload,
  Download,
  Trash2,
  User,
} from "lucide-react"
import GanttChart, { GanttTask } from "../../../gantt-chart/grantt"


interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed"
  assignee: string
  dueDate: string
  priority: "low" | "medium" | "high"
}

interface ProjectFile {
  id: string
  name: string
  size: string
  type: string
  uploadedBy: string
  uploadedAt: string
  url: string
}

interface ProjectNote {
  id: string
  content: string
  author: string
  createdAt: string
}

interface Project {
  id: string
  name: string
  description: string
  client: string
  clientEmail: string
  clientPhone: string
  status: "planning" | "in-progress" | "review" | "completed" | "on-hold" | "cancelled"
  priority: "low" | "medium" | "high" | "urgent"
  startDate: string
  endDate: string
  budget: number
  spent: number
  progress: number
  teamMembers: string[]
  tags: string[]
  objectives: string[]
  deliverables: string[]
  tasks: Task[]
  files: ProjectFile[]
  notes: ProjectNote[]
}

const mockProject: Project = {
  id: "1",
  name: "E-commerce Platform Redesign",
  description: "Complete redesign of the e-commerce platform with modern UI/UX and improved performance.",
  client: "TechCorp Inc.",
  clientEmail: "contact@techcorp.com",
  clientPhone: "+1 (555) 123-4567",
  status: "in-progress",
  priority: "high",
  startDate: "2024-01-15T00:00:00Z",
  endDate: "2024-03-15T00:00:00Z",
  budget: 25000,
  spent: 15000,
  progress: 65,
  teamMembers: ["John Doe", "Jane Smith", "Mike Johnson"],
  tags: ["React", "E-commerce", "UI/UX"],
  objectives: [
    "Improve user experience and conversion rates",
    "Implement modern design system",
    "Optimize performance and loading times",
    "Add mobile responsiveness",
  ],
  deliverables: [
    "Wireframes and mockups",
    "Design system documentation",
    "Frontend implementation",
    "Testing and QA",
    "Deployment and launch",
  ],
  tasks: [
    {
      id: "1",
      title: "Create wireframes for main pages",
      description: "Design wireframes for homepage, product pages, and checkout flow",
      status: "completed",
      assignee: "Jane Smith",
      dueDate: "2024-01-20T00:00:00Z",
      priority: "high",
    },
    {
      id: "2",
      title: "Implement product catalog",
      description: "Build the product listing and filtering functionality",
      status: "in-progress",
      assignee: "John Doe",
      dueDate: "2024-01-25T00:00:00Z",
      priority: "high",
    },
    {
      id: "3",
      title: "Design checkout process",
      description: "Create user-friendly checkout flow with payment integration",
      status: "todo",
      assignee: "Mike Johnson",
      dueDate: "2024-01-30T00:00:00Z",
      priority: "medium",
    },
  ],
  files: [
    {
      id: "1",
      name: "Design_Mockups_v2.fig",
      size: "15.2 MB",
      type: "figma",
      uploadedBy: "Jane Smith",
      uploadedAt: "2024-01-18T14:30:00Z",
      url: "#",
    },
    {
      id: "2",
      name: "Requirements_Document.pdf",
      size: "2.1 MB",
      type: "pdf",
      uploadedBy: "Ali Tarek",
      uploadedAt: "2024-01-16T09:15:00Z",
      url: "#",
    },
  ],
  notes: [
    {
      id: "1",
      content: "Client requested additional payment gateway integration for international customers.",
      author: "Ali Tarek",
      createdAt: "2024-01-19T16:45:00Z",
    },
    {
      id: "2",
      content: "Performance optimization completed. Page load time improved by 40%.",
      author: "John Doe",
      createdAt: "2024-01-18T11:20:00Z",
    },
  ],
}

const convertToGanttTasks = (tasks: Task[]): GanttTask[] => {
  return tasks.map((task, index) => ({
    id: task.id,
    name: task.title,
    startDate: task.dueDate
      ? new Date(new Date(task.dueDate).getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
      : new Date().toISOString(),
    endDate: task.dueDate,
    progress: task.status === "completed" ? 100 : task.status === "in-progress" ? 50 : 0,
    assignee: task.assignee,
    priority: task.priority,
    dependencies: index > 0 ? [tasks[index - 1].id] : [],
    color: ["#003a78", "#fed850", "#10b981", "#f59e0b", "#ef4444"][index % 5],
    milestone: false,
  }))
}

export default function ManageProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const [project, setProject] = useState<Project>(mockProject)
  const [activeTab, setActiveTab] = useState<"overview" | "tasks" | "files" | "notes" | "add-task" | "timeline">("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [newTask, setNewTask] = useState({ title: "", description: "", assignee: "", dueDate: "", priority: "medium" })
  const [newNote, setNewNote] = useState("")
  const [ganttTasks, setGanttTasks] = useState<GanttTask[]>(convertToGanttTasks(project.tasks))

  useEffect(() => {
    // In a real app, fetch project data based on projectId
    console.log("Loading project:", projectId)
  }, [projectId])

  const getStatusColor = (status: string) => {
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
        return "bg-orange-100 text-orange-800"
      case "urgent":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        status: "todo",
        assignee: newTask.assignee,
        dueDate: newTask.dueDate,
        priority: newTask.priority as "low" | "medium" | "high",
      }
      setProject((prev) => ({
        ...prev,
        tasks: [...prev.tasks, task],
      }))
      setNewTask({ title: "", description: "", assignee: "", dueDate: "", priority: "medium" })
    }
  }

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note: ProjectNote = {
        id: Date.now().toString(),
        content: newNote,
        author: "Ali Tarek",
        createdAt: new Date().toISOString(),
      }
      setProject((prev) => ({
        ...prev,
        notes: [note, ...prev.notes],
      }))
      setNewNote("")
    }
  }

  const toggleTaskStatus = (taskId: string) => {
    setProject((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "todo" : task.status === "todo" ? "in-progress" : "completed",
            }
          : task,
      ),
    }))
  }

  const tabs = [
    { id: "overview", name: "Overview", icon: FileText },
    { id: "tasks", name: "Tasks", icon: CheckCircle },
    { id: "timeline", name: "Timeline", icon: Calendar },
    { id: "files", name: "Files", icon: Upload },
    { id: "notes", name: "Notes", icon: MessageSquare },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/control-panel/projects"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
              <p className="text-blue-100">{project.client}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {project.status.replace("-", " ")}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getPriorityColor(project.priority)}`}>
              {project.priority} priority
            </span>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-medium"
            >
              <Edit size={18} className="mr-2" />
              {isEditing ? "Save Changes" : "Edit Project"}
            </button>
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{project.progress}%</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-[#fed850]" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-[#003a78] h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Budget Used</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">${project.spent.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign size={24} className="text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">of ${project.budget.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Size</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{project.teamMembers.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">members</p>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Days Left</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Calendar size={24} className="text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">until deadline</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl  border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "overview" | "tasks" | "files" | "notes")}
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
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      {isEditing ? (
                        <textarea
                          value={project.description}
                          onChange={(e) => setProject((prev) => ({ ...prev, description: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                          rows={3}
                        />
                      ) : (
                        <p className="text-gray-900">{project.description}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <p className="text-gray-900">{new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <p className="text-gray-900">{new Date(project.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                      <p className="text-gray-900">{project.client}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">{project.clientEmail}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">{project.clientPhone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Objectives</h3>
                <div className="space-y-2">
                  {project.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center p-3 bg-[#f1f0ec] rounded-lg">
                      <CheckCircle size={16} className="text-green-600 mr-3" />
                      <span className="text-gray-900">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Deliverables</h3>
                <div className="space-y-2">
                  {project.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center p-3 bg-[#f1f0ec] rounded-lg">
                      <Circle size={16} className="text-gray-400 mr-3" />
                      <span className="text-gray-900">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="flex flex-wrap gap-3">
                  {project.teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg">
                      <User size={16} className="mr-2" />
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === "tasks" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Tasks</h3>
                <button
                  onClick={() => setActiveTab("add-task")}
                  className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  <Plus size={16} className="mr-2" />
                  Add Task
                </button>
              </div>

              {activeTab === "tasks" && (
                <div className="bg-[#f1f0ec] rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Task</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                      <input
                        type="text"
                        value={newTask.title}
                        onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter task title..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={newTask.description}
                        onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Task description..."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Assignee</label>
                      <select
                        value={newTask.assignee}
                        onChange={(e) => setNewTask((prev) => ({ ...prev, assignee: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      >
                        <option value="">Select assignee</option>
                        {project.teamMembers.map((member) => (
                          <option key={member} value={member}>
                            {member}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                      <input
                        type="date"
                        value={newTask.dueDate}
                        onChange={(e) => setNewTask((prev) => ({ ...prev, dueDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                      <select
                        value={newTask.priority}
                        onChange={(e) => setNewTask((prev) => ({ ...prev, priority: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <button
                      onClick={handleAddTask}
                      className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                    >
                      Add Task
                    </button>
                    <button
                      onClick={() => setActiveTab("tasks")}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {project.tasks.map((task) => (
                  <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <button
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`mt-1 ${
                            task.status === "completed" ? "text-green-600" : "text-gray-400 hover:text-green-600"
                          }`}
                        >
                          {task.status === "completed" ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </button>
                        <div className="flex-1">
                          <h4
                            className={`font-medium ${
                              task.status === "completed" ? "text-gray-500 line-through" : "text-gray-900"
                            }`}
                          >
                            {task.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              {task.assignee}
                            </div>
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Timeline & Dependencies</h3>
                <div className="text-sm text-gray-600">
                  Drag tasks to reschedule • Click to view details • Toggle dependencies
                </div>
              </div>

              <GanttChart
                tasks={ganttTasks}
                onTaskUpdate={(updatedTask) => {
                  setGanttTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
                }}
                onTaskAdd={(newTask) => {
                  const task: GanttTask = {
                    ...newTask,
                    id: Date.now().toString(),
                  }
                  setGanttTasks((prev) => [...prev, task])
                }}
                onTaskDelete={(taskId) => {
                  setGanttTasks((prev) => prev.filter((task) => task.id !== taskId))
                }}
                onDependencyAdd={(fromTaskId, toTaskId) => {
                  setGanttTasks((prev) =>
                    prev.map((task) =>
                      task.id === toTaskId ? { ...task, dependencies: [...task.dependencies, fromTaskId] } : task,
                    ),
                  )
                }}
                onDependencyRemove={(fromTaskId, toTaskId) => {
                  setGanttTasks((prev) =>
                    prev.map((task) =>
                      task.id === toTaskId
                        ? { ...task, dependencies: task.dependencies.filter((dep) => dep !== fromTaskId) }
                        : task,
                    ),
                  )
                }}
              />

              {/* Timeline Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#f1f0ec] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#003a78]">
                    {ganttTasks.filter((task) => task.progress === 100).length}
                  </div>
                  <div className="text-sm text-gray-600">Completed Tasks</div>
                </div>
                <div className="bg-[#f1f0ec] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#003a78]">
                    {ganttTasks.filter((task) => task.progress > 0 && task.progress < 100).length}
                  </div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="bg-[#f1f0ec] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#003a78]">
                    {ganttTasks.filter((task) => task.milestone).length}
                  </div>
                  <div className="text-sm text-gray-600">Milestones</div>
                </div>
                <div className="bg-[#f1f0ec] rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#003a78]">
                    {ganttTasks.reduce((sum, task) => sum + task.dependencies.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Dependencies</div>
                </div>
              </div>
            </div>
          )}

          {/* Files Tab */}
          {activeTab === "files" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Files</h3>
                <button className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors">
                  <Upload size={16} className="mr-2" />
                  Upload File
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.files.map((file) => (
                  <div key={file.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <FileText size={24} className="text-[#003a78]" />
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <h4 className="font-medium text-gray-900 truncate">{file.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{file.size}</p>
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                      <span>{file.uploadedBy}</span>
                      <span>{new Date(file.uploadedAt).toLocaleDateString()}</span>
                    </div>
                    <button className="w-full mt-3 flex items-center justify-center px-3 py-2 bg-[#f1f0ec] text-[#003a78] rounded-lg hover:bg-gray-200 transition-colors">
                      <Download size={16} className="mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Tab */}
          {activeTab === "notes" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Notes</h3>
                <div className="bg-[#f1f0ec] rounded-lg p-4">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a note about the project..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  />
                  <button
                    onClick={handleAddNote}
                    className="mt-3 px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                  >
                    Add Note
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {project.notes.map((note) => (
                  <div key={note.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-gray-900">{note.content}</p>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            {note.author}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {new Date(note.createdAt).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
