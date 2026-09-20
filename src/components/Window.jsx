
// src/components/Window.jsx
export default function Window({ title, children, className = '' }) {
  return (
    <section className={`win ${className}`}>
      <header className="win__bar">
        <span className="win__title">{title}</span>
        <span className="win__dots" aria-hidden="true">
          <i className="win__dot" /><i className="win__dot" /><i className="win__dot" />
        </span>
      </header>
      <div className="win__body">{children}</div>
    </section>
  )
}
