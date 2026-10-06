import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

/** Desktop dropdown: category list on the left, links of the hovered category on the right. */
export default function MegaMenu({ groups, onClose }) {
  const [active, setActive] = useState(0)
  const current = groups[active]

  return (
    <div className="fixed inset-x-0 top-20 flex justify-center px-6 pt-2 z-[999]" onMouseLeave={onClose}>
      <div className="w-full max-w-[1200px] bg-[#0b0f1a] border border-white/10 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex min-h-[460px] animate-fade-up">
        <div className="w-[300px] bg-[#0a0d16] p-4 border-r border-white/10 shrink-0 space-y-1">
          {groups.map((g, i) => (
            <button
              key={g.id}
              onMouseEnter={() => setActive(i)}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 border ${
                active === i ? 'bg-blue-600/10 text-white border-blue-500/20' : 'text-slate-400 hover:text-slate-200 border-transparent'
              }`}
            >
              <span className="flex items-center gap-3">
                <g.icon className={`w-4 h-4 ${active === i ? 'text-blue-400' : ''}`} />
                <span className="text-[11px] font-bold uppercase tracking-wider text-left">{g.title}</span>
              </span>
              <ChevronRight className={`w-4 h-4 transition-all ${active === i ? 'opacity-100' : 'opacity-0 -translate-x-2'}`} />
            </button>
          ))}
        </div>

        <div className="flex-1 p-10 flex flex-col">
          <span className="self-start text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] bg-blue-500/10 px-3 py-1.5 rounded-md border border-blue-500/20">
            {current.layer}
          </span>
          <h2 className="text-2xl font-bold text-white mt-4 mb-8">{current.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {current.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
              >
                <span className="text-sm text-slate-300 group-hover:text-white">{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
