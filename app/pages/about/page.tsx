"use client"

import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const experiences = [
    {
      year: "2025 - 現在",
      title: "和歌山大学大学院 システム工学研究科",
      description: "コミュニケーションに関する研究に取り組んでいます。",
      gradient: "from-blue-500 to-purple-500",
      icon: "🎓",
    },
    {
      year: "2024 - 現在",
      title: "add。 メンバー",
      description: "学生団体add。でWebアプリケーション開発やイベント企画に参加しています。",
      gradient: "from-purple-500 to-pink-500",
      icon: "👥",
    },
    {
      year: "2021 - 2025",
      title: "和歌山大学 システム工学部",
      description: "システム工学部でプログラミングとシステム設計の基礎を学びました。",
      gradient: "from-emerald-500 to-teal-500",
      icon: "🏫",
    },
  ]

  const techStacks = {
    frontend: [
      { name: "React", level: 3, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 4, color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", level: 3, color: "from-blue-600 to-blue-800" },
      { name: "Tailwind CSS", level: 4, color: "from-teal-500 to-green-500" },
      { name: "HTML/CSS", level: 5, color: "from-orange-500 to-red-500" },
      { name: "JavaScript", level: 4, color: "from-yellow-500 to-orange-500" },
    ],
    backend: [
      { name: "Python", level: 1, color: "from-yellow-500 to-orange-500" },
      { name: "Node.js", level: 3, color: "from-green-600 to-green-800" },
      { name: "FastAPI", level: 0, color: "from-teal-600 to-cyan-600" },
      { name: "PostgreSQL", level: 0, color: "from-blue-700 to-indigo-700" },
      { name: "Supabase", level: 2, color: "from-green-700 to-emerald-700" },
    ],
    tools: [
      { name: "Git/GitHub", level: 4, color: "from-gray-700 to-gray-900" },
      { name: "Slack", level: 4, color: "from-blue-600 to-cyan-600" },
      { name: "VS Code", level: 5, color: "from-blue-500 to-purple-500" },
      { name: "Figma", level: 3, color: "from-purple-500 to-pink-500" },
      { name: "Discord", level: 4, color: "from-orange-500 to-red-500" },
      { name: "vercel", level: 3, color: "from-red-500 to-pink-500" },
    ],
  }

  const hobbies = [
    { name: "ゲーム", icon: "🎮", description: "特にDQシリーズをこよなく愛する" },
    { name: "バスケットボール", icon: "🏀", description: "小中高とバスケ部" },
    { name: "アニメ", icon: "📺", description: "jojoは人生のバイブル" },
    { name: "ジム", icon: "💪", description: "おなか結構やばい" },
    { name: "音楽", icon: "🎵", description: "好きなアーティストのliveに行きたい" },
    { name: "ギター", icon: "🎸", description: "アコギだし最近弾けてない" },
  ]

  // 5段階評価の星を生成する関数
  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < level ? "text-yellow-400" : "text-gray-300"} transition-colors duration-200`}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent gradient-animation">
            About Me
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            私について
          </p>
        </div>

        {/* プロフィールセクション */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">プロフィール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 顔写真エリア */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    {/*<div className="text-4xl mb-2">📷</div>
                    <p className="text-sm">顔写真</p>
                    <p className="text-xs opacity-70">後で追加予定</p>*/}
                    {/* 顔写真を使用する場合:
                        public/images/profile/profile-photo.jpg として保存し、
                        <img src="/images/profile/profile-photo.jpg" alt="佐藤照仁" className="w-full h-full object-cover rounded-2xl" /> */}
                    <img src="/images/profile/profile-photo.jpg" alt="佐藤照仁" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* 基本情報 */}
            <div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">名前</h3>
                  <p className="text-gray-600">佐藤照仁 (Teruhito Sato)</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">在籍</h3>
                  <p className="text-gray-600">和歌山大学大学院<br/>システム工学研究科</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">所属団体</h3>
                  <p className="text-gray-600">add。</p>
                </div>
              </div>
            </div>

            {/* 自己紹介 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">自己紹介</h3>
              <p className="text-gray-600 leading-relaxed">
                和歌山大学大学院でシステム工学を学ぶ学生です。
                エンジニアを目指して、Web開発や機械学習の分野で日々学習と実践を重ねています。
                学生団体add.では、チームでの開発経験を積み、技術力向上に努めています。
              </p>
            </div>
          </div>
        </div>

        {/* 経歴セクション - 新しいデザイン */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">経歴</h2>
          <div className="relative">
            {/* タイムライン */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 group ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  {/* アイコン */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {exp.icon}
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 技術スタックセクション */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">技術スタック</h2>

          {/* Frontend */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></span>
              Frontend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStacks.frontend.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${700 + index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <div className="flex items-center space-x-1">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></span>
              Backend
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStacks.backend.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${900 + index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <div className="flex items-center space-x-1">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* その他ツール */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
              その他ツール
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStacks.tools.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${1100 + index * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <div className="flex items-center space-x-1">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 趣味セクション */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">趣味</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {hobby.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                    {hobby.name}
                  </h3>
                  <p className="text-sm text-gray-600">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 実績・受賞歴セクション */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1000ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">実績・受賞歴</h2>

          {/* 実績がある場合の表示例 */}
          <div className="space-y-6">
            <div className="group p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🏆
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                      学内アイデアコンテスト
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">2024年12月</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    和歌山大学主催のアイデアコンテスト・キャンパス部門で優秀賞を受賞。チームで学内の実験協力者募集に特化した掲示板アプリを提案しました。
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🏆
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      ハッカソン技育キャンプCAMP2024
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">2025年2月</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    サポーターズ主催のハッカソン技育キャンプCAMP2024【Vol.23】で最優秀賞を受賞。chrome拡張機能「PUMP」を発表しました。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 今後の目標 */}
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <span className="text-xl mr-2">🎯</span>
              今後の目標
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• 基本情報技術者試験の取得</li>
              <li>• 情報処理学会での研究発表</li>
              <li>• 個人開発による技術力向上</li>
              <li>• チーム開発による実務経験</li>
              <li>• 修士研究</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
