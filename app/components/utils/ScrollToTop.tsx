"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * ページ遷移時に自動的にページトップにスクロールするコンポーネント
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // ページ遷移時に画面トップにスクロール
    window.scrollTo({
      top: 0,
      behavior: "instant", // スムーススクロールではなく即座にトップへ
    })
  }, [pathname])

  return null // このコンポーネントはUIをレンダリングしない
}
