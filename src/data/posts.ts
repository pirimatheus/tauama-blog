
// src/data/posts.ts
export type Category = 'looks' | 'bastidores' | 'referencias' | 'moda-urbana'

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'looks',       label: 'Looks' },
  { id: 'bastidores',  label: 'Bastidores' },
  { id: 'referencias', label: 'Referências' },
  { id: 'moda-urbana', label: 'Moda urbana' }
]

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'list'; items: string[] }
  | { type: 'img'; src: string; avif?: string; alt: string; caption?: string }

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: Category
  date: string          // ISO
  readingTime: number   // minutos
  cover: { src: string; avif?: string; alt: string }
  body: Block[]
}

/** Ordem do array = ordem da navegação ↑ ↓ (mais recente primeiro). */
export const posts: Post[] = [
  {
    slug: 'jaqueta-cogumelo-customizada',
    title: 'Jaqueta cogumelo: customização em 6 etapas',
    excerpt: 'Peça de brechó, tinta têxtil e um bordado de Amanita. O passo a passo da jaqueta que virou assinatura.',
    category: 'looks',
    date: '2026-09-08',
    readingTime: 6,
    cover: { src: '/images/jaqueta-cogumelo.webp', avif: '/images/jaqueta-cogumelo.avif', alt: 'Jaqueta jeans customizada com bordado de cogumelo nas costas' },
    body: [
      { type: 'p', text: 'Toda peça boa começa errada. Essa jaqueta chegou até mim com dois bolsos rasgados e uma cor de jeans que não existe mais — exatamente o tipo de problema que eu gosto de resolver.' },
      { type: 'h2', text: 'O molde antes da tinta' },
      { type: 'p', text: 'Antes de encostar em qualquer pigmento, desenhei o cogumelo em papel vegetal e testei a proporção nas costas com fita crepe. Customização sem molde é sorte, não projeto.' },
      { type: 'list', items: [
        'Lavagem e secagem completa (tinta não fixa em tecido engomado).',
        'Molde em papel vegetal, posicionado com fita crepe.',
        'Contorno em caneta têxtil, sempre da esquerda para a direita.',
        'Base em tinta opaca, duas demãos finas.',
        'Bordado de realce no chapéu do cogumelo.',
        'Fixação com ferro, pano úmido, 3 minutos.'
      ]},
      { type: 'quote', text: 'Customizar é editar. Você não acrescenta: você decide o que fica.', cite: 'anotação de caderno, 2024' },
      { type: 'img', src: '/images/detalhe-bordado.webp', avif: '/images/detalhe-bordado.avif', alt: 'Close do bordado vermelho e branco no chapéu do cogumelo', caption: 'O ponto de realce leva três horas. Vale cada uma.' },
      { type: 'p', text: 'O resultado é uma peça que não pede licença. Combina com alfaiataria larga, com bermuda de moletom, com o que vier.' }
    ]
  },
  {
    slug: 'terror-como-metodo-de-criacao',
    title: 'Terror como método de criação',
    excerpt: 'Como a estrutura de tensão dos filmes de terror virou ferramenta de composição de look.',
    category: 'referencias',
    date: '2026-08-26',
    readingTime: 5,
    cover: { src: '/images/terror-metodo.webp', avif: '/images/terror-metodo.avif', alt: 'Colagem de fotogramas de filmes de terror em tons de magenta' },
    body: [
      { type: 'p', text: 'Filme de terror bom não assusta o tempo todo. Ele organiza o silêncio para que um segundo específico funcione. Look é igual.' },
      { type: 'h2', text: 'A regra do único susto' },
      { type: 'p', text: 'Se tudo grita, nada grita. Escolho um elemento de choque por composição — uma cor, um volume, um acessório — e deixo o resto sustentar.' },
      { type: 'quote', text: 'O neon amarelo só existe porque o resto do look está em silêncio.' },
      { type: 'p', text: 'É por isso que a paleta daqui tem magenta como assinatura e ciano em doses homeopáticas.' }
    ]
  },
  {
    slug: 'bastidores-do-atelie',
    title: 'Bastidores: o atelier em 4m²',
    excerpt: 'Arara, régua de alfaiate e caixa de retalhos categorizada por peso de tecido. Organização é o verdadeiro superpoder.',
    category: 'bastidores',
    date: '2026-08-11',
    readingTime: 4,
    cover: { src: '/images/atelie.webp', avif: '/images/atelie.avif', alt: 'Bancada de atelier com tecidos, tesoura e caixas etiquetadas' },
    body: [
      { type: 'p', text: 'Quatro metros quadrados, três caixas e uma arara. Todo o resto é método.' },
      { type: 'list', items: [
        'Retalhos separados por peso, não por cor.',
        'Aviamentos em potes transparentes etiquetados.',
        'Peças em processo sempre visíveis na arara.'
      ]},
      { type: 'p', text: 'Quando o espaço é pequeno, a desordem custa caro. Cada minuto procurando uma agulha é um minuto que não virou peça.' }
    ]
  },
  {
    slug: 'liberdade-nao-e-uniforme',
    title: 'Liberdade não é uniforme',
    excerpt: 'Sobre hibridismo de estilos e por que o streetwear brasileiro não precisa copiar ninguém.',
    category: 'moda-urbana',
    date: '2026-07-29',
    readingTime: 7,
    cover: { src: '/images/liberdade.webp', avif: '/images/liberdade.avif', alt: 'Três pessoas com looks urbanos híbridos em calçada de centro da cidade' },
    body: [
      { type: 'p', text: 'Existe uma diferença entre vestir liberdade e vestir o uniforme de quem fala sobre liberdade.' },
      { type: 'h2', text: 'Hibridismo é local' },
      { type: 'p', text: 'Camisa de time com alfaiataria. Chinelo com meia. Tererê com boné. O streetwear brasileiro já é híbrido antes de qualquer briefing.' },
      { type: 'p', text: 'Meu trabalho é organizar esse repertório sem higienizá-lo.' }
    ]
  },
  {
    slug: 'paleta-metalica-como-usar',
    title: 'Paleta metálica sem virar fantasia',
    excerpt: 'Prata, cromado e gloss: três regras para usar brilho na roupa e continuar sendo levada a sério.',
    category: 'looks',
    date: '2026-07-14',
    readingTime: 5,
    cover: { src: '/images/metalico.webp', avif: '/images/metalico.avif', alt: 'Detalhe de tecido metálico prateado com reflexo magenta' },
    body: [
      { type: 'p', text: 'Brilho é um ingrediente forte. Usado sem medida, transforma qualquer produção em fantasia de festa temática.' },
      { type: 'list', items: [
        'Uma peça metálica por look. Só uma.',
        'O metálico entra na silhueta mais simples do conjunto.',
        'Se tem brilho na roupa, a maquiagem fica fosca.'
      ]},
      { type: 'p', text: 'Regras existem para serem quebradas com consciência de causa — e essas três eu quebro umas duas vezes por ano.' }
    ]
  }
]

export const getPostIndex = (slug: string) => posts.findIndex(p => p.slug === slug)

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
