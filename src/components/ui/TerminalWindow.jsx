import { alpha } from '../../utils/color'

/** Mac-style window chrome used for the "live system" mockups. */
export default function TerminalWindow({ title, status, accent = '#3b82f6', icon: Icon, children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-10 rounded-full blur-[100px]" style={{ background: alpha(accent, 0.05) }} />
      <div className="relative bg-black/40 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
          </div>
          <span className="flex items-center gap-2 text-[10px] font-mono text-slate-500 truncate">
            {Icon && <Icon className="w-3 h-3" style={{ color: accent }} />}
            {title}
          </span>
          {status && (
            <span className="text-[10px] font-mono font-bold" style={{ color: accent }}>
              {status}
            </span>
          )}
        </div>
        <div className="font-mono text-xs space-y-4">{children}</div>
      </div>
    </div>
  )
}

/** Highlighted line inside a TerminalWindow. */
export function TerminalLine({ accent = '#3b82f6', children }) {
  return (
    <div
      className="p-4 rounded-xl border"
      style={{ background: alpha(accent, 0.05), borderColor: alpha(accent, 0.2), color: alpha(accent, 0.8) }}
    >
      {children}
    </div>
  )
}
