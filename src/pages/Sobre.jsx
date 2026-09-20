
// src/pages/Sobre.jsx
import Window from '../components/Window.jsx'
import Frame from '../components/Frame.jsx'
import Button from '../components/Button.jsx'

const TRAJETORIA = [
  ['2019', 'Primeiras customizações em peças de brechó, vendidas para amigas e conhecidos.'],
  ['2021', 'Formação em design de moda. Foco em modelagem e reaproveitamento têxtil.'],
  ['2023', 'Primeira cápsula autoral: 12 peças únicas, zero tecido novo comprado.'],
  ['2025', 'Consultoria de customização para marcas independentes de streetwear.'],
  ['2026', 'Este blog — um arquivo público do processo.']
]

export default function Sobre() {
  return (
    <div className="container section">
      <p className="eyebrow">Sobre</p>
      <h1 style={{ font: '400 var(--fs-h1)/0.95 var(--f-display)', textTransform: 'uppercase' }}>
        Designer de moda,<br />resolvedora de problema
      </h1>

      <div className="split" style={{ marginTop: 'var(--sp-6)' }}>
        <div className="stack">
          <p>
            Trabalho com roupa desde que descobri que dava para desmontar uma peça e
            remontar melhor. Meu estilo é urbano no sentido literal: nasce da rua,
            do transporte público, da mistura de referências que só existe em cidade grande.
          </p>
          <p>
            Sou reservada — não confunda com distante. Prefiro mostrar afeto resolvendo
            o problema de alguém a falar sobre ele. Isso aparece no trabalho: peça bem
            acabada, costura que aguenta, molde que serve de verdade.
          </p>
          <p>
            Filmes de terror são meu combustível criativo. Aprendi composição vendo
            diretores administrarem tensão: acúmulo, silêncio, corte. Alice no País das
            Maravilhas é a outra metade — a lógica torta, a escala que muda, o cogumelo.
          </p>
          <Button to="/contato" variant="primary">Trabalhar comigo</Button>
        </div>

        <Frame
          src="/images/retrato.webp"
          avif="/images/retrato.avif"
          alt="Retrato da Tauama no atelier, com jaqueta customizada"
          label="retrato_2026.jpg"
          ratio="4 / 5"
          caption="Atelier, outubro. A arara está sempre cheia."
        />
      </div>

      <div style={{ marginTop: 'var(--sp-7)' }} className="split">
        <Window title="trajetoria.log">
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 'var(--sp-4)' }}>
            {TRAJETORIA.map(([ano, texto]) => (
              <li key={ano} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--sp-3)' }}>
                <strong style={{ font: '400 1.4rem/1 var(--f-display)', color: 'var(--c-beet)' }}>{ano}</strong>
                <span style={{ fontSize: 'var(--fs-sm)' }}>{texto}</span>
              </li>
            ))}
          </ol>
        </Window>

        <Window title="estilo.ini">
          <p className="eyebrow">Palavras que uso no briefing</p>
          <div className="chips" style={{ marginBottom: 'var(--sp-4)' }}>
            {['híbrido', 'customizado', 'funcional', 'urbano', 'metálico', 'sem gênero', 'durável']
              .map(t => <span key={t} className="chip" style={{ pointerEvents: 'none' }}>{t}</span>)}
          </div>
          <p className="eyebrow">Palavras que não uso</p>
          <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--c-ink-soft)', margin: 0 }}>
            Artesanal-decorativo, tom terroso por padrão, nostalgia sem função.
          </p>
        </Window>
      </div>
    </div>
  )
}
