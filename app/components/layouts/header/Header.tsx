"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ（左側） */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500 transform group-hover:scale-105">
                ✨ Logo
              </div>
            </Link>
          </div>

          {/* ナビゲーション（右側） */}
          <nav className="flex space-x-1">
            {[
              { href: "/pages/about", label: "About", color: "blue" },
              { href: "/pages/products", label: "Product", color: "purple" },
              { href: "/pages/blog", label: "Blog", color: "green" },
              { href: "/pages/contact", label: "Contact", color: "orange" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-underline relative text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg transform hover:scale-105 ${
                  item.color === "blue"
                    ? "hover:bg-blue-50"
                    : item.color === "purple"
                      ? "hover:bg-purple-50"
                      : item.color === "green"
                        ? "hover:bg-green-50"
                        : "hover:bg-orange-50"
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span
                  className={`transition-all duration-300 ${hoveredItem === item.label ? "transform translate-y-[-1px]" : ""}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
