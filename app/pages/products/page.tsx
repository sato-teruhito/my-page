"use client"

import { useState, useEffect } from "react"

const products = [
  {
    id: 1,
    name: "CloudSync Pro",
    description: "企業向けクラウド同期ソリューション。リアルタイムでファイルを同期し、チームの生産性を向上させます。",
    price: "¥9,800/月",
    features: ["リアルタイム同期", "無制限ストレージ", "24/7サポート"],
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: 2,
    name: "DesignKit Studio",
    description: "デザイナー向けの統合ツールセット。プロトタイピングからデザインシステム管理まで一元化。",
    price: "¥5,400/月",
    features: ["プロトタイピング", "デザインシステム", "コラボレーション"],
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "高度なデータ分析とビジュアライゼーション。ビジネスインサイトを直感的に把握できます。",
    price: "¥12,000/月",
    features: ["リアルタイム分析", "カスタムダッシュボード", "API連携"],
    gradient: "from-emerald-500 to-teal-500",
    popular: false,
  },
  {
    id: 4,
    name: "SecureVault",
    description: "エンタープライズグレードのセキュリティソリューション。機密データを安全に保護します。",
    price: "¥15,600/月",
    features: ["暗号化", "アクセス制御", "監査ログ"],
    gradient: "from-red-500 to-orange-500",
    popular: false,
  },
  {
    id: 5,
    name: "AutoFlow",
    description: "ワークフロー自動化プラットフォーム。繰り返し作業を自動化し、効率性を大幅に向上。",
    price: "¥7,200/月",
    features: ["ワークフロー自動化", "統合API", "スケジューリング"],
    gradient: "from-indigo-500 to-purple-500",
    popular: true,
  },
  {
    id: 6,
    name: "TeamChat Plus",
    description: "次世代チームコミュニケーションツール。音声・ビデオ通話、ファイル共有を統合。",
    price: "¥3,600/月",
    features: ["ビデオ通話", "ファイル共有", "チャンネル管理"],
    gradient: "from-green-500 to-blue-500",
    popular: false,
  },
]

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])

  // 順番にカードを表示するアニメーション効果
  useEffect(() => {
    const timer = setTimeout(() => {
      const allProducts = products.map((product) => product.id)
      setVisibleProducts(allProducts)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent sm:text-6xl gradient-animation">
            Products
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            革新的なソリューションでビジネスの成長をサポートします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card-hover group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                opacity: visibleProducts.includes(product.id) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out, transform 0.3s ease-out",
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 animate-bounce-gentle">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    人気
                  </span>
                </div>
              )}

              <div className={`h-48 bg-gradient-to-r ${product.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-5"></div>
                <div
                  className={`absolute bottom-4 left-4 text-white transition-all duration-300 ${hoveredProduct === product.id ? "transform translate-y-[-2px]" : ""}`}
                >
                  <div className="text-2xl font-bold">{product.price}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-all duration-300 transform group-hover:translate-x-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-200 group-hover:text-gray-700">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">主な機能</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center text-sm text-gray-600 transition-all duration-300 ${hoveredProduct === product.id ? "transform translate-x-1" : ""}`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`button-hover w-full bg-gradient-to-r ${product.gradient} text-white py-3 px-4 rounded-xl font-semibold shadow-lg transition-all duration-300`}
                >
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
