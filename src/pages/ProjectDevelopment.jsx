import { Hammer, Code2, ShieldCheck, Database, FlaskConical, Workflow } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow from '../components/ui/TerminalWindow'
import MiniFeature from '../components/ui/MiniFeature'
import { alpha } from '../utils/color'

const ACCENT = '#f97316'

const phases = [
  { title: 'Discovery', description: 'Feasibility audits & neural architecture design.' },
  { title: 'Rapid PoC', description: 'MVP development with core AI logic integration.' },
  { title: 'Hardening', description: 'Security audits, latency tuning, and UX polish.' },
  { title: 'Deployment', description: 'Auto-scaling CI/CD pipelines & model monitoring.' },
]

const specialties = [
  { icon: ShieldCheck, title: 'Type-Safe AI Integration', description: 'Enterprise-grade TypeScript & Rust implementations for model stability.' },
  { icon: Database, title: 'RAG & Vector Stacks', description: 'High-speed retrieval architectures using Pinecone, Milvus, or pgvector.' },
  { icon: FlaskConical, title: 'Automated Evaluation', description: 'Strict testing for hallucinations, latency, and token efficiency.' },
]

const stack = ['Next.js', 'Python', 'PyTorch', 'Rust', 'Kubernetes', 'AWS', 'Supabase', 'LangChain', 'OpenAI']

export default function ProjectDevelopment() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Production-Ready AI Systems"
        badgeIcon={Hammer}
        title="Build"
        highlight="The Engine"
        description="We move beyond the sandbox. Our development squad builds scalable, resilient, and AI-native applications using a DevOps-first approach to neural integration."
        primary={{ label: 'Start Your Sprint' }}
        secondary={{ label: 'Technical Stack', to: '#stack' }}
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <div key={p.title} className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 overflow-hidden">
              <span className="absolute -top-4 -right-2 text-8xl font-black opacity-10" style={{ color: ACCENT }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="relative text-xl font-black uppercase italic mb-3">{p.title}</h3>
              <p className="relative text-slate-400 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SplitSection
        accent={ACCENT}
        title={['Code', 'That', 'Thinks.']}
        description="We specialize in Full-Stack AI Engineering. We don't just call an API; we architect the vector databases, the prompt-caching layers, and the custom middleware that makes AI feel instantaneous."
        visual={
          <TerminalWindow title="SYSTEM_ARCH_v2.0" icon={Workflow} accent={ACCENT}>
            <p className="text-slate-400">Building: <span style={{ color: ACCENT }}>Autonomous_Agent_Cluster</span></p>
            {['vector-db', 'prompt-cache', 'middleware', 'llm-gateway'].map((m, i) => (
              <div key={m} className="flex items-center gap-3">
                <span className="w-24 text-slate-500">{m}</span>
                <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${100 - i * 15}%`, background: alpha(ACCENT, 0.7) }} />
                </div>
              </div>
            ))}
          </TerminalWindow>
        }
      >
        <div className="grid grid-cols-1 gap-4">
          {specialties.map((s) => <MiniFeature key={s.title} accent={ACCENT} {...s} />)}
        </div>
      </SplitSection>

      <section id="stack" className="py-24 px-6 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Our Production Arsenal</p>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {stack.map((t) => (
            <span key={t} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 font-bold text-sm hover:border-orange-500/40 transition-colors">
              <Code2 className="w-4 h-4" style={{ color: ACCENT }} /> {t}
            </span>
          ))}
        </div>
      </section>

      <CTASection
        accent={ACCENT}
        title={<>From Idea<br />To Deployment.</>}
        description="Stop waiting on technical debt. Build the future with a development partner that understands the neural frontier."
        buttonLabel="Initialize Your Project"
        footnote="Development Node // Gurugram Hub"
      />
    </main>
  )
}
