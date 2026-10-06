import { Link } from 'react-router-dom'
import { ArrowRight, Workflow } from 'lucide-react'
import { methodology } from '../../data/home'

export default function MethodologySection() {
  return (
    <section className="py-32 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Workflow className="w-3 h-3" /> Our Process
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
            The TriStorm <br /><span className="italic text-blue-500">methodology</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            After 30+ AI implementations, we identified the patterns that separate successful leaders from failed experiments. Experience works for you.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/project-development" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase text-xs tracking-widest">
              Explore Methodology <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center px-8 py-4 rounded-2xl border border-white/10 font-black uppercase text-xs tracking-widest hover:bg-white/5">
              View Case Studies
            </Link>
          </div>
          <dl className="flex gap-12">
            {[['30+', 'Agents Live'], ['5x', 'Avg. ROI']].map(([v, l]) => (
              <div key={l} className="flex flex-col-reverse">
                <dt className="text-slate-500 text-xs uppercase tracking-widest">{l}</dt>
                <dd className="text-5xl font-black">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="space-y-4">
          {methodology.map((step, i) => (
            <li key={step} className="group flex items-center gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:translate-x-2 transition-all">
              <span className="text-4xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-bold">{step}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
