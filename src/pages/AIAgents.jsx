import { Bot, Brain, Terminal, ShieldCheck, Database, Network, Eye, Plug, Layers } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow, { TerminalLine } from '../components/ui/TerminalWindow'
import MiniFeature from '../components/ui/MiniFeature'
import { alpha } from '../utils/color'

const ACCENT = '#4f46e5'

const agents = [
  { icon: Brain, title: 'Cognitive Analyst', description: 'Deep-research agents that perform massive-scale data synthesis, sentiment tracking, and predictive forecasting.' },
  { icon: Terminal, title: 'Execution Sentinel', description: 'Transaction-layer agents that handle API calls, smart contract executions, and database management without human intervention.' },
  { icon: ShieldCheck, title: 'Security Warden', description: 'Persistent guardians that monitor network health, detect anomalies, and auto-patch vulnerabilities in real-time.' },
]

const capabilities = [
  { icon: Database, title: 'Long-term Memory', description: 'Persistent vector-storage for agent recall.' },
  { icon: Network, title: 'Agent Swarms', description: 'Multi-agent coordination for massive tasks.' },
  { icon: Eye, title: 'Observability', description: 'Full human-in-the-loop audit trails.' },
  { icon: Plug, title: 'Tool Integration', description: 'Native 100+ API & DB integrations.' },
]

const swarm = ['Inventory_Bot', 'Legal_Draft_Bot', 'Fraud_Sentinel', 'Customer_Joy_Agent', 'Billing_Oracle']

export default function AIAgents() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Autonomous Agentic Layer v4.0"
        badgeIcon={Bot}
        title="Digital"
        highlight="Workforce"
        description={'Deploy autonomous agents that don\'t just "chat"—they execute. From real-time supply chain healing to autonomous legal research, our agents operate with 99.9% reliability in high-stakes environments.'}
        primary={{ label: 'Initialize New Agent' }}
        secondary={{ label: 'View Agent Logs', to: '/documentation' }}
      />

      <FeatureGrid items={agents} accent={ACCENT} footer="Deploying to Node Alpha-9" />

      <SplitSection
        accent={ACCENT}
        title={['Logic Above', 'Code.']}
        description="Our agents utilize a Recursive Planning Engine. They decompose complex high-level goals into tactical sub-tasks, choosing their own tools and verifying their own results through multi-step reasoning."
        visual={
          <TerminalWindow title="AGENT_PROTOCOL_STACK.json" accent={ACCENT}>
            <TerminalLine accent={ACCENT}>
              <span className="mr-2" style={{ color: ACCENT }}>$</span> exec agent_rethink --goal "Optimize Logistics"
            </TerminalLine>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 text-slate-400">
              <p className="animate-pulse">Thinking: Analyzing current traffic latency...</p>
              <p className="text-emerald-400 mt-2 font-bold">Success: Rerouted 400 shipments. Estimated savings: $4.2k</p>
            </div>
          </TerminalWindow>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((c) => <MiniFeature key={c.title} accent={ACCENT} {...c} />)}
        </div>
      </SplitSection>

      <section className="py-24 border-y border-white/5" style={{ background: alpha(ACCENT, 0.01) }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Layers className="w-12 h-12 mx-auto mb-6" style={{ color: ACCENT }} />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Scale Your Intelligence</h2>
          <p className="text-slate-400 italic text-lg mb-12">"One agent is an assistant. A swarm is a department."</p>
          <div className="flex flex-wrap justify-center gap-3">
            {swarm.map((name) => (
              <span key={name} className="px-4 py-2 rounded-full font-mono text-[10px] border border-white/10 bg-white/5 text-slate-300">
                {name} :: <span className="text-emerald-400">ACTIVE</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        accent={ACCENT}
        title="Hire Your Last Employee"
        description="Our agent architects are building the workforce of 2030 today. Secure your node on the autonomous network."
        buttonLabel="Initialize Swarm"
        footnote="Autonomous Cluster // Gurugram Node"
      />
    </main>
  )
}
