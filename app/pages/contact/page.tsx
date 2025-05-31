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
      description: "お気軽にメールでお問い合わせください",
      contact: "s266126@wakayama-u.ac.jp",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💬",
      title: "SNS",
      description: "SNSでもお気軽にご連絡ください",
      contact: "@teru_31_dq",
      link: "https://www.instagram.com/teru_31_dq/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🏫",
      title: "University",
      description: "大学経由でのご連絡も可能です",
      contact: "和歌山大学システム工学研究科",
      gradient: "from-emerald-500 to-teal-500",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="お問い合わせの件名"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                送信する
              </button>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div className="space-y-8">
            <div
              className={`bg-white rounded-2xl shadow-lg p-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">その他の連絡方法</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`group p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                          {method.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-200 break-all"
                          >
                            {method.contact}
                          </a>
                        ) : (
                          <p className="text-purple-600 font-medium break-all">{method.contact}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* レスポンス時間 */}
            <div
              className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 レスポンス時間</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ ご注意</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• 営業目的のご連絡はご遠慮ください</li>
                <li>• 学習や技術に関するご質問は大歓迎です</li>
                <li>• プロジェクトのご相談もお気軽にどうぞ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
