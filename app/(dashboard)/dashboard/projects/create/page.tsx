"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Save, X, Plus, Calendar, DollarSign, Users, Tag } from "lucide-react"

interface ProjectFormData {
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
  tags: string[]
  teamMembers: string[]
  objectives: string[]
  deliverables: string[]
  notes: string
}

const statusOptions = [
  { value: "planning", label: "Planning" },
  { value: "in-progress", label: "In Progress" },
  { value: "review", label: "Review" },
  { value: "completed", label: "Completed" },
  { value: "on-hold", label: "On Hold" },
  { value: "cancelled", label: "Cancelled" },
]

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
]

export default function CreateProjectPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [tagInput, setTagInput] = useState("")
  const [memberInput, setMemberInput] = useState("")
  const [objectiveInput, setObjectiveInput] = useState("")
  const [deliverableInput, setDeliverableInput] = useState("")

  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    description: "",
    client: "",
    clientEmail: "",
    clientPhone: "",
    status: "planning",
    priority: "medium",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: "",
    budget: 0,
    tags: [],
    teamMembers: [],
    objectives: [],
    deliverables: [],
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number.parseFloat(value) || 0 : value,
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleAddMember = () => {
    if (memberInput.trim() && !formData.teamMembers.includes(memberInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        teamMembers: [...prev.teamMembers, memberInput.trim()],
      }))
      setMemberInput("")
    }
  }

  const handleRemoveMember = (memberToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((member) => member !== memberToRemove),
    }))
  }

  const handleAddObjective = () => {
    if (objectiveInput.trim() && !formData.objectives.includes(objectiveInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        objectives: [...prev.objectives, objectiveInput.trim()],
      }))
      setObjectiveInput("")
    }
  }

  const handleRemoveObjective = (objectiveToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      objectives: prev.objectives.filter((objective) => objective !== objectiveToRemove),
    }))
  }

  const handleAddDeliverable = () => {
    if (deliverableInput.trim() && !formData.deliverables.includes(deliverableInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        deliverables: [...prev.deliverables, deliverableInput.trim()],
      }))
      setDeliverableInput("")
    }
  }

  const handleRemoveDeliverable = (deliverableToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      deliverables: prev.deliverables.filter((deliverable) => deliverable !== deliverableToRemove),
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault()
      action()
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      console.log("Creating project:", formData)
      // Here you would make an API call to create the project
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      router.push("/control-panel/projects")
    } catch (error) {
      console.error("Error creating project:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
            <p className="text-blue-100">Set up a new project with all the details and requirements</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => router.back()}
              className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <X size={20} className="mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || !formData.name || !formData.client}
              className="flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold disabled:opacity-50"
            >
              <Save size={20} className="mr-2" />
              {isSaving ? "Creating..." : "Create Project"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the project goals and requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Client Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name *</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  placeholder="Client or company name..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  placeholder="client@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Project Objectives</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={objectiveInput}
                  onChange={(e) => setObjectiveInput(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleAddObjective)}
                  placeholder="Add a project objective..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
                <button
                  onClick={handleAddObjective}
                  className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {formData.objectives.length > 0 && (
                <div className="space-y-2">
                  {formData.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#f1f0ec] rounded-lg">
                      <span className="text-gray-900">{objective}</span>
                      <button
                        onClick={() => handleRemoveObjective(objective)}
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

          {/* Deliverables */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Deliverables</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={deliverableInput}
                  onChange={(e) => setDeliverableInput(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleAddDeliverable)}
                  placeholder="Add a deliverable..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
                <button
                  onClick={handleAddDeliverable}
                  className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {formData.deliverables.length > 0 && (
                <div className="space-y-2">
                  {formData.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#f1f0ec] rounded-lg">
                      <span className="text-gray-900">{deliverable}</span>
                      <button
                        onClick={() => handleRemoveDeliverable(deliverable)}
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

          {/* Notes */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Additional Notes</h2>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional notes, requirements, or special considerations..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Project Settings */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                >
                  {priorityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar size={20} className="mr-2" />
              Timeline
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign size={20} className="mr-2" />
              Budget
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                step="100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users size={20} className="mr-2" />
              Team Members
            </h3>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={memberInput}
                  onChange={(e) => setMemberInput(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleAddMember)}
                  placeholder="Add team member..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
                <button
                  onClick={handleAddMember}
                  className="px-3 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {formData.teamMembers.length > 0 && (
                <div className="space-y-2">
                  {formData.teamMembers.map((member) => (
                    <div key={member} className="flex items-center justify-between p-2 bg-[#f1f0ec] rounded-lg">
                      <span className="text-sm text-gray-900">{member}</span>
                      <button onClick={() => handleRemoveMember(member)} className="text-red-600 hover:text-red-800">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Tag size={20} className="mr-2" />
              Tags
            </h3>
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
                  onClick={handleAddTag}
                  className="px-3 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm"
                    >
                      {tag}
                      <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-[#003a78] hover:text-red-600">
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
  )
}
