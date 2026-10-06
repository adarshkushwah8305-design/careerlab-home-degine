import { ArrowRight } from 'lucide-react'
import { alpha } from '../../utils/color'

/** Large rounded card used in the 3-column grids of every product page. */
export default function FeatureCard({ icon: Icon, title, description, footer, accent = '#3b82f6' }) {
  return (
    <div
      className="group p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 transition-all relative overflow-hidden hover:-translate-y-1"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = alpha(accent, 0.4))}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
    >
      {Icon && (
        <div className="mb-8 p-4 rounded-2xl inline-block" style={{ background: alpha(accent, 0.05) }}>
          <Icon className="w-8 h-8" style={{ color: accent }} />
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
      {footer && (
        <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest" style={{ color: accent }}>
          {footer} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
      <div
        className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl"
        style={{ background: alpha(accent, 0.05) }}
      />
    </div>
  )
}
