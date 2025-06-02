"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getBlogPosts, type BlogPost } from "../../../lib/blogData"

export default function BlogPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [visiblePosts, setVisiblePosts] = useState<string[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // ブログデータを取得
    const posts = getBlogPosts()
    setBlogPosts(posts)

    // アニメーション用の表示制御
    const timer = setTimeout(() => {
      const allPostIds = posts.map((post) => post.id)
      setVisiblePosts(allPostIds)
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
            気になる最新技術から日記まで，日常のアレコレをただ綴れればと
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`product-card group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                opacity: visiblePosts.includes(post.id) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 relative overflow-hidden">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className={`w-full h-full ${post.gradient} relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
                  </div>
                )}

                <div className="absolute top-4 left-4 transform transition-all-300 icon-hover">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div
                  className={`absolute bottom-4 right-4 text-white text-sm font-medium transition-all-300 ${hoveredCard === post.id ? "transform translate-y-[-2px]" : ""}`}
                >
                  {post.readTime}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3 transition-all-200 group-hover:text-gray-600">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed transition-all-200 group-hover:text-gray-700">
                  {post.excerpt}
                </p>

                {/* タグ表示 */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={`/pages/blog/${post.id}`}
                  className="button-hover inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all-300"
                >
                  続きを読む
                  <svg
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoveredCard === post.id ? "transform translate-x-2" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
