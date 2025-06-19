"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Clock, User } from 'lucide-react'
import { Task } from "@/src/types/task_management"

interface TaskCalendarViewProps {
  tasks: Task[]
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void
}

export default function TaskCalendarView({
  tasks,
}: TaskCalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"month" | "week">("month")

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const getTasksForDate = (date: Date | null) => {
    if (!date) return []
    
    const dateString = date.toISOString().split('T')[0]
    return tasks.filter(task => {
      const taskDate = new Date(task.dueDate).toISOString().split('T')[0]
      return taskDate === dateString
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "blocked":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isOverdue = (task: Task) => {
    return new Date(task.dueDate) < new Date() && task.status !== "completed"
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const days = getDaysInMonth(currentDate)

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("month")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === "month"
                  ? "bg-white text-[#003a78] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewMode === "week"
                  ? "bg-white text-[#003a78] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Week
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors">
            <Plus size={16} className="mr-2" />
            Add Task
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-px mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-3 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
          {days.map((date, index) => {
            const dayTasks = getTasksForDate(date)
            const isCurrentDay = isToday(date)
            
            return (
              <div
                key={index}
                className={`bg-white min-h-[120px] p-2 ${
                  date ? "hover:bg-gray-50" : "bg-gray-50"
                } ${isCurrentDay ? "bg-blue-50 border-2 border-blue-200" : ""}`}
              >
                {date && (
                  <>
                    {/* Date Number */}
                    <div className={`text-sm font-medium mb-2 ${
                      isCurrentDay ? "text-blue-600" : "text-gray-900"
                    }`}>
                      {date.getDate()}
                    </div>

                    {/* Tasks */}
                    <div className="space-y-1">
                      {dayTasks.slice(0, 3).map(task => (
                        <div
                          key={task.id}
                          className={`p-1 rounded text-xs border cursor-pointer hover:shadow-sm transition-shadow ${
                            getStatusColor(task.status)
                          } ${isOverdue(task) ? "ring-1 ring-red-400" : ""}`}
                          onClick={() => {/* Handle task click */}}
                        >
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                            <span className="truncate font-medium">{task.title}</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center text-xs opacity-75">
                              <User size={10} className="mr-1" />
                              <span className="truncate">{task.assigneeName}</span>
                            </div>
                            {task.estimatedHours > 0 && (
                              <div className="flex items-center text-xs opacity-75">
                                <Clock size={10} className="mr-1" />
                                {task.estimatedHours}h
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {dayTasks.length > 3 && (
                        <div className="text-xs text-gray-500 text-center py-1">
                          +{dayTasks.length - 3} more
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-gray-600">Urgent</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-gray-600">High</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-gray-600">Medium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-gray-600">Low</span>
            </div>
          </div>
          <div className="text-gray-500">
            {tasks.length} total tasks • {tasks.filter(t => t.status === "completed").length} completed
          </div>
        </div>
      </div>
    </div>
  )
}
