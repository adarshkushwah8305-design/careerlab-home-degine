import { Link } from 'react-router-dom'
import { alpha } from '../../utils/color'

const base =
  'inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all active:scale-95'

const variants = {
  primary: 'text-white hover:scale-105 shadow-2xl',
  ghost: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md',
  light: 'bg-white text-black hover:scale-105',
}

/**
 * Polymorphic button: renders a router <Link> when `to` is set, an <a> for `href`,
 * otherwise a <button>. `accent` colours the primary variant.
 */
export default function Button({
  to, href, variant = 'primary', accent = '#3b82f6', icon: Icon, className = '', children, ...rest
}) {
  const style =
    variant === 'primary' ? { background: accent, boxShadow: `0 25px 50px ${alpha(accent, 0.3)}` } : undefined
  const cls = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </>
  )

  if (to) return <Link to={to} className={cls} style={style} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} style={style} target="_blank" rel="noopener noreferrer" {...rest}>{content}</a>
  return <button type="button" className={cls} style={style} {...rest}>{content}</button>
}
