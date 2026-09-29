// src/components/Button.jsx
// Um único botão para todo o site: renderiza <button>, <a> ou <Link> conforme o uso.
import { Link } from 'react-router-dom'

/**
 * @param {{
 *   children?: import('react').ReactNode,
 *   to?: string,
 *   href?: string,
 *   variant?: string,
 *   block?: boolean,
 *   className?: string,
 *   [key: string]: any
 * }} props
 */
export default function Button({
  children, to, href, variant = 'default', block = false, className = '', ...rest
}) {
  const cls = [
    'btn',
    variant !== 'default' && `btn--${variant}`,
    block && 'btn--block',
    className
  ].filter(Boolean).join(' ')

  if (to)   return <Link className={cls} to={to} {...rest}>{children}</Link>
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>
  return <button className={cls} type="button" {...rest}>{children}</button>
}
