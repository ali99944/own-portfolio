"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Building2,
  Code,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Palette,
  CheckCircle,
  Mail,
  XIcon,
} from "lucide-react"

interface Business {
  id: string
  name: string
  tagline: string
  description: string
  longDescription: string
  logo: string
  primaryColor: string
  secondaryColor: string
  services: string[]
  technologies: string[]
  features: string[]
  stats: {
    clients: number
    projects: number
    satisfaction: number
  }
  website: string
  status: "active" | "launching" | "development"
}

const businesses: Business[] = [
  {
    id: "nexorant",
    name: "NEXORANT",
    tagline: "Next-Generation Software Solutions",
    description: "Cutting-edge software development and digital transformation services for modern enterprises.",
    longDescription:
      "NEXORANT specializes in building scalable, high-performance software solutions that drive digital transformation. We combine innovative technologies with proven methodologies to deliver exceptional results for our clients across various industries.",
    logo: "/placeholder.svg?height=80&width=80",
    primaryColor: "#003a78",
    secondaryColor: "#fed850",
    services: [
      "Custom Software Development",
      "Cloud Architecture & Migration",
      "API Development & Integration",
      "DevOps & Automation",
      "Technical Consulting",
    ],
    technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
    features: [
      "Scalable Architecture",
      "Cloud-Native Solutions",
      "Microservices Design",
      "Real-time Analytics",
      "Security-First Approach",
    ],
    stats: {
      clients: 25,
      projects: 50,
      satisfaction: 98,
    },
    website: "https://nexorant.com",
    status: "active",
  },
  {
    id: "devarynt",
    name: "DEVARYNT",
    tagline: "Developer Tools & Productivity",
    description: "Advanced development tools and platforms that enhance developer productivity and code quality.",
    longDescription:
      "DEVARYNT creates powerful development tools, IDEs, and productivity platforms that help developers write better code faster. Our solutions focus on improving the entire development lifecycle from coding to deployment.",
    logo: "/placeholder.svg?height=80&width=80",
    primaryColor: "#003a78",
    secondaryColor: "#fed850",
    services: [
      "IDE & Editor Development",
      "Code Analysis Tools",
      "Developer Productivity Platforms",
      "CI/CD Pipeline Tools",
      "Code Quality Automation",
    ],
    technologies: ["TypeScript", "Electron", "VS Code Extensions", "GitHub Actions", "ESLint"],
    features: [
      "Intelligent Code Completion",
      "Real-time Collaboration",
      "Advanced Debugging",
      "Performance Profiling",
      "Automated Testing",
    ],
    stats: {
      clients: 15,
      projects: 30,
      satisfaction: 96,
    },
    website: "https://devarynt.com",
    status: "launching",
  },
  {
    id: "velorant",
    name: "VELORANT",
    tagline: "High-Performance Web Applications",
    description: "Lightning-fast web applications and performance optimization services for maximum experience.",
    longDescription:
      "VELORANT focuses on building ultra-fast web applications and optimizing existing systems for peak performance. We specialize in modern web technologies and performance engineering to deliver exceptional user experiences.",
    logo: "/placeholder.svg?height=80&width=80",
    primaryColor: "#003a78",
    secondaryColor: "#fed850",
    services: [
      "High-Performance Web Apps",
      "Performance Optimization",
      "Progressive Web Apps",
      "Frontend Architecture",
      "Performance Auditing",
    ],
    technologies: ["Next.js", "React", "Svelte", "WebAssembly", "Service Workers", "CDN"],
    features: [
      "Sub-second Load Times",
      "Offline-First Design",
      "Advanced Caching",
      "Performance Monitoring",
      "Mobile Optimization",
    ],
    stats: {
      clients: 20,
      projects: 40,
      satisfaction: 97,
    },
    website: "https://velorant.io",
    status: "development",
  },
]

export default function BusinessPage() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "launching":
        return "bg-blue-100 text-blue-800"
      case "development":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active"
      case "launching":
        return "Launching"
      case "development":
        return "Development"
      default:
        return "Unknown"
    }
  }

  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes("cloud")) return Cloud
    if (service.toLowerCase().includes("mobile") || service.toLowerCase().includes("app")) return Smartphone
    if (service.toLowerCase().includes("data") || service.toLowerCase().includes("analytics")) return Database
    if (service.toLowerCase().includes("security")) return Shield
    if (service.toLowerCase().includes("design") || service.toLowerCase().includes("ui")) return Palette
    if (service.toLowerCase().includes("performance")) return Cpu
    return Code
  }

  return (
    <div className="min-h-screen bg-[#f1f0ec]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Software Companies</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Three specialized companies delivering cutting-edge software solutions, developer tools, and
              high-performance applications.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fed850]">60+</div>
                <div className="text-blue-100">Total Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fed850]">120+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fed850]">97%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <div
                key={business.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden "
              >
                {/* Card Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center">
                        <span className="text-[#fed850] font-bold text-3xl">{business.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{business.name}</h3>
                        <p className="text-sm text-gray-600">{business.tagline}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(business.status)}`}>
                          {getStatusText(business.status)}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{business.description}</p>
                </div>

                {/* Services Preview */}
                <div className="p-4 border-b border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Core Services</h4>
                  <div className="space-y-2">
                    {business.services.slice(0, 3).map((service, index) => {
                      const ServiceIcon = getServiceIcon(service)
                      return (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <ServiceIcon size={16} className="text-[#003a78]" />
                          <span>{service}</span>
                        </div>
                      )
                    })}
                    {business.services.length > 3 && (
                      <div className="text-xs text-gray-500">+{business.services.length - 3} more services</div>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="p-4 border-b border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#003a78]">{business.stats.clients}</div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#003a78]">{business.stats.projects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#003a78]">{business.stats.satisfaction}%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedBusiness(selectedBusiness === business.id ? null : business.id)}
                      className="flex-1 px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors text-sm font-medium"
                    >
                      Learn More
                    </button>
                    <Link
                      href={business.website}
                      target="_blank"
                      className="px-4 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors text-sm font-medium flex items-center"
                    >
                      <Globe size={16} className="mr-1" />
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each company specializes in different aspects of software development, providing comprehensive solutions
              for all your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Security-first approach with enterprise-grade protection and compliance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">Optimized solutions that deliver exceptional speed and efficiency.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced developers and architects with proven track records.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Built to grow with your business and adapt to changing needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003a78] to-[#003a78]/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our companies can help bring your vision to life with cutting-edge technology solutions.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="#contact"
              className="flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed View Modal */}
      {selectedBusiness && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const business = businesses.find((b) => b.id === selectedBusiness)!
              return (
                <>
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#003a78] to-[#003a78]/90">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-[#fed850] rounded-xl flex items-center justify-center">
                        <span className="text-[#003a78] font-bold text-3xl">{business.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{business.name}</h2>
                        <p className="text-blue-100">{business.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBusiness(null)}
                      className=" text-white hover:text-gray-200 rounded-lg hover:bg-white/10 text-2xl"
                    >
                      <XIcon className="w-6 h-6 cursor-pointer" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-4 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About {business.name}</h3>
                      <p className="text-gray-700 leading-relaxed">{business.longDescription}</p>
                    </div>

                    {/* Services Grid */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {business.services.map((service, index) => {
                          const ServiceIcon = getServiceIcon(service)
                          return (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-[#f1f0ec] rounded-lg">
                              <ServiceIcon size={20} className="text-[#003a78]" />
                              <span className="font-medium text-gray-900">{service}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {business.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-green-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {business.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-[#003a78] text-white rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center space-x-4 pt-6 border-t border-gray-200">
                      <Link
                        href={business.website}
                        target="_blank"
                        className="flex items-center px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
                      >
                        <Globe size={20} className="mr-2" />
                        Visit Website
                        {/* <ArrowRight size={16} className="ml-2" /> */}
                      </Link>
                      <Link
                        href="#contact"
                        className="flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-medium"
                      >
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
