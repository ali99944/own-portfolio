'use client'

import { useEffect } from 'react'
import Head from 'next/head'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

const dummyArticle = {
  id: 1,
  title: 'Mastering JavaScript Arrays',
  excerpt: 'A deep dive into array methods and best practices.',
  content: `
    ### Introduction
    JavaScript arrays are a fundamental part of web development, offering powerful methods to manipulate and transform data. This article explores advanced techniques to master array operations, published at 04:10 PM EEST on Monday, June 16, 2025.

    ### Why Arrays Matter
    Arrays allow developers to store and manage collections of data efficiently. Whether you're filtering data, mapping transformations, or reducing values, understanding array methods can significantly boost your productivity.

    ### Key Array Methods
    Let's dive into some essential methods:

    #### 1. 'map'
    The 'map' method creates a new array by applying a function to each element.
    <pre><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]</code></pre>

    #### 2. 'filter'
    Use 'filter' to create a new array with elements that pass a test.
    <pre><code>const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]</code></pre>

    #### 3. 'reduce'
    The 'reduce' method reduces an array to a single value.
    <pre><code>const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10</code></pre>

    ### Practical Example
    Imagine you're building a shopping cart. Here's how you might calculate the total:
    <pre><code>const cart = [
  { item: 'Book', price: 10 },
  { item: 'Pen', price: 2 },
  { item: 'Notebook', price: 5 }
];
const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log(total); // 17</code></pre>

    ### Visual Aid
    <img src="https://picsum.photos/600/300?random=1" alt="Array Visualization" className="w-full h-64 object-cover rounded-lg my-6" />

    ### Best Practices
    - Always use 'const' for arrays unless you need to reassign.
    - Chain methods for cleaner code: 'numbers.filter().map()'.
    - Avoid mutating the original array when possible.

    ### Conclusion
    Mastering JavaScript arrays opens up a world of possibilities for efficient coding. Experiment with these methods in your next project and watch your skills grow!

    ### Further Reading
    - [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [Eloquent JavaScript](https://eloquentjavascript.net/)
  `,
  image: 'https://picsum.photos/300/200?random=1',
}

export default function ArticleDetails() {
  const router = useRouter()
  const { id } = useParams()

  useEffect(() => {
    if (id && parseInt(id as string) !== dummyArticle.id) {
      router.push('/articles')
    }
  }, [id, router])


  return (
    <div className={`min-h-screen bg-gray-50 transition-colors duration-300 font-sans`}>
      <Head>
        <title>{dummyArticle.title} - Ali Tarek</title>
        <meta name="description" content={dummyArticle.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img src={dummyArticle.image} alt={dummyArticle.title} className="w-full h-96 object-cover rounded-lg mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{dummyArticle.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{dummyArticle.excerpt}</p>
        <div className="prose dark:prose-invert max-w-none bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 border border-gray-200">
          <div dangerouslySetInnerHTML={{ __html: dummyArticle.content }} />
        </div>
        <Link href="/articles" className="mt-6 inline-block text-[#003a78] hover:text-[#003a78]/90 hover:underline transition-colors">
          Back to Articles
        </Link>
      </main>
    </div>
  )
}