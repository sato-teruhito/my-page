"use client"

import { useState, useEffect } from "react"

const works = [
  {
    id: 1,
    title: "学習管理システム",
    description:
      "大学の課題管理とスケジュール管理を効率化するWebアプリケーション。学生の学習進捗を可視化し、効率的な学習をサポートします。",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    category: "Web Application",
    year: "2024",
    gradient: "gradient-blue-purple",
    featured: true,
    githubUrl: "https://github.com/yourusername/learning-management-system",
    status: "completed",
  },
  {
    id: 2,
    title: "データ分析ダッシュボード",
    description: "Pythonを使用した学習データの可視化ツール。機械学習の結果をインタラクティブに表示できます。",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Data Analysis",
    year: "2024",
    gradient: "gradient-purple-pink",
    featured: false,
    githubUrl: "https://github.com/yourusername/data-analysis-dashboard",
    status: "in-progress",
  },
  {
    id: 3,
    title: "ポートフォリオサイト",
    description:
      "このサイト自体も制作物の一つです。Next.jsとTailwind CSSを使用してレスポンシブなデザインを実現しました。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Portfolio",
    year: "2024",
    gradient: "gradient-emerald-teal",
    featured: false,
    githubUrl: "https://github.com/yourusername/portfolio-site",
    status: "completed",
  },
  {
    id: 4,
    title: "チャットボット",
    description: "自然言語処理を使用した大学生活サポートチャットボット。履修相談や学習アドバイスを提供します。",
    technologies: ["Python", "OpenAI API", "Flask", "React"],
    category: "AI Application",
    year: "2023",
    gradient: "gradient-orange-red",
    featured: true,
    githubUrl: "https://github.com/yourusername/university-chatbot",
    status: "paused",
  },
  {
    id: 5,
    title: "研究室管理アプリ",
    description: "研究室のリソース管理と予約システム。機器の予約状況を可視化し、効率的な研究環境を提供します。",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Management System",
    year: "2023",
    gradient: "gradient-indigo-purple",
    featured: false,
    githubUrl: "https://github.com/yourusername/lab-management-app",
    status: "in-progress",
  },
  {
    id: 6,
    title: "機械学習モデル",
    description: "画像認識を使用した植物分類システム。深層学習を用いて高精度な分類を実現しています。",
    technologies: ["Python", "TensorFlow", "OpenCV", "Jupyter"],
    category: "Machine Learning",
    year: "2023",
    gradient: "gradient-green-blue",
    featured: false,
    githubUrl: "https://github.com/yourusername/plant-classification-ml",
    status: "completed",
  },
]

const getStatusTag = (status: string) => {
  const statusConfig = {
    completed: { label: "完成", color: "bg-green-100 text-green-800", icon: "✅" },
    "in-progress": { label: "進行中", color: "bg-blue-100 text-blue-800", icon: "🚧" },
    paused: { label: "中断中", color: "bg-yellow-100 text-yellow-800", icon: "⏸️" },
  }

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.completed

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <span className="mr-1">{config.icon}</span>
      {config.label}
    </span>
  )
}

export default function WorksPage() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const [visibleWorks, setVisibleWorks] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const allWorks = works.map((work) => work.id)
      setVisibleWorks(allWorks)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent gradient-animation">
            Works
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            学習の一環として制作したプロジェクトや研究成果をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={work.id}
              className={`product-card group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-fade-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                opacity: visibleWorks.includes(work.id) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              {work.featured && (
                <div className="absolute top-4 right-4 z-10 animate-bounce-gentle">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              <div className={`h-48 ${work.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-5"></div>
                <div className="absolute top-4 left-4 space-y-2">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                  {getStatusTag(work.status)}
                </div>
                <div
                  className={`absolute bottom-4 left-4 text-white transition-all-300 ${hoveredWork === work.id ? "transform translate-y-[-2px]" : ""}`}
                >
                  <div className="text-lg font-bold">{work.year}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-all-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base transition-all-200 group-hover:text-gray-700">
                  {work.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium transition-all-300 ${hoveredWork === work.id ? "transform translate-y-[-1px] bg-gray-200" : ""}`}
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    className={`flex-1 ${work.gradient} text-white py-3 px-4 rounded-xl font-semibold shadow-lg button-hover`}
                  >
                    詳細を見る
                  </button>
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all-300 hover-scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
