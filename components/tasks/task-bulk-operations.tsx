/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { X, Settings, Users, Flag, Trash2, Copy, Move, Tag } from "lucide-react"
import { Task } from "@/src/types/task_management"

interface TaskBulkOperationsProps {
  selectedTasks: string[]
  tasks: Task[]
  onClose: () => void
  onExecute: (operation: string, taskIds: string[], data?: any) => void
}

export default function TaskBulkOperations({ selectedTasks, tasks, onClose, onExecute }: TaskBulkOperationsProps) {
  const [selectedOperation, setSelectedOperation] = useState<string>("")
  const [operationData, setOperationData] = useState<any>({})

  const selectedTaskObjects = tasks.filter((task) => selectedTasks.includes(task.id))

  const operations = [
    {
      id: "update-status",
      name: "Update Status",
      icon: Settings,
      description: "Change the status of selected tasks",
      fields: [
        {
          name: "status",
          label: "New Status",
          type: "select",
          options: [
            { value: "todo", label: "To Do" },
            { value: "in-progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "blocked", label: "Blocked" },
            { value: "cancelled", label: "Cancelled" },
          ],
        },
      ],
    },
    {
      id: "update-assignee",
      name: "Update Assignee",
      icon: Users,
      description: "Assign selected tasks to a team member",
      fields: [
        {
          name: "assigneeName",
          label: "Assignee",
          type: "text",
          placeholder: "Enter assignee name...",
        },
      ],
    },
    {
      id: "update-priority",
      name: "Update Priority",
      icon: Flag,
      description: "Change the priority of selected tasks",
      fields: [
        {
          name: "priority",
          label: "New Priority",
          type: "select",
          options: [
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" },
            { value: "high", label: "High" },
            { value: "urgent", label: "Urgent" },
          ],
        },
      ],
    },
    {
      id: "add-tags",
      name: "Add Tags",
      icon: Tag,
      description: "Add tags to selected tasks",
      fields: [
        {
          name: "tags",
          label: "Tags to Add",
          type: "text",
          placeholder: "Enter tags separated by commas...",
        },
      ],
    },
    {
      id: "remove-tags",
      name: "Remove Tags",
      icon: Tag,
      description: "Remove tags from selected tasks",
      fields: [
        {
          name: "tags",
          label: "Tags to Remove",
          type: "text",
          placeholder: "Enter tags separated by commas...",
        },
      ],
    },
    {
      id: "update-project",
      name: "Move to Project",
      icon: Move,
      description: "Move selected tasks to another project",
      fields: [
        {
          name: "projectName",
          label: "Project",
          type: "text",
          placeholder: "Enter project name...",
        },
      ],
    },
    {
      id: "clone",
      name: "Clone Tasks",
      icon: Copy,
      description: "Create copies of selected tasks",
      fields: [],
    },
    {
      id: "delete",
      name: "Delete Tasks",
      icon: Trash2,
      description: "Permanently delete selected tasks",
      fields: [],
      destructive: true,
    },
  ]

  const handleFieldChange = (fieldName: string, value: any) => {
    setOperationData((prev: any) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const handleExecute = () => {
    const operation = operations.find((op) => op.id === selectedOperation)
    if (!operation) return

    const processedData = { ...operationData }

    // Process tags for add/remove operations
    if (selectedOperation === "add-tags" || selectedOperation === "remove-tags") {
      processedData.tags =
        operationData.tags
          ?.split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean) || []
    }

    onExecute(selectedOperation, selectedTasks, processedData)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600"
      case "in-progress":
        return "text-yellow-600"
      case "blocked":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600"
      case "high":
        return "text-orange-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const selectedOperationObj = operations.find((op) => op.id === selectedOperation)

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Bulk Operations</h2>
            <p className="text-sm text-gray-600 mt-1">Perform actions on {selectedTasks.length} selected tasks</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full max-h-[calc(90vh-80px)]">
          {/* Selected Tasks Preview */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Selected Tasks</h3>
            <div className="max-h-32 overflow-y-auto space-y-2">
              {selectedTaskObjects.slice(0, 5).map((task) => (
                <div key={task.id} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900 truncate">{task.title}</span>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className={getStatusColor(task.status)}>{task.status}</span>
                    <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                  </div>
                </div>
              ))}
              {selectedTaskObjects.length > 5 && (
                <div className="text-xs text-gray-500 text-center">+{selectedTaskObjects.length - 5} more tasks</div>
              )}
            </div>
          </div>

          {/* Operations */}
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Select Operation</h3>
            <div className="space-y-3">
              {operations.map((operation) => (
                <div
                  key={operation.id}
                  onClick={() => setSelectedOperation(operation.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedOperation === operation.id
                      ? "border-[#003a78] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  } ${operation.destructive ? "hover:border-red-300 hover:bg-red-50" : ""}`}
                >
                  <div className="flex items-center space-x-3">
                    <operation.icon
                      size={20}
                      className={`${
                        operation.destructive
                          ? "text-red-600"
                          : selectedOperation === operation.id
                            ? "text-[#003a78]"
                            : "text-gray-400"
                      }`}
                    />
                    <div className="flex-1">
                      <h4 className={`font-medium ${operation.destructive ? "text-red-900" : "text-gray-900"}`}>
                        {operation.name}
                      </h4>
                      <p className={`text-sm ${operation.destructive ? "text-red-600" : "text-gray-600"}`}>
                        {operation.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Operation Fields */}
            {selectedOperationObj && selectedOperationObj.fields.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-4">{selectedOperationObj.name} Settings</h4>
                <div className="space-y-4">
                  {selectedOperationObj.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                      {field.type === "select" ? (
                        <select
                          value={operationData[field.name] || ""}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        >
                          <option value="">Select {field.label.toLowerCase()}</option>
                          {/* {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))} */}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={operationData[field.name] || ""}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          // placeholder={field.placeholder}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warning for destructive operations */}
            {selectedOperationObj?.destructive && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Trash2 size={16} className="text-red-600" />
                  <h4 className="text-sm font-medium text-red-900">Warning</h4>
                </div>
                <p className="text-sm text-red-700 mt-2">
                  This action cannot be undone. {selectedTasks.length} tasks will be permanently deleted.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-600">{selectedTasks.length} tasks selected</div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleExecute}
                disabled={!selectedOperation}
                className={`px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedOperationObj?.destructive
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-[#003a78] text-white hover:bg-[#003a78]/90"
                }`}
              >
                {selectedOperationObj?.destructive ? "Delete Tasks" : "Apply Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
