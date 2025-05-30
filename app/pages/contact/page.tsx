export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">お気軽にお問い合わせください</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                送信する
              </button>
            </form>
          </div>

          {/* 連絡先情報 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">連絡先情報</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">住所</h3>
                <p className="text-gray-600">〒100-0001 東京都千代田区千代田1-1-1</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">電話番号</h3>
                <p className="text-gray-600">03-1234-5678</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">メールアドレス</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">営業時間</h3>
                <p className="text-gray-600">平日 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
