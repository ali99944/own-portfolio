'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Github, ExternalLink, Book } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  gallery: string[]
  technologies: string[]
  links: {
    github: string
    live: string
    documentation: string
  }
  details: {
    overview: string
    features: string[]
    performanceMetrics: string[]
    developmentJourney: string
  }
}

const dummyProject: Project = {
  id: 1,
  title: 'JPC STORE',
  description: 'A modern, scalable e-commerce platform designed for seamless shopping experiences, featuring advanced product filtering, secure payments, and personalized recommendations.',
  image: 'https://picsum.photos/800/400?random=1',
  gallery: [
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4',
    'https://picsum.photos/600/400?random=5',
  ],
  technologies: [
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB',
    'Stripe',
    'Tailwind CSS',
    'GraphQL',
    'Redis',
    'AWS',
  ],
  links: {
    github: 'https://github.com/alitarek/jpc-store',
    live: 'https://jpcstore.alitarek.com',
    documentation: 'https://docs.jpcstore.alitarek.com',
  },
  details: {
    overview: `
      Launched on March 10, 2023, JPC STORE is a cutting-edge e-commerce platform built to deliver a fast, secure, and user-friendly shopping experience. As of 07:14 PM EEST, June 16, 2025, it has served over 10,000 customers and processed transactions worth $1.2M, with a 4.8/5 customer satisfaction rating.
    `,
    features: [
      'Advanced Product Filtering: Dynamic filters for categories, price, ratings, and custom attributes, powered by GraphQL.',
      'Secure Payments: Integrated Stripe for secure, multi-currency transactions with fraud detection.',
      'Personalized Recommendations: AI-driven product suggestions using user behavior and purchase history.',
      'Real-Time Inventory: Redis-powered inventory management for accurate stock updates.',
      'Multi-Platform Support: Fully responsive design with dedicated iOS and Android apps.',
      'Order Tracking: Real-time order tracking with email and SMS notifications.',
      'Customer Reviews: Moderated review system with image upload support.',
    ],
    performanceMetrics: [
      'Page Load Time: < 1.5s (95th percentile, measured via Lighthouse).',
      'Scalability: Handles 10,000 concurrent users with AWS auto-scaling.',
      'Uptime: 99.99% since launch, monitored via AWS CloudWatch.',
    ],
    developmentJourney: `
      JPC STORE started as a solution to modernize e-commerce for small to medium businesses. The project was developed over 18 months, with a team of 15 developers contributing to its success. Key milestones include:
      - v1.0 Release (June 2023): Initial launch with core e-commerce functionality.
      - v1.5 Update (December 2023): Added GraphQL API and AI recommendations.
      - v2.0 Release (April 2025): Introduced mobile apps and AWS deployment for scalability.
    `
  },
}

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    if (id && parseInt(id as string) !== dummyProject.id) {
      window.location.href = '/projects'
    } else {
      setProject(dummyProject)
    }
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans">
      <Head>
        <title>{project.title} - Ali Tarek</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />

        {/* Links as Buttons */}
        <div className="mb-6 flex justify-center space-x-4">
          <Link
            href={project.links.github}
            className="px-6 py-2 bg-[#003a78] text-white hover:bg-[#003a78]/90 font-semibold rounded-lg transition"
          >
            <Github size={16} className="inline mr-2" /> GitHub
          </Link>
          <Link
            href={project.links.live}
            className="px-6 py-2 bg-[#fed850] text-[#003a78] font-semibold rounded-lg hover:bg-[#fed850]/80 transition"
          >
            <ExternalLink size={16} className="inline mr-2" /> Live
          </Link>
          <Link
            href={project.links.documentation}
            className="px-6 py-2 bg-[#fed850] text-[#003a78] font-semibold rounded-lg hover:bg-[#fed850]/80 transition"
          >
            <Book size={16} className="inline mr-2" /> Docs
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

        {/* Gallery Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} gallery ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Technology Used */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#003a78] text-[#fed850] rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-6 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.details.overview}</p>
        </div>

        {/* Features Section */}
        <div className="mb-6 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Features</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            {project.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Performance Metrics Section */}
        <div className="mb-6 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h2>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
            {project.details.performanceMetrics.map((metric, index) => (
              <li key={index}>{metric}</li>
            ))}
          </ul>
        </div>

        {/* Development Journey Section */}
        <div className="mb-6 bg-white/90 dark:bg-gray-800/90 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Development Journey</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.details.developmentJourney}</p>
        </div>


        <Link
          href="/projects"
          className="mt-6 inline-block text-[#003a78] hover:text-[#fed850] transition-colors"
        >
          Back to Projects
        </Link>
      </main>
    </div>
  )
}