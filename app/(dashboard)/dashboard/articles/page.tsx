"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, Edit, Trash2, Eye, Calendar, Clock, Heart } from "lucide-react"
import DataTable, { Column } from "@/components/datatable"
import Select from "@/components/ui/select"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  status: "draft" | "published" | "scheduled"
  author: string
  publishDate: string
  views: number
  likes: number
  readTime: number
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    slug: "getting-started-react-hooks",
    excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
    content: "React Hooks revolutionized how we write React components...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    status: "published",
    author: "Ali Tarek",
    publishDate: "2024-01-15T10:00:00Z",
    views: 1234,
    likes: 89,
    readTime: 8,
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    slug: "advanced-typescript-patterns",
    excerpt: "Explore advanced TypeScript patterns that will make your code more robust and maintainable.",
    content: "TypeScript offers powerful features for type safety...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "TypeScript",
    tags: ["TypeScript", "Patterns", "JavaScript"],
    status: "published",
    author: "Ali Tarek",
    publishDate: "2024-01-12T14:30:00Z",
    views: 987,
    likes: 67,
    readTime: 12,
  },
  {
    id: "3",
    title: "Building Scalable Node.js Applications",
    slug: "building-scalable-nodejs-applications",
    excerpt: "Best practices for building scalable and maintainable Node.js applications.",
    content: "When building Node.js applications at scale...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "Node.js",
    tags: ["Node.js", "Backend", "Scalability"],
    status: "draft",
    author: "Ali Tarek",
    publishDate: "2024-01-20T09:00:00Z",
    views: 0,
    likes: 0,
    readTime: 15,
  },
  {
    id: "4",
    title: "Modern CSS Grid Techniques",
    slug: "modern-css-grid-techniques",
    excerpt: "Master CSS Grid with practical examples and modern layout techniques.",
    content: "CSS Grid has transformed how we approach web layouts...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "CSS",
    tags: ["CSS", "Grid", "Layout", "Frontend"],
    status: "scheduled",
    author: "Ali Tarek",
    publishDate: "2024-01-25T12:00:00Z",
    views: 0,
    likes: 0,
    readTime: 10,
  },
  {
    id: "5",
    title: "JavaScript Performance Optimization",
    slug: "javascript-performance-optimization",
    excerpt: "Learn how to optimize your JavaScript code for better performance and user experience.",
    content: "Performance is crucial for modern web applications...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "JavaScript",
    tags: ["JavaScript", "Performance", "Optimization"],
    status: "published",
    author: "Ali Tarek",
    publishDate: "2024-01-10T16:00:00Z",
    views: 2156,
    likes: 143,
    readTime: 6,
  },
  {
    id: "6",
    title: "Next.js 14 New Features",
    slug: "nextjs-14-new-features",
    excerpt: "Discover the latest features and improvements in Next.js 14.",
    content: "Next.js 14 brings exciting new features...",
    featuredImage: "/placeholder.svg?height=200&width=300",
    category: "Next.js",
    tags: ["Next.js", "React", "Web Development"],
    status: "draft",
    author: "Ali Tarek",
    publishDate: "2024-01-22T11:00:00Z",
    views: 0,
    likes: 0,
    readTime: 9,
  },
]

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>(mockArticles)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || article.status === statusFilter
    const matchesCategory = categoryFilter === "all" || article.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = Array.from(new Set(articles.map((article) => article.category)))

  const getStatusColor = (status: Article["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
    }
  }

  const handleDeleteArticle = (articleId: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== articleId))
  }

  const columns: Column<Article>[] = [
    {
      key: "title",
      title: "Article",
      sortable: true,
      width: "35%",
      render: (_, article) => (
        <div className="flex items-center space-x-4">
          <img
            src={article.featuredImage || "/placeholder.svg"}
            alt={article.title}
            className="w-16 h-12 object-cover rounded-lg"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 truncate hover:text-[#003a78] cursor-pointer">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 truncate mt-1">{article.excerpt}</p>
            <div className="flex items-center mt-2 space-x-2">
              {article.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-[#003a78] text-white text-xs rounded-full">
                  {tag}
                </span>
              ))}
              {article.tags.length > 2 && <span className="text-xs text-gray-500">+{article.tags.length - 2}</span>}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      title: "Category",
      sortable: true,
      width: "12%",
      render: (_, article) => (
        <span className="px-3 py-1 bg-[#fed850] text-[#003a78] rounded-full text-sm font-medium">
          {article.category}
        </span>
      ),
    },
    {
      key: "status",
      title: "Status",
      sortable: true,
      width: "12%",
      render: (_, article) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(article.status)}`}>
          {article.status}
        </span>
      ),
    },
    {
      key: "publishDate",
      title: "Date",
      sortable: true,
      width: "15%",
      render: (_, article) => (
        <div>
          <div className="flex items-center text-sm text-gray-900">
            <Calendar size={14} className="mr-1" />
            {new Date(article.publishDate).toLocaleDateString()}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Clock size={12} className="mr-1" />
            {article.readTime} min read
          </div>
        </div>
      ),
    },
    {
      key: "views",
      title: "Performance",
      sortable: true,
      width: "15%",
      render: (_, article) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-900">
            <Eye size={14} className="mr-1" />
            {article.views.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Heart size={14} className="mr-1" />
            {article.likes}
          </div>
        </div>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      width: "11%",
      render: (_, article) => (
        <div className="flex items-center space-x-1">
          <Link
            href={`/control-panel/articles/edit/${article.id}`}
            className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit size={16} />
          </Link>
          <button
            onClick={() => window.open(`/articles/${article.slug}`, "_blank")}
            className="p-2 text-gray-600 hover:text-[#003a78] hover:bg-gray-100 rounded-lg transition-colors"
            title="View"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleDeleteArticle(article.id)
            }}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ]

  const emptyState = (
    <div className="p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Edit size={32} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
      <p className="text-gray-600 mb-6">
        {searchTerm || statusFilter !== "all" || categoryFilter !== "all"
          ? "Try adjusting your search or filters"
          : "Get started by creating your first article"}
      </p>
      <Link
        href="/control-panel/articles/create"
        className="inline-flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
      >
        <Plus size={18} className="mr-2" />
        Create Article
      </Link>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003a78] to-[#003a78]/90 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Articles</h1>
            <p className="text-blue-100">Manage your blog posts and articles</p>
          </div>
          <Link
            href="/control-panel/articles/create"
            className="flex items-center px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-medium"
          >
            <Plus size={18} className="mr-2" />
            New Article
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Articles</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{articles.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center">
              <Edit size={24} className="text-[#fed850]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {articles.filter((a) => a.status === "published").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Eye size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Drafts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {articles.filter((a) => a.status === "draft").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Edit size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4  border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {articles.reduce((sum, article) => sum + article.views, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Eye size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Toolbar */}
      <div className="bg-white rounded-xl  border border-gray-200 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">

            <Select
              value={statusFilter}
              options={[
                { label: 'All Status', value: 'all' },
                { label: 'Published', value: 'published' },
                { label: 'Draft', value: 'draft' },
                { label: 'Scheduled', value: 'scheduled' },
              ]}
              onChange={(e) => setStatusFilter(e)}
            />

            <Select
              value={categoryFilter}
              options={categories.map(cat => {
                return {
                    label: cat, value: cat
                }
              })}
              onChange={(e) => setCategoryFilter(e)}
            />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={filteredArticles}
        columns={columns}
        pageSize={10}
        emptyState={emptyState}
        onRowClick={(article) => {
          // Optional: Navigate to article detail or edit page
          console.log("Clicked article:", article.title)
        }}
      />
    </div>
  )
}
