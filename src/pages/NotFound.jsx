
// src/pages/NotFound.jsx
import Window from '../components/Window.jsx'
import Button from '../components/Button.jsx'
import Mushroom from '../components/Mushroom.jsx'

export default function NotFound() {
  return (
    <div className="container section">
      <Window title="erro_404.exe">
        <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
          <Mushroom size={40} color="var(--c-beet)" style={{ flex: 'none' }} />
          <div>
            <h1 style={{ font: '400 var(--fs-h2)/1 var(--f-display)', textTransform: 'uppercase' }}>
              Você caiu na toca errada
            </h1>
            <p>Essa página não existe — ou mudou de tamanho e sumiu.</p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
              <Button to="/" variant="primary">Voltar para a home</Button>
              <Button to="/blog">Ir para o blog</Button>
            </div>
          </div>
        </div>
      </Window>
    </div>
  )
}
