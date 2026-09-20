
// src/components/Frame.jsx
// Moldura Y2K para imagens: <picture> com AVIF→WebP, lazy loading e
// aspect-ratio fixo para não causar deslocamento de layout (CLS).
export default function Frame({
  src, avif, alt, caption, label = 'imagem.jpg', ratio = '4 / 3', priority = false
}) {
  return (
    <figure className="frame" style={{ margin: 0 }}>
      <div className="frame__bar">
        <span>{label}</span>
        <span aria-hidden="true">▣ ▤ ✕</span>
      </div>
      <div className="frame__inner">
        <div className="frame__media scan">
          <picture>
            {avif && <source srcSet={avif} type="image/avif" />}
            <img
              src={src}
              alt={alt}
              style={{ aspectRatio: ratio }}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
            />
          </picture>
        </div>
        {caption && <figcaption className="frame__caption">{caption}</figcaption>}
      </div>
    </figure>
  )
}
