"use client"

import { useState, useEffect } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Next.js 15の新機能を徹底解説",
    excerpt:
      "最新のNext.js 15で追加された革新的な機能について詳しく解説します。パフォーマンスの向上とDXの改善について。",
    date: "2024年1月15日",
    category: "技術",
    readTime: "5分",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "デザインシステムの構築方法",
    excerpt: "スケーラブルなデザインシステムを構築するためのベストプラクティスとツールの選び方について解説します。",
    date: "2024年1月12日",
    category: "デザイン",
    readTime: "8分",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "TypeScriptで型安全なAPIを作る",
    excerpt: "TypeScriptを使用してエンドツーエンドで型安全なAPIを構築する方法とベストプラクティスを紹介します。",
    date: "2024年1月10日",
    category: "開発",
    readTime: "12分",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "UXデザインの最新トレンド2024",
    excerpt: "2024年に注目すべきUXデザインのトレンドと、ユーザー体験を向上させるための実践的なアプローチを解説。",
    date: "2024年1月8日",
    category: "UX",
    readTime: "6分",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "パフォーマンス最適化の実践",
    excerpt: "Webアプリケーションのパフォーマンスを劇的に改善するための具体的な手法とツールを実例とともに紹介。",
    date: "2024年1月5日",
    category: "最適化",
    readTime: "10分",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 6,
    title: "アクセシビリティを考慮した開発",
    excerpt: "すべてのユーザーが使いやすいWebサイトを作るためのアクセシビリティガイドラインと実装方法について。",
    date: "2024年1月3日",
    category: "アクセシビリティ",
    readTime: "7分",
    gradient: "from-violet-500 to-purple-600",
  },
]

export default function BlogPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visiblePosts, setVisiblePosts] = useState<number[]>([])

  // 順番にカードを表示するアニメーション効果
  useEffect(() => {
    const timer = setTimeout(() => {
      const allPosts = blogPosts.map((post) => post.id)
      setVisiblePosts(allPosts)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent sm:text-6xl gradient-animation">
            Blog
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            最新の技術トレンドやデザインのインサイトをお届けします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`card-hover group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                opacity: visiblePosts.includes(post.id) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out, transform 0.3s ease-out",
              }}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-48 bg-gradient-to-r ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
                <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div
                  className={`absolute bottom-4 right-4 text-white text-sm font-medium transition-all duration-300 ${hoveredCard === post.id ? "transform translate-y-[-2px]" : ""}`}
                >
                  {post.readTime}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3 transition-colors duration-200 group-hover:text-gray-600">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed transition-colors duration-200 group-hover:text-gray-700">
                  {post.excerpt}
                </p>
                <button className="button-hover inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all duration-300">
                  続きを読む
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredCard === post.id ? "transform translate-x-2" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
