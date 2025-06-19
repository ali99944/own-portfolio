"use client"

import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X, Shield, Eye, Database, Lock } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            <Shield size={40} className="text-[#003a78]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-blue-100">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <Database size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Contact us through our website or email</li>
                <li>Request a consultation or quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or feedback forms</li>
                <li>Apply for employment opportunities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources and search terms</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <Eye size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">How We Use Your Information</h2>
              </div>

              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
                <li>Process job applications and recruitment</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>

              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party service providers who assist us in
                  operating our website and conducting business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business
                  assets
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent for specific purposes
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#003a78] rounded-lg flex items-center justify-center mr-4">
                  <Lock size={24} className="text-[#fed850]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Data Security</h2>
              </div>

              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>

              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small
                files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect
                website functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>

              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal information we hold
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service provider
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li>
                  <strong>Object:</strong> Object to processing of your personal information
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Links</h2>

              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                websites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children&apos;s Privacy</h2>

              <p className="text-gray-700 mb-4">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from
                a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>

              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure that such transfers comply with applicable data protection laws and implement appropriate
                safeguards to protect your information.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>

              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this privacy policy, unless a longer retention period is required or permitted by law. When we no longer
                need your information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>

              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated policy on our website and
                updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes
                acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gray-100 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@nexorant.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> NEXORANT, 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
              <p className="text-gray-700 mt-4">We will respond to your inquiry within 30 days of receipt.</p>
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
