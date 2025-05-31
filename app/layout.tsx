import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/layouts/header/Header"
import Footer from "./components/layouts/footer/Footer"
import ScrollToTop from "./components/utils/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TeRoom",
  description: "佐藤照仁のポートフォリオサイト",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  )
}
