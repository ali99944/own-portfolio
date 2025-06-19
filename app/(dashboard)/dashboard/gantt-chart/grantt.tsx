/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState, useRef } from "react"
import { Plus, Edit, Trash2, Calendar, Clock, User } from 'lucide-react'

export interface GanttTask {
  id: string
  name: string
  startDate: string
  endDate: string
  progress: number
  assignee: string
  priority: "low" | "medium" | "high" | "urgent"
  dependencies: string[]
  color?: string
  milestone?: boolean
}

interface GanttChartProps {
  tasks: GanttTask[]
  onTaskUpdate?: (task: GanttTask) => void
  onTaskAdd?: (task: Omit<GanttTask, "id">) => void
  onTaskDelete?: (taskId: string) => void
  onDependencyAdd?: (fromTaskId: string, toTaskId: string) => void
  onDependencyRemove?: (fromTaskId: string, toTaskId: string) => void
  className?: string
}

const COLORS = [
  "#003a78", // Primary blue
  "#fed850", // Primary yellow
  "#10b981", // Green
  "#f59e0b", // Orange
  "#ef4444", // Red
  "#8b5cf6", // Purple
  "#06b6d4", // Cyan
  "#f97316", // Orange-600
]

export default function GanttChart({
  tasks,
  onTaskUpdate,
  onTaskAdd,
  onTaskDelete,
  className = "",
}: GanttChartProps) {
  const [viewMode, setViewMode] = useState<"days" | "weeks" | "months">("weeks")
  // const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedTask, setSelectedTask] = useState<string | null>(null)
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [draggedTask, setDraggedTask] = useState<string | null>(null)
  const [resizingTask, setResizingTask] = useState<{ taskId: string; side: "left" | "right" } | null>(null)
  const [showDependencies, setShowDependencies] = useState(true)
  const chartRef = useRef<HTMLDivElement>(null)

  // Calculate date range
  const getDateRange = () => {
    if (tasks.length === 0) {
      const start = new Date()
      const end = new Date()
      end.setMonth(end.getMonth() + 3)
      return { start, end }
    }

    const allDates = tasks.flatMap((task) => [new Date(task.startDate), new Date(task.endDate)])
    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())))
    const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())))

    // Add padding
    minDate.setDate(minDate.getDate() - 7)
    maxDate.setDate(maxDate.getDate() + 7)

    return { start: minDate, end: maxDate }
  }

  const { start: startDate, end: endDate } = getDateRange()

  // Generate time periods based on view mode
  const getTimePeriods = () => {
    const periods = []
    const current = new Date(startDate)

    while (current <= endDate) {
      const periodStart = new Date(current)
      const periodEnd = new Date(current)

      switch (viewMode) {
        case "days":
          periodEnd.setDate(periodEnd.getDate() + 1)
          break
        case "weeks":
          periodEnd.setDate(periodEnd.getDate() + 7)
          break
        case "months":
          periodEnd.setMonth(periodEnd.getMonth() + 1)
          break
      }

      periods.push({
        start: new Date(periodStart),
        end: new Date(periodEnd),
        label: formatPeriodLabel(periodStart),
      })

      current.setTime(periodEnd.getTime())
    }

    return periods
  }

  const formatPeriodLabel = (date: Date) => {
    switch (viewMode) {
      case "days":
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      case "weeks":
        return `Week ${getWeekNumber(date)}`
      case "months":
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    }
  }

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
  }

  const timePeriods = getTimePeriods()
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  const dayWidth = viewMode === "days" ? 40 : viewMode === "weeks" ? 120 : 200

  // Calculate task position and width
  const getTaskPosition = (task: GanttTask) => {
    const taskStart = new Date(task.startDate)
    const taskEnd = new Date(task.endDate)
    const daysFromStart = Math.ceil((taskStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const taskDuration = Math.ceil((taskEnd.getTime() - taskStart.getTime()) / (1000 * 60 * 60 * 24))

    const left = (daysFromStart / totalDays) * (totalDays * (dayWidth / (viewMode === "days" ? 1 : viewMode === "weeks" ? 7 : 30)))
    const width = Math.max(20, (taskDuration / totalDays) * (totalDays * (dayWidth / (viewMode === "days" ? 1 : viewMode === "weeks" ? 7 : 30))))

    return { left, width }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "#ef4444"
      case "high":
        return "#f59e0b"
      case "medium":
        return "#10b981"
      case "low":
        return "#6b7280"
      default:
        return "#003a78"
    }
  }

  // New task form
  const [newTask, setNewTask] = useState({
    name: "",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    assignee: "",
    priority: "medium" as const,
    dependencies: [] as string[],
    milestone: false,
  })

  const handleAddTask = () => {
    if (newTask.name.trim() && onTaskAdd) {
      onTaskAdd({
        ...newTask,
        progress: 0,
        color: COLORS[tasks.length % COLORS.length],
      })
      setNewTask({
        name: "",
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        assignee: "",
        priority: "medium",
        dependencies: [],
        milestone: false,
      })
      setIsAddingTask(false)
    }
  }

  // Drag and drop handlers
  const handleMouseDown = (e: React.MouseEvent, taskId: string, action: "drag" | "resize-left" | "resize-right") => {
    e.preventDefault()
    if (action === "drag") {
      setDraggedTask(taskId)
    } else {
      setResizingTask({ taskId, side: action === "resize-left" ? "left" : "right" })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartRef.current) return

    const rect = chartRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const dayPosition = Math.floor((x / rect.width) * totalDays)

    if (draggedTask && onTaskUpdate) {
      const task = tasks.find((t) => t.id === draggedTask)
      if (task) {
        const taskDuration = Math.ceil((new Date(task.endDate).getTime() - new Date(task.startDate).getTime()) / (1000 * 60 * 60 * 24))
        const newStartDate = new Date(startDate)
        newStartDate.setDate(newStartDate.getDate() + dayPosition)
        const newEndDate = new Date(newStartDate)
        newEndDate.setDate(newEndDate.getDate() + taskDuration)

        onTaskUpdate({
          ...task,
          startDate: newStartDate.toISOString(),
          endDate: newEndDate.toISOString(),
        })
      }
    }

    if (resizingTask && onTaskUpdate) {
      const task = tasks.find((t) => t.id === resizingTask.taskId)
      if (task) {
        const newDate = new Date(startDate)
        newDate.setDate(newDate.getDate() + dayPosition)

        if (resizingTask.side === "left") {
          onTaskUpdate({
            ...task,
            startDate: newDate.toISOString(),
          })
        } else {
          onTaskUpdate({
            ...task,
            endDate: newDate.toISOString(),
          })
        }
      }
    }
  }

  const handleMouseUp = () => {
    setDraggedTask(null)
    setResizingTask(null)
  }

  // Dependency lines
  const renderDependencyLines = () => {
    if (!showDependencies) return null

    return tasks.map((task) =>
      task.dependencies.map((depId) => {
        const depTask = tasks.find((t) => t.id === depId)
        if (!depTask) return null

        const fromPos = getTaskPosition(depTask)
        const toPos = getTaskPosition(task)
        const fromY = tasks.indexOf(depTask) * 60 + 30
        const toY = tasks.indexOf(task) * 60 + 30

        return (
          <svg
            key={`${depId}-${task.id}`}
            className="absolute top-0 left-0 pointer-events-none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>
            <path
              d={`M ${fromPos.left + fromPos.width} ${fromY} L ${toPos.left} ${toY}`}
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        )
      }),
    )
  }

  return (
    <div className={`bg-white rounded-xl border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
            <p className="text-sm text-gray-600">Visual project timeline with dependencies</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("days")}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  viewMode === "days" ? "bg-white text-[#003a78] shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Days
              </button>
              <button
                onClick={() => setViewMode("weeks")}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  viewMode === "weeks" ? "bg-white text-[#003a78] shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Weeks
              </button>
              <button
                onClick={() => setViewMode("months")}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  viewMode === "months" ? "bg-white text-[#003a78] shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Months
              </button>
            </div>
            <button
              onClick={() => setShowDependencies(!showDependencies)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                showDependencies ? "bg-[#003a78] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Dependencies
            </button>
            <button
              onClick={() => setIsAddingTask(true)}
              className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      {isAddingTask && (
        <div className="p-6 bg-[#f1f0ec] border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Task</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Task Name</label>
              <input
                type="text"
                value={newTask.name}
                onChange={(e) => setNewTask((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter task name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={newTask.startDate}
                onChange={(e) => setNewTask((prev) => ({ ...prev, startDate: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={newTask.endDate}
                onChange={(e) => setNewTask((prev) => ({ ...prev, endDate: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask((prev) => ({ ...prev, priority: e.target.value as any }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
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
              onClick={() => setIsAddingTask(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Gantt Chart */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Timeline Header */}
          <div className="flex border-b border-gray-200">
            <div className="w-80 p-4 bg-[#f1f0ec] border-r border-gray-200">
              <h4 className="font-medium text-gray-900">Tasks</h4>
            </div>
            <div className="flex-1 bg-[#f1f0ec]">
              <div className="flex">
                {timePeriods.map((period, index) => (
                  <div
                    key={index}
                    className="border-r border-gray-200 p-2 text-center"
                    style={{ minWidth: `${dayWidth}px` }}
                  >
                    <div className="text-sm font-medium text-gray-900">{period.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Body */}
          <div
            ref={chartRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Task Rows */}
            {tasks.map((task) => {
              const position = getTaskPosition(task)
              const isSelected = selectedTask === task.id

              return (
                <div key={task.id} className="flex border-b border-gray-100 hover:bg-gray-50">
                  {/* Task Info */}
                  <div className="w-80 p-4 border-r border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 truncate">{task.name}</h5>
                        <div className="flex items-center space-x-2 mt-1">
                          {task.assignee && (
                            <div className="flex items-center text-sm text-gray-600">
                              <User size={12} className="mr-1" />
                              {task.assignee}
                            </div>
                          )}
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: getPriorityColor(task.priority) }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => setSelectedTask(isSelected ? null : task.id)}
                          className="p-1 text-gray-400 hover:text-[#003a78]"
                        >
                          <Edit size={14} />
                        </button>
                        {onTaskDelete && (
                          <button
                            onClick={() => onTaskDelete(task.id)}
                            className="p-1 text-gray-400 hover:text-red-600"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex-1 relative" style={{ height: "60px" }}>
                    {/* Task Bar */}
                    <div
                      className={`absolute top-4 h-8 rounded-lg cursor-move transition-all duration-200 ${
                        isSelected ? "ring-2 ring-[#003a78] ring-opacity-50" : ""
                      } ${task.milestone ? "bg-yellow-400" : ""}`}
                      style={{
                        left: `${position.left}px`,
                        width: `${position.width}px`,
                        backgroundColor: task.milestone ? "#fed850" : task.color || getPriorityColor(task.priority),
                      }}
                      onMouseDown={(e) => handleMouseDown(e, task.id, "drag")}
                    >
                      {/* Progress Bar */}
                      <div
                        className="h-full bg-black bg-opacity-20 rounded-lg transition-all duration-300"
                        style={{ width: `${task.progress}%` }}
                      />
                      
                      {/* Task Label */}
                      <div className="absolute inset-0 flex items-center px-2">
                        <span className="text-white text-xs font-medium truncate">
                          {task.milestone ? "◆" : ""} {task.name}
                        </span>
                      </div>

                      {/* Resize Handles */}
                      <div
                        className="absolute left-0 top-0 w-2 h-full cursor-ew-resize opacity-0 hover:opacity-100"
                        onMouseDown={(e) => handleMouseDown(e, task.id, "resize-left")}
                      />
                      <div
                        className="absolute right-0 top-0 w-2 h-full cursor-ew-resize opacity-0 hover:opacity-100"
                        onMouseDown={(e) => handleMouseDown(e, task.id, "resize-right")}
                      />
                    </div>

                    {/* Task Details on Hover */}
                    {isSelected && (
                      <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-64">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{task.name}</span>
                            <span className="text-gray-500">{task.progress}%</span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {new Date(task.startDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              {new Date(task.endDate).toLocaleDateString()}
                            </div>
                          </div>
                          {task.assignee && (
                            <div className="flex items-center text-gray-600">
                              <User size={12} className="mr-1" />
                              {task.assignee}
                            </div>
                          )}
                          {task.dependencies.length > 0 && (
                            <div className="text-gray-600">
                              <span className="text-xs">Dependencies: {task.dependencies.length}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Dependency Lines */}
            {renderDependencyLines()}

            {/* Today Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
              style={{
                left: `${((new Date().getTime() - startDate.getTime()) / (endDate.getTime() - startDate.getTime())) * 100}%`,
              }}
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-gray-200 bg-[#f1f0ec]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-[#003a78] rounded" />
              <span className="text-sm text-gray-600">Normal Task</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-[#fed850] rounded" />
              <span className="text-sm text-gray-600">Milestone</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-0.5 h-4 bg-red-500" />
              <span className="text-sm text-gray-600">Today</span>
            </div>
            {showDependencies && (
              <div className="flex items-center space-x-2">
                <svg width="20" height="8">
                  <path d="M0 4 L20 4" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
                <span className="text-sm text-gray-600">Dependency</span>
              </div>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {tasks.length} tasks • {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days
          </div>
        </div>
      </div>
    </div>
  )
}
