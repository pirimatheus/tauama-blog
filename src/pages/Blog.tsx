// src/pages/Blog.tsx
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'
import { posts, CATEGORIES, type Category } from '../data/posts'

export default function Blog() {
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

      <div className="blog-layout">
        <article className="blog-feature">
          <h2>Tendências que estão tomando conta da moda agora</h2>
          <p>
            [Texto placeholder] A moda urbana segue em movimento constante, e 2026 trouxe
            de volta o gosto por texturas y2k, cores vibrantes e peças que misturam o
            nostálgico com o futurista...
          </p>
          <p>
            [Texto placeholder pessoal] E por trás de cada look publicado aqui está a
            Tauama — minha esposa, estilista e a verdadeira protagonista deste espaço.
            Cada peça, cada escolha de cor, cada referência vem da visão dela...
          </p>
          <p>
            A virada do milênio trouxe consigo uma estética que, duas décadas depois, continua
            influenciando passarelas, vitrines e o guarda-roupa de quem busca autenticidade em
            meio à padronização. Os anos 2000 foram marcados por um otimismo tecnológico — a
            internet discada, os primeiros celulares com câmera, o nascimento das redes sociais —
            e esse clima futurista transbordou diretamente para as roupas. Tecidos metalizados,
            brilhos holográficos e acabamentos plásticos deixaram de ser exclusividade de festas
            temáticas para se tornarem parte do cotidiano, criando um visual que parecia ter saído
            direto de um filme de ficção científica.
          </p>

          <p>
            Foi nessa década que o low-rise jeans, a calça de cintura baixíssima, se consolidou
            como peça-chave do guarda-roupa feminino, muitas vezes acompanhada de uma barriga à
            mostra e um cinto largo de fivela chamativa. A silhueta magra e os ombros marcados
            pelas camisetas justas criaram um ideal estético que, hoje, é revisitado com outro
            olhar: mais consciente, mais plural, mas igualmente nostálgico. Junto com o low-rise
            vieram os tops curtos, as calças boot cut que alargavam na altura do tornozelo, e os
            acessórios extravagantes — brincos enormes, pulseiras emborrachadas coloridas,
            colares de miçangas que remetiam à cultura rave e ao universo pop que dominava a MTV.
          </p>

          <p>
            A moda esportiva também ganhou um capítulo especial nesse período. Os conjuntos de
            veludo colorido, popularizados por marcas como a Juicy Couture, tornaram-se sinônimo
            de um certo glamour casual: usar roupa de ginástica fora da academia, estampada com
            frases e aplicações em strass, virou declaração de estilo. Paralelamente, o movimento
            hip-hop e a cultura urbana trouxeram influência direta para as ruas — bonés de aba
            reta, correntes grandes, tênis volumosos e camisetas largas compunham um visual que
            misturava conforto e ostentação, muito antes do termo streetwear virar mainstream.
          </p>

          <p>
            Não dá para falar dos anos 2000 sem mencionar os óculos de sol minúsculos, quase
            retangulares, que desafiavam qualquer lógica de proteção solar em nome da estética;
            as bolsas baguete, pequenas e estruturadas, carregadas sob o braço como símbolo de
            status; e os cabelos lisos e repartidos ao meio, muitas vezes com mechas californianas
            ou grampos brilhantes em formato de borboleta. Cada detalhe contava uma história de um
            tempo em que a moda não tinha medo de errar — e talvez seja exatamente essa ousadia,
            esse "tudo pode" estético, que faz a geração atual revisitar o período com tanto carinho.
          </p>

          <p>
            Hoje, duas décadas depois, vemos essas referências reaparecerem ressignificadas: o
            low-rise volta com mais consciência corporal, os brilhos metalizados ganham
            acabamentos sustentáveis, e as peças statement dos anos 2000 convivem lado a lado com
            o minimalismo contemporâneo. É a prova de que moda é ciclo — e que entender o passado
            é essencial para quem quer criar o futuro. Para quem acompanha este espaço, a proposta
            é justamente essa: revisitar, reinterpretar e trazer para o presente o melhor de cada
            era, com um olhar autoral e sensível ao tempo em que vivemos.
          </p>
        </article>

        <aside className="blog-sidebar">
          <div className="chips" role="group" aria-label="Filtrar por categoria">
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
            <div className="grid-cards grid-cards--sidebar">
              {listed.map((post, i) => <PostCard key={post.slug} post={post} priority={i < 2} />)}
            </div>
          ) : (
            <p className="empty">Nada por aqui ainda nessa categoria.</p>
          )}
        </aside>
      </div>
    </div>
  )
}
