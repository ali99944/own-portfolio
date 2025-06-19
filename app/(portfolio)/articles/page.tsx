'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

  const articles = [
    {
      id: 1,
      title: 'Understanding React Server Components',
      excerpt: 'Explore how React Server Components enhance performance and simplify data fetching in modern web applications.',
      image: 'https://picsum.photos/300/200?random=8',
      date: 'June 1, 2025',
    },
    {
      id: 2,
      title: 'Building Scalable APIs with GraphQL',
      excerpt: 'A deep dive into GraphQL, its advantages over REST, and best practices for scalable API design.',
      image: 'https://picsum.photos/300/200?random=9',
      date: 'May 20, 2025',
    },
    {
      id: 3,
      title: 'Mastering TypeScript in 2025',
      excerpt: 'Learn the latest TypeScript features, type safety techniques, and how to integrate it with Next.js.',
      image: 'https://picsum.photos/300/200?random=10',
      date: 'May 10, 2025',
    },
    {
      id: 4,
      title: 'Optimizing Web Performance with Next.js',
      excerpt: 'Discover strategies to optimize your Next.js applications for speed and SEO using built-in features.',
      image: 'https://picsum.photos/300/200?random=11',
      date: 'April 25, 2025',
    },
    {
      id: 5,
      title: 'Introduction to AI-Driven Development',
      excerpt: 'An overview of how AI tools are transforming software development workflows and productivity.',
      image: 'https://picsum.photos/300/200?random=12',
      date: 'April 15, 2025',
    },
    {
      id: 6,
      title: 'Securing Your Node.js Applications',
      excerpt: 'Best practices for securing Node.js apps against common vulnerabilities and attacks.',
      image: 'https://picsum.photos/300/200?random=13',
      date: 'March 30, 2025',
    },
    {
      id: 7,
      title: 'Docker for Developers: A Complete Guide',
      excerpt: 'Learn how to containerize your applications with Docker for consistent development and deployment.',
      image: 'https://picsum.photos/300/200?random=14',
      date: 'March 15, 2025',
    },
  ]

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 font-sans">
      <Head>
        <title>Ali Tarek - Articles</title>
        <meta name="description" content="Explore Ali Tarek's tech articles on coding, development, and innovation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white my-4">Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article) => (
            <div
              key={article.id}
              className="bg-gradient-to-br from-white/80 to-gray-100 dark:from-gray-800/80 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <img src={article.image} alt={article.title} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">{article.date}</p> */}
                <div className="flex justify-end items-center">
                    <Link href={`/articles/${article.id}`} className="inline-block text-[#003a78] hover:text-[#003a78]/90 hover:underline transition-colors">
                        Read More
                        </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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