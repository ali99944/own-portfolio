"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Smartphone, Tablet, Zap, Users, CheckCircle, Menu, X, Star, Target, Globe, Bell, CreditCard, Camera, MapPin, Minus, Plus } from 'lucide-react'

const mobileServices = [
  {
    icon: Smartphone,
    title: "Native iOS Apps",
    description: "High-performance native iOS applications built with Swift and optimized for Apple devices.",
    features: ["Swift development", "App Store optimization", "iOS design guidelines", "Performance optimization"],
  },
  {
    icon: Tablet,
    title: "Native Android Apps",
    description: "Feature-rich Android applications using Kotlin/Java, optimized for Google Play Store.",
    features: ["Kotlin/Java development", "Material Design", "Google Play optimization", "Multi-device support"],
  },
  {
    icon: Globe,
    title: "Cross-Platform Apps",
    description: "Cost-effective solutions using React Native and Flutter for both iOS and Android platforms.",
    features: ["React Native/Flutter", "Single codebase", "Native performance", "Faster development"],
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage users with targeted push notifications and real-time messaging capabilities.",
    features: ["Real-time messaging", "User segmentation", "Analytics tracking", "A/B testing"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment processing with support for multiple payment gateways and methods.",
    features: ["Multiple payment methods", "Secure transactions", "Subscription billing", "Fraud protection"],
  },
  {
    icon: Camera,
    title: "Media & Camera Features",
    description: "Advanced camera functionality, image processing, and media management capabilities.",
    features: ["Camera integration", "Image processing", "Video recording", "Media galleries"],
  },
]

const platforms = [
  {
    name: "iOS",
    description: "Native iOS development using Swift and Xcode",
    technologies: ["Swift", "Xcode", "UIKit", "SwiftUI"],
    marketShare: "27%",
  },
  {
    name: "Android",
    description: "Native Android development using Kotlin and Android Studio",
    technologies: ["Kotlin", "Java", "Android Studio", "Jetpack Compose"],
    marketShare: "71%",
  },
  {
    name: "React Native",
    description: "Cross-platform development with JavaScript/TypeScript",
    technologies: ["React Native", "JavaScript", "TypeScript", "Expo"],
    marketShare: "Cross-platform",
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit for cross-platform development",
    technologies: ["Dart", "Flutter SDK", "Material Design", "Cupertino"],
    marketShare: "Cross-platform",
  },
]

const appTypes = [
  {
    icon: Users,
    title: "Social & Communication",
    description: "Social networking, messaging, and community apps",
    examples: ["Chat applications", "Social networks", "Dating apps", "Forums"],
  },
  {
    icon: CreditCard,
    title: "E-commerce & Fintech",
    description: "Shopping, payment, and financial management apps",
    examples: ["Online stores", "Payment apps", "Banking apps", "Investment platforms"],
  },
  {
    icon: MapPin,
    title: "Location & Travel",
    description: "GPS, navigation, and travel-related applications",
    examples: ["Navigation apps", "Travel booking", "Food delivery", "Ride sharing"],
  },
  {
    icon: Target,
    title: "Business & Productivity",
    description: "Enterprise and productivity-focused applications",
    examples: ["CRM systems", "Project management", "Time tracking", "Document management"],
  },
  {
    icon: Zap,
    title: "Health & Fitness",
    description: "Applications focused on health, wellness, and fitness tracking",
    examples: ["Workout apps", "Meditation apps", "Diet trackers", "Health monitoring"],
  },
  {
    icon: Star,
    title: "Entertainment & Media",
    description: "Applications for streaming, gaming, and media consumption",
    examples: ["Video streaming", "Music apps", "Mobile games", "News apps"],
  },
]

const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    description: "We analyze your target audience, define app requirements, and create a comprehensive development strategy.",
    duration: "1-2 weeks",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Our designers create intuitive user interfaces following platform-specific design guidelines.",
    duration: "2-4 weeks",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your app using best practices, with continuous testing on real devices throughout development.",
    duration: "6-16 weeks",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We handle app store submission, launch marketing, and provide ongoing maintenance and updates.",
    duration: "Ongoing",
  },
]

const portfolio = [
  {
    title: "Social Fitness App",
    description: "Social networking app for fitness enthusiasts with workout tracking",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104504.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["React Native", "Firebase", "Social"],
    results: "100K+ downloads in first month",
  },
  {
    title: "E-commerce Mobile App",
    description: "Shopping app with AR try-on features and secure payments",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104504.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["Flutter", "AR", "Payments"],
    results: "40% increase in mobile sales",
  },
  {
    title: "Banking Mobile App",
    description: "Secure banking app with biometric authentication and real-time transactions",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104504.jpg?ga=GA1.1.963014397.1747021839&semt=ais_hybrid&w=740",
    tags: ["Native iOS", "Security", "Fintech"],
    results: "99.9% uptime, 4.8 App Store rating",
  },
]

const faqs = [
  {
    question: "Should I build a native app or use cross-platform development?",
    answer: "It depends on your requirements. Native apps offer the best performance and platform-specific features, while cross-platform solutions like React Native or Flutter are more cost-effective and faster to develop. We'll help you choose the best approach based on your needs and budget.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Development time varies based on complexity. Simple apps take 2-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines during the planning phase based on your specific requirements.",
  },
  {
    question: "Do you handle app store submission and approval?",
    answer: "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store. We ensure your app meets all guidelines and requirements, and we'll work with you through any review feedback.",
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer: "We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We also offer app store optimization and marketing support to help your app succeed.",
  },
]

export default function MobileAppsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50">
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
            <div className="md:hidden py-4 ">
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
              <Smartphone size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mobile App
              <span className="text-[#fed850]"> Development</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We create powerful mobile applications for iOS and Android that engage users and drive business growth. From native apps to cross-platform solutions, we deliver exceptional mobile experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-md"
              >
                Start Your App Project
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-md"
              >
                View Our Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile App Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we provide comprehensive mobile development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-100 rounded-xl p-4    transition-all duration-300">
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

      {/* Platforms Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms We Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop for all major mobile platforms using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 ">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                  <span className="text-xs font-medium text-[#003a78] bg-[#003a78]/10 px-2 py-1 rounded-full">
                    {platform.marketShare}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <div className="space-y-1">
                  {platform.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Apps We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience building apps across various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="bg-gray-100 rounded-xl p-4 ">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} className="text-[#fed850]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-sm text-gray-700 bg-white rounded px-3 py-2">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our App Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful app delivery from concept to app store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 ">
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
      <section id="portfolio" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Mobile Apps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent mobile app projects and the results we achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden   transition-all duration-300">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your mobile app idea and create a solution that engages users and drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/contact"
              className="inline-flex items-center px-8 py-2 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-md"
            >
              Get Free App Consultation
            </Link>
            <Link
              href="/nexorant#work"
              className="inline-flex items-center px-8 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-md"
            >
              View More Apps
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

          <div className="mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 NEXORANT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
