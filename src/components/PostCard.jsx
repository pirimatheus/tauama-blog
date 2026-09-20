
// src/components/PostCard.jsx
import { Link } from 'react-router-dom'
import { CATEGORIES, formatDate } from '../data/posts.ts'

export default function PostCard({ post, priority = false }) {
  const label = CATEGORIES.find(c => c.id === post.category)?.label ?? post.category

  return (
    <Link className="card" to={`/blog/${post.slug}`}>
      <div className="card__thumb scan">
        <span className="tag">{label}</span>
        <picture>
          {post.cover.avif && <source srcSet={post.cover.avif} type="image/avif" />}
          <img
            src={post.cover.src}
            alt={post.cover.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      </div>
      <div className="card__body">
        <h3 className="card__title">{post.title}</h3>
        <p className="card__excerpt">{post.excerpt}</p>
        <p className="card__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime} min</span>
        </p>
      </div>
    </Link>
  )
}
