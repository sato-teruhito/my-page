"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isMessageVisible, setIsMessageVisible] = useState(false)

  const messages = [
    "\"Hello, World\" からすべては始まる",
    "新しい技術に挑戦",
    "バグと一緒に起きて、エラーと寝る",
    "ユーザーを想う開発",
    "404 Not Found... 俺のやる気",
    "波 「 Javaーン 」",
    "動いたら正義 壊れたら仕様",
    "バグ深き 隣は何を commitぞ",
    "コード ココ ドーコ？",
    "♪ 君の前前前commitから バグを探し始めたよ",
    "console.log('動け')で動いたときの恐怖",
  ]

  useEffect(() => {
    const messageInterval = setInterval(() => {
      // フェードアウト
      setIsMessageVisible(false)

      setTimeout(() => {
        // 次のメッセージに切り替え
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length)

        setTimeout(() => {
          // フェードイン
          setIsMessageVisible(true)
        }, 500) // 0.5秒待機後にフェードイン
      }, 500) // 0.5秒でフェードアウト完了
    }, 4000) // 4秒ごとにサイクル

    // 初回表示
    setTimeout(() => {
      setIsMessageVisible(true)
    }, 1000)

    return () => clearInterval(messageInterval)
  }, [messages.length])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/pages/about", label: "About" },
    { href: "/pages/products", label: "Products" },
    { href: "/pages/blog", label: "Blog" },
    { href: "/pages/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ（左側） */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent logo-hover">
                ☀ TeRoom 💫
              </div>
            </Link>
          </div>

          {/* 動的メッセージ（中央） */}
          <div className="flex flex-1 justify-center mx-4 sm:mx-8 max-w-xs">
            <div className="relative h-6 flex items-center justify-center">
              <div
                className={`text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap transition-opacity duration-500 ease-in-out ${
                  isMessageVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {messages[currentMessageIndex]}
              </div>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all-300 rounded-lg hover-scale-105 hover:bg-gray-700/50 nav-underline-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all-200"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all-200"
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
