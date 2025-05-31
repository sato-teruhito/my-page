"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messages = [
    "学び続ける日々",
    "コードと向き合う",
    "新しい技術に挑戦",
    "チームで創る未来",
    "ユーザーを想う開発",
    "成長への探求心",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const nextIndex = (prev + 1) % messages.length
        return nextIndex
      })
    }, 2500) // 2.5秒ごとに切り替え

    return () => clearInterval(interval)
  }, [messages.length])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/pages/about", label: "About" },
    { href: "/pages/products", label: "Works" },
    { href: "/pages/blog", label: "Blog" },
    { href: "/pages/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ（左側） */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500 transform group-hover:scale-105">
                ☀ TeRoom 💫
              </div>
            </Link>
          </div>

          {/* 動的メッセージ（中央） */}
          <div className="hidden lg:flex flex-1 justify-center mx-8 max-w-xs">
            <div className="relative h-6 overflow-hidden bg-gray-50 rounded-full px-4 flex items-center">
              <div
                className="absolute left-4 right-4 flex flex-col transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateY(-${currentMessageIndex * 24}px)`,
                }}
              >
                {[...messages, ...messages].map((message, index) => (
                  <div
                    key={index}
                    className="h-6 flex items-center justify-center text-xs text-gray-700 font-medium whitespace-nowrap"
                  >
                    {message}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-underline relative text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-105 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">メニューを開く</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
