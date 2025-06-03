"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("")
  const [funMessage, setFunMessage] = useState("")

  const funMessages = [
    "今日もコードと向き合う一日でした ☕",
    "バグは友達、エラーは先生 🐛",
    "console.log('Hello, World!') 👋",
    "今日学んだことを明日に活かそう 📚",
    "一行一行、丁寧にコードを書いています ✨",
    "デバッグ中...しばらくお待ちください 🔍",
    "新しい技術にワクワクしています 🚀",
    "コーヒーとコードの相性は最高です ☕",
    "今日もGitにcommitしました 📝",
    "エラーを見つけた時の達成感は格別です 🎯",
  ]

  useEffect(() => {
    // 現在時刻を更新
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }

    // ランダムなメッセージを選択
    const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)]
    setFunMessage(randomMessage)

    updateTime()
    const interval = setInterval(updateTime, 60000) // 1分ごとに更新

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* トップに戻るボタン */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4 border-b border-gray-700">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all-300 hover-scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-sm font-medium">トップに戻る</span>
          </button>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* プロフィール */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center mb-4 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent logo-hover">
                  ☀ TeRoom 💫
                </div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mb-6">
                エンジニアを志す、ただのしがない学生のポートフォリオサイトです<br/>
                立派なエンジニアになるまでの軌跡を描いていければと思っています
              </p>

              {/* ソーシャルリンク */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sato-teruhito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all-300 hover-scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/teru_31_dq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-all-300 hover-scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="mailto:s266126@wakayama-u.ac.jp"
                  className="text-gray-400 hover:text-blue-400 transition-all-300 hover-scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ナビゲーションリンク */}
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                ナビゲーション
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pages/about"
                    className="text-gray-300 hover:text-white transition-all-300 hover:translate-x-2 hover-scale-105 transform inline-block hover:bg-gray-700/30 px-2 py-1 rounded-lg"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/products"
                    className="text-gray-300 hover:text-white transition-all-300 hover:translate-x-2 hover-scale-105 transform inline-block hover:bg-gray-700/30 px-2 py-1 rounded-lg"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/blog"
                    className="text-gray-300 hover:text-white transition-all-300 hover:translate-x-2 hover-scale-105 transform inline-block hover:bg-gray-700/30 px-2 py-1 rounded-lg"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/contact"
                    className="text-gray-300 hover:text-white transition-all-300 hover:translate-x-2 hover-scale-105 transform inline-block hover:bg-gray-700/30 px-2 py-1 rounded-lg"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 遊び心セクション */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 現在時刻 */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <span className="text-lg mr-2">🕐</span>
                  現在時刻
                </h4>
                <p className="text-blue-400 font-mono text-lg">{currentTime}</p>
              </div>

              {/* 今日のひとこと */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <span className="text-lg mr-2">💭</span>
                  今日のひとこと
                </h4>
                <p className="text-purple-400 text-sm">{funMessage}</p>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">© 2024 Sato Teruhito. All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
