"use client"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const engineeringPrinciples = [
    {
      title: "ユーザーファースト",
      description: "常にユーザーの視点に立ち、使いやすく価値のあるプロダクトを作ることを心がけています。",
      icon: "👥",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "継続的な学習",
      description: "技術の進歩は早く、常に新しいことを学び続けることで成長していきたいと考えています。",
      icon: "📚",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "チームワーク",
      description: "一人では成し遂げられないことも、チームで協力することで大きな成果を生み出せると信じています。",
      icon: "🤝",
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  const recentWorks = [
    {
      title: "学習管理システム",
      description: "大学の課題管理とスケジュール管理を効率化するWebアプリケーション",
      tech: ["Next.js", "TypeScript", "Supabase"],
      gradient: "from-purple-500 to-pink-500",
      year: "2024",
      imageUrl: null, // 画像がない場合はnull
    },
    {
      title: "データ分析ダッシュボード",
      description: "Pythonを使用した学習データの可視化ツール",
      tech: ["Python", "Streamlit", "Pandas"],
      gradient: "from-blue-500 to-indigo-500",
      year: "2024",
      imageUrl: null,
    },
    {
      title: "ポートフォリオサイト",
      description: "このサイト自体も制作物の一つです",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      gradient: "from-emerald-500 to-teal-500",
      year: "2024",
      imageUrl: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヒーロー画像セクション */}
      <div className="relative h-96 sm:h-[500px] overflow-hidden">
        <div
          className={`w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "100ms" }}
        >
          {/* プレースホルダー画像 */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl sm:text-8xl mb-4">📸</div>
              <p className="text-lg sm:text-xl font-medium">自分を表す写真がここに入ります</p>
              <p className="text-sm sm:text-base opacity-80 mt-2">横長の画像推奨</p>
            </div>
          </div>

          {/* オーバーレイテキスト */}
          <div className="absolute bottom-8 left-8 text-white">
            <h1
              className={`text-3xl sm:text-5xl font-bold mb-2 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              佐藤照仁
            </h1>
            <p
              className={`text-lg sm:text-xl opacity-90 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              Student Engineer
            </p>
          </div>
        </div>
      </div>

      {/* ひとことセクション */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 gradient-animation">
              "学び続け、創り続ける"
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
              style={{ animationDelay: "600ms" }}
            >
              エンジニアとしての軸
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "700ms" }}
            >
              大切にしている3つの価値観
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${principle.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 興味のある領域セクション */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1200ms" }}
            >
              興味のある領域
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1300ms" }}
            >
              フロントエンドエンジニアとして関心を持っている技術分野
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "UI/UX デザイン",
                description: "ユーザー体験を重視したインターフェース設計",
                icon: "🎨",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                title: "モダンフレームワーク",
                description: "React, Next.js, Vue.jsなどの最新技術",
                icon: "⚛️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "パフォーマンス最適化",
                description: "高速で効率的なWebアプリケーション",
                icon: "⚡",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "アクセシビリティ",
                description: "すべてのユーザーが使いやすいWeb",
                icon: "♿",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((area, index) => (
              <div
                key={area.title}
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 最近の制作物セクション */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1600ms" }}
            >
              最近の制作物
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1700ms" }}
            >
              学習の成果として制作したプロジェクト
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWorks.map((work, index) => (
              <div
                key={work.title}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${1600 + index * 100}ms` }}
              >
                <div className="h-48 relative overflow-hidden">
                  {work.imageUrl ? (
                    // 画像がある場合
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${work.imageUrl})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    // 画像がない場合はグラデーション
                    <div className={`w-full h-full bg-gradient-to-r ${work.gradient} relative`}>
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {work.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {work.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{work.description}</p>
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-200 group-hover:translate-x-1 transform inline-block">
                    詳細を見る →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/pages/products"
              className={`inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-600 border-2 border-purple-600 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1900ms" }}
            >
              すべての作品を見る
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
