import { alpha } from '../../utils/color'

export default function Badge({ icon: Icon, accent = '#3b82f6', className = '', children }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-xl ${className}`}
      style={{ background: alpha(accent, 0.1), border: `1px solid ${alpha(accent, 0.2)}` }}
    >
      {Icon && <Icon className="w-3 h-3" style={{ color: accent }} />}
      <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: alpha(accent, 0.8) }}>
        {children}
      </span>
    </div>
  )
}
