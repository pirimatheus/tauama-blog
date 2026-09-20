
// src/components/Clock.tsx
// Widget de personalidade (barra de tarefas). Atualiza a cada 30s — custo desprezível.
import { useEffect, useState } from 'react'

const format = () =>
  new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(new Date())

export default function Clock() {
  const [time, setTime] = useState<string>(format)

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="header__clock" role="status" aria-label={`Horário local: ${time}`}>
      <i aria-hidden="true" />
      <span>{time}</span>
    </div>
  )
}
