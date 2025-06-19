/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { X, Zap, Lightbulb, TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"
import { Task, SmartSuggestion } from "@/src/types/task_management"

interface TaskSmartSuggestionsProps {
  currentTasks: Task[]
  onClose: () => void
  onCreateTask: (task: Partial<Task>) => void
}

export default function TaskSmartSuggestions({ currentTasks, onClose, onCreateTask }: TaskSmartSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<SmartSuggestion[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)

  useEffect(() => {
    // Simulate AI analysis
    const generateSuggestions = async () => {
      setLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockSuggestions: SmartSuggestion[] = [
        {
          id: "1",
          type: "task",
          title: "Code Review Process",
          description: "Based on your development tasks, consider adding a code review step to improve quality.",
          confidence: 0.85,
          reasoning:
            "Multiple development tasks detected without explicit review processes. Code reviews reduce bugs by 60%.",
          data: {
            title: "Code Review for Frontend Components",
            description: "Review and approve frontend component implementations before deployment",
            priority: "medium",
            estimatedHours: 2,
            tags: ["review", "quality", "frontend"],
          },
        },
        {
          id: "2",
          type: "optimization",
          title: "Task Dependencies Optimization",
          description: "Some tasks could be parallelized to reduce project timeline by 15%.",
          confidence: 0.78,
          reasoning:
            "Analysis shows 3 tasks currently in sequence could run in parallel with proper resource allocation.",
          data: {
            optimizations: [
              "Move 'Design Tokens Definition' to run parallel with 'Component Library Setup'",
              "Split 'Design System Implementation' into smaller, parallel tasks",
            ],
          },
        },
        {
          id: "3",
          type: "task",
          title: "Performance Testing",
          description: "Add performance testing task to ensure system meets requirements.",
          confidence: 0.92,
          reasoning:
            "Frontend development tasks detected without corresponding performance validation. Critical for user experience.",
          data: {
            title: "Performance Testing & Optimization",
            description: "Test application performance and optimize for speed and efficiency",
            priority: "high",
            estimatedHours: 8,
            storyPoints: 5,
            tags: ["testing", "performance", "optimization"],
          },
        },
        {
          id: "4",
          type: "dependency",
          title: "Missing Dependencies",
          description: "Potential missing dependencies detected between related tasks.",
          confidence: 0.71,
          reasoning:
            "Task 'Design Tokens Definition' should depend on 'Component Library Setup' completion for consistency.",
          data: {
            dependencies: [
              {
                from: "Design Tokens Definition",
                to: "Component Library Setup",
                type: "finish-to-start",
              },
            ],
          },
        },
        {
          id: "5",
          type: "template",
          title: "Testing Template",
          description: "Create a testing template based on your current task patterns.",
          confidence: 0.66,
          reasoning: "Multiple testing-related tasks suggest a reusable template would save time on future projects.",
          data: {
            templateName: "Frontend Testing Workflow",
            tasks: ["Unit Testing", "Integration Testing", "Performance Testing", "User Acceptance Testing"],
          },
        },
      ]

      setSuggestions(mockSuggestions)
      setLoading(false)
    }

    generateSuggestions()
  }, [currentTasks])

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case "task":
        return CheckCircle
      case "template":
        return Target
      case "dependency":
        return AlertTriangle
      case "optimization":
        return TrendingUp
      default:
        return Lightbulb
    }
  }

  const getSuggestionColor = (type: string) => {
    switch (type) {
      case "task":
        return "text-green-600 bg-green-100"
      case "template":
        return "text-blue-600 bg-blue-100"
      case "dependency":
        return "text-orange-600 bg-orange-100"
      case "optimization":
        return "text-purple-600 bg-purple-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return "text-green-600 bg-green-100"
    if (confidence >= 0.6) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const handleApplySuggestion = (suggestion: SmartSuggestion) => {
    if (suggestion.type === "task") {
      onCreateTask(suggestion.data)
      onClose()
    } else {
      // Handle other suggestion types
      console.log("Applying suggestion:", suggestion)
    }
  }

  const formatConfidence = (confidence: number) => {
    return `${Math.round(confidence * 100)}%`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#003a78] to-[#003a78]/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#fed850] rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-[#003a78]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">AI Task Suggestions</h2>
              <p className="text-blue-100 text-sm">Smart recommendations based on your project analysis</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white hover:text-gray-200 rounded-lg hover:bg-white/10">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full max-h-[calc(90vh-80px)]">
          {loading ? (
            <div className="flex-1 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#003a78] rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                  <Zap size={24} className="text-[#fed850]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing Your Tasks</h3>
                <p className="text-gray-600">AI is reviewing your project and generating smart suggestions...</p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#003a78] rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-[#003a78] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 bg-[#003a78] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Analysis Summary */}
              <div className="p-6 border-b border-gray-200 bg-[#f1f0ec]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#003a78]">{currentTasks.length}</div>
                    <div className="text-sm text-gray-600">Tasks Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{suggestions.length}</div>
                    <div className="text-sm text-gray-600">Suggestions Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {suggestions.filter((s) => s.confidence >= 0.8).length}
                    </div>
                    <div className="text-sm text-gray-600">High Confidence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <div className="text-sm text-gray-600">Time Savings</div>
                  </div>
                </div>
              </div>

              {/* Suggestions List */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {suggestions.map((suggestion) => {
                    const Icon = getSuggestionIcon(suggestion.type)
                    const isSelected = selectedSuggestion === suggestion.id

                    return (
                      <div
                        key={suggestion.id}
                        className={`border rounded-lg p-6 transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#003a78] bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                        }`}
                        onClick={() => setSelectedSuggestion(isSelected ? null : suggestion.id)}
                      >
                        <div className="flex items-start space-x-4">
                          {/* Icon */}
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${getSuggestionColor(suggestion.type)}`}
                          >
                            <Icon size={20} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{suggestion.title}</h3>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(suggestion.confidence)}`}
                                >
                                  {formatConfidence(suggestion.confidence)} confidence
                                </span>
                                <span
                                  className={`px-2 py-1 text-xs font-medium rounded-full ${getSuggestionColor(suggestion.type)}`}
                                >
                                  {suggestion.type}
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-3">{suggestion.description}</p>

                            <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                              <strong>AI Reasoning:</strong> {suggestion.reasoning}
                            </div>

                            {/* Expanded Details */}
                            {isSelected && (
                              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                                {suggestion.type === "task" && (
                                  <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900">Suggested Task Details:</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <span className="text-gray-500">Title:</span>
                                        <div className="font-medium">{suggestion.data.title}</div>
                                      </div>
                                      <div>
                                        <span className="text-gray-500">Priority:</span>
                                        <div className="font-medium capitalize">{suggestion.data.priority}</div>
                                      </div>
                                      <div>
                                        <span className="text-gray-500">Estimated Hours:</span>
                                        <div className="font-medium">{suggestion.data.estimatedHours}h</div>
                                      </div>
                                      <div>
                                        <span className="text-gray-500">Story Points:</span>
                                        <div className="font-medium">{suggestion.data.storyPoints || "N/A"}</div>
                                      </div>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Description:</span>
                                      <div className="mt-1">{suggestion.data.description}</div>
                                    </div>
                                    {suggestion.data.tags && (
                                      <div>
                                        <span className="text-gray-500">Tags:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                          {suggestion.data.tags.map((tag: string) => (
                                            <span
                                              key={tag}
                                              className="px-2 py-1 text-xs bg-[#fed850] text-[#003a78] rounded"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}

                                {suggestion.type === "optimization" && (
                                  <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900">Optimization Recommendations:</h4>
                                    <ul className="space-y-2">
                                      {suggestion.data.optimizations.map((opt: string, index: number) => (
                                        <li key={index} className="flex items-start space-x-2">
                                          <TrendingUp size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                                          <span className="text-sm">{opt}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {suggestion.type === "dependency" && (
                                  <div className="space-y-3">
                                    <h4 className="font-medium text-gray-900">Dependency Recommendations:</h4>
                                    <div className="space-y-2">
                                      {suggestion.data.dependencies.map((dep: any, index: number) => (
                                        <div key={index} className="flex items-center space-x-2 text-sm">
                                          <AlertTriangle size={16} className="text-orange-600" />
                                          <span>
                                            <strong>{dep.from}</strong> should depend on <strong>{dep.to}</strong>
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        {isSelected && (
                          <div className="flex items-center justify-end space-x-3 mt-4 pt-4 border-t border-gray-200">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedSuggestion(null)
                              }}
                              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              Dismiss
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleApplySuggestion(suggestion)
                              }}
                              className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors"
                            >
                              {suggestion.type === "task" ? "Create Task" : "Apply Suggestion"}
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          {!loading && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  AI analysis completed • {suggestions.length} suggestions generated
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
