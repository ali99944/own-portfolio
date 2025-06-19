/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed" | "blocked" | "cancelled"
  priority: "low" | "medium" | "high" | "urgent"
  assigneeId: string
  assigneeName: string
  projectId: string
  projectName: string
  createdAt: string
  updatedAt: string
  dueDate: string
  startDate: string
  estimatedHours: number
  actualHours: number
  storyPoints: number
  complexity: "low" | "medium" | "high"
  tags: string[]
  parentId: string | null
  subtasks: string[]
  dependencies: string[]
  blockedBy: string[]
  customFields: Record<string, any>
  approvalStatus: "not-required" | "pending" | "approved" | "rejected"
  approvalWorkflow: ApprovalWorkflow | null
  attachments: TaskAttachment[]
  comments: TaskComment[]
  timeTracking: TimeTracking
}

export interface ApprovalWorkflow {
  currentStage: number
  stages: ApprovalStage[]
}

export interface ApprovalStage {
  id: string
  name: string
  approver: string
  status: "pending" | "approved" | "rejected"
  completedAt: string | null
  comments?: string
}

export interface TaskAttachment {
  id: string
  name: string
  url: string
  size: number
  type: string
  uploadedBy: string
  uploadedAt: string
}

export interface TaskComment {
  id: string
  content: string
  author: string
  createdAt: string
  mentions: string[]
}

export interface TimeTracking {
  totalTime: number
  sessions: TimeSession[]
}

export interface TimeSession {
  id: string
  startTime: string
  endTime: string
  duration: number
  description: string
  userId: string
}

export interface TaskTemplate {
  id: string
  name: string
  description: string
  category: string
  tasks: TaskTemplateItem[]
  customFields: CustomField[]
  createdBy: string
  createdAt: string
  usageCount: number
}

export interface TaskTemplateItem {
  title: string
  description: string
  estimatedHours: number
  storyPoints: number
  priority: "low" | "medium" | "high" | "urgent"
  tags: string[]
  dependencies?: number[]
  customFields?: Record<string, any>
}

export interface CustomField {
  id: string
  name: string
  label: string
  type: "text" | "number" | "select" | "multiselect" | "boolean" | "date" | "url"
  options?: string[]
  required: boolean
  projectId: string
}

export interface TaskRelationship {
  id: string
  fromTaskId: string
  toTaskId: string
  type: "blocks" | "depends-on" | "relates-to" | "duplicates" | "start-to-start" | "finish-to-finish" | "start-to-finish" | "finish-to-start"
  lag?: number
  createdAt: string
}

export interface TaskFilter {
  status?: string[]
  priority?: string[]
  assignee?: string[]
  project?: string[]
  tags?: string[]
  dueDate?: {
    from?: string
    to?: string
  }
  customFields?: Record<string, any>
}

export interface BulkOperation {
  type: "update-status" | "update-assignee" | "update-priority" | "update-project" | "add-tags" | "remove-tags" | "delete" | "clone"
  data?: any
}

export interface SmartSuggestion {
  id: string
  type: "task" | "template" | "dependency" | "optimization"
  title: string
  description: string
  confidence: number
  data: any
  reasoning: string
}
