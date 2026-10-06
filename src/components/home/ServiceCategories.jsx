import { useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceCategories } from '../../data/home'

const tabs = ['All Services', ...serviceCategories.map((s) => s.category)]

export default function ServiceCategories() {
  const [active, setActive] = useState(tabs[0])
  const visible = active === tabs[0] ? serviceCategories : serviceCategories.filter((s) => s.category === active)

  return (
    <section className="py-32 px-6 bg-[#030810]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h2 id="services-heading" className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Our Service Categories</h2>
          <nav role="tablist" className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  active === t ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </header>

        <div role="tabpanel" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((s) => (
            <article key={s.title} className="group relative h-[380px] rounded-[2rem] overflow-hidden border border-white/5 animate-fade-up">
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{s.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{s.title}</h3>
                <p className="text-slate-300 text-sm mb-6">{s.description}</p>
                <Link to={s.href} className="text-sm font-bold text-white hover:text-blue-400">Explore Service →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
