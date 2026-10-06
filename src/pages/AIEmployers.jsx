import { Users, Search, BrainCircuit, Rocket, Scale, TrendingDown, Fingerprint, Shuffle, Activity } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow from '../components/ui/TerminalWindow'
import MiniFeature from '../components/ui/MiniFeature'
import { StatGrid } from '../components/ui/StatCard'

const ACCENT = '#3b82f6'

const features = [
  { icon: Search, title: 'Autonomous Sourcing', description: 'Hyper-targeted agents that find passive talent across GitHub, LinkedIn, and research papers based on technical depth, not keywords.' },
  { icon: BrainCircuit, title: 'Cognitive Vetting', description: 'Interactive technical assessments that adapt in real-time to a candidate\'s skill level, eliminating the "Leetcode" bias.' },
  { icon: Rocket, title: 'Onboarding Swarms', description: 'AI agents that handle legal compliance, hardware provisioning, and internal knowledge transfer in under 60 minutes.' },
]

const benefits = [
  { icon: Scale, title: 'Bias-Free Vetting', description: 'Removing gender, age, and ethnic indicators from early-stage screening.' },
  { icon: TrendingDown, title: 'Predictive Turnover', description: 'Forecasting employee retention before you even sign the offer letter.' },
  { icon: Fingerprint, title: 'Bio-Digital Match', description: 'Matching candidates to team dynamics and manager styles.' },
  { icon: Shuffle, title: 'Diversity Optimizer', description: 'Automatically balancing teams for maximum cognitive diversity.' },
]

const stats = [
  { value: '-70%', label: 'Time-to-Hire', sub: 'Average reduction' },
  { value: '-45%', label: 'Cost-per-Hire', sub: 'Efficiency gain' },
  { value: '4.2x', label: 'Interview ROI', sub: 'Qualified leads' },
  { value: '92%', label: 'Retention Rate', sub: '12-month average' },
]

function Meter({ label, value, width }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] mb-2">
        <span className="text-slate-400">{label}</span>
        <span className="font-bold" style={{ color: ACCENT }}>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full rounded-full" style={{ width, background: ACCENT }} />
      </div>
    </div>
  )
}

export default function AIEmployers() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Neural Recruitment Layer"
        badgeIcon={Users}
        title="Augmented"
        highlight="Workforce"
        description="Stop sorting resumes. Start matching synapses. Our AI Employers suite automates the Discovery, Vetting, and Integration of top-tier talent using proprietary behavioral-match LLMs."
        primary={{ label: 'Deploy Talent Agent' }}
        secondary={{ label: 'Employer Case Studies', to: '/case-studies' }}
      />

      <FeatureGrid items={features} accent={ACCENT} footer="View Workflow" />

      <SplitSection
        accent={ACCENT}
        title={['Hire for Potential,', 'Not History.']}
        description="Our agents look beyond the PDF. By analyzing cognitive agility, technical velocity, and cultural resonance, we ensure you hire the top 0.1% of global talent."
        visual={
          <TerminalWindow title="RECRUITMENT_ENGINE_v4.2" status="BIAS_FILTER: ACTIVE" icon={Activity} accent={ACCENT}>
            <div className="space-y-6 py-4">
              <Meter label="Cultural Alignment" value="94%" width="94%" />
              <Meter label="Technical Proficiency" value="Mastery" width="98%" />
            </div>
          </TerminalWindow>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => <MiniFeature key={b.title} accent={ACCENT} {...b} />)}
        </div>
      </SplitSection>

      <StatGrid stats={stats} accent={ACCENT} />

      <CTASection
        accent={ACCENT}
        title="Build Your Dream Team"
        description="Our talent architects at DLF Cyber City are rewriting the rules of recruitment. Deploy your autonomous hiring squad today."
        buttonLabel="Schedule Talent Audit"
        footnote="Talent Node // Gurugram Hub"
      />
    </main>
  )
}
