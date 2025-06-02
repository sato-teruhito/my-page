"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const engineeringPrinciples = [
    {
      title: "一気通貫",
      description: "常にユーザーの視点に立ち、企画立案から開発、運用まで広範に携わりたい。",
      icon: "👨‍💻",
      gradient: "gradient-blue-purple",
    },
    {
      title: "飽くなき向上心",
      description: "技術の進歩は早く、常に新しいことを学び続けることで成長していきたいと考えています。",
      icon: "📚",
      gradient: "gradient-purple-pink",
    },
    {
      title: "チームワーク",
      description: "一人では成し遂げられないことも、チームで協力することで大きな成果を生み出せると信じています。",
      icon: "🤝",
      gradient: "gradient-emerald-teal",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヒーロー画像セクション */}
      <div className="relative h-96 sm:h-[500px] overflow-hidden">
        <div
          className={`w-full h-full relative ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "100ms" }}
        >
          {/* ヒーロー画像 */}
          {/*<div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/hero/main-hero.jpg')",
            }}
            role="img"
            aria-label="和歌山の美しい自然風景"
          ></div>*/}
          <Image
            src="/images/hero/main-hero.jpg"
            alt="和歌山の美しい自然風景"
            fill
            className="object-cover"
          />

          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* 中央のウェルカムメッセージ */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                Welcome to
              </h1>
              <div
                className={`text-5xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: "500ms" }}
              >
                ☀ TeRoom 💫
              </div>
              <p
                className={`text-lg sm:text-xl text-white mt-4 opacity-90 drop-shadow-lg ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: "700ms" }}
              >
                佐藤照仁のポートフォリオサイト
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ひとことセクション */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "800ms" }}>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 gradient-animation">
              学び続け、創り続ける
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              技術を通じて人々の生活をより良くしたい。 そんな想いを胸に、日々学習と開発に取り組んでいます。
              まだまだ学生の身ですが、将来エンジニアとして社会に貢献できるよう努力しています。
            </p>
          </div>
        </div>
      </div>

      {/* エンジニアとしての軸セクション */}
      <div className="py-16 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "900ms" }}
            >
              エンジニアとしての軸
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1000ms" }}
            >
              大切にしている3つの価値観
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all-300 product-card ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${1100 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${principle.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 icon-hover`}
                  >
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-all-200">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
