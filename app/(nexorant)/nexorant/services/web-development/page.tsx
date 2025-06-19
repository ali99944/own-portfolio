"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Zap, Globe, CheckCircle, ArrowRight, Menu, X, Palette, Search, ShoppingCart, BarChart, Minus, Plus } from 'lucide-react'

const webServices = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Tailored web solutions built to meet your specific business requirements and goals.",
    features: ["Custom functionality", "Scalable architecture", "Modern UI/UX", "API integrations"],
  },
  {
    icon: Zap,
    title: "High-Performance Websites",
    description: "Lightning-fast websites optimized for speed, SEO, and user experience.",
    features: ["Sub-second load times", "SEO optimization", "Performance monitoring", "CDN integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and analytics.",
    features: ["Payment gateways", "Inventory management", "Order tracking", "Analytics dashboard"],
  },
  {
    icon: BarChart,
    title: "SaaS Platforms",
    description: "Software-as-a-Service platforms with subscription management and user dashboards.",
    features: ["User management", "Subscription billing", "Analytics", "Multi-tenancy"],
  },
  {
    icon: Palette,
    title: "Progressive Web Apps",
    description: "Modern web applications that work offline and provide native app-like experiences.",
    features: ["Offline functionality", "Push notifications", "App-like experience", "Cross-platform"],
  },
  {
    icon: Search,
    title: "CMS & Content Platforms",
    description: "Content management systems and publishing platforms for easy content management.",
    features: ["Easy content editing", "Multi-user access", "SEO tools", "Media management"],
  },
]

const technologies = [
  { name: "React", category: "Frontend", description: "Modern UI library for interactive interfaces" },
  { name: "Next.js", category: "Framework", description: "Full-stack React framework with SSR" },
  { name: "Vue.js", category: "Frontend", description: "Progressive framework for building UIs" },
  { name: "Node.js", category: "Backend", description: "JavaScript runtime for server-side development" },
  { name: "Python", category: "Backend", description: "Versatile language for web applications" },
  { name: "PostgreSQL", category: "Database", description: "Powerful relational database system" },
  { name: "MongoDB", category: "Database", description: "Flexible NoSQL database solution" },
  { name: "AWS", category: "Cloud", description: "Comprehensive cloud computing platform" },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
    duration: "1-2 weeks",
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Our designers create wireframes, mockups, and interactive prototypes to visualize your web application.",
    duration: "2-3 weeks",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your application using best practices, with continuous testing and quality assurance throughout.",
    duration: "4-12 weeks",
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "We deploy your application, monitor performance, and provide ongoing optimization and support.",
    duration: "Ongoing",
  },
]

const portfolio = [
  {
    title: "TechStart Dashboard",
    description: "SaaS analytics platform with real-time data visualization",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["React", "Node.js", "PostgreSQL"],
    results: "300% increase in user engagement",
  },
  {
    title: "E-commerce Platform",
    description: "High-performance online store with advanced features",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740", 
    tags: ["Next.js", "Stripe", "AWS"],
    results: "50% faster page load times",
  },
  {
    title: "Content Management System",
    description: "Custom CMS for publishing and content management",
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["Vue.js", "Python", "MongoDB"],
    results: "90% reduction in content publishing time",
  },
]

const faqs = [
  {
    question: "How long does it take to build a web application?",
    answer: "The timeline depends on the complexity and scope of your project. Simple websites typically take 4-6 weeks, while complex web applications can take 3-6 months. We'll provide a detailed timeline during the planning phase.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages. This includes security updates, performance monitoring, bug fixes, and feature enhancements to keep your web application running smoothly.",
  },
  {
    question: "Can you integrate with existing systems and APIs?",
    answer: "We have extensive experience integrating web applications with various third-party services, APIs, and existing business systems including CRMs, payment processors, and databases.",
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use modern, proven technologies including React, Next.js, Vue.js, Node.js, Python, and various databases. We choose the best technology stack based on your specific requirements and goals.",
  },
]

export default function WebDevelopmentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              <Link href="/nexorant#about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                About
              </Link>
              <Link href="/nexorant#work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Our Work
              </Link>
              <Link href="/nexorant#contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
                Contact
              </Link>
              <Link
                href="/nexorant#contact"
                className="px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-medium"
              >
                Get Started
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
                <Link href="/nexorant#about" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  About
                </Link>
                <Link href="/nexorant#work" className="text-gray-700 hover:text-[#003a78] transition-colors">
                  Our Work
                </Link>
                <Link href="/nexorant#contact" className="text-gray-700 hover:text-[#003a78] transition-colors">
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
            <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Development
              <span className="text-[#fed850]"> Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We build high-performance web applications that drive business growth. From simple websites to complex SaaS platforms, we deliver solutions that scale with your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
              >
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we provide comprehensive development services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {webServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-100 rounded-xl p-4  ">
                  <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build modern, scalable, and maintainable web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 ">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <span className="text-xs font-medium text-[#003a78] bg-[#003a78]/10 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, index) => (
              <div key={index} className="text-center bg-gray-100 p-4 rounded-xl">
                <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#fed850] font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{step.description}</p>
                <span className="text-xs font-medium text-[#003a78] bg-[#003a78]/10 px-2 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Web Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent web development projects and the results we achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden  ">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-[#003a78]/10 text-[#003a78] text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-green-600">{project.results}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our web development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg ">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="text-[#003a78]">{openFaq === index ? <Minus size={16}/> : <Plus size={16}/>}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your web development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/contact"
              className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
            >
              Get Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/nexorant#work"
              className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              View More Projects
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
                Building next-generation software solutions that drive business growth through high-performance applications and innovative technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/nexorant/services/web-development" className="hover:text-[#fed850] transition-colors">Web Development</Link></li>
                <li><Link href="/nexorant/services/mobile-apps" className="hover:text-[#fed850] transition-colors">Mobile Apps</Link></li>
                <li><Link href="/nexorant#services" className="hover:text-[#fed850] transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/nexorant#services" className="hover:text-[#fed850] transition-colors">Performance Optimization</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/nexorant/privacy-policy" className="hover:text-[#fed850] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/nexorant/terms-of-service" className="hover:text-[#fed850] transition-colors">Terms of Service</Link></li>
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
