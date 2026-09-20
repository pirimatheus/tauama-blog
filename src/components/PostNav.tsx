
// src/components/PostNav.tsx
// Fluxo vertical tipo Reels, mas por botão: ▲ post anterior, ▼ próximo post.
// Atalho de teclado: Alt + Seta ↑ / ↓ (não conflita com o scroll nativo).
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { posts, getPostIndex, type Post } from '../data/posts'

interface Props { slug: string }

export default function PostNav({ slug }: Props) {
  const navigate = useNavigate()
  const index = getPostIndex(slug)
  const previous: Post | undefined = index > 0 ? posts[index - 1] : undefined
  const next: Post | undefined = index < posts.length - 1 ? posts[index + 1] : undefined

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey) return
      if (e.key === 'ArrowUp' && previous) { e.preventDefault(); navigate(`/blog/${previous.slug}`) }
      if (e.key === 'ArrowDown' && next)   { e.preventDefault(); navigate(`/blog/${next.slug}`) }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [previous, next, navigate])

  return (
    <nav className="pnav" aria-label="Navegação entre posts">
      {previous ? (
        <Link className="pnav__btn" to={`/blog/${previous.slug}`} rel="prev">
          <span className="pnav__arrow" aria-hidden="true">▲</span>
          <span>
            <span className="pnav__label">Post anterior</span>
            <span className="pnav__title">{previous.title}</span>
          </span>
        </Link>
      ) : (
        <span className="pnav__btn" aria-disabled="true">
          <span className="pnav__arrow" aria-hidden="true">▲</span>
          <span><span className="pnav__label">Topo da lista</span>
          <span className="pnav__title">Você está no mais recente</span></span>
        </span>
      )}

      {next ? (
        <Link className="pnav__btn" to={`/blog/${next.slug}`} rel="next">
          <span className="pnav__arrow" aria-hidden="true">▼</span>
          <span>
            <span className="pnav__label">Próximo post</span>
            <span className="pnav__title">{next.title}</span>
          </span>
        </Link>
      ) : (
        <span className="pnav__btn" aria-disabled="true">
          <span className="pnav__arrow" aria-hidden="true">▼</span>
          <span><span className="pnav__label">Fim da lista</span>
          <span className="pnav__title">Por enquanto é só</span></span>
        </span>
      )}
    </nav>
  )
}
