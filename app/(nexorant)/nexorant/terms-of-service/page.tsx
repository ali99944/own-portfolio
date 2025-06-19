"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X, FileText, Scale, AlertTriangle, Users } from "lucide-react"

export default function TermsOfServicePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#fed850] rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale size={40} className="text-[#003a78]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 mb-4">
            These terms govern your use of our services and establish the legal relationship between you and NEXORANT.
          </p>
          <p className="text-blue-100">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <FileText size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Acceptance of Terms</h2>
              </div>

              <p className="text-gray-700 mb-4">
                By accessing or using NEXORANT&apos;s services, website, or any related applications (collectively, the
                &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these
                Terms, please do not use our Services.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms constitute a legally binding agreement between you and NEXORANT (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). We may update these Terms from time to time, and your continued use of our Services constitutes
                acceptance of any changes.
              </p>
            </div>

            {/* Description of Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Services</h2>

              <p className="text-gray-700 mb-4">
                NEXORANT provides software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Custom web application development</li>
                <li>Mobile application development (iOS and Android)</li>
                <li>Cloud architecture and migration services</li>
                <li>Performance optimization and auditing</li>
                <li>Progressive web application development</li>
                <li>Technical consulting and support</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with or
                without notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <Users size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">User Responsibilities</h2>
              </div>

              <p className="text-gray-700 mb-4">By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our Services only for lawful purposes</li>
                <li>Not interfere with or disrupt our Services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our Services to transmit harmful or malicious content</li>
              </ul>
            </div>

            {/* Service Agreements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Agreements and Project Terms</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Proposals and Contracts</h3>
              <p className="text-gray-700 mb-4">
                Specific project terms, deliverables, timelines, and pricing will be outlined in separate project
                agreements or statements of work. These project-specific terms supplement and may modify these general
                Terms of Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Payment terms will be specified in individual project agreements</li>
                <li>Invoices are typically due within 30 days of receipt</li>
                <li>Late payments may incur additional fees</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
                <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Changes and Scope</h3>
              <p className="text-gray-700 mb-4">
                Changes to project scope, timeline, or deliverables must be agreed upon in writing and may result in
                additional costs. We will provide estimates for any requested changes before implementation.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Owned Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of all content, data, and materials you provide to us. By engaging our services,
                you grant us a limited license to use your content solely for the purpose of providing the agreed-upon
                services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Developed Solutions</h3>
              <p className="text-gray-700 mb-4">
                Unless otherwise specified in a project agreement, you will own the custom software solutions we develop
                specifically for you, excluding any pre-existing intellectual property, third-party components, or our
                proprietary methodologies and tools.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">NEXORANT Property</h3>
              <p className="text-gray-700 mb-4">
                We retain ownership of our proprietary methodologies, tools, templates, and any general knowledge or
                techniques developed during the course of providing services.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confidentiality</h2>

              <p className="text-gray-700 mb-4">
                We understand the sensitive nature of business information and are committed to maintaining
                confidentiality. We will:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Keep all client information confidential</li>
                <li>Use client information only for providing agreed-upon services</li>
                <li>Implement appropriate security measures to protect confidential information</li>
                <li>Not disclose client information to third parties without consent</li>
                <li>Return or destroy confidential information upon project completion if requested</li>
              </ul>
              <p className="text-gray-700 mb-4">
                For projects involving highly sensitive information, we may execute separate non-disclosure agreements
                (NDAs).
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <AlertTriangle size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Warranties and Disclaimers</h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Warranty</h3>
              <p className="text-gray-700 mb-4">
                We warrant that our services will be performed in a professional and workmanlike manner in accordance
                with industry standards. We will correct any defects in our work at no additional cost for a period
                specified in the project agreement.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclaimers</h3>
              <p className="text-gray-700 mb-4">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-4">
                We do not warrant that our services will be uninterrupted, error-free, or meet all of your requirements.
                We are not responsible for issues arising from third-party services, hosting providers, or external
                factors beyond our control.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>

              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXORANT&apos;S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR
                RELATED TO OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING
                RISE TO THE CLAIM.
              </p>
              <p className="text-gray-700 mb-4">
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Indemnification</h2>

              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless NEXORANT and its employees, contractors, and
                affiliates from and against any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Content or materials you provide to us</li>
                <li>Any third-party claims related to your business operations</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>

              <p className="text-gray-700 mb-4">
                Either party may terminate a service agreement with written notice as specified in the project
                agreement. In the absence of specific termination terms:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Either party may terminate with 30 days written notice</li>
                <li>We may terminate immediately for non-payment or breach of terms</li>
                <li>You will be responsible for payment of all work completed up to the termination date</li>
                <li>We will deliver all completed work and transfer any agreed-upon materials</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>

              <p className="text-gray-700 mb-4">
                We prefer to resolve disputes through direct communication. If a dispute cannot be resolved informally,
                the parties agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>First attempt resolution through mediation</li>
                <li>If mediation fails, resolve disputes through binding arbitration</li>
                <li>Arbitration will be conducted under the rules of the American Arbitration Association</li>
                <li>The arbitration will take place in San Francisco, California</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>

              <p className="text-gray-700 mb-4">
                These Terms and any disputes arising from or related to our services shall be governed by and construed
                in accordance with the laws of the State of California, without regard to its conflict of law
                principles.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Severability</h2>

              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will
                continue to be valid and enforceable to the fullest extent permitted by law.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entire Agreement</h2>

              <p className="text-gray-700 mb-4">
                These Terms, together with any project-specific agreements, constitute the entire agreement between you
                and NEXORANT regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> legal@nexorant.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> NEXORANT, 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
              <p className="text-gray-700 mt-4">For general inquiries, you can also reach us at hello@nexorant.com</p>
            </div>
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
