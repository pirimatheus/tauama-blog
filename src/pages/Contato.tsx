
// src/pages/Contato.tsx
// Sem backend: o formulário valida no cliente e abre o e-mail já preenchido.
import { useState, type FormEvent } from 'react'
import Window from '../components/Window.jsx'
import Button from '../components/Button.jsx'

const EMAIL = 'contato@tauama.com.br'

const SOCIAL = [
  { label: 'Instagram', handle: '@tauama', href: '[instagram.com](https://instagram.com/tauama)' },
  { label: 'Pinterest', handle: '/tauama', href: '[pinterest.com](https://pinterest.com/tauama)' },
  { label: 'Behance',   handle: '/tauama', href: '[behance.net](https://behance.net/tauama)' }
]

interface Errors { nome?: string; email?: string; mensagem?: string }

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
    setSent(false)
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (form.nome.trim().length < 2) next.nome = 'Escreve seu nome, por favor.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = 'Esse e-mail parece incompleto.'
    if (form.mensagem.trim().length < 10) next.mensagem = 'Conta um pouco mais (mín. 10 caracteres).'
    return next
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent(`[site] contato de ${form.nome}`)
    const body = encodeURIComponent(`${form.mensagem}\n\n—\n${form.nome}\n${form.email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="container section">
      <p className="eyebrow">Contato</p>
      <h1 style={{ font: '400 var(--fs-h1)/0.95 var(--f-display)', textTransform: 'uppercase' }}>
        Manda mensagem
      </h1>

      <div className="split" style={{ marginTop: 'var(--sp-6)' }}>
        <Window title="nova_mensagem.exe">
          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome" name="nome" type="text" value={form.nome} onChange={update('nome')}
                aria-invalid={!!errors.nome}
                aria-describedby={errors.nome ? 'erro-nome' : undefined}
              />
              {errors.nome && <span className="field__error" id="erro-nome">{errors.nome}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email" name="email" type="email" inputMode="email" value={form.email} onChange={update('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'erro-email' : undefined}
              />
              {errors.email && <span className="field__error" id="erro-email">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem" name="mensagem" value={form.mensagem} onChange={update('mensagem')}
                aria-invalid={!!errors.mensagem}
                aria-describedby={errors.mensagem ? 'erro-mensagem' : undefined}
              />
              {errors.mensagem && <span className="field__error" id="erro-mensagem">{errors.mensagem}</span>}
            </div>

            <Button variant="primary" block type="submit">Enviar</Button>

            {sent && (
              <p className="status" role="status">
                Pronto — seu programa de e-mail abriu com a mensagem preenchida.
                Se não abrir, escreva direto para {EMAIL}.
              </p>
            )}
          </form>
        </Window>

        <Window title="canais_diretos.txt">
          <p>Respondo em até dois dias úteis. Para orçamento de customização, mande medidas e foto da peça.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--sp-4)', display: 'grid', gap: 'var(--sp-2)' }}>
            {SOCIAL.map(s => (
              <li key={s.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--sp-3)' }}>
                <strong>{s.label}</strong>
                <a href={s.href} target="_blank" rel="noreferrer noopener">{s.handle}</a>
              </li>
            ))}
          </ul>
          <Button href={`mailto:${EMAIL}`} variant="acid" block>{EMAIL}</Button>
        </Window>
      </div>
    </div>
  )
}
