"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Code,
  Smartphone,
  Cloud,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Palette,
  TrendingUp,
  Clock,
  Target,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ChevronRight,
  Lightbulb,
  Rocket,
} from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
    features: ["Full-stack Development", "API Integration", "Database Design", "Scalable Architecture"],
  },
  {
    icon: Zap,
    title: "High-Performance Web Apps",
    description: "Lightning-fast web applications optimized for speed, user experience, and conversion rates.",
    features: ["Sub-second Load Times", "Advanced Caching", "Performance Monitoring", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description: "Scalable cloud solutions and seamless migration strategies for modern businesses.",
    features: ["AWS/Azure/GCP", "Microservices", "Auto-scaling", "Cost Optimization"],
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Comprehensive performance auditing and optimization to maximize your application's efficiency.",
    features: ["Code Optimization", "Database Tuning", "CDN Setup", "Performance Audits"],
  },
  {
    icon: Globe,
    title: "Progressive Web Apps",
    description: "Modern web applications that work offline and provide native app-like experiences.",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
  },
]

const stats = [
  { number: "100+", label: "Projects Delivered", icon: Target },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "99%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed roadmap.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs the user experience and technical architecture for optimal performance.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using best practices, with continuous testing and quality assurance.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We deploy your application and ensure a smooth launch with ongoing support.",
    icon: Rocket,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content:
      "NEXORANT transformed our legacy system into a modern, high-performance application. The results exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    content:
      "Their mobile app development expertise helped us launch our product 3 months ahead of schedule. Outstanding work!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    content:
      "The performance optimization work NEXORANT did improved our app speed by 300%. Incredible technical expertise.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const recentWork = [
  {
    title: "E-commerce Platform",
    description: "High-performance online store with advanced analytics",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking solution with biometric authentication",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["React Native", "Security", "API"],
  },
  {
    title: "SaaS Dashboard",
    description: "Real-time analytics dashboard for business intelligence",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["Next.js", "Charts", "Performance"],
  },
]

export default function NexorantHomePage() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#003a78] rounded-lg flex items-center justify-center">
                <Code size={20} className="text-[#fed850]" />
              </div>
              <span className="text-xl font-bold text-[#003a78]">NEXORANT</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                About
              </Link>
              <Link href="#work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Our Work
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Contact
              </Link>
              <Link
                href="#contact"
                className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="#services" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Services
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  About
                </Link>
                <Link href="#work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Our Work
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium w-fit"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Next-Generation
              <span className="text-[#fed850]"> Software Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              We build high-performance web applications, mobile apps, and cloud solutions that drive your business
              forward. From concept to deployment, we deliver exceptional digital experiences that scale.
            </p>
            <div className="flex sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg max-sm:text-sm"
              >
                Start Your Project
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg max-sm:text-sm"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From high-performance web applications to mobile apps and cloud solutions, we provide comprehensive
              software development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4  cursor-pointer"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        activeService === index ? "bg-[#003a78]" : "bg-[#003a78]/10"
                      }`}
                    >
                      <Icon size={24} className={activeService === index ? "text-[#fed850]" : "text-[#003a78]"} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build modern, scalable, and maintainable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#003a78] rounded-lg p-4 text-center "
              >
                <div className="text-sm font-medium text-white mb-1">{tech.name}</div>
                <div className="text-xs text-white/80">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-[#fed850]" />
                    </div>
                    <div className="text-lg font-bold text-[#003a78] mb-2">{step.step}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ChevronRight size={20} className="text-gray-300 mx-auto" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and the impact we&apos;ve made for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentWork.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden "
              >
                <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#003a78]/10 text-[#003a78] text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-semibold"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 ">
                <div className="flex items-center mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#003a78] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your project and see how we can help you achieve your goals with cutting-edge technology
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#fed850] rounded-lg flex items-center justify-center">
                  <Code size={20} className="text-[#003a78]" />
                </div>
                <span className="text-xl font-bold">NEXORANT</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Building next-generation software solutions that drive business growth through high-performance
                applications and innovative technology.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#fed850] transition-colors">
                  <Github size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#fed850] transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#fed850] transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-[#fed850] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fed850] transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fed850] transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fed850] transition-colors">
                    Performance Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  hello@nexorant.com
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NEXORANT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#fed850] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#fed850] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
