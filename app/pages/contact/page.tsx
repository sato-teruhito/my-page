"use client"

import { useEffect, useState } from "react"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "お気軽にお問い合わせください",
      contact: "s266126@wakayama-u.ac.jp",
      link: "mailto:s266126@wakayama-u.ac.jp",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📷",
      title: "Instagram",
      description: "SNSでもお気軽にご連絡ください",
      contact: "@teru_31_dq",
      link: "https://www.instagram.com/teru_31_dq/",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent gradient-animation">
            Contact
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            お気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 連絡先情報 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">連絡先</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <p className="text-purple-600 font-medium break-all">{method.contact}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* レスポンス時間 */}
          <div
            className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 mb-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <span className="text-xl mr-2">📅</span>
              レスポンス時間
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              通常、お問い合わせいただいてから24時間以内にご返信いたします。
              学業の都合により、お返事が遅れる場合がございますが、必ずご連絡いたします。
            </p>
          </div>

          {/* 注意事項 */}
          <div
            className={`bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "700ms" }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <span className="text-xl mr-2">⚠️</span>
              ご注意
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• 営業目的のご連絡はご遠慮ください</li>
              <li>• 学習や技術に関するご質問は大歓迎です</li>
              <li>• プロジェクトのご相談もお気軽にどうぞ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
