import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronDown } from 'lucide-react'
import { catalogs, navLinks } from '../../data/navigation'

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[2000] bg-[#0a0a0a] overflow-y-auto">
      <div className="p-6 min-h-screen flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={onClose} aria-label="Home">
            <img src="/logo.png" alt="CLC Logo" className="h-7 w-auto" />
          </Link>
          <button onClick={onClose} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="space-y-6">
          {[['Services', catalogs.services], ['Industries', catalogs.industries]].map(([label, groups]) => (
            <div key={label} className="space-y-2">
              <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] px-1 mb-2">{label}</h4>
              {groups.map((g) => (
                <details key={g.id} className="group bg-white/5 rounded-xl overflow-hidden border border-white/5">
                  <summary className="flex items-center justify-between text-white font-bold text-sm list-none p-4 cursor-pointer">
                    <span className="flex items-center gap-3">
                      <g.icon className="w-4 h-4 text-blue-400" />
                      {g.title}
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-slate-500" />
                  </summary>
                  <div className="px-4 pb-4 pl-11 space-y-1">
                    {g.items.map((item) => (
                      <Link key={item.href} to={item.href} onClick={onClose} className="block text-slate-300 text-sm py-2">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          ))}

          <div className="border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href} onClick={onClose} className="block text-white font-bold text-base py-3 hover:text-blue-400 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
