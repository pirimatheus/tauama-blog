// src/components/FeaturedFrame.jsx
import { useState, useEffect } from 'react'
import Window from './Window.jsx'
import Button from './Button.jsx'
import { CATEGORIES, formatDate } from '../data/posts.ts'
import { getAllPosts } from '../data/postsClient'

export default function FeaturedFrame() {
  const [destaques, setDestaques] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    getAllPosts().then(all => setDestaques(all.slice(0, 5)))
  }, [])

  if (destaques.length === 0) return null
  const post = destaques[index]
  const label = CATEGORIES.find(c => c.id === post.category)?.label ?? post.category

  const subir  = () => setIndex(i => (i - 1 + destaques.length) % destaques.length)
  const descer = () => setIndex(i => (i + 1) % destaques.length)

  return (
    <Window title="destaques.exe" className="featured">
      <div className="featured__grid">
        <div className="featured__media scan" key={post.slug}>
          <img src={post.cover} alt={post.coverAlt} decoding="async" />
        </div>

        <div className="featured__info" key={`info-${post.slug}`}>
          <p className="eyebrow">{label}</p>
          <h2 className="featured__title">{post.title}</h2>
          <p>{post.excerpt}</p>
          <p className="featured__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingTime} min</span>
          </p>
          <Button to={`/blog/${post.slug}`} variant="primary">Ler post</Button>
        </div>

        <div className="featured__ctrl">
          <button type="button" className="btn" onClick={subir} aria-label="Post anterior">/\</button>
          <button type="button" className="btn" onClick={descer} aria-label="Próximo post">\/</button>
        </div>
      </div>
    </Window>
  )
}
