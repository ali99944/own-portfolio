"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Code,
  Menu,
  X,
  ExternalLink,
  TrendingUp,
  Users,
  Clock,
  Award,
  Star,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react"

const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "web-apps", label: "Web Applications" },
  { value: "mobile-apps", label: "Mobile Apps" },
  { value: "e-commerce", label: "E-commerce" },
  { value: "saas", label: "SaaS Platforms" },
  { value: "fintech", label: "Fintech" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
]

const projects = [
  {
    id: 1,
    title: "TechFlow Analytics Platform",
    category: "saas",
    description: "Real-time business intelligence platform with advanced data visualization and predictive analytics.",
    longDescription:
      "TechFlow needed a comprehensive analytics platform to help their clients make data-driven decisions. We built a real-time dashboard with advanced visualization capabilities, machine learning-powered insights, and seamless integration with multiple data sources.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    client: "TechFlow Inc.",
    industry: "Technology",
    projectDuration: "6 months",
    teamSize: "5 developers",
    results: [
      "300% increase in user engagement",
      "50% reduction in data processing time",
      "99.9% uptime achieved",
      "40% increase in client retention",
    ],
    features: [
      "Real-time data visualization",
      "Predictive analytics with ML",
      "Custom dashboard builder",
      "Multi-source data integration",
      "Advanced reporting system",
      "Role-based access control",
    ],
    testimonial: {
      quote:
        "NEXORANT transformed our data analytics capabilities. The platform they built has become central to our business operations.",
      author: "Sarah Johnson",
      role: "CTO, TechFlow Inc.",
    },
    liveUrl: "https://techflow-demo.com",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "HealthConnect Mobile App",
    category: "mobile-apps",
    description: "HIPAA-compliant telemedicine app connecting patients with healthcare providers.",
    longDescription:
      "HealthConnect required a secure, user-friendly mobile application to facilitate remote consultations between patients and healthcare providers. The app needed to comply with HIPAA regulations while providing an excellent user experience.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    client: "HealthConnect",
    industry: "Healthcare",
    projectDuration: "8 months",
    teamSize: "6 developers",
    results: [
      "100K+ app downloads in first 3 months",
      "4.8/5 App Store rating",
      "60% reduction in appointment no-shows",
      "HIPAA compliance achieved",
    ],
    features: [
      "Video consultations",
      "Secure messaging",
      "Appointment scheduling",
      "Medical records integration",
      "Prescription management",
      "Insurance verification",
    ],
    testimonial: {
      quote:
        "The app has revolutionized how we deliver healthcare services. Patient satisfaction has increased dramatically.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
    },
    liveUrl: "https://healthconnect-demo.com",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "EcoMarket E-commerce Platform",
    category: "e-commerce",
    description: "Sustainable marketplace with AR product visualization and carbon footprint tracking.",
    longDescription:
      "EcoMarket wanted to create an innovative e-commerce platform focused on sustainable products. The platform needed advanced features like AR product visualization and carbon footprint tracking to differentiate from competitors.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["Next.js", "React", "Python", "PostgreSQL", "AWS"],
    client: "EcoMarket",
    industry: "E-commerce",
    projectDuration: "5 months",
    teamSize: "4 developers",
    results: [
      "250% increase in conversion rate",
      "40% higher average order value",
      "90% customer satisfaction score",
      "50% reduction in return rates",
    ],
    features: [
      "AR product visualization",
      "Carbon footprint calculator",
      "Sustainable product filters",
      "Social impact tracking",
      "Subscription box service",
      "Loyalty rewards program",
    ],
    testimonial: {
      quote: "NEXORANT understood our vision for sustainable commerce and delivered beyond our expectations.",
      author: "Emily Rodriguez",
      role: "Founder, EcoMarket",
    },
    liveUrl: "https://ecomarket-demo.com",
    caseStudyUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "FinanceFlow Banking App",
    category: "fintech",
    description: "Next-generation mobile banking app with AI-powered financial insights.",
    longDescription:
      "FinanceFlow needed a modern banking application that would compete with leading fintech companies. The app required advanced security, AI-powered insights, and a seamless user experience across all devices.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["React Native", "Node.js", "Python", "PostgreSQL", "AWS"],
    client: "FinanceFlow Bank",
    industry: "Financial Services",
    projectDuration: "10 months",
    teamSize: "8 developers",
    results: ["500K+ active users", "99.99% uptime", "4.9/5 user rating", "70% reduction in support tickets"],
    features: [
      "Biometric authentication",
      "AI spending insights",
      "Real-time fraud detection",
      "Investment portfolio management",
      "Bill pay automation",
      "Cryptocurrency trading",
    ],
    testimonial: {
      quote: "The app has transformed our digital banking offering. Customer engagement has never been higher.",
      author: "David Kim",
      role: "Head of Digital, FinanceFlow Bank",
    },
    liveUrl: "https://financeflow-demo.com",
    caseStudyUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "EduTech Learning Platform",
    category: "education",
    description: "Interactive online learning platform with AI-powered personalized curriculum.",
    longDescription:
      "EduTech wanted to create an innovative learning platform that adapts to each student's learning style and pace. The platform needed to support various content types and provide detailed analytics for educators.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["React", "Next.js", "Python", "MongoDB", "AWS"],
    client: "EduTech Solutions",
    industry: "Education",
    projectDuration: "7 months",
    teamSize: "5 developers",
    results: [
      "85% improvement in learning outcomes",
      "200K+ students enrolled",
      "95% course completion rate",
      "4.7/5 instructor satisfaction",
    ],
    features: [
      "Adaptive learning algorithms",
      "Interactive video lessons",
      "Real-time collaboration tools",
      "Progress tracking dashboard",
      "Automated assessment system",
      "Multi-language support",
    ],
    testimonial: {
      quote: "The platform has revolutionized how we deliver education. Student engagement is at an all-time high.",
      author: "Lisa Thompson",
      role: "VP of Product, EduTech Solutions",
    },
    liveUrl: "https://edutech-demo.com",
    caseStudyUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "LogiTrack Supply Chain Platform",
    category: "web-apps",
    description: "End-to-end supply chain management system with real-time tracking and analytics.",
    longDescription:
      "LogiTrack needed a comprehensive supply chain management platform to help their clients optimize operations, reduce costs, and improve visibility across their entire supply chain network.",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    client: "LogiTrack Systems",
    industry: "Logistics",
    projectDuration: "9 months",
    teamSize: "7 developers",
    results: [
      "35% reduction in operational costs",
      "90% improvement in delivery accuracy",
      "Real-time visibility across 1000+ locations",
      "50% faster order processing",
    ],
    features: [
      "Real-time shipment tracking",
      "Inventory optimization",
      "Predictive analytics",
      "Supplier management",
      "Automated reporting",
      "Mobile workforce app",
    ],
    testimonial: {
      quote: "NEXORANT delivered a platform that has transformed our supply chain operations completely.",
      author: "Robert Wilson",
      role: "COO, LogiTrack Systems",
    },
    liveUrl: "https://logitrack-demo.com",
    caseStudyUrl: "#",
    featured: false,
  },
]

const stats = [
  { number: "100+", label: "Projects Completed", icon: Award },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "99%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
]

export default function WorkPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)



  return (
    <div className="min-h-screen bg-gray-100">
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
              <Link href="/nexorant/work" className="text-[#003a78] font-medium">
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
                <Link href="/nexorant/work" className="text-[#003a78] font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#fed850]">Work</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our portfolio of successful projects. From startups to enterprise clients, we&apos;ve delivered
              innovative software solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-60 object-center"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#003a78]/10 text-[#003a78] text-xs rounded-full font-medium">
                      {projectCategories.find((cat) => cat.value === project.category)?.label}
                    </span>
                    {project.featured && <span className="text-[#fed850] bg-[#003a78] py-1 px-2 rounded-full font-semibold text-xs">FEATURED</span>}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-600">
                      <div className="font-medium">{project.client}</div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <p className="text-gray-600">
                  {selectedProject.client} • {selectedProject.industry}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Project Image */}
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg"
                  />
                  <div className="flex items-center space-x-4 mt-4">
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      className="flex items-center px-4 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Link>
                    <Link
                      href={selectedProject.caseStudyUrl}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-700">{selectedProject.longDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Duration</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.projectDuration}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Team Size</h4>
                      <p className="text-gray-600 text-sm">{selectedProject.teamSize}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-[#003a78] text-white text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Results & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <TrendingUp size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 bg-gray-100 rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-4">&quot;{selectedProject.testimonial.quote}&quot;</blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-medium text-gray-900">{selectedProject.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{selectedProject.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

            {/* Why Choose Us Section - Improved Design */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose NEXORANT?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/80 rounded-2xl flex items-center justify-center mx-auto mb-6  transition-transform duration-300">
                <Zap size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance-First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every application optimized for speed, scalability, and exceptional user experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fed850] to-[#fed850]/80 rounded-2xl flex items-center justify-center mx-auto mb-6  transition-transform duration-300">
                <Shield size={32} className="text-[#003a78]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security measures and best practices to protect your data and users.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/80 rounded-2xl flex items-center justify-center mx-auto mb-6  transition-transform duration-300">
                <Users size={32} className="text-[#fed850]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced developers and architects with expertise across multiple technologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fed850] to-[#fed850]/80 rounded-2xl flex items-center justify-center mx-auto mb-6  transition-transform duration-300">
                <TrendingUp size={32} className="text-[#003a78]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Applications built to grow with your business and handle increased demand seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help you achieve similar results with a custom software solution tailored to your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/consultation"
              className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-md"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/nexorant/contact"
              className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <Link href="/nexorant#services" className="hover:text-[#fed850] transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/nexorant#services" className="hover:text-[#fed850] transition-colors">
                    Performance Optimization
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
