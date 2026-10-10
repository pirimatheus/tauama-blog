// src/components/FeaturedFrame.jsx
import { useState } from 'react'
import Window from './Window.jsx'
import Button from './Button.jsx'
import { posts, CATEGORIES, formatDate } from '../data/posts.ts'

const destaques = posts.slice(0, 5)

export default function FeaturedFrame() {
  const [index, setIndex] = useState(0)
  const post = destaques[index]
  const label = CATEGORIES.find(c => c.id === post.category)?.label ?? post.category

  const subir  = () => setIndex(i => (i - 1 + destaques.length) % destaques.length)
  const descer = () => setIndex(i => (i + 1) % destaques.length)

  return (
    <Window title="destaques.exe" className="featured">
      <div className="featured__grid">
        <div className="featured__media scan" key={post.slug}>
          <picture>
            {post.cover.avif && <source srcSet={post.cover.avif} type="image/avif" />}
            <img src={post.cover.src} alt={post.cover.alt} decoding="async" />
          </picture>
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
