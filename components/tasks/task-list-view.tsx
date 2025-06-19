"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, MoreHorizontal, Edit, Copy, Clock, Calendar, User, Flag, CheckSquare, Circle, AlertCircle, Link, MessageSquare, Paperclip } from 'lucide-react'
import { Task, CustomField } from "@/src/types/task_management"

interface TaskListViewProps {
  tasks: Task[]
  selectedTasks: string[]
  onTaskSelect: (taskIds: string[]) => void
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void
  onTaskDelete: (taskId: string) => void
  customFields: CustomField[]
}

export default function TaskListView({
  tasks,
  selectedTasks,
  onTaskSelect,

  customFields
}: TaskListViewProps) {
  const [expandedTasks, setExpandedTasks] = useState<string[]>([])
  const [, setEditingTask] = useState<string | null>(null)

  // Build task hierarchy
  const buildTaskHierarchy = (tasks: Task[]) => {
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

    return { rootTasks, childTasks }
  }

  const { rootTasks, childTasks } = buildTaskHierarchy(tasks)

  const toggleExpanded = (taskId: string) => {
    setExpandedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    )
  }

  const handleTaskSelect = (taskId: string, checked: boolean) => {
    if (checked) {
      onTaskSelect([...selectedTasks, taskId])
    } else {
      onTaskSelect(selectedTasks.filter(id => id !== taskId))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onTaskSelect(tasks.map(task => task.id))
    } else {
      onTaskSelect([])
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckSquare size={16} className="text-green-600" />
      case "in-progress":
        return <Clock size={16} className="text-yellow-600" />
      case "blocked":
        return <AlertCircle size={16} className="text-red-600" />
      default:
        return <Circle size={16} className="text-gray-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600 bg-red-100"
      case "high":
        return "text-orange-600 bg-orange-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "low":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status !== "completed"
  }

  const renderTask = (task: Task, level: number = 0) => {
    const hasSubtasks = childTasks.has(task.id)
    const isExpanded = expandedTasks.includes(task.id)
    const isSelected = selectedTasks.includes(task.id)
    const overdue = isOverdue(task.dueDate, task.status)

    return (
      <div key={task.id}>
        <div 
          className={`flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
            isSelected ? "bg-blue-50 border-blue-200" : ""
          } ${overdue ? "bg-red-50" : ""}`}
          style={{ paddingLeft: `${16 + level * 24}px` }}
        >
          {/* Expand/Collapse */}
          <div className="w-6 flex justify-center">
            {hasSubtasks ? (
              <button
                onClick={() => toggleExpanded(task.id)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                {isExpanded ? (
                  <ChevronDown size={14} className="text-gray-600" />
                ) : (
                  <ChevronRight size={14} className="text-gray-600" />
                )}
              </button>
            ) : null}
          </div>

          {/* Checkbox */}
          <div className="w-6 flex justify-center">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={(e) => handleTaskSelect(task.id, e.target.checked)}
              className="rounded border-gray-300 text-[#003a78] focus:ring-[#003a78]"
            />
          </div>

          {/* Status */}
          <div className="w-8 flex justify-center">
            {getStatusIcon(task.status)}
          </div>

          {/* Task Info */}
          <div className="flex-1 min-w-0 ml-4">
            <div className="flex items-center space-x-3">
              <h3 className={`font-medium text-gray-900 truncate ${overdue ? "text-red-700" : ""}`}>
                {task.title}
              </h3>
              
              {/* Priority Badge */}
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>

              {/* Tags */}
              {task.tags.slice(0, 2).map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                  {tag}
                </span>
              ))}
              {task.tags.length > 2 && (
                <span className="text-xs text-gray-500">+{task.tags.length - 2}</span>
              )}
            </div>

            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              {/* Assignee */}
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                {task.assigneeName}
              </div>

              {/* Due Date */}
              <div className={`flex items-center ${overdue ? "text-red-600" : ""}`}>
                <Calendar size={14} className="mr-1" />
                {formatDate(task.dueDate)}
              </div>

              {/* Effort */}
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {task.estimatedHours}h
              </div>

              {/* Story Points */}
              {task.storyPoints > 0 && (
                <div className="flex items-center">
                  <Flag size={14} className="mr-1" />
                  {task.storyPoints} SP
                </div>
              )}

              {/* Dependencies */}
              {task.dependencies.length > 0 && (
                <div className="flex items-center">
                  <Link size={14} className="mr-1" />
                  {task.dependencies.length}
                </div>
              )}

              {/* Comments */}
              {task.comments.length > 0 && (
                <div className="flex items-center">
                  <MessageSquare size={14} className="mr-1" />
                  {task.comments.length}
                </div>
              )}

              {/* Attachments */}
              {task.attachments.length > 0 && (
                <div className="flex items-center">
                  <Paperclip size={14} className="mr-1" />
                  {task.attachments.length}
                </div>
              )}
            </div>

            {/* Custom Fields */}
            {Object.keys(task.customFields).length > 0 && (
              <div className="flex items-center space-x-3 mt-2">
                {Object.entries(task.customFields).map(([key, value]) => {
                  const field = customFields.find(f => f.name === key)
                  if (!field) return null
                  
                  return (
                    <div key={key} className="text-xs">
                      <span className="text-gray-500">{field.label}:</span>
                      <span className="ml-1 text-gray-700">{String(value)}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Approval Status */}
            {task.approvalStatus !== "not-required" && (
              <div className="mt-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  task.approvalStatus === "approved" ? "bg-green-100 text-green-800" :
                  task.approvalStatus === "rejected" ? "bg-red-100 text-red-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}>
                  {task.approvalStatus === "pending" ? "Pending Approval" : task.approvalStatus}
                </span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setEditingTask(task.id)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => {/* Handle clone */}}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
            >
              <Copy size={16} />
            </button>
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Subtasks */}
        {hasSubtasks && isExpanded && (
          <div>
            {childTasks.get(task.id)!.map(subtask => renderTask(subtask, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
        <div className="w-6 flex justify-center">
          <input
            type="checkbox"
            checked={selectedTasks.length === tasks.length && tasks.length > 0}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="rounded border-gray-300 text-[#003a78] focus:ring-[#003a78]"
          />
        </div>
        <div className="w-6"></div>
        <div className="w-8"></div>
        <div className="flex-1 ml-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">Tasks ({tasks.length})</h3>
            <div className="text-sm text-gray-500">
              {selectedTasks.length > 0 && `${selectedTasks.length} selected`}
            </div>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="max-h-[600px] overflow-y-auto">
        {rootTasks.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <CheckSquare size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
            <p>Create your first task to get started with project management.</p>
          </div>
        ) : (
          rootTasks.map(task => renderTask(task))
        )}
      </div>
    </div>
  )
}
