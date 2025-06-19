"use client"

import Link from "next/link"
import {
  BookOpen,
  Code,
  Lightbulb,
  Target,
  Zap,
  Rocket,
  Brain,
  Coffee,
  Palette,
  Shield,
  Globe,
  Cpu,
  LucideIcon,
} from "lucide-react"

interface Series {
  id: string
  title: string
  description: string
  image: string
  articleCount: number
  category: string
  color: string
  icon: LucideIcon
}

const seriesData: Series[] = [
  {
    id: "web-foundations",
    title: "Web Foundations",
    description: "Essential concepts every web developer should master",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 24,
    category: "Web Development",
    color: "from-blue-500 to-blue-600",
    icon: Code,
  },
  {
    id: "build-different",
    title: "Build Different",
    description: "Unconventional approaches to common development challenges",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 16,
    category: "Innovation",
    color: "from-purple-500 to-purple-600",
    icon: Lightbulb,
  },
  {
    id: "predict-output",
    title: "Predict the Output",
    description: "Test your JavaScript knowledge with tricky code snippets",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 30,
    category: "JavaScript",
    color: "from-green-500 to-green-600",
    icon: Target,
  },
  {
    id: "developer-tips",
    title: "Developer Tips",
    description: "Quick tips and tricks to boost your productivity",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 50,
    category: "Productivity",
    color: "from-orange-500 to-orange-600",
    icon: Zap,
  },
  {
    id: "startup-stories",
    title: "Startup Stories",
    description: "Behind-the-scenes tales from the startup world",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 12,
    category: "Business",
    color: "from-red-500 to-red-600",
    icon: Rocket,
  },
  {
    id: "mind-benders",
    title: "Mind Benders",
    description: "Complex algorithms and data structures explained simply",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 18,
    category: "Algorithms",
    color: "from-indigo-500 to-indigo-600",
    icon: Brain,
  },
  {
    id: "coffee-code",
    title: "Coffee & Code",
    description: "Casual conversations about programming and life",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 35,
    category: "Lifestyle",
    color: "from-amber-500 to-amber-600",
    icon: Coffee,
  },
  {
    id: "design-dev",
    title: "Design Meets Dev",
    description: "Where beautiful design intersects with clean code",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 22,
    category: "Design",
    color: "from-pink-500 to-pink-600",
    icon: Palette,
  },
  {
    id: "security-first",
    title: "Security First",
    description: "Building secure applications from the ground up",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 14,
    category: "Security",
    color: "from-gray-500 to-gray-600",
    icon: Shield,
  },
  {
    id: "global-tech",
    title: "Global Tech",
    description: "Technology trends and innovations from around the world",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 28,
    category: "Technology",
    color: "from-cyan-500 to-cyan-600",
    icon: Globe,
  },
  {
    id: "performance-matters",
    title: "Performance Matters",
    description: "Optimizing applications for speed and efficiency",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 20,
    category: "Performance",
    color: "from-emerald-500 to-emerald-600",
    icon: Cpu,
  },
  {
    id: "future-code",
    title: "Future Code",
    description: "Exploring emerging technologies and programming paradigms",
    image: "/placeholder.svg?height=300&width=400",
    articleCount: 15,
    category: "Future Tech",
    color: "from-violet-500 to-violet-600",
    icon: Rocket,
  },
]

export default function SeriesPage() {

  const categories = Array.from(new Set(seriesData.map((series) => series.category)))

  const filteredSeries = seriesData

  return (
    <div className="min-h-screen bg-[#f1f0ec]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Article Series</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Curated collections of articles exploring different aspects of technology, development, and innovation.
              Dive deep into topics that matter to modern developers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <BookOpen size={20} />
                <span>{seriesData.length} Series</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Code size={20} />
                <span>{seriesData.reduce((sum, series) => sum + series.articleCount, 0)}+ Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSeries.map((series) => {
              const Icon = series.icon
              return (
                <Link
                  key={series.id}
                  href={`/series/${series.id}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Image */}
                  <div className={`h-48 bg-gradient-to-br ${series.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={48}
                        className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-white text-xs font-medium">{series.articleCount} articles</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-[#003a78] bg-[#003a78]/10 px-2 py-1 rounded-full">
                        {series.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003a78] transition-colors">
                      {series.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{series.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner-friendly tutorials to advanced technical deep-dives, our series cover the full spectrum of
              modern development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-[#fed850]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{seriesData.length}</div>
              <div className="text-gray-600">Series</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-[#fed850]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {seriesData.reduce((sum, series) => sum + series.articleCount, 0)}+
              </div>
              <div className="text-gray-600">Articles</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-[#fed850]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{categories.length}</div>
              <div className="text-gray-600">Categories</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-[#fed850]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Daily</div>
              <div className="text-gray-600">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get notified when we publish new articles in your favorite series. Never miss the latest insights and
            tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="px-8 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/rss"
              className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              RSS Feed
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
