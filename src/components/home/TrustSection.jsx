import { Link } from 'react-router-dom'
import { Timer, Users, ArrowRight, Shield, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const checks = [
  ['Data Encryption', 'Active'],
  ['IP Masking', 'Enabled'],
  ['Threat Detection', 'No threats'],
]

export default function TrustSection() {
  return (
    <section className="py-32 px-6 bg-[#020617]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading align="left" eyebrow="Max Efficiency" title={<>Secure more. <br />Earn more.</>} />
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Humara platform sirf data protect nahi karta, balki workflows ko optimize karke aapki{' '}
            <strong className="text-white">operational cost 35% tak kam</strong> kar deta hai.
          </p>
          <div className="grid grid-cols-2 gap-4 my-10">
            {[[Timer, 'Instant Setup', 'Start in 5 minutes'], [Users, 'Multi-User Scale', 'Unlimited agents']].map(([Icon, t, s]) => (
              <div key={t} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <Icon className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="font-bold">{t}</h3>
                <p className="text-slate-500 text-sm">{s}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase text-xs tracking-widest transition-colors">
            Maximize Your Profit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <article className="relative p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-[#030810] border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <span className="flex items-center gap-2 text-sm font-bold"><Shield className="w-5 h-5 text-blue-400" /> Auto-Shield v3.0</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Estimated ROI</p>
          <p className="flex items-center gap-3 text-6xl font-black text-emerald-400 mb-10">
            +248% <TrendingUp className="w-8 h-8" />
          </p>
          <div className="space-y-3">
            {checks.map(([k, v]) => (
              <div key={k} className="flex justify-between p-4 rounded-xl bg-white/[0.03] text-sm">
                <span className="text-slate-400">{k}</span>
                <span className="text-emerald-400 font-bold">{v}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
