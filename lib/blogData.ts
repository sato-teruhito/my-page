export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  date: string
  category: string
  readTime: string
  gradient: string
  imageUrl?: string | null
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "Hello",
    title: "初投稿",
    excerpt: "ポートフォリオサイト作成記念で投稿しました。これから頑張っていければと思います。",
    content: `
      <h2>佐藤照仁です</h2>
      <p>blogを閲覧していただき、誠にありがとうございます。</p>
      
      <h3>好きなもの</h3>
      <p>特に書くことないので、とりあえず好きなものを羅列しますか。</p>
      
      <ul>
        <li>ドラゴンクエストシリーズ<br/>⇒IXは3000時間ぐらいやった。リメイク待ってます。</li>
        <li>ジョジョの奇妙な冒険<br/>⇒好きなシーン、ポルナレフ多め</li>
        <li>居酒屋<br/>⇒友達が上京してしばらくいけてない T_T</li>
      </ul>
      
      <h2>これから</h2>
      <p>どんどん記事の更新をできればと思います．（この投稿が最新でないことを祈る笑）</p>
    `,
    date: "2024年6月3日",
    category: "意思表明",
    readTime: "2分",
    gradient: "gradient-blue-purple",
    imageUrl: null,
    tags: ["初投稿", "はじめまして", "よろしくお願いします"],
  },
  /* {
    id: "test",
    title: "テンプレート記事",
    excerpt: "ここに書いたものはブログ一覧ページのカードに表示されます。記事の概要を簡潔に書きましょう。",
    content: `
      <h2>記事の見出し</h2>
      <p>ここに記事の本文を書きます。この内容は記事詳細ページに表示されます。</p>
      
      <h3>小見出し</h3>
      <p>HTMLタグを使って記事を構造化できます。</p>
      
      <ul>
        <li>リストアイテム1</li>
        <li>リストアイテム2</li>
        <li>リストアイテム3</li>
      </ul>
      
      <h3>コードの挿入例</h3>
      <pre><code>
// サンプルコード
function hello() {
  console.log("Hello, World!");
}
      </code></pre>
      
      <p>画像やリンクも挿入できます。</p>
      
      <h2>まとめ</h2>
      <p>記事のまとめをここに書きます。</p>
    `,
    date: "2024年6月3日",
    category: "テンプレート",
    readTime: "2分",
    gradient: "gradient-blue-purple",
    imageUrl: null,
    tags: ["テンプレート", "サンプル", "テスト"],
  }, */
]

// ブログ記事を取得する関数
export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

// 特定のブログ記事を取得する関数
export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

// カテゴリ別にブログ記事を取得する関数
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

// タグ別にブログ記事を取得する関数
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags?.includes(tag))
}
