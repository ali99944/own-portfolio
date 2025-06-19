"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
// import dynamic from "next/dynamic"
import { Save, Eye, X, Plus, Globe, ImageIcon } from "lucide-react"

// Dynamically import ReactQuill to avoid SSR issues
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"

interface ArticleFormData {
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  status: "draft" | "published" | "scheduled"
  publishDate: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

const categories = ["React", "TypeScript", "Node.js", "CSS", "JavaScript", "Web Development", "Mobile", "Backend"]

export default function CreateArticlePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isPreview, setIsPreview] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [tagInput, setTagInput] = useState("")

  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "",
    tags: [],
    status: "draft",
    publishDate: new Date().toISOString().slice(0, 16),
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  })

  // Quill editor modules configuration
  // const quillModules = {
  //   toolbar: [
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //     ["bold", "italic", "underline", "strike"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     [{ script: "sub" }, { script: "super" }],
  //     [{ indent: "-1" }, { indent: "+1" }],
  //     [{ direction: "rtl" }],
  //     [{ color: [] }, { background: [] }],
  //     [{ font: [] }],
  //     [{ align: [] }],
  //     ["link", "image", "video"],
  //     ["blockquote", "code-block"],
  //     ["clean"],
  //   ],
  // }

  // const quillFormats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "list",
  //   "bullet",
  //   "script",
  //   "indent",
  //   "direction",
  //   "color",
  //   "background",
  //   "font",
  //   "align",
  //   "link",
  //   "image",
  //   "video",
  //   "blockquote",
  //   "code-block",
  // ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  // const handleContentChange = (content: string) => {
  //   setFormData((prev) => ({ ...prev, content }))
  // }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload to a server or cloud storage
      const imageUrl = URL.createObjectURL(file)
      setFormData((prev) => ({ ...prev, featuredImage: imageUrl }))
    }
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSave = async (status: "draft" | "published") => {
    setIsSaving(true)
    try {
      const articleData = { ...formData, status }
      console.log("Saving article:", articleData)
      // Here you would make an API call to save the article
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      router.push("/control-panel/articles")
    } catch (error) {
      console.error("Error saving article:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handlePreview = () => {
    setIsPreview(!isPreview)
  }

  if (isPreview) {
    return (
      <div className="space-y-6">
        {/* Preview Header */}
        <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Article Preview</h1>
              <p className="text-blue-100">Preview how your article will look</p>
            </div>
            <button
              onClick={handlePreview}
              className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
            >
              <X size={18} className="mr-2" />
              Close Preview
            </button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-white rounded-xl  border border-gray-200 p-8">
          <article className="max-w-4xl mx-auto">
            {formData.featuredImage && (
              <img
                src={formData.featuredImage || "/placeholder.svg"}
                alt={formData.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            )}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                {formData.category && (
                  <span className="px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm font-medium">
                    {formData.category}
                  </span>
                )}
                <span className="text-gray-500 text-sm">{new Date(formData.publishDate).toLocaleDateString()}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{formData.title || "Untitled Article"}</h1>
              {formData.excerpt && <p className="text-xl text-gray-600 leading-relaxed">{formData.excerpt}</p>}
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {formData.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#003a78] text-white rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content || "<p>No content yet...</p>" }}
            />
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Create New Article</h1>
            <p className="text-blue-100">Write and publish your next blog post</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePreview}
              className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Eye size={20} className="mr-2" />
              Preview
            </button>
            <button
              onClick={() => handleSave("draft")}
              disabled={isSaving}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              <Save size={20} className="mr-2" />
              {isSaving ? "Saving..." : "Save Draft"}
            </button>
            <button
              onClick={() => handleSave("published")}
              disabled={isSaving}
              className="flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold disabled:opacity-50"
            >
              <Globe size={20} className="mr-2" />
              {isSaving ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Slug */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Article Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter your article title..."
                  className="w-full px-4 py-1.5 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">alitarek.com/articles/</span>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="article-url-slug"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              placeholder="Write a brief description of your article..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-2">This will be shown in article previews and search results.</p>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">Content</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={quillModules}
                formats={quillFormats}
                placeholder="Start writing your article..."
                style={{ minHeight: "400px" }}
              /> */}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Publish Settings */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Publish Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                <input
                  type="datetime-local"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h3>
            {formData.featuredImage ? (
              <div className="relative">
                <img
                  src={formData.featuredImage || "/placeholder.svg"}
                  alt="Featured"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => setFormData((prev) => ({ ...prev, featuredImage: "" }))}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#003a78] transition-colors"
              >
                <ImageIcon size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Click to upload featured image</p>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleKeyPress}
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

          {/* SEO Settings */}
          <div className="bg-white rounded-xl  border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  placeholder="SEO title for search engines"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  placeholder="Brief description for search results"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  placeholder="Comma-separated keywords"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
