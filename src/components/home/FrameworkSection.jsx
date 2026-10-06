import { CheckCircle2, PiggyBank } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { frameworkSteps } from '../../data/home'

export default function FrameworkSection() {
  return (
    <section className="py-32 px-6 bg-[#030810]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <SectionHeading align="left" eyebrow="Strategic Framework" title={<>Transforming Data into <br />Digital Assets.</>} />
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <PiggyBank className="w-8 h-8 text-emerald-400" />
            <div>
              <p className="text-xl font-black">40% Cost Reduction</p>
              <p className="text-slate-500 text-xs">Average enterprise saving</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkSteps.map(({ icon: Icon, tag, title, description }, i) => (
            <article key={title} className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden">
              <span className="absolute top-4 right-6 text-6xl font-black text-white/5">{String(i + 1).padStart(2, '0')}</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-6">
                <CheckCircle2 className="w-3 h-3" /> {tag}
              </span>
              <Icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
