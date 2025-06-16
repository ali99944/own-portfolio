'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const articlesPerPage = 5

const dummyArticles = [
  { id: 1, title: 'Mastering JavaScript Arrays', excerpt: 'A deep dive into array methods and best practices.', image: 'https://picsum.photos/300/200?random=1' },
  { id: 2, title: 'Building with Next.js', excerpt: 'Explore the power of Next.js for modern web apps.', image: 'https://picsum.photos/300/200?random=2' },
  { id: 3, title: 'Python for Data Science', excerpt: 'Leveraging Python for data analysis and visualization.', image: 'https://picsum.photos/300/200?random=3' },
  { id: 4, title: 'React Performance Tips', excerpt: 'Optimize your React applications for better performance.', image: 'https://picsum.photos/300/200?random=4' },
  { id: 5, title: 'Introduction to Docker', excerpt: 'Learn the basics of containerization with Docker.', image: 'https://picsum.photos/300/200?random=5' },
  { id: 6, title: 'AWS Cloud Essentials', excerpt: 'Get started with AWS cloud services and infrastructure.', image: 'https://picsum.photos/300/200?random=6' },
  { id: 7, title: 'GraphQL Basics', excerpt: 'Understand the fundamentals of GraphQL querying.', image: 'https://picsum.photos/300/200?random=7' },
]

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1)

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = dummyArticles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = Math.ceil(dummyArticles.length / articlesPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)




  return (
    <div className={`min-h-screen bg-gray-50 transition-colors duration-300 font-sans`}>
      <Head>
        <title>Ali Tarek - Articles</title>
        <meta name="description" content="Explore Ali Tarek's latest tech articles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id} className="block">
              <div className="bg-gradient-to-br from-white/80 to-gray-100 dark:from-gray-800/80 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#fed850] transition-colors">{article.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-[#003a78] hover:underline transition-colors">Read More</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg ${currentPage === number ? 'bg-[#003a78] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'} hover:bg-[#fed850] hover:text-[#003a78] transition-colors`}
            >
              {number}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}