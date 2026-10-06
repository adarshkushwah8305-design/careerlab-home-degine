import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import { catalogs, navLinks } from '../../data/navigation'

const linkCls = ({ isActive }) =>
  `px-1 text-[10px] font-bold uppercase tracking-[2px] transition-all ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`

export default function Navbar() {
  const [menu, setMenu] = useState(null) // 'services' | 'industries' | null
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close any open menu on navigation
  useEffect(() => { setMenu(null); setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[1000] h-20 transition-all duration-300 ${
          scrolled || menu ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-6" aria-label="Main">
          <Link to="/" aria-label="Career Lab Consulting home" className="shrink-0">
            <img src="/logo.png" alt="CLC Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            {['services', 'industries'].map((key) => (
              <button
                key={key}
                onMouseEnter={() => setMenu(key)}
                onClick={() => setMenu(menu === key ? null : key)}
                className={`flex items-center gap-1 px-1 text-[10px] font-bold uppercase tracking-[2px] transition-all ${
                  menu === key ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {key}
                <ChevronDown className={`w-3 h-3 transition-transform ${menu === key ? 'rotate-180' : ''}`} />
              </button>
            ))}
            {navLinks.map((l) => (
              <NavLink key={l.href} to={l.href} className={linkCls} onMouseEnter={() => setMenu(null)}>
                {l.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="relative group overflow-hidden bg-blue-600 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-[2px] shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 whitespace-nowrap"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <button onClick={() => setMobileOpen(true)} className="xl:hidden p-2 bg-white/5 rounded-lg" aria-label="Open menu">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {menu && <MegaMenu key={menu} groups={catalogs[menu]} onClose={() => setMenu(null)} />}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
