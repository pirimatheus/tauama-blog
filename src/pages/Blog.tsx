
// src/pages/Blog.tsx
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'
import { posts, CATEGORIES, type Category } from '../data/posts'

export default function Blog() {
  // filtro na URL: compartilhável, sobrevive ao refresh e ao botão voltar
  const [params, setParams] = useSearchParams()
  const active = params.get('cat') as Category | null

  const listed = useMemo(
    () => (active ? posts.filter(p => p.category === active) : posts),
    [active]
  )

  const setCategory = (cat: Category | null) => {
    if (cat) setParams({ cat }, { replace: true })
    else setParams({}, { replace: true })
  }

  return (
    <div className="container section">
      <p className="eyebrow">Arquivo</p>
      <h1 style={{ font: '400 var(--fs-h1)/0.95 var(--f-display)', textTransform: 'uppercase' }}>Blog</h1>
      <p style={{ maxWidth: '54ch', color: 'var(--c-ink-soft)' }}>
        Looks, bastidores, referências e leituras de moda urbana. Sem calendário fixo:
        publico quando o processo rende texto.
      </p>

      <div className="chips" role="group" aria-label="Filtrar por categoria" style={{ margin: 'var(--sp-5) 0' }}>
        <button type="button" className="chip" aria-pressed={active === null} onClick={() => setCategory(null)}>
          Tudo ({posts.length})
        </button>
        {CATEGORIES.map(cat => {
          const count = posts.filter(p => p.category === cat.id).length
          return (
            <button
              key={cat.id}
              type="button"
              className="chip"
              aria-pressed={active === cat.id}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label} ({count})
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="visually-hidden">
        {listed.length} post{listed.length === 1 ? '' : 's'} em exibição.
      </p>

      {listed.length > 0 ? (
        <div className="grid-cards">
          {listed.map((post, i) => <PostCard key={post.slug} post={post} priority={i < 2} />)}
        </div>
      ) : (
        <p className="empty">Nada por aqui ainda nessa categoria.</p>
      )}
    </div>
  )
}
