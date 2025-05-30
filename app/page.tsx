"use client"

import { useEffect, useState } from "react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヒーローセクション */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className={`text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-7xl mb-6 gradient-animation ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "100ms" }}
            >
              ようこそ
            </h1>
            <p
              className={`mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
              style={{ transitionDelay: "300ms", animationDelay: "200ms" }}
            >
              革新的なソリューションと創造性で、あなたのビジネスを次のレベルへ。 私たちと一緒に未来を創造しましょう。
            </p>
            <div
              className={`mt-12 flex items-center justify-center gap-x-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ transitionDelay: "500ms", animationDelay: "400ms" }}
            >
              <a
                href="/pages/about"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">詳しく見る</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/pages/contact"
                className="group inline-flex items-center text-lg font-semibold leading-6 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                お問い合わせ
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

      {/* 特徴セクション */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "500ms" }}
            >
              なぜ私たちを選ぶのか
            </h2>
            <p
              className={`text-xl text-gray-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "600ms" }}
            >
              3つの理由をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "高速・高品質",
                description: "最新技術を駆使した高速で高品質なソリューションを提供します。",
                gradient: "from-blue-500 to-cyan-500",
                delay: 700,
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "お客様第一",
                description: "お客様のニーズを最優先に考え、満足度の高いサービスを心がけています。",
                gradient: "from-purple-500 to-pink-500",
                delay: 800,
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "信頼性",
                description: "長年の実績と経験に基づいた、信頼できるサービスを提供します。",
                gradient: "from-emerald-500 to-teal-500",
                delay: 900,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
