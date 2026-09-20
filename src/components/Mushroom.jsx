
// src/components/Mushroom.jsx
// Referência Alice — SVG inline, sem requisição de rede.
export default function Mushroom({ size = 20, color = 'currentColor', ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...rest}>
      <path d="M2.8 10.4C2.8 6.2 6.9 3 12 3s9.2 3.2 9.2 7.4c0 .9-.7 1.6-1.6 1.6H4.4c-.9 0-1.6-.7-1.6-1.6Z" fill={color} />
      <path d="M9.6 12h4.8v6.4a2.4 2.4 0 0 1-4.8 0V12Z" fill={color} opacity=".55" />
      <circle cx="8.4" cy="7.6" r="1.5" fill="#fff" opacity=".85" />
      <circle cx="14.8" cy="6.8" r="1.1" fill="#fff" opacity=".85" />
    </svg>
  )
}
