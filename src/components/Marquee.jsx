
// src/components/Marquee.jsx
export default function Marquee({ items }) {
  const loop = [...items, ...items] // duplicado para o loop ser contínuo
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((t, i) => <span key={i}>◆ {t}</span>)}
      </div>
    </div>
  )
}
