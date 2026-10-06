import { Mail } from 'lucide-react'
import Badge from '../ui/Badge'
import { alpha } from '../../utils/color'
import { company } from '../../data/site'

const ACCENT = '#3b82f6'

/** Shared building blocks for the five policy pages. */
export function LegalPage({ badge, badgeIcon, title, subtitle = 'Policy.', updated, children }) {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <section className="pt-32 pb-16 px-6 border-b border-white/5 bg-slate-900/20">
        <div className="max-w-4xl mx-auto">
          <Badge icon={badgeIcon} accent={ACCENT} className="mb-6">{badge}</Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">
            {title} <span className="text-slate-500">{subtitle}</span>
          </h1>
          <p className="text-slate-400 font-light italic text-sm">{updated}</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">{children}</div>
      </section>
    </main>
  )
}

export function LegalArticle({ icon: Icon, title, highlighted = false, children }) {
  return (
    <article
      className={`space-y-6 ${highlighted ? 'p-8 rounded-[2rem]' : ''}`}
      style={highlighted ? { background: alpha(ACCENT, 0.05), border: `1px solid ${alpha(ACCENT, 0.2)}` } : undefined}
    >
      <div className="flex items-center gap-3" style={{ color: ACCENT }}>
        {Icon && <Icon className="w-6 h-6" />}
        <h2 className="text-xl font-black uppercase tracking-tight italic text-white">{title}</h2>
      </div>
      <div className="space-y-4 text-slate-400 leading-relaxed font-light">{children}</div>
    </article>
  )
}

export function LegalList({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-3">
      {items.map(([label, text]) => (
        <li key={label} className="marker:text-blue-500">
          <strong className="text-white font-semibold">{label}:</strong> {text}
        </li>
      ))}
    </ul>
  )
}

export function InfoTiles({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map(({ title, text, tag }) => (
        <div key={title} className="p-6 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h4 className="text-white font-bold text-sm uppercase italic tracking-wider">{title}</h4>
            {tag && <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">{tag}</span>}
          </div>
          <p className="text-xs text-slate-500">{text}</p>
        </div>
      ))}
    </div>
  )
}

/** Closing contact box at the bottom of each policy. */
export function LegalContact({ icon: Icon, label, description, heading, prompt, buttonLabel, email = company.email }) {
  return (
    <article className="grid md:grid-cols-2 gap-8 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-blue-500">
          {Icon && <Icon className="w-6 h-6" />}
          <span className="text-xs font-black uppercase tracking-[0.3em]">{label}</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-black uppercase italic">{heading}</h3>
        <p className="text-slate-500 text-sm">{prompt}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest transition-colors"
        >
          <Mail className="w-4 h-4" /> {buttonLabel}
        </a>
      </div>
    </article>
  )
}
