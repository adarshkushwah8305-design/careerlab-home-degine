import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { features } from '../../data/home'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 bg-[#020617]" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

  {/* Next-Gen AI Infrastructure */}
  <div className="flex justify-center mb-4 relative -top-6">
  <span
    className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-sm font-semibold text-blue-400 uppercase tracking-widest"
  >
    Next-Gen AI Infrastructure
  </span>
</div>
  {/* Main Heading */}
  <SectionHeading
    title={
      <>
        Scale Your Business <br />

        <span
          style={{
            background:
              'linear-gradient(135deg, #3b82f6 0%, #3b82f6 55%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Without the Limits
        </span>
      </>
    }
  />

  {/* Description */}
  <p className="mt-1 mx-auto max-w-2xl text-slate-400 text-lg leading-relaxed">
    Standard LLMs aren't enough for scale. Our proprietary architecture is built for companies that demand{' '}
    <strong className="text-white">99.9% accuracy</strong> and global reliability.
  </p>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
              <Link to="/ai-agents" className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-600">
          <div>
            <h3 className="text-2xl md:text-3xl font-black">Ready to automate your growth?</h3>
            <p className="text-blue-100">Join 500+ enterprises building the future of work today.</p>
          </div>
          <Link to="/contact" className="px-8 py-4 rounded-2xl bg-white text-blue-700 font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
