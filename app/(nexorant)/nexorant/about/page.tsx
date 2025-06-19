"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X, Users, Target, Heart, Award, MapPin, Calendar, Mail, Globe, Lightbulb, Rocket, Shield, Zap } from 'lucide-react'


const values = [
  {
    icon: Target,
    title: "Excellence First",
    description: "We never compromise on quality. Every line of code, every design decision is crafted with precision.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just build software; we build lasting partnerships based on trust and mutual success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Security isn't an afterthought—it's built into every solution from the ground up.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "We optimize every aspect of your application for speed, efficiency, and scalability.",
  },
  {
    icon: Heart,
    title: "People Centered",
    description: "Technology serves people. We create solutions that improve lives and enhance user experiences.",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "NEXORANT was founded with a vision to build next-generation software solutions.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Delivered our first enterprise-scale application, setting the foundation for growth.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 15+ team members and established our core development methodologies.",
  },
  {
    year: "2023",
    title: "50+ Projects",
    description: "Reached milestone of 50+ successful projects across various industries.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Recognized as a top software development company with 99% client satisfaction.",
  },
]

const stats = [
  { number: "100+", label: "Projects Completed", icon: Rocket },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "15+", label: "Team Members", icon: Users },
  { number: "99%", label: "Client Satisfaction", icon: Award },
]

export default function AboutPage() {
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
              <Link href="/nexorant/about" className="text-[#003a78] font-medium">
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
                <Link href="/nexorant/about" className="text-[#003a78] font-medium">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#fed850]">NEXORANT</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We&apos;re a team of passionate developers, designers, and strategists dedicated to building software solutions
              that drive real business results. Founded in 2020, we&apos;ve grown from a small startup to a trusted partner
              for companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Our Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                From a shared vision to transform how businesses leverage technology, NEXORANT has grown into a leading
                software development company.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#003a78] rounded-full flex items-center justify-center">
                      <span className="text-[#fed850] font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Where We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in San Francisco with team members around the world, we combine local expertise with global
              perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-[#003a78] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">San Francisco HQ</h3>
              </div>
              <p className="text-gray-600 mb-4">
                123 Tech Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>hello@nexorant.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Globe size={24} className="text-[#003a78] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Remote Team</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our distributed team works across multiple time zones to provide continuous development and support for
                our clients worldwide.
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  <span>15+ Remote Team Members</span>
                </div>
                <div className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  <span>5 Countries, 8 Time Zones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our team can help bring your software vision to life with cutting-edge technology and
            exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/consultation"
              className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/nexorant/contact"
              className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              Contact Us
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
