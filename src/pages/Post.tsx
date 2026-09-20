
// src/pages/Post.tsx
import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Frame from '../components/Frame.jsx'
import PostNav from '../components/PostNav'
import Button from '../components/Button.jsx'
import { posts, CATEGORIES, formatDate, type Block } from '../data/posts'

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{block.text}</h2>
    case 'quote':
      return (
        <blockquote key={index}>
          {block.text}
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      )
    case 'list':
      return <ul key={index}>{block.items.map((li, i) => <li key={i}>{li}</li>)}</ul>
    case 'img':
      return (
        <Frame
          key={index}
          src={block.src}
          avif={block.avif}
          alt={block.alt}
          caption={block.caption}
          label="detalhe.jpg"
          ratio="16 / 10"
        />
      )
    default:
      return <p key={index}>{block.text}</p>
  }
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — TAUAMA`
    return () => { document.title = 'TAUAMA — design de moda, liberdade e customização' }
  }, [post])

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


      src={post.cover.src}
      avif={post.cover.avif}
      alt={post.cover.alt}
      label={`${post.slug}.jpg`}
      ratio="16 / 9"
      priority
      />

      <div className="prose reading" style={{ marginTop: 'var(--sp-6)' }}>
        {post.body.map(renderBlock)}
      </div>

      <div className="reading" style={{ marginTop: 'var(--sp-6)' }}>
        <Button
          href={`[wa.me](https://wa.me/?text=${encodeURIComponent()`${post.title} — ${window.location.href}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Compartilhar
        </Button>
      </div>

      <PostNav slug={post.slug} />
      <p className="visually-hidden">Atalho: Alt + seta para cima ou para baixo navega entre os posts.</p>
    </article >
  )
  S
