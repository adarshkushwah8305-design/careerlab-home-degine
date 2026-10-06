import Button from '../ui/Button'
import { alpha } from '../../utils/color'

export default function CTASection({ title, description, buttonLabel, to = '/contact', footnote, accent = '#3b82f6' }) {
  return (
    <section className="py-32 px-6">
      <div
        className="max-w-5xl mx-auto relative overflow-hidden rounded-[4rem] p-12 md:p-24 text-center border"
        style={{ background: `linear-gradient(135deg, ${alpha(accent, 0.15)}, transparent)`, borderColor: alpha(accent, 0.2) }}
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px]" style={{ background: alpha(accent, 0.2) }} />
        <h2 className="relative text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-8">{title}</h2>
        {description && <p className="relative text-slate-400 text-lg max-w-2xl mx-auto mb-12 font-light">{description}</p>}
        <Button to={to} variant="light" className="relative">
          {buttonLabel}
        </Button>
        {footnote && (
          <p className="relative mt-10 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">{footnote}</p>
        )}
      </div>
    </section>
  )
}
