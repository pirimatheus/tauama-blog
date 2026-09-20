
// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import Mushroom from './Mushroom.jsx'

const SOCIAL = [
  { label: 'Instagram', href: '[instagram.com](https://instagram.com/tauama)' },
  { label: 'Pinterest', href: '[pinterest.com](https://pinterest.com/tauama)' },
  { label: 'Behance',   href: '[behance.net](https://behance.net/tauama)' },
  { label: 'E-mail',    href: 'mailto:contato@tauama.com.br' }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">Tau<span>ama</span></p>
          <p style={{ maxWidth: '32ch', fontSize: 'var(--fs-sm)' }}>
            Design de moda, customização e liberdade de expressão. Feito em São Paulo,
            com um cogumelo de sorte no bolso. <Mushroom size={14} color="#ff4fa3" style={{ display: 'inline' }} />
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3>Navegar</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        <div>
          <h3>Redes</h3>
          <ul>
            {SOCIAL.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer noopener">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} Tauama — todos os direitos reservados</span>
        <span>Design e código: Tauama · v2.0</span>
      </div>
    </footer>
  )
}
