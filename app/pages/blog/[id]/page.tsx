"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { getBlogPost, type BlogPost } from "../../../../lib/blogData"

export default function BlogDetailPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (params.id && typeof params.id === "string") {
      const foundPost = getBlogPost(params.id)
      setPost(foundPost || null)
    }
    setIsLoaded(true)
  }, [params.id])

  if (!post) {
    return (
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <p className="text-gray-600 mb-8">お探しの記事は存在しないか、削除された可能性があります。</p>
          <Link href="/pages/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav className="mb-8 animate-fade-in">
          <Link
            href="/pages/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ブログ一覧に戻る
          </Link>
        </nav>

        {/* 記事ヘッダー */}
        <header className={`mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="mb-4 flex items-center space-x-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-gray-600 text-sm space-x-4 mb-6">
            <span>{post.date}</span>
          </div>

          {/* タグ表示 */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* 記事本文 */}
        <article
          className={`bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
          />
        </article>

        {/* 記事下部のナビゲーション */}
        <div
          className={`mt-12 text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="/pages/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all-300 button-hover"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            他の記事を読む
          </Link>
        </div>
      </div>
    </div>
  )
}
