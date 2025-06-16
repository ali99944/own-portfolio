'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Book, Share2 } from 'lucide-react'

interface Article {
  id: number
  title: string
  description: string
  image: string
  date: string
  content: string
}

const dummyArticle: Article = {
  id: 1,
  title: 'The Future of AI in Software Development',
  description: 'Discover how artificial intelligence is reshaping software development, from code generation to automated testing, as of mid-2025.',
  image: 'https://picsum.photos/800/400?random=15',
  date: 'June 15, 2025',
  content: `
    <h1>The Future of AI in Software Development</h1>
    <p class="mb-4"><strong>Published on June 15, 2025, at 07:41 PM EEST</strong> - As we move deeper into 2025, artificial intelligence (AI) is no longer a futuristic concept but a transformative force in software development. This article explores how AI is revolutionizing the industry, offering insights into its current applications and future potential.</p>

    <h2>Introduction to AI in Development</h2>
    <p>AI has evolved from assisting developers to becoming an integral part of the development lifecycle. Tools like GitHub Copilot and OpenAI's Codex are now generating code snippets, while platforms like xAI's Grok 3 are enhancing decision-making with natural language processing. The adoption rate has surged, with 65% of developers reporting AI tool usage in 2025 surveys.</p>

    <h2>Current Applications</h2>
    <ul>
      <li><strong>Code Generation:</strong> AI models can write boilerplate code, reducing development time by up to 30%.</li>
      <li><strong>Automated Testing:</strong> AI-driven testing frameworks identify bugs faster, with a 40% improvement in test coverage.</li>
      <li><strong>Code Review:</strong> Tools like DeepCode use AI to suggest optimizations, catching 25% more issues than manual reviews.</li>
      <li><strong>Personalized Development Environments:</strong> AI tailors IDE suggestions based on developer habits, boosting productivity.</li>
    </ul>

    <h2>Benefits and Challenges</h2>
    <p>AI brings significant benefits, including faster delivery cycles and reduced human error. However, challenges remain, such as the need for robust training data and ethical concerns around bias in AI-generated code. Developers must balance automation with oversight to maintain quality.</p>

    <h2>Practical Implementation</h2>
    <p>To integrate AI into your workflow, start with a tool like Copilot. Configure it in your IDE (e.g., VS Code) and train it with your project’s codebase. Example setup:</p>
    <pre><code>npm install @github/copilot
    // Enable in settings.json
    {
      "github.copilot.enable": true
    }</code></pre>
    <p>Monitor output for accuracy and refine prompts to align with your coding standards.</p>

    <h2>Future Trends</h2>
    <p>Looking ahead to late 2025 and beyond, expect AI to evolve with:
    <ul>
      <li>Self-healing code that automatically fixes bugs.</li>
      <li>AI-assisted architecture design for scalable systems.</li>
      <li>Integration with quantum computing for complex simulations.</li>
    </ul>
    These advancements could redefine development roles, emphasizing creativity over routine tasks.</p>

    <h2>Conclusion</h2>
    <p>The future of AI in software development is bright, promising a hybrid model where human ingenuity and machine efficiency coexist. As of 07:41 PM EEST, June 16, 2025, the industry is at a pivotal moment—embrace AI to stay competitive, but do so with strategic planning. Stay tuned for more insights as this technology matures!</p>
  `,
}

export default function ArticleDetails() {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (id && parseInt(id as string) !== dummyArticle.id) {
      window.location.href = '/articles'
    } else {
      setArticle(dummyArticle)
    }
  }, [id])

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 font-sans">
      <Head>
        <title>{article.title} - Ali Tarek</title>
        <meta name="description" content={article.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />

        <div className="mb-6 flex justify-center space-x-4">
          <Link
            href={`/articles/${article.id}/print`}
            className="px-6 py-2 bg-[#003a78] text-white font-semibold rounded-lg hover:bg-[#003a78]/90 transition"
          >
            <Book size={16} className="inline mr-2" /> Print
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              navigator.share({
                title: article.title,
                text: article.description,
                url: window.location.href,
              })
            }}
            className="px-6 py-2 bg-[#fed850] text-black font-semibold rounded-lg hover:bg-[#fed850]/80 transition"
          >
            <Share2 size={16} className="inline mr-2" /> Share
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{article.date}</p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{article.description}</p>

        <div
          className="prose dark:prose-invert max-w-none bg-white/90 dark:bg-gray-800/90 rounded-lg p-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Link
          href="/articles"
          className="mt-6 inline-block text-[#003a78] hover:text-[#fed850] transition-colors"
        >
          Back to Articles
        </Link>
      </main>
    </div>
  )
}