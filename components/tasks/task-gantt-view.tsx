"use client"

import { useState, useRef } from "react"
import { Calendar, Clock, User } from 'lucide-react'
import { Task } from "@/src/types/task_management"

interface TaskGanttViewProps {
  tasks: Task[]
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void
}

export default function TaskGanttView({
  tasks,
  onTaskUpdate
}: TaskGanttViewProps) {
  const [viewMode, setViewMode] = useState<"days" | "weeks" | "months">("weeks")
  const [selectedTask, setSelectedTask] = useState<string | null>(null)
  const [draggedTask, setDraggedTask] = useState<string | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  // Calculate date range
  const getDateRange = () => {
    if (tasks.length === 0) {
      const start = new Date()
      const end = new Date()
      end.setMonth(end.getMonth() + 3)
      return { start, end }
    }

    const allDates = tasks.flatMap(task => [
      new Date(task.startDate || task.createdAt),
      new Date(task.dueDate)
    ])
    const minDate = new Date(Math.min(...allDates.map(d => d.getTime())))
    const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())))

    // Add padding
    minDate.setDate(minDate.getDate() - 7)
    maxDate.setDate(maxDate.getDate() + 7)

    return { start: minDate, end: maxDate }
  }

  const { start: startDate, end: endDate } = getDateRange()

  // Generate time periods
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
  const getTaskPosition = (task: Task) => {
    const taskStart = new Date(task.startDate || task.createdAt)
    const taskEnd = new Date(task.dueDate)
    const daysFromStart = Math.ceil((taskStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const taskDuration = Math.ceil((taskEnd.getTime() - taskStart.getTime()) / (1000 * 60 * 60 * 24))

    const left = (daysFromStart / totalDays) * (totalDays * (dayWidth / (viewMode === "days" ? 1 : viewMode === "weeks" ? 7 : 30)))
    const width = Math.max(20, (taskDuration / totalDays) * (totalDays * (dayWidth / (viewMode === "days" ? 1 : viewMode === "weeks" ? 7 : 30))))

    return { left, width }
  }


  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#10b981"
      case "in-progress":
        return "#f59e0b"
      case "blocked":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const isOverdue = (task: Task) => {
    return new Date(task.dueDate) < new Date() && task.status !== "completed"
  }

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent, taskId: string) => {
    e.preventDefault()
    setDraggedTask(taskId)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartRef.current || !draggedTask) return

    const rect = chartRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const dayPosition = Math.floor((x / rect.width) * totalDays)

    const task = tasks.find(t => t.id === draggedTask)
    if (task) {
      const taskDuration = Math.ceil(
        (new Date(task.dueDate).getTime() - new Date(task.startDate || task.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      )
      const newStartDate = new Date(startDate)
      newStartDate.setDate(newStartDate.getDate() + dayPosition)
      const newEndDate = new Date(newStartDate)
      newEndDate.setDate(newEndDate.getDate() + taskDuration)

      onTaskUpdate(draggedTask, {
        startDate: newStartDate.toISOString(),
        dueDate: newEndDate.toISOString(),
      })
    }
  }

  const handleMouseUp = () => {
    setDraggedTask(null)
  }

  // Build task hierarchy for display
  const buildTaskHierarchy = () => {
    const taskMap = new Map(tasks.map(task => [task.id, task]))
    const rootTasks: Task[] = []
    const childTasks = new Map<string, Task[]>()

    tasks.forEach(task => {
      if (task.parentId && taskMap.has(task.parentId)) {
        if (!childTasks.has(task.parentId)) {
          childTasks.set(task.parentId, [])
        }
        childTasks.get(task.parentId)!.push(task)
      } else {
        rootTasks.push(task)
      }
    })

    const flattenTasks = (tasks: Task[], level: number = 0): Array<Task & { level: number }> => {
      const result: Array<Task & { level: number }> = []
      
      tasks.forEach(task => {
        result.push({ ...task, level })
        if (childTasks.has(task.id)) {
          result.push(...flattenTasks(childTasks.get(task.id)!, level + 1))
        }
      })
      
      return result
    }

    return flattenTasks(rootTasks)
  }

  const hierarchicalTasks = buildTaskHierarchy()

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
            <p className="text-sm text-gray-600">Gantt chart view with task dependencies</p>
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
          </div>
        </div>
      </div>

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
            {hierarchicalTasks.map((task) => {
              const position = getTaskPosition(task)
              const isSelected = selectedTask === task.id
              const overdue = isOverdue(task)

              return (
                <div key={task.id} className="flex border-b border-gray-100 hover:bg-gray-50">
                  {/* Task Info */}
                  <div className="w-80 p-4 border-r border-gray-200">
                    <div 
                      className="flex items-center"
                      style={{ paddingLeft: `${task.level * 20}px` }}
                    >
                      <div className="flex-1 min-w-0">
                        <h5 className={`font-medium text-gray-900 truncate ${overdue ? "text-red-700" : ""}`}>
                          {task.title}
                        </h5>
                        <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User size={12} className="mr-1" />
                            {task.assigneeName}
                          </div>
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {task.estimatedHours}h
                          </div>
                          {task.storyPoints > 0 && (
                            <div className="flex items-center">
                              <span className="text-xs">{task.storyPoints} SP</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex-1 relative" style={{ height: "60px" }}>
                    {/* Task Bar */}
                    <div
                      className={`absolute top-4 h-8 rounded-lg cursor-move transition-all duration-200 ${
                        isSelected ? "ring-2 ring-[#003a78] ring-opacity-50" : ""
                      } ${overdue ? "ring-2 ring-red-400" : ""}`}
                      style={{
                        left: `${position.left}px`,
                        width: `${position.width}px`,
                        backgroundColor: getStatusColor(task.status),
                      }}
                      onMouseDown={(e) => handleMouseDown(e, task.id)}
                      onClick={() => setSelectedTask(isSelected ? null : task.id)}
                    >
                      {/* Progress Bar */}
                      <div
                        className="h-full bg-black bg-opacity-20 rounded-lg transition-all duration-300"
                        style={{ 
                          width: `${task.status === "completed" ? 100 : task.status === "in-progress" ? 50 : 0}%` 
                        }}
                      />

                      {/* Task Label */}
                      <div className="absolute inset-0 flex items-center px-2">
                        <span className="text-white text-xs font-medium truncate">
                          {task.title}
                        </span>
                      </div>
                    </div>

                    {/* Task Details on Hover */}
                    {isSelected && (
                      <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-64">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{task.title}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              task.priority === "urgent" ? "bg-red-100 text-red-800" :
                              task.priority === "high" ? "bg-orange-100 text-orange-800" :
                              task.priority === "medium" ? "bg-yellow-100 text-yellow-800" :
                              "bg-green-100 text-green-800"
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {new Date(task.startDate || task.createdAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <User size={12} className="mr-1" />
                            {task.assigneeName}
                          </div>
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
              <div className="w-4 h-2 bg-green-500 rounded" />
              <span className="text-sm text-gray-600">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-yellow-500 rounded" />
              <span className="text-sm text-gray-600">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-gray-400 rounded" />
              <span className="text-sm text-gray-600">To Do</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-0.5 h-4 bg-red-500" />
              <span className="text-sm text-gray-600">Today</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {tasks.length} tasks • {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days
          </div>
        </div>
      </div>
    </div>
  )
}
