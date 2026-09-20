
// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Window from '../components/Window.jsx'
import Frame from '../components/Frame.jsx'
import Marquee from '../components/Marquee.jsx'
import PostCard from '../components/PostCard.jsx'
import Mushroom from '../components/Mushroom.jsx'
import { posts } from '../data/posts.ts'

export default function Home() {
  const destaques = posts.slice(0, 3)

  return (
    <>
      <section className="container hero">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">Blog pessoal · design de moda · desde 2019</p>
            <h1 className="hero__title glitch" data-text="TAUAMA" tabIndex={0}>Tauama</h1>
            <p className="hero__sub">
              Liberdade de expressão vestida: hibridismo de estilos, customização
              e um olhar de quem assiste filme de terror para aprender ritmo.
            </p>
            <div className="hero__cta">
              <Button to="/blog" variant="primary">Ver o blog</Button>
              <Button href="#destaques" variant="ghost">Destaques ↓</Button>
            </div>
          </div>

          <Frame
            src="/images/hero-look.webp"
            avif="/images/hero-look.avif"
            alt="Look urbano com jaqueta customizada em tons de magenta e prata"
            label="look_01.jpg"
            ratio="3 / 4"
            priority
          />
        </div>
      </section>

      <Marquee items={[
        'Liberdade', 'Customização', 'Streetwear BR', 'Alice',
        'Terror', 'Retalho é matéria-prima', 'Magenta #9E0059'
      ]} />

      <section id="destaques" className="container section">
        <div className="section-head">
          <h2>Últimos posts</h2>
          <Link to="/blog">ver todos →</Link>
        </div>
        <div className="grid-cards">
          {destaques.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>
      </section>

      <section id="manifesto" className="container section">
        <div className="split">
          <Window title="sobre.txt — bloco de notas">
            <p className="eyebrow">Quem escreve aqui</p>
            <h2 style={{ font: '400 var(--fs-h2)/1 var(--f-display)', textTransform: 'uppercase' }}>
              Resolver problema é o meu esporte
            </h2>
            <p>
              Sou designer de moda. Gosto de peça com defeito, molde refeito três vezes
              e caixa de retalho etiquetada. O que parece bagunça criativa aqui é,
              na real, método.
            </p>
            <p>
              Alice no País das Maravilhas entrou como referência e nunca saiu — daí o
              cogumelo que aparece no fundo, nas etiquetas e, de vez em quando, nas costas
              de uma jaqueta.
            </p>
            <Button to="/sobre">Ler a trajetória completa</Button>
          </Window>

          <Window title="manifesto.exe">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 'var(--sp-4)' }}>
              {[
                ['Customizar é editar', 'Nem tudo que cabe na peça precisa ficar nela.'],
                ['Um susto por look', 'Se tudo grita, nada grita.'],
                ['Rua manda', 'O repertório vem da calçada, não do moodboard importado.'],
                ['Organização é estilo', 'Método sustenta liberdade.']
              ].map(([titulo, texto]) => (
                <li key={titulo} style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                  <Mushroom size={22} color="var(--c-beet)" style={{ flex: 'none', marginTop: 2 }} />
                  <span>
                    <strong style={{ display: 'block' }}>{titulo}</strong>
                    <span style={{ color: 'var(--c-ink-soft)', fontSize: 'var(--fs-sm)' }}>{texto}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Window>
        </div>
      </section>

      <section className="container section">
        <Window title="contato.exe — mensagem rápida">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ margin: 0, maxWidth: '44ch' }}>
              Projeto de customização, colaboração ou só uma indicação de filme de terror?
              A caixa de entrada está aberta.
            </p>
            <Button to="/contato" variant="acid">Falar com a Tauama</Button>
          </div>
        </Window>
      </section>
    </>
  )
}
