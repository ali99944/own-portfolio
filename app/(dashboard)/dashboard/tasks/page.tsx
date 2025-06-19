/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Plus, Search, MoreHorizontal, List, Columns, CalendarIcon, BarChart3, Settings, Zap, CheckSquare, Clock, Users, AlertCircle } from 'lucide-react'
import TaskBulkOperations from "@/components/tasks/task-bulk-operations"
import TaskCalendarView from "@/components/tasks/task-calendar-view"
import TaskCreateModal from "@/components/tasks/task-create-modal"
import TaskGanttView from "@/components/tasks/task-gantt-view"
import TaskKanbanView from "@/components/tasks/task-kanban-view"
import TaskListView from "@/components/tasks/task-list-view"
import { Task, TaskTemplate, CustomField } from "@/src/types/task_management"
import TaskSmartSuggestions from "@/components/tasks/task-smart-suggestions"


// Mock data
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design System Implementation",
    description: "Create comprehensive design system with components and guidelines",
    status: "in-progress",
    priority: "high",
    assigneeId: "user1",
    assigneeName: "John Doe",
    projectId: "proj1",
    projectName: "E-commerce Platform",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
    dueDate: "2024-02-15T23:59:59Z",
    startDate: "2024-01-15T09:00:00Z",
    estimatedHours: 40,
    actualHours: 25,
    storyPoints: 8,
    complexity: "high",
    tags: ["design", "frontend", "ui"],
    parentId: null,
    subtasks: ["2", "3"],
    dependencies: [],
    blockedBy: [],
    customFields: {
      "client-approval": "pending",
      "design-review": "completed"
    },
    approvalStatus: "pending",
    approvalWorkflow: {
      currentStage: 1,
      stages: [
        { id: "1", name: "Design Review", approver: "Jane Smith", status: "approved", completedAt: "2024-01-18T10:00:00Z" },
        { id: "2", name: "Client Approval", approver: "Client Team", status: "pending", completedAt: null },
        { id: "3", name: "Final Sign-off", approver: "Project Manager", status: "pending", completedAt: null }
      ]
    },
    attachments: [],
    comments: [],
    timeTracking: {
      totalTime: 25 * 3600,
      sessions: []
    }
  },
  {
    id: "2",
    title: "Component Library Setup",
    description: "Set up Storybook and create base components",
    status: "completed",
    priority: "medium",
    assigneeId: "user2",
    assigneeName: "Jane Smith",
    projectId: "proj1",
    projectName: "E-commerce Platform",
    createdAt: "2024-01-16T09:00:00Z",
    updatedAt: "2024-01-22T16:00:00Z",
    dueDate: "2024-01-25T23:59:59Z",
    startDate: "2024-01-16T09:00:00Z",
    estimatedHours: 16,
    actualHours: 18,
    storyPoints: 5,
    complexity: "medium",
    tags: ["frontend", "components"],
    parentId: "1",
    subtasks: [],
    dependencies: [],
    blockedBy: [],
    customFields: {},
    approvalStatus: "approved",
    approvalWorkflow: null,
    attachments: [],
    comments: [],
    timeTracking: {
      totalTime: 18 * 3600,
      sessions: []
    }
  },
  {
    id: "3",
    title: "Design Tokens Definition",
    description: "Define color palette, typography, and spacing tokens",
    status: "todo",
    priority: "high",
    assigneeId: "user1",
    assigneeName: "John Doe",
    projectId: "proj1",
    projectName: "E-commerce Platform",
    createdAt: "2024-01-16T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z",
    dueDate: "2024-02-01T23:59:59Z",
    startDate: "2024-01-25T09:00:00Z",
    estimatedHours: 12,
    actualHours: 0,
    storyPoints: 3,
    complexity: "low",
    tags: ["design", "tokens"],
    parentId: "1",
    subtasks: [],
    dependencies: ["2"],
    blockedBy: [],
    customFields: {},
    approvalStatus: "not-required",
    approvalWorkflow: null,
    attachments: [],
    comments: [],
    timeTracking: {
      totalTime: 0,
      sessions: []
    }
  }
]

const mockTemplates: TaskTemplate[] = [
  {
    id: "template1",
    name: "Frontend Feature Development",
    description: "Standard template for developing frontend features",
    category: "Development",
    tasks: [
      {
        title: "Requirements Analysis",
        description: "Analyze and document feature requirements",
        estimatedHours: 4,
        storyPoints: 2,
        priority: "high",
        tags: ["analysis", "requirements"]
      },
      {
        title: "UI/UX Design",
        description: "Create mockups and user interface design",
        estimatedHours: 8,
        storyPoints: 3,
        priority: "high",
        tags: ["design", "ui"]
      },
      {
        title: "Implementation",
        description: "Code the feature according to specifications",
        estimatedHours: 16,
        storyPoints: 5,
        priority: "high",
        tags: ["development", "frontend"]
      },
      {
        title: "Testing",
        description: "Write and execute tests for the feature",
        estimatedHours: 6,
        storyPoints: 2,
        priority: "medium",
        tags: ["testing", "qa"]
      }
    ],
    // customFields: [
    //   { name: "feature-flag", type: "boolean", required: false },
    //   { name: "browser-support", type: "multiselect", options: ["Chrome", "Firefox", "Safari", "Edge"] }
    // ],
    customFields: [],
    createdBy: "user1",
    createdAt: "2024-01-10T00:00:00Z",
    usageCount: 15
  }
]

const mockCustomFields: CustomField[] = [
  {
    id: "field1",
    name: "client-approval",
    label: "Client Approval",
    type: "select",
    options: ["pending", "approved", "rejected"],
    required: false,
    projectId: "proj1"
  },
  {
    id: "field2",
    name: "design-review",
    label: "Design Review",
    type: "select",
    options: ["pending", "completed", "needs-revision"],
    required: true,
    projectId: "proj1"
  }
]

type ViewType = "list" | "kanban" | "calendar" | "gantt"

export default function TaskManagementPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  const [templates] = useState<TaskTemplate[]>(mockTemplates)
  const [customFields] = useState<CustomField[]>(mockCustomFields)
  const [currentView, setCurrentView] = useState<ViewType>("list")
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterPriority, setFilterPriority] = useState<string>("all")
  const [filterAssignee] = useState<string>("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showBulkOperations, setShowBulkOperations] = useState(false)
  const [showSmartSuggestions, setShowSmartSuggestions] = useState(false)

  // Filter tasks based on search and filters
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || task.status === filterStatus
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority
    const matchesAssignee = filterAssignee === "all" || task.assigneeId === filterAssignee
    
    return matchesSearch && matchesStatus && matchesPriority && matchesAssignee
  })

  // Get task statistics
  const taskStats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === "todo").length,
    inProgress: tasks.filter(t => t.status === "in-progress").length,
    completed: tasks.filter(t => t.status === "completed").length,
    overdue: tasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== "completed").length
  }

  const handleTaskCreate = (taskData: Partial<Task>) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskData.title || "",
      description: taskData.description || "",
      status: taskData.status || "todo",
      priority: taskData.priority || "medium",
      assigneeId: taskData.assigneeId || "",
      assigneeName: taskData.assigneeName || "",
      projectId: taskData.projectId || "",
      projectName: taskData.projectName || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: taskData.dueDate || "",
      startDate: taskData.startDate || "",
      estimatedHours: taskData.estimatedHours || 0,
      actualHours: 0,
      storyPoints: taskData.storyPoints || 0,
      complexity: taskData.complexity || "medium",
      tags: taskData.tags || [],
      parentId: taskData.parentId || null,
      subtasks: [],
      dependencies: taskData.dependencies || [],
      blockedBy: [],
      customFields: taskData.customFields || {},
      approvalStatus: taskData.approvalStatus || "not-required",
      approvalWorkflow: taskData.approvalWorkflow || null,
      attachments: [],
      comments: [],
      timeTracking: {
        totalTime: 0,
        sessions: []
      }
    }
    
    setTasks(prev => [...prev, newTask])
    setShowCreateModal(false)
  }

  const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, ...updates, updatedAt: new Date().toISOString() }
        : task
    ))
  }

  const handleTaskDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
    setSelectedTasks(prev => prev.filter(id => id !== taskId))
  }

  const handleBulkOperation = (operation: string, taskIds: string[], data?: any) => {
    switch (operation) {
      case "update-status":
        setTasks(prev => prev.map(task => 
          taskIds.includes(task.id) 
            ? { ...task, status: data.status, updatedAt: new Date().toISOString() }
            : task
        ))
        break
      case "update-assignee":
        setTasks(prev => prev.map(task => 
          taskIds.includes(task.id) 
            ? { ...task, assigneeId: data.assigneeId, assigneeName: data.assigneeName, updatedAt: new Date().toISOString() }
            : task
        ))
        break
      case "update-priority":
        setTasks(prev => prev.map(task => 
          taskIds.includes(task.id) 
            ? { ...task, priority: data.priority, updatedAt: new Date().toISOString() }
            : task
        ))
        break
      case "delete":
        setTasks(prev => prev.filter(task => !taskIds.includes(task.id)))
        break
    }
    setSelectedTasks([])
    setShowBulkOperations(false)
  }

  const views = [
    { id: "list", name: "List", icon: List },
    { id: "kanban", name: "Kanban", icon: Columns },
    { id: "calendar", name: "Calendar", icon: CalendarIcon },
    { id: "gantt", name: "Gantt", icon: BarChart3 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Task Management</h1>
            <p className="text-blue-100">Comprehensive task tracking and project management</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowSmartSuggestions(true)}
              className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Zap size={18} className="mr-2" />
              AI Suggestions
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
            >
              <Plus size={18} className="mr-2" />
              New Task
            </button>
          </div>
        </div>
      </div>

      {/* Task Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tasks</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{taskStats.total}</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <CheckSquare size={24} className="text-[#fed850]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">To Do</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{taskStats.todo}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">{taskStats.inProgress}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{taskStats.completed}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <CheckSquare size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{taskStats.overdue}</p>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <AlertCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent w-64"
              />
            </div>

            {/* Filters */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>

            {selectedTasks.length > 0 && (
              <button
                onClick={() => setShowBulkOperations(true)}
                className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
              >
                <Settings size={16} className="mr-2" />
                Bulk Actions ({selectedTasks.length})
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {/* View Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setCurrentView(view.id as ViewType)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === view.id
                      ? "bg-white text-[#003a78] "
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <view.icon size={16} className="mr-2" />
                  {view.name}
                </button>
              ))}
            </div>

            {/* More Actions */}
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Task Views */}
        <div className="min-h-[600px]">
          {currentView === "list" && (
            <TaskListView
              tasks={filteredTasks}
              selectedTasks={selectedTasks}
              onTaskSelect={setSelectedTasks}
              onTaskUpdate={handleTaskUpdate}
              onTaskDelete={handleTaskDelete}
              customFields={customFields}
            />
          )}
          {currentView === "kanban" && (
            <TaskKanbanView
              tasks={filteredTasks}
              onTaskUpdate={handleTaskUpdate}
              onTaskDelete={handleTaskDelete}
            />
          )}
          {currentView === "calendar" && (
            <TaskCalendarView
              tasks={filteredTasks}
              onTaskUpdate={handleTaskUpdate}
            />
          )}
          {currentView === "gantt" && (
            <TaskGanttView
              tasks={filteredTasks}
              onTaskUpdate={handleTaskUpdate}
            />
          )}
        </div>
      </div>

      {/* Modals */}
      {showCreateModal && (
        <TaskCreateModal
          templates={templates}
          customFields={customFields}
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleTaskCreate}
        />
      )}

      {showBulkOperations && (
        <TaskBulkOperations
          selectedTasks={selectedTasks}
          tasks={tasks}
          onClose={() => setShowBulkOperations(false)}
          onExecute={handleBulkOperation}
        />
      )}

      {showSmartSuggestions && (
        <TaskSmartSuggestions
          currentTasks={tasks}
          onClose={() => setShowSmartSuggestions(false)}
          onCreateTask={handleTaskCreate}
        />
      )}
    </div>
  )
}
