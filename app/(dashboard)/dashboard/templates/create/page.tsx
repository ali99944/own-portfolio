"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Save, X, Plus, ArrowLeft, Calendar, Clock, Target, FileText } from "lucide-react"

interface TemplateFormData {
  name: string
  description: string
  category: string
  industry: string
  duration: string
  teamSize: string
  complexity: "beginner" | "intermediate" | "advanced"
  tags: string[]
  estimatedBudget: number
  phases: TemplatePhase[]
  objectives: string[]
  requirements: string[]
  deliverables: string[]
  risks: string[]
  successCriteria: string[]
}

interface TemplatePhase {
  id: string
  name: string
  description: string
  duration: number
  order: number
}

const categories = [
  "Web Development",
  "Mobile Development",
  "Marketing",
  "Product Launch",
  "Data & Analytics",
  "Design",
  "Consulting",
  "E-commerce",
  "Enterprise Software",
]

const industries = [
  "Technology",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Consulting",
  "Non-profit",
]

export default function CreateTemplatePage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  // Input states for dynamic lists
  const [tagInput, setTagInput] = useState("")
  const [objectiveInput, setObjectiveInput] = useState("")
  const [requirementInput, setRequirementInput] = useState("")
  const [deliverableInput, setDeliverableInput] = useState("")
  const [riskInput, setRiskInput] = useState("")
  const [criteriaInput, setCriteriaInput] = useState("")
  const [phaseInput, setPhaseInput] = useState({ name: "", description: "", duration: 1 })

  const [formData, setFormData] = useState<TemplateFormData>({
    name: "",
    description: "",
    category: "",
    industry: "",
    duration: "",
    teamSize: "",
    complexity: "intermediate",
    tags: [],
    estimatedBudget: 0,
    phases: [],
    objectives: [],
    requirements: [],
    deliverables: [],
    risks: [],
    successCriteria: [],
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

  const handleAddRequirement = () => {
    if (requirementInput.trim() && !formData.requirements.includes(requirementInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()],
      }))
      setRequirementInput("")
    }
  }

  const handleRemoveRequirement = (requirementToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((requirement) => requirement !== requirementToRemove),
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

  const handleAddRisk = () => {
    if (riskInput.trim() && !formData.risks.includes(riskInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        risks: [...prev.risks, riskInput.trim()],
      }))
      setRiskInput("")
    }
  }

  const handleRemoveRisk = (riskToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      risks: prev.risks.filter((risk) => risk !== riskToRemove),
    }))
  }

  const handleAddCriteria = () => {
    if (criteriaInput.trim() && !formData.successCriteria.includes(criteriaInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        successCriteria: [...prev.successCriteria, criteriaInput.trim()],
      }))
      setCriteriaInput("")
    }
  }

  const handleRemoveCriteria = (criteriaToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      successCriteria: prev.successCriteria.filter((criteria) => criteria !== criteriaToRemove),
    }))
  }

  const handleAddPhase = () => {
    if (phaseInput.name.trim()) {
      const phase: TemplatePhase = {
        id: Date.now().toString(),
        name: phaseInput.name,
        description: phaseInput.description,
        duration: phaseInput.duration,
        order: formData.phases.length + 1,
      }
      setFormData((prev) => ({
        ...prev,
        phases: [...prev.phases, phase],
      }))
      setPhaseInput({ name: "", description: "", duration: 1 })
    }
  }

  const handleRemovePhase = (phaseId: string) => {
    setFormData((prev) => ({
      ...prev,
      phases: prev.phases
        .filter((phase) => phase.id !== phaseId)
        .map((phase, index) => ({
          ...phase,
          order: index + 1,
        })),
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
      console.log("Creating template:", formData)
      // Here you would make an API call to create the template
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      router.push("/control-panel/templates")
    } catch (error) {
      console.error("Error creating template:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const tabs = [
    { id: "basic", name: "Basic Info", icon: FileText },
    { id: "phases", name: "Phases", icon: Calendar },
    { id: "details", name: "Details", icon: Target },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold mb-2">Create Project Template</h1>
              <p className="text-blue-100">Build a reusable template for future projects</p>
            </div>
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
              disabled={isSaving || !formData.name || !formData.category}
              className="flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold disabled:opacity-50"
            >
              <Save size={20} className="mr-2" />
              {isSaving ? "Creating..." : "Create Template"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

        <div className="p-6">
          {/* Basic Info Tab */}
          {activeTab === "basic" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Template Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter template name..."
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
                      placeholder="Describe what this template is for and when to use it..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      >
                        <option value="">Select industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 8-12 weeks"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                      <input
                        type="text"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        placeholder="e.g., 3-5 people"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Complexity</label>
                      <select
                        name="complexity"
                        value={formData.complexity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                      <input
                        type="number"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleInputChange}
                        placeholder="0"
                        min="0"
                        step="1000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Technologies & Skills</label>
                    <div className="space-y-3">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyPress={(e) => handleKeyPress(e, handleAddTag)}
                          placeholder="Add a technology or skill..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                        />
                        <button
                          onClick={handleAddTag}
                          className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
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
                              <button
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

          {/* Phases Tab */}
          {activeTab === "phases" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Project Phases</h3>
                <div className="text-sm text-gray-600">
                  {formData.phases.length} phases • {formData.phases.reduce((sum, phase) => sum + phase.duration, 0)}{" "}
                  weeks total
                </div>
              </div>

              {/* Add Phase Form */}
              <div className="bg-[#f1f0ec] rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Phase</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phase Name</label>
                    <input
                      type="text"
                      value={phaseInput.name}
                      onChange={(e) => setPhaseInput((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter phase name..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (weeks)</label>
                    <input
                      type="number"
                      value={phaseInput.duration}
                      onChange={(e) =>
                        setPhaseInput((prev) => ({ ...prev, duration: Number.parseInt(e.target.value) || 1 }))
                      }
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={phaseInput.description}
                      onChange={(e) => setPhaseInput((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe what happens in this phase..."
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddPhase}
                  className="mt-4 px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                >
                  Add Phase
                </button>
              </div>

              {/* Phases List */}
              {formData.phases.length > 0 && (
                <div className="space-y-4">
                  {formData.phases.map((phase, index) => (
                    <div key={phase.id} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-[#003a78] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.name}</h4>
                            <p className="text-gray-600 mb-3">{phase.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Clock size={14} className="mr-1" />
                                {phase.duration} weeks
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemovePhase(phase.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="space-y-8">
              {/* Objectives */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Objectives</h3>
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

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Requirements</h3>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={requirementInput}
                      onChange={(e) => setRequirementInput(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, handleAddRequirement)}
                      placeholder="Add a technical requirement..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                    <button
                      onClick={handleAddRequirement}
                      className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  {formData.requirements.length > 0 && (
                    <div className="space-y-2">
                      {formData.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-gray-900">{requirement}</span>
                          <button
                            onClick={() => handleRemoveRequirement(requirement)}
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
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Deliverables</h3>
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
                        <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
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

              {/* Risks and Success Criteria */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Risks */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Potential Risks</h3>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={riskInput}
                        onChange={(e) => setRiskInput(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, handleAddRisk)}
                        placeholder="Add a potential risk..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                      <button
                        onClick={handleAddRisk}
                        className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    {formData.risks.length > 0 && (
                      <div className="space-y-2">
                        {formData.risks.map((risk, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <span className="text-gray-900">{risk}</span>
                            <button onClick={() => handleRemoveRisk(risk)} className="text-red-600 hover:text-red-800">
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Success Criteria */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Criteria</h3>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={criteriaInput}
                        onChange={(e) => setCriteriaInput(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, handleAddCriteria)}
                        placeholder="Add success criteria..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                      />
                      <button
                        onClick={handleAddCriteria}
                        className="px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    {formData.successCriteria.length > 0 && (
                      <div className="space-y-2">
                        {formData.successCriteria.map((criteria, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="text-gray-900">{criteria}</span>
                            <button
                              onClick={() => handleRemoveCriteria(criteria)}
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
