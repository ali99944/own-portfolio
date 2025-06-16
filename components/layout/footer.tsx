'use client'

import { Mail, MessageCircle, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#003a78] to-[#003a78]/90 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#fed850]">
              <Mail className="mr-2" size={20} /> About Me
            </h3>
            <p className="text-gray-200">
              I&apos;m always excited to collaborate on innovative projects or share insights. Based in the heart of tech innovation, I’m available to discuss your ideas or provide expert guidance.
            </p>

          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#fed850]">
              <MessageCircle className="mr-2" size={20} /> Social Links
            </h3>
            <p className="text-gray-200 mb-2">
              Connect with me on my active social channels to stay updated on my latest work, tutorials, and tech
              discussions. Join a community of learners and creators!
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/alitarek" className="hover:text-[#fed850] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com/in/alitarek" className="hover:text-[#fed850] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com/alitarek" className="hover:text-[#fed850] transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-[#fed850]">
              <Mail className="mr-2" size={20} /> Contact Info
            </h3>
            <p className="text-gray-300">
              Email: <a href="mailto:ali@alitarek.com" className="hover:text-[#fed850] transition-colors">ali@alitarek.com</a>
            </p>
            <p className="text-gray-300 mt-2">Phone: +1-234-567-890</p>
            <p className="text-gray-300 mt-2">Available: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-gray-400">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Ali Tarek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}