/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Plus, MoreHorizontal, User, Calendar, Clock, Flag, AlertCircle, CheckSquare, Circle } from 'lucide-react'
import { Task } from "@/src/types/task_management"

interface TaskKanbanViewProps {
  tasks: Task[]
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void
  onTaskDelete: (taskId: string) => void
}

const columns = [
  { id: "todo", title: "To Do", color: "bg-gray-100" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-100" },
  { id: "completed", title: "Completed", color: "bg-green-100" },
  { id: "blocked", title: "Blocked", color: "bg-red-100" }
]

export default function TaskKanbanView({
  tasks,
  onTaskUpdate,
}: TaskKanbanViewProps) {
  const [, setDraggedTask] = useState<string | null>(null)

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "border-l-red-500"
      case "high":
        return "border-l-orange-500"
      case "medium":
        return "border-l-yellow-500"
      case "low":
        return "border-l-green-500"
      default:
        return "border-l-gray-300"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status !== "completed"
  }

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newStatus = destination.droppableId as Task["status"]
    onTaskUpdate(draggableId, { status: newStatus })
    setDraggedTask(null)
  }

  const handleDragStart = (start: any) => {
    setDraggedTask(start.draggableId)
  }

  const renderTaskCard = (task: Task, index: number) => {
    const overdue = isOverdue(task.dueDate, task.status)

    return (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`bg-white rounded-lg border-l-4 ${getPriorityColor(task.priority)} shadow-sm hover:shadow-md transition-shadow mb-3 ${
              snapshot.isDragging ? "rotate-2 shadow-lg" : ""
            } ${overdue ? "bg-red-50 border-red-200" : "border-gray-200"}`}
          >
            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className={`font-medium text-gray-900 text-sm leading-tight ${overdue ? "text-red-700" : ""}`}>
                  {task.title}
                </h3>
                <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                  <MoreHorizontal size={14} />
                </button>
              </div>

              {/* Description */}
              {task.description && (
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {task.description}
                </p>
              )}

              {/* Tags */}
              {task.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {task.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                  {task.tags.length > 3 && (
                    <span className="text-xs text-gray-500">+{task.tags.length - 3}</span>
                  )}
                </div>
              )}

              {/* Custom Fields */}
              {Object.keys(task.customFields).length > 0 && (
                <div className="mb-3">
                  {Object.entries(task.customFields).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-xs text-gray-500">
                      <span className="capitalize">{key.replace('-', ' ')}:</span>
                      <span className="ml-1 text-gray-700">{String(value)}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Approval Status */}
              {task.approvalStatus !== "not-required" && (
                <div className="mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    task.approvalStatus === "approved" ? "bg-green-100 text-green-800" :
                    task.approvalStatus === "rejected" ? "bg-red-100 text-red-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {task.approvalStatus === "pending" ? "Pending Approval" : task.approvalStatus}
                  </span>
                </div>
              )}

              {/* Metrics */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <div className="flex items-center space-x-3">
                  {task.storyPoints > 0 && (
                    <div className="flex items-center">
                      <Flag size={12} className="mr-1" />
                      {task.storyPoints}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {task.estimatedHours}h
                  </div>
                </div>
                <div className={`flex items-center ${overdue ? "text-red-600" : ""}`}>
                  <Calendar size={12} className="mr-1" />
                  {formatDate(task.dueDate)}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User size={12} className="mr-1 text-gray-400" />
                  <span className="text-xs text-gray-600">{task.assigneeName}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {/* Subtasks indicator */}
                  {task.subtasks.length > 0 && (
                    <div className="flex items-center text-xs text-gray-500">
                      <CheckSquare size={12} className="mr-1" />
                      {task.subtasks.length}
                    </div>
                  )}
                  
                  {/* Dependencies indicator */}
                  {task.dependencies.length > 0 && (
                    <div className="flex items-center text-xs text-gray-500">
                      <AlertCircle size={12} className="mr-1" />
                      {task.dependencies.length}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className="flex space-x-6 overflow-x-auto pb-6">
        {columns.map(column => {
          const columnTasks = getTasksByStatus(column.id)
          
          return (
            <div key={column.id} className="flex-shrink-0 w-80">
              {/* Column Header */}
              <div className={`${column.color} rounded-t-lg p-4 border-b border-gray-200`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{column.title}</h3>
                    <span className="bg-white text-gray-600 text-sm px-2 py-1 rounded-full">
                      {columnTasks.length}
                    </span>
                  </div>
                  <button className="p-1 text-gray-500 hover:text-gray-700 rounded">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Column Content */}
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`bg-gray-50 rounded-b-lg p-4 min-h-[500px] transition-colors ${
                      snapshot.isDraggingOver ? "bg-blue-50" : ""
                    }`}
                  >
                    {columnTasks.map((task, index) => renderTaskCard(task, index))}
                    {provided.placeholder}
                    
                    {columnTasks.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        <Circle size={32} className="mx-auto mb-2" />
                        <p className="text-sm">No tasks</p>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          )
        })}
      </div>
    </DragDropContext>
  )
}
