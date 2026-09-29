
// src/components/Header.tsx
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Clock from './Clock'
import Mushroom from './Mushroom.jsx'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const burgerRef = useRef<HTMLButtonElement>(null)

  // fecha o menu ao navegar
  useEffect(() => { setOpen(false) }, [pathname])

  // Esc fecha e devolve o foco ao botão
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); burgerRef.current?.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="header">
      <div className="header__inner">
        <Link className="brand" to="/">
          <span className="brand__frame">
            <img src="/images/logo.webp" alt="Tauama" />
          </span>
        </Link>

        <button
          ref={burgerRef}
          type="button"
          className="btn burger"
          aria-expanded={open}
          aria-controls="nav-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(v => !v)}
        >
          <span className="burger__bars" aria-hidden="true"><span /><span /><span /></span>
        </button>

        <nav id="nav-principal" className="nav" data-open={open} aria-label="Navegação principal">
          <ul className="nav__list">
            {LINKS.map(link => (
              <li key={link.to}>
                <NavLink className="nav__link" to={link.to} end={link.end}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Clock />
      </div>
    </header>
  )
}
