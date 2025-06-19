"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X, Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, Calendar } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@nexorant.com",
    action: "mailto:hello@nexorant.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team during business hours",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: Calendar,
    title: "Schedule a Meeting",
    description: "Book a free consultation to discuss your project",
    contact: "Free 30-min consultation",
    action: "/nexorant/consultation",
  },
]

const offices = [
  {
    city: "San Francisco",
    address: "123 Tech Street, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@nexorant.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    isHQ: true,
  },
  {
    city: "Remote Team",
    address: "Distributed worldwide",
    phone: "+1 (555) 123-4567",
    email: "remote@nexorant.com",
    hours: "24/7 Support Available",
    isHQ: false,
  },
]

const inquiryTypes = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-apps", label: "Mobile Apps" },
  { value: "cloud-solutions", label: "Cloud Solutions" },
  { value: "performance-optimization", label: "Performance Optimization" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "support", label: "Support & Maintenance" },
  { value: "other", label: "Other" },
]

const budgetRanges = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
  { value: "not-sure", label: "Not sure yet" },
]

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within 1 month" },
  { value: "2-3-months", label: "2-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-months-plus", label: "6+ months" },
  { value: "flexible", label: "Flexible" },
]

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend
  }

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
              <Link href="/nexorant/contact" className="text-[#003a78] font-medium">
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
                <Link href="/nexorant/contact" className="text-[#003a78] font-medium">
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
              Get In <span className="text-[#fed850]">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to start your next software project? We&apos;d love to hear about your ideas and discuss how we can help
              bring them to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Link
                  key={index}
                  href={method.action}
                  className="bg-gray-100 rounded-xl p-4 text-center"
                >
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-[#003a78] font-semibold">{method.contact}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-[#003a78] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003a78] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-2 bg-[#003a78] text-white rounded-lg hover:bg-[#003a78]/90 transition-colors font-semibold"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center mb-3">
                        <MapPin size={20} className="text-[#003a78] mr-2" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {office.city} {office.isHQ && <span className="text-[#003a78]">(HQ)</span>}
                        </h3>
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p>{office.address}</p>
                        <div className="flex items-center">
                          <Phone size={16} className="mr-2" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={16} className="mr-2" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center mb-4">
                  <HelpCircle size={20} className="text-[#003a78] mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Quick Questions?</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">How quickly do you respond?</p>
                    <p className="text-gray-600">We respond to all inquiries within 24 hours, usually much sooner.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Do you offer free consultations?</p>
                    <p className="text-gray-600">Yes! We offer free 30-minute consultations to discuss your project.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">What information should I include?</p>
                    <p className="text-gray-600">
                      Tell us about your project goals, timeline, and any specific requirements you have.
                    </p>
                  </div>
                </div>
              </div>


            </div>
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
