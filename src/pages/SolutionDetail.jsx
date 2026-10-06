import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import CTASection from '../components/sections/CTASection'
import NotFound from './NotFound'
import { catalogs } from '../data/navigation'

/**
 * One dynamic page for every mega-menu entry:
 *   /services/:groupId/:slug   and   /industries/:groupId/:slug
 */
export default function SolutionDetail({ type }) {
  const { groupId, slug } = useParams()
  const group = catalogs[type].find((g) => g.id === groupId)
  const item = group?.items.find((i) => i.slug === slug)
  if (!group || !item) return <NotFound />

  const Icon = group.icon
  const label = type === 'services' ? 'Service' : 'Industry'

  return (
    <main className="bg-[#020617] text-slate-100">
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,#3b82f626_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto text-center">
          <Badge icon={Icon} className="mb-6">{group.layer}</Badge>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em] mb-4">{group.title}</p>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">{item.name}</h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light mb-10">
            Career Lab Consulting delivers {item.name.toLowerCase()} as part of our {group.title} practice — combining
            agentic AI, enterprise-grade security and a delivery team based in DLF Cyber City, Gurugram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" icon={ArrowRight}>Talk to an Expert</Button>
            <Button to="/case-studies" variant="ghost">View Case Studies</Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {['Discovery & blueprint', 'Build & integrate', 'Operate & optimise'].map((step, i) => (
            <div key={step} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <span className="text-4xl font-black text-blue-500/40">0{i + 1}</span>
              <h3 className="flex items-center gap-2 text-lg font-bold mt-4"><CheckCircle2 className="w-4 h-4 text-blue-400" />{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">More in {group.title}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {group.items.filter((i) => i.slug !== slug).map((i) => (
              <Link key={i.href} to={i.href} className="group flex items-center justify-between p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <span className="text-slate-300 group-hover:text-white">{i.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${label === 'Service' ? 'Deployment' : 'Transformation'}?`}
        description="Share your requirements and our engineers will respond with a tailored roadmap."
        buttonLabel="Schedule Discovery"
        footnote={`${label} Node // Gurugram Hub`}
      />
    </main>
  )
}
