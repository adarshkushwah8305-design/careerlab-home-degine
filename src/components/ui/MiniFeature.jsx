import { alpha } from '../../utils/color'

/** Small tile: icon + uppercase label + one-line description. */
export default function MiniFeature({ icon: Icon, title, description, accent = '#3b82f6' }) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
      {Icon && <Icon className="w-5 h-5" style={{ color: accent }} />}
      <h4 className="text-[10px] font-black uppercase tracking-widest" style={{ color: alpha(accent, 0.8) }}>
        {title}
      </h4>
      <p className="text-slate-500 text-[11px] leading-relaxed">{description}</p>
    </div>
  )
}
