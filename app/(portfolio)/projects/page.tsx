'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Briefcase } from 'lucide-react'

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const dummyProjects = [
    {
      id: 1,
      title: 'Open-Source Charting Library',
      description: 'A powerful library for creating interactive and customizable charts, widely used by developers.',
      image: 'https://picsum.photos/300/200?random=1',
    },
    {
      id: 2,
      title: 'Code Learning Platform',
      description: 'An interactive platform offering hands-on coding exercises with real-time feedback.',
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      title: 'Mobile Dev App',
      description: 'A cross-platform mobile development tool with rich features and seamless integration.',
      image: 'https://picsum.photos/300/200?random=3',
    },
    {
      id: 4,
      title: 'E-Commerce Backend',
      description: 'A robust backend solution for e-commerce platforms with payment integration.',
      image: 'https://picsum.photos/300/200?random=4',
    },
    {
      id: 5,
      title: 'AI Chatbot System',
      description: 'An intelligent chatbot built with AI to enhance customer support experiences.',
      image: 'https://picsum.photos/300/200?random=5',
    },
    {
      id: 6,
      title: 'Portfolio Dashboard',
      description: 'A dynamic dashboard for tracking personal project progress and metrics.',
      image: 'https://picsum.photos/300/200?random=6',
    },
    {
      id: 7,
      title: 'Cloud Infrastructure Tool',
      description: 'A tool for managing and optimizing cloud-based infrastructure deployments.',
      image: 'https://picsum.photos/300/200?random=7',
    },
  ]

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = dummyProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(dummyProjects.length / projectsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className={`min-h-screen  transition-colors duration-300 font-sans`}>
      <Head>
        <title>Ali Tarek - Projects</title>
        <meta name="description" content="Explore Ali Tarek's latest tech projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white my-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:from-gray-800/80 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden group"
            >
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover transition-transform duration-300" />
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#fed850] text-[#003a78] rounded-full flex items-center justify-center mr-4">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003a78] dark:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="mt-4 inline-block text-[#003a78] hover:text-[#003a78]/90 hover:underline transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg cursor-pointer ${currentPage === number ? 'bg-[#003a78] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'} hover:bg-[#fed850] hover:text-[#003a78] transition-colors`}
            >
              {number}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}