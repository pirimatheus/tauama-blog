// src/pages/Post.tsx
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Frame from '../components/Frame.jsx'
import PostNav from '../components/PostNav'
import Button from '../components/Button.jsx'
import { CATEGORIES, formatDate } from '../data/posts'
import { getPostBySlug } from '../data/postsClient'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    getPostBySlug(slug)
      .then(setPost)
      .finally(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    if (post) document.title = `${post.title} — TAUAMA`
    return () => { document.title = 'TAUAMA — design de moda, liberdade e customização' }
  }, [post])

  if (loading) return null
  if (!post) return <Navigate to="/blog" replace />

  const category = CATEGORIES.find(c => c.id === post.category)

  return (
    <article className="container section">
      <p className="post__meta" style={{ marginBottom: 'var(--sp-3)' }}>
        <Link to="/blog">← Blog</Link>
        <Link to={`/blog?cat=${post.category}`}>{category?.label}</Link>
      </p>

      <header className="post__head reading">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime} min de leitura</span>
        </p>
      </header>

      <Frame
        src={post.cover}
        alt={post.coverAlt}
        label={`${post.slug}.jpg`}
        ratio="16 / 9"
        priority
      />

      <div className="prose reading" style={{ marginTop: 'var(--sp-6)' }}>
        <TinaMarkdown content={post.body} />
      </div>

      <div className="reading" style={{ marginTop: 'var(--sp-6)' }}>
        <Button
          href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${window.location.href}`)}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Compartilhar
        </Button>
      </div>

      <PostNav slug={post.slug} />
      <p className="visually-hidden">Atalho: Alt + seta para cima ou para baixo navega entre os posts.</p>
    </article>
  )
}
