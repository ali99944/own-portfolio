/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { X, Plus, Flag, Target, Link, FileText, Settings, Copy } from 'lucide-react'
import { TaskTemplate, CustomField, Task } from "@/src/types/task_management"

interface TaskCreateModalProps {
  templates: TaskTemplate[]
  customFields: CustomField[]
  onClose: () => void
  onSubmit: (task: Partial<Task>) => void
}

export default function TaskCreateModal({
  templates,
  customFields,
  onClose,
  onSubmit
}: TaskCreateModalProps) {
  const [activeTab, setActiveTab] = useState("basic")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Task>>({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    assigneeId: "",
    assigneeName: "",
    projectId: "",
    projectName: "",
    dueDate: "",
    startDate: "",
    estimatedHours: 0,
    storyPoints: 0,
    complexity: "medium",
    tags: [],
    parentId: null,
    dependencies: [],
    customFields: {},
    approvalStatus: "not-required"
  })

  // Input states for dynamic lists
  const [tagInput, setTagInput] = useState("")
  // const [dependencyInput, setDependencyInput] = useState("")
  const [subtaskInput, setSubtaskInput] = useState("")
  const [subtasks, setSubtasks] = useState<Array<{title: string, description: string}>>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? Number.parseFloat(value) || 0 : value,
    }))
  }

  const handleCustomFieldChange = (fieldName: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      customFields: {
        ...prev.customFields,
        [fieldName]: value
      }
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()]
      }))
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const handleAddSubtask = () => {
    if (subtaskInput.trim()) {
      setSubtasks(prev => [...prev, { title: subtaskInput.trim(), description: "" }])
      setSubtaskInput("")
    }
  }

  const handleRemoveSubtask = (index: number) => {
    setSubtasks(prev => prev.filter((_, i) => i !== index))
  }

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template && template.tasks.length > 0) {
      const mainTask = template.tasks[0]
      setFormData(prev => ({
        ...prev,
        title: mainTask.title,
        description: mainTask.description,
        estimatedHours: mainTask.estimatedHours,
        storyPoints: mainTask.storyPoints,
        priority: mainTask.priority,
        tags: mainTask.tags,
        customFields: mainTask.customFields || {}
      }))
      
      // Set subtasks from template
      if (template.tasks.length > 1) {
        setSubtasks(template.tasks.slice(1).map(task => ({
          title: task.title,
          description: task.description
        })))
      }
    }
    setSelectedTemplate(templateId)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create main task
    const taskData = {
      ...formData,
      subtasks: subtasks.map(st => st.title) // This would be handled differently in a real app
    }
    
    onSubmit(taskData)
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault()
      action()
    }
  }

  const tabs = [
    { id: "basic", name: "Basic Info", icon: FileText },
    { id: "details", name: "Details", icon: Settings },
    { id: "subtasks", name: "Subtasks", icon: Target },
    { id: "dependencies", name: "Dependencies", icon: Link },
    { id: "approval", name: "Approval", icon: Flag }
  ]

  const renderCustomField = (field: CustomField) => {
    const value = formData.customFields?.[field.name] || ""

    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            required={field.required}
          />
        )
      case "number":
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleCustomFieldChange(field.name, Number.parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            required={field.required}
          />
        )
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            required={field.required}
          >
            <option value="">Select option</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )
      case "boolean":
        return (
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => handleCustomFieldChange(field.name, e.target.checked)}
            className="rounded border-gray-300 text-[#003a78] focus:ring-[#003a78]"
          />
        )
      case "date":
        return (
          <input
            type="date"
            value={value}
            onChange={(e) => handleCustomFieldChange(field.name, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            required={field.required}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Task</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Template Selection */}
        {templates.length > 0 && !selectedTemplate && (
          <div className="p-6 border-b border-gray-200 bg-[#f1f0ec]">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Start with a Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map(template => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#003a78] hover:bg-white cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <span className="text-xs text-gray-500">{template.tasks.length} tasks</span>
                  </div>
                  <p className="text-sm text-gray-600">{template.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {template.category}
                    </span>
                    <span className="text-xs text-gray-500">Used {template.usageCount} times</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedTemplate("none")}
              className="mt-4 text-sm text-[#003a78] hover:underline"
            >
              Skip templates and create from scratch
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-[#003a78] text-[#003a78]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Basic Info Tab */}
            {activeTab === "basic" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Task Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter task title..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe the task..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        >
                          <option value="todo">To Do</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="blocked">Blocked</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Assignee
                      </label>
                      <input
                        type="text"
                        name="assigneeName"
                        value={formData.assigneeName}
                        onChange={handleInputChange}
                        placeholder="Assign to team member..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Due Date
                        </label>
                        <input
                          type="date"
                          name="dueDate"
                          value={formData.dueDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Hours
                        </label>
                        <input
                          type="number"
                          name="estimatedHours"
                          value={formData.estimatedHours}
                          onChange={handleInputChange}
                          min="0"
                          step="0.5"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Story Points
                        </label>
                        <input
                          type="number"
                          name="storyPoints"
                          value={formData.storyPoints}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Complexity
                        </label>
                        <select
                          name="complexity"
                          value={formData.complexity}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags
                      </label>
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={(e) => handleKeyPress(e, handleAddTag)}
                            placeholder="Add a tag..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={handleAddTag}
                            className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        {formData.tags && formData.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {formData.tags.map((tag) => (
                              <span
                                key={tag}
                                className="flex items-center px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm"
                              >
                                {tag}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveTag(tag)}
                                  className="ml-2 text-[#003a78] hover:text-red-600"
                                >
                                  <X size={14} />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Details Tab */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Custom Fields</h3>
                {customFields.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {customFields.map(field => (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label} {field.required && "*"}
                        </label>
                        {renderCustomField(field)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Settings size={48} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No custom fields</h3>
                    <p>Custom fields can be configured in project settings.</p>
                  </div>
                )}
              </div>
            )}

            {/* Subtasks Tab */}
            {activeTab === "subtasks" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Subtasks</h3>
                  <span className="text-sm text-gray-500">{subtasks.length} subtasks</span>
                </div>

                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={subtaskInput}
                      onChange={(e) => setSubtaskInput(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, handleAddSubtask)}
                      placeholder="Add a subtask..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={handleAddSubtask}
                      className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {subtasks.length > 0 && (
                    <div className="space-y-3">
                      {subtasks.map((subtask, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-[#f1f0ec] rounded-lg">
                          <span className="text-gray-900">{subtask.title}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSubtask(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Dependencies Tab */}
            {activeTab === "dependencies" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Task Dependencies</h3>
                <div className="text-center py-8 text-gray-500">
                  <Link size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Dependencies</h3>
                  <p>Task dependencies will be available after the task is created.</p>
                </div>
              </div>
            )}

            {/* Approval Tab */}
            {activeTab === "approval" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Approval Workflow</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Approval Required
                  </label>
                  <select
                    name="approvalStatus"
                    value={formData.approvalStatus}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  >
                    <option value="not-required">No Approval Required</option>
                    <option value="pending">Requires Approval</option>
                  </select>
                </div>
                
                {formData.approvalStatus === "pending" && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      This task will require approval before it can be marked as completed. 
                      Approval workflow can be configured after task creation.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              {selectedTemplate && selectedTemplate !== "none" && (
                <div className="flex items-center text-sm text-gray-600">
                  <Copy size={16} className="mr-2" />
                  Using template: {templates.find(t => t.id === selectedTemplate)?.name}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!formData.title}
                className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
