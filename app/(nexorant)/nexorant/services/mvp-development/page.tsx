"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Code,
  Menu,
  X,
  Rocket,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  Shield,
  BarChart3,
  Star,
  Quote,
} from "lucide-react"

const mvpBenefits = [
  {
    icon: Clock,
    title: "Faster Time to Market",
    description: "Launch your product in 8-12 weeks instead of 6+ months with our streamlined MVP approach.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Development",
    description: "Reduce initial investment by 60-70% while validating your core business hypothesis.",
  },
  {
    icon: Users,
    title: "Early User Feedback",
    description:
      "Get real user insights to guide future development and reduce the risk of building unwanted features.",
  },
  {
    icon: TrendingUp,
    title: "Investor-Ready Product",
    description: "Demonstrate traction and user validation to attract investors and secure funding rounds.",
  },
]

const mvpProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "1-2 weeks",
    description: "We analyze your idea, identify core features, and create a strategic roadmap for your MVP.",
    activities: ["Market research", "Competitor analysis", "Feature prioritization", "Technical architecture"],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    duration: "2-3 weeks",
    description: "Create user-centered designs and interactive prototypes to validate the user experience.",
    activities: ["User journey mapping", "Wireframing", "UI/UX design", "Interactive prototypes"],
  },
  {
    step: "03",
    title: "MVP Development",
    duration: "4-6 weeks",
    description: "Build your MVP with core features using agile development methodology.",
    activities: ["Frontend development", "Backend development", "Database setup", "API integration"],
  },
  {
    step: "04",
    title: "Testing & Launch",
    duration: "1-2 weeks",
    description: "Comprehensive testing, deployment, and launch preparation with ongoing support.",
    activities: ["Quality assurance", "Performance testing", "Deployment", "Launch support"],
  },
]

const mvpFeatures = [
  {
    icon: Rocket,
    title: "Rapid Development",
    description: "Agile methodology with 2-week sprints for quick iterations and feedback loops.",
  },
  {
    icon: Target,
    title: "Core Feature Focus",
    description: "Identify and build only the essential features that solve your users' primary problem.",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Build with growth in mind using modern, scalable technologies and best practices.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Implement security best practices from day one to protect user data and business assets.",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Built-in analytics to track user behavior and measure product-market fit.",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Complete user authentication, profiles, and role-based access control systems.",
  },
]

const technologies = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL"],
  },
  {
    category: "Database",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Monitoring"],
  },
]


const caseStudies = [
  {
    title: "HealthConnect MVP",
    description: "Telemedicine platform MVP that secured $2M in Series A funding",
    results: ["50K+ users in 3 months", "$2M funding raised", "4.8/5 app store rating"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "EcoMarket MVP",
    description: "Sustainable marketplace MVP that achieved product-market fit",
    results: ["100K+ products listed", "250% conversion rate", "90% user retention"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const faqs = [
  {
    question: "What exactly is an MVP and why do I need one?",
    answer:
      "An MVP (Minimum Viable Product) is a version of your product with just enough features to satisfy early customers and provide feedback for future development. It helps you validate your business idea, reduce development costs, and get to market faster.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Typically 8-16 weeks depending on complexity. Our Startup MVP takes 8-10 weeks, Business MVP takes 10-12 weeks, and Enterprise MVP takes 12-16 weeks. We use agile methodology with 2-week sprints for faster delivery.",
  },
  {
    question: "What's included in the MVP development cost?",
    answer:
      "Our pricing includes discovery, design, development, testing, deployment, and post-launch support. You'll get a fully functional product with user authentication, database, hosting setup, and documentation.",
  },
  {
    question: "Can you help scale the MVP after launch?",
    answer:
      "We build MVPs with scalability in mind and offer ongoing development services to add features, optimize performance, and scale your product as your user base grows.",
  },
  {
    question: "Do you provide ongoing support after MVP launch?",
    answer:
      "Yes, all our packages include post-launch support ranging from 2-8 weeks. We also offer ongoing maintenance and development services to help you iterate and improve your product.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "We use agile methodology with regular check-ins and demos. Minor changes are included, and we're flexible with adjustments. Major scope changes may affect timeline and cost, which we'll discuss transparently.",
  },
]

const testimonials = [
  {
    quote:
      "NEXORANT built our MVP in just 10 weeks, and we secured Series A funding within 6 months of launch. Their focus on core features and user experience was exactly what we needed.",
    author: "Jennifer Chen",
    role: "CEO, HealthConnect",
    rating: 5,
  },
  {
    quote:
      "The MVP they delivered exceeded our expectations. The scalable architecture allowed us to grow from 1K to 100K users without major rewrites. Highly recommended!",
    author: "Marcus Rodriguez",
    role: "Founder, EcoMarket",
    rating: 5,
  },
]

export default function MVPDevelopmentPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket size={40} className="text-[#003a78]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MVP <span className="text-[#fed850]">Development</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your idea into a market-ready product in 8-12 weeks. Our MVP development service helps startups
              and businesses validate their concepts, attract investors, and achieve faster time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/nexorant/consultation"
                className="inline-flex items-center px-8 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
              >
                <Lightbulb size={20} className="mr-2" />
                Discuss Your MVP
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MVP Development?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MVP development is the smartest way to launch your product, minimize risk, and maximize learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mvpBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#003a78] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our MVP Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process that takes your idea from concept to market-ready product.
            </p>
          </div>

          <div className="space-y-12">
            {mvpProcess.map((phase, index) => (
              <>
                <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#003a78] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm font-medium text-[#003a78] bg-[#003a78]/10 px-4 py-2 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{phase.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <hr className="text-black/20" />
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What&apos;s Included in Your MVP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every MVP we build includes these essential features and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mvpFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#fed850]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We select the best modern technologies to ensure your MVP is fast, scalable, and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-[#003a78] text-white rounded-lg text-sm font-medium text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Case Studies Section */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MVP Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our MVP development helped startups achieve their goals and secure funding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-green-700">
                        <TrendingUp size={16} className="mr-2" />
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from founders who successfully launched their MVPs with NEXORANT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote size={32} className="text-[#003a78] mb-4" />
                <blockquote className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f1f0ec]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our MVP development service.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003a78] to-[#003a78]/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your MVP?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s turn your idea into a market-ready product. Schedule a free consultation to discuss your MVP
            requirements and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nexorant/consultation"
              className="inline-flex items-center px-8 py-3 bg-[#fed850] text-[#003a78] rounded-lg hover:bg-[#fed850]/90 transition-colors font-semibold text-lg"
            >
              <Rocket size={20} className="mr-2" />
              Start Your MVP Journey
            </Link>
            <Link
              href="/nexorant/work"
              className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              View Our Work
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
