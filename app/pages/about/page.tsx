export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">私たちについてご紹介します</p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 leading-relaxed">
            私たちは、お客様に最高の体験を提供することを使命としています。
            長年の経験と専門知識を活かし、革新的なソリューションをお届けします。
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">私たちのミッション</h2>
          <p className="text-gray-600 leading-relaxed">
            技術とクリエイティビティを融合させ、お客様のビジネスの成長をサポートすることです。
          </p>
        </div>
      </div>
    </div>
  )
}
