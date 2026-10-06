import { Trophy, Building2, ArrowRight, Activity, Timer, ShieldCheck } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Button from '../components/ui/Button'
import { caseStudies } from '../data/caseStudies'

const ACCENT = '#3b82f6'

const metrics = [
  { icon: Activity, value: '99.8%', label: 'Inference Reliability' },
  { icon: Timer, value: '240ms', label: 'Global Avg Latency' },
  { icon: ShieldCheck, value: 'Zero', label: 'Data Leaks Post-Inference' },
]

function CaseStudyCard({ image, impact, client, title, tags, category, reverse }) {
  return (
    <article className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="relative rounded-[3rem] overflow-hidden group">
        <img src={image} alt={title} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent" />
        <div className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl bg-black/60 backdrop-blur border border-white/10">
          <p className="text-[10px] uppercase tracking-widest text-slate-400">Key Impact</p>
          <p className="text-xl font-black text-blue-400">{impact}</p>
        </div>
      </div>
      <div>
        <p className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Building2 className="w-4 h-4" /> {client}
        </p>
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none mb-6">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-300 border border-blue-500/20">{t}</span>
          ))}
        </div>
        <p className="text-slate-400 leading-relaxed mb-8">
          Extensive technical overhaul involving the integration of {category} protocols to optimize core business logic and reduce manual overhead by significant margins.
        </p>
        <button className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-blue-400 transition-colors">
          Read Full Blueprint <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Validated Impact"
        badgeIcon={Trophy}
        title="Proven"
        highlight="Deployments."
        description="Real-world results for global enterprises. We don't just build models; we architect solutions that redefine bottom lines."
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {caseStudies.map((c, i) => <CaseStudyCard key={c.title} reverse={i % 2 === 1} {...c} />)}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div key={label} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center">
              <Icon className="w-6 h-6 mx-auto mb-4 text-blue-500" />
              <h4 className="text-4xl font-black">{value}</h4>
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-12">
          Your Case Could Be <br /><span className="text-blue-500">Next.</span>
        </h2>
        <Button to="/contact" accent={ACCENT}>Schedule Discovery</Button>
      </section>
    </main>
  )
}
