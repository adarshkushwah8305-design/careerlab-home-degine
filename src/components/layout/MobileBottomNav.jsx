import { NavLink } from 'react-router-dom'
import { Home, LayoutGrid, MessageCircle, Briefcase, Headphones } from 'lucide-react'
import { company } from '../../data/site'

const items = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/project-development', label: 'Products', icon: LayoutGrid },
  { href: company.whatsapp, label: 'WhatsApp', icon: MessageCircle },
  { to: '/ai-employers', label: 'Jobs', icon: Briefcase },
  { to: '/contact', label: 'Support', icon: Headphones },
]

/** Fixed app-style tab bar shown only on small screens. */
export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-[900] bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 px-2 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16">
        {items.map(({ to, href, label, icon: Icon, end }) =>
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="-mt-8 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.4)]"
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          ) : (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-[10px] font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          ),
        )}
      </div>
    </nav>
  )
}
