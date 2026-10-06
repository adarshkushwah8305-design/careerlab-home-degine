import { Sparkles, Compass, ShieldCheck, Eye, Gauge, HeartHandshake, MapPin, Award, ArrowRight } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Button from '../components/ui/Button'
import { alpha } from '../utils/color'

const ACCENT = '#6366f1'

const parameters = [
  { icon: Eye, title: 'Radical Transparency', description: "We open the 'black box'. Our clients understand every weight and every bias in the models we build." },
  { icon: Gauge, title: 'Performance First', description: "If it's not sub-100ms latency, it's not production-ready. We optimize for high-velocity real-world use." },
  { icon: HeartHandshake, title: 'Ethical Autonomy', description: 'We build systems that respect human agency, data sovereignty, and universal safety standards.' },
]

const nodes = [
  { coord: '28.4595° N', city: 'Gurugram', role: 'HQ & Neural Research' },
  { coord: '40.7128° N', city: 'New York', role: 'Product & Strategy' },
  { coord: '12.9716° N', city: 'Bangalore', role: 'Core Systems Engineering' },
]

const recognitions = ['AI_FORBES_30', 'TECH_CRUNCH_INIT', 'GITHUB_FOUNDERS', 'ISO_CERT_9001']

export default function About() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="The Intelligence Renaissance"
        badgeIcon={Sparkles}
        title="Engineering"
        highlight="The Future"
        description="We aren't just an AI agency. We are a Neural Laboratory dedicated to closing the gap between human intent and machine execution. Based in the heart of Gurugram's tech corridor, we architect the systems that define the next decade."
      />

      {/* Story */}
      <section className="py-24 px-6 bg-[#030816]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-8">
              Intelligence <br /><span style={{ color: ACCENT }}>Unchained.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
              <p>Founded in 2024, our mission was simple: eliminate the friction of legacy software. We believe that AI should not be a "plugin," but the fundamental core of every modern enterprise.</p>
              <p>From our Research Hub in DLF Cyber City, we've transitioned from small-scale LLM experiments to deploying autonomous agents for Fortune 500s and solo-founders alike.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[['500M+', 'Tokens Processed Daily'], ['24/7', 'Autonomous Monitoring']].map(([v, l]) => (
                <div key={l} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-4xl font-black" style={{ color: ACCENT }}>{v}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mt-2">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-12 rounded-[3rem] border" style={{ background: alpha(ACCENT, 0.05), borderColor: alpha(ACCENT, 0.2) }}>
            <Compass className="w-12 h-12 mb-6" style={{ color: ACCENT }} />
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">The North Star</h4>
            <p className="text-2xl md:text-3xl font-bold italic leading-snug">
              "To empower the human species by offloading cognitive drudgery to perfectly aligned autonomous systems."
            </p>
            <p className="flex items-center gap-2 mt-8 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Ethics &amp; Alignment Verified
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">Our Core Parameters.</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {parameters.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/5">
                <Icon className="w-8 h-8 mb-6" style={{ color: ACCENT }} />
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global nodes */}
      <section className="py-24 px-6 bg-[#030816]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
              Global <br /><span style={{ color: ACCENT }}>Nodes.</span>
            </h2>
            <p className="text-slate-400 font-light">Our distributed team of researchers, engineers, and designers operate across three major time zones to ensure perpetual development cycles.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {nodes.map((n) => (
              <div key={n.city} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                <MapPin className="w-6 h-6 mb-4" style={{ color: ACCENT }} />
                <p className="font-mono text-[10px] text-slate-500">{n.coord}</p>
                <h4 className="text-xl font-bold mt-1">{n.city}</h4>
                <p className="text-slate-400 text-sm">{n.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
          {recognitions.map((r) => (
            <span key={r} className="flex items-center gap-2 font-mono text-sm font-bold"><Award className="w-4 h-4" />{r}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-8">
          Join The <br /><span style={{ color: ACCENT }}>Movement.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12">Whether you're looking for a partner or a career in the neural frontier, we're ready to hear from you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" accent={ACCENT} icon={ArrowRight}>Work With Us</Button>
          <Button to="/ai-employers" variant="ghost">View Careers</Button>
        </div>
      </section>
    </main>
  )
}
