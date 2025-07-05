"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X, ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, CheckCircle, Star, Quote, BarChart3, Cloud, Shield, Zap, Target } from 'lucide-react'

const projectStats = [
  { label: "Project Duration", value: "6 months", icon: Calendar },
  { label: "Team Size", value: "5 developers", icon: Users },
  { label: "User Engagement", value: "+300%", icon: TrendingUp },
  { label: "Client Rating", value: "5.0/5.0", icon: Star },
]

const challenges = [
  {
    title: "Legacy Data Systems",
    description: "Client had multiple disconnected data sources with inconsistent formats and no real-time processing capabilities.",
  },
  {
    title: "Scalability Issues",
    description: "Existing analytics tools couldn't handle the growing volume of data and concurrent users.",
  },
  {
    title: "Complex Visualizations",
    description: "Need for advanced, interactive charts and dashboards that could handle complex business metrics.",
  },
  {
    title: "Performance Requirements",
    description: "Real-time data processing with sub-second response times for critical business decisions.",
  },
]

const solutions = [
  {
    title: "Microservices Architecture",
    description: "Built a scalable microservices architecture using Node.js and Docker for better performance and maintainability.",
    icon: Cloud,
  },
  {
    title: "Real-time Data Pipeline",
    description: "Implemented Apache Kafka and Redis for real-time data streaming and caching.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics Engine",
    description: "Developed custom analytics engine with machine learning capabilities for predictive insights.",
    icon: BarChart3,
  },
  {
    title: "Secure Data Management",
    description: "Implemented enterprise-grade security with role-based access control and data encryption.",
    icon: Shield,
  },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Apache Kafka", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "D3.js", category: "Visualization" },
]

const results = [
  {
    metric: "300%",
    description: "Increase in user engagement",
    detail: "Users now spend 3x more time analyzing data with interactive dashboards",
  },
  {
    metric: "50%",
    description: "Reduction in data processing time",
    detail: "Real-time processing reduced average query time from 10s to 5s",
  },
  {
    metric: "99.9%",
    description: "System uptime achieved",
    detail: "Robust architecture ensures consistent availability for critical business operations",
  },
  {
    metric: "40%",
    description: "Increase in client retention",
    detail: "TechFlow's clients are more satisfied with improved analytics capabilities",
  },
]

const developmentPhases = [
  {
    phase: "Discovery & Planning",
    duration: "2 weeks",
    activities: ["Requirements gathering", "Technical architecture design", "UI/UX wireframes", "Project roadmap"],
  },
  {
    phase: "MVP Development",
    duration: "8 weeks",
    activities: ["Core analytics engine", "Basic dashboard", "Data integration", "User authentication"],
  },
  {
    phase: "Advanced Features",
    duration: "12 weeks",
    activities: ["Machine learning integration", "Advanced visualizations", "Real-time processing", "Performance optimization"],
  },
  {
    phase: "Testing & Deployment",
    duration: "4 weeks",
    activities: ["Comprehensive testing", "Security audit", "Performance testing", "Production deployment"],
  },
]

export default function TechFlowCaseStudy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f1f0ec]">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/nexorant" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#003a78] rounded-lg flex items-center justify-center">
                <Code size={20} className="text-[#fed850]" />
              </div>
              <span className="text-xl font-bold text-[#003a78]">NEXORANT</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/nexorant#services" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Services
              </Link>
              <Link href="/nexorant/about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                About
              </Link>
              <Link href="/nexorant/work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Our Work
              </Link>
              <Link href="/nexorant/contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Contact
              </Link>
              <Link
                href="/nexorant/consultation"
                className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
              >
                Free Consultation
              </Link>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="/nexorant#services" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Services
                </Link>
                <Link href="/nexorant/about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  About
                </Link>
                <Link href="/nexorant/work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Our Work
                </Link>
                <Link href="/nexorant/contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/nexorant/work"
            className="inline-flex items-center text-[#003a78] hover:text-[#003a78]/80 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Our Work
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-2 bg-[#fed850] text-[#003a78] rounded-full text-sm font-bold">CASE STUDY</span>
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">SaaS Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TechFlow <span className="text-[#fed850]">Analytics Platform</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              How we built a real-time business intelligence platform that increased user engagement by 300% and
              transformed TechFlow&apos;s data analytics capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://techflow-demo.com"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
              >
                <ExternalLink size={20} className="mr-2" />
                View Live Platform
              </Link>
              <Link
                href="/nexorant/consultation"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-6">
                TechFlow Inc., a growing technology consultancy, needed a comprehensive analytics platform to help their
                clients make data-driven decisions. Their existing tools were fragmented, slow, and couldn&apos;t handle the
                increasing volume of data from multiple sources.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We built a real-time business intelligence platform with advanced visualization capabilities, machine
                learning-powered insights, and seamless integration with multiple data sources.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Real-time data processing and visualization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Machine learning-powered predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Custom dashboard builder with drag-and-drop interface</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Enterprise-grade security and role-based access control</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="TechFlow Analytics Dashboard"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Challenges We Solved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TechFlow faced several critical challenges that were limiting their ability to serve clients effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We designed and implemented a comprehensive solution that addressed each challenge with modern technology
              and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-700">{solution.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensured timely delivery while maintaining high quality standards.
            </p>
          </div>

          <div className="space-y-8">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#003a78] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    <span className="text-sm font-medium text-[#003a78] bg-[#003a78]/10 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We selected the best technologies for performance, scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Frontend", "Backend", "Database", "Infrastructure"].map((category) => (
              <div key={category} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-2">
                  {technologies
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                      <div key={tech.name} className="px-3 py-2 bg-[#003a78] text-white rounded-lg text-sm font-medium">
                        {tech.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The platform delivered exceptional results that exceeded client expectations and transformed their business
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <div className="text-4xl font-bold text-green-800 mb-2">{result.metric}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{result.description}</div>
                <div className="text-gray-700">{result.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={48} className="text-[#003a78] mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic">
            &quot;NEXORANT transformed our data analytics capabilities completely. The platform they built has become central
            to our business operations and has significantly improved our client satisfaction. The real-time insights
            and predictive analytics have given us a competitive edge we never had before.&quot;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Sarah Johnson"
              className="w-15 h-15 rounded-full"
            />
            <div className="text-left">
              <div className="font-bold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">CTO, TechFlow Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can build a custom solution that delivers similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/consultation"
              className="inline-flex items-center px-8 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
            >
              <Target size={20} className="mr-2" />
              Get Free Consultation
            </Link>
            <Link
              href="/nexorant/work"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/nexorant" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#fed850] rounded-lg flex items-center justify-center">
                  <Code size={20} className="text-[#003a78]" />
                </div>
                <span className="text-xl font-bold">NEXORANT</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Building next-generation software solutions that drive business growth through high-performance
                applications and innovative technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/nexorant/services/web-development" className="hover:text-[#fed850] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/nexorant/services/mobile-apps" className="hover:text-[#fed850] transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/nexorant/services/mvp-development" className="hover:text-[#fed850] transition-colors">
                    MVP Development
                  </Link>
                </li>
                <li>
                  <Link href="/nexorant#services" className="hover:text-[#fed850] transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/nexorant/privacy-policy" className="hover:text-[#fed850] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/nexorant/terms-of-service" className="hover:text-[#fed850] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 NEXORANT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
