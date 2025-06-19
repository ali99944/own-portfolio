"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Code,
  Menu,
  X,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Target,
  Lightbulb,  Phone,
  Video,
  MessageSquare,
} from "lucide-react"

const consultationBenefits = [
  {
    icon: Target,
    title: "Project Scope Analysis",
    description: "We'll analyze your requirements and provide a clear project roadmap with realistic timelines.",
  },
  {
    icon: Lightbulb,
    title: "Technology Recommendations",
    description: "Get expert advice on the best technology stack for your specific needs and goals.",
  },
  {
    icon: Users,
    title: "Team & Resource Planning",
    description: "Understand what team size and expertise you'll need for successful project delivery.",
  },
  {
    icon: Clock,
    title: "Timeline & Budget Estimate",
    description: "Receive detailed estimates for project timeline and investment requirements.",
  },
]

const consultationTypes = [
  {
    icon: Video,
    title: "Video Call",
    description: "Face-to-face discussion via Zoom, Google Meet, or Microsoft Teams",
    duration: "30-60 minutes",
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "Traditional phone consultation at your convenience",
    duration: "30-45 minutes",
  },
  {
    icon: MessageSquare,
    title: "In-Person Meeting",
    description: "Meet at our San Francisco office or your location (Bay Area)",
    duration: "45-90 minutes",
  },
]


export default function ConsultationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    projectDescription: "",
    budget: "",
    timeline: "",
    consultationType: "video-call",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation request submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free <span className="text-[#fed850]">Consultation</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get expert advice on your software project. Our 30-60 minute consultation will help you understand the
              scope, timeline, and investment needed to bring your vision to life.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-[#fed850] mr-2" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-[#fed850] mr-2" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-[#fed850] mr-2" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You&apos;ll Get</h2>
            <p className="text-xl text-gray-600">
              Our consultation provides valuable insights to help you make informed decisions about your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Consultation Format</h2>
            <p className="text-xl text-gray-600">Select the format that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-4`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-[#fed850]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 mb-3">{type.description}</p>
                    <span className="text-sm font-medium text-[#003a78] bg-[#003a78]/10 px-3 py-1 rounded-full">
                      {type.duration}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-100 rounded-2xl p-6 space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What service are you interested in? *
              </label>
              <select
                name="services"
                required
                value={formData.services[0] || ""}
                onChange={(e) => setFormData((prev) => ({ ...prev, services: [e.target.value] }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile App Development</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="performance-optimization">Performance Optimization</option>
                <option value="technical-consulting">Technical Consulting</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Describe what you want to build, your goals, and any specific requirements..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
              />
            </div>

            {/* Budget and Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                  <option value="not-determined">Not determined yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Timeline is flexible</option>
                </select>
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">How would you like to meet? *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-[#003a78]/10 transition-colors bg-white">
                  <input
                    type="radio"
                    name="consultationType"
                    value="video-call"
                    checked={formData.consultationType === "video-call"}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-[#003a78] focus:ring-[#003a78] border-gray-300 hidden"
                  />
                  <div className="text-center w-full">
                    <Video size={24} className="mx-auto mb-2 text-[#003a78]" />
                    <div className="font-medium text-gray-900">Video Call</div>
                    <div className="text-sm text-gray-600">30-60 min</div>
                  </div>
                </label>
                <label className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-[#003a78]/10 transition-colors bg-white">
                  <input
                    type="radio"
                    name="consultationType"
                    value="phone-call"
                    checked={formData.consultationType === "phone-call"}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-[#003a78] focus:ring-[#003a78] border-gray-300 hidden"
                  />
                  <div className="text-center w-full">
                    <Phone size={24} className="mx-auto mb-2 text-[#003a78]" />
                    <div className="font-medium text-gray-900">Phone Call</div>
                    <div className="text-sm text-gray-600">30-45 min</div>
                  </div>
                </label>
                <label className="flex items-center p-4  rounded-lg cursor-pointer hover:bg-[#003a78]/10 transition-colors bg-white">
                  <input
                    type="radio"
                    name="consultationType"
                    value="in-person"
                    checked={formData.consultationType === "in-person"}
                    onChange={handleInputChange}
                    className="mr-3 h-4 w-4 text-[#003a78] focus:ring-[#003a78] border-gray-300 hidden"
                  />
                  <div className="text-center w-full">
                    <MessageSquare size={24} className="mx-auto mb-2 text-[#003a78]" />
                    <div className="font-medium text-gray-900">In Person</div>
                    <div className="text-sm text-gray-600">45-90 min</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <div className="flex justify-center">
                <button
                type="submit"
                className=" flex items-center justify-center px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-semibold text-md"
              >
                <Calendar size={20} className="mr-2" />
                Request Free Consultation
              </button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                We&apos;ll get back to you within 24 hours to schedule your consultation.
              </p>
            </div>
          </form>
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
