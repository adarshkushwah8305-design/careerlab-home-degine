import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone, Mail, Globe } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import OfficeCard from './OfficeCard'
import { company, offices, socialLinks } from '../../data/site'
import { footerLinks, legalLinks } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="relative bg-[#01040f] border-t border-white/5 pt-20 pb-28 md:pb-10 px-6" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">{company.name} - {company.tagline}</h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/">
              <img src="/logo.png" alt="Career Lab Consulting Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{company.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  onMouseEnter={(e) => (e.currentTarget.style.background = s.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '')}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} className="lg:col-span-2" aria-label={heading}>
              <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">{heading}</h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="group inline-flex items-center gap-1 text-slate-400 hover:text-white text-sm transition-colors">
                      {l.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6">Contact Hub</h3>
            <address className="not-italic space-y-4 text-sm">
              <p className="flex gap-2 text-slate-400"><MapPin className="w-4 h-4 shrink-0 text-blue-500 mt-0.5" />{company.address}</p>
              <a href={company.phoneHref} className="flex gap-2 text-slate-400 hover:text-white"><Phone className="w-4 h-4 text-blue-500" />{company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex gap-2 text-slate-400 hover:text-white break-all"><Mail className="w-4 h-4 shrink-0 text-blue-500" />{company.email}</a>
            </address>
          </div>
        </div>

        {/* Global presence */}
        <section className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="text-white font-black uppercase tracking-wider">Global Presence</h3>
              <p className="text-slate-500 text-xs">Operating across {offices.length} primary tech hubs worldwide</p>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x">
            {offices.map((o) => (
              <div key={o.city} className="snap-start shrink-0 w-[260px]">
                <OfficeCard {...o} />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© 2015 - {new Date().getFullYear()} {company.name}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} to={l.href} className="hover:text-white transition-colors">{l.name}</Link>
            ))}
          </div>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Enterprise Systems Nominal
          </p>
        </div>
      </div>
    </footer>
  )
}
