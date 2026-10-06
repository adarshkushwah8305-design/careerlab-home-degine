import { Globe2, Network, Wallet, ScanSearch, Store, Lock } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow, { TerminalLine } from '../components/ui/TerminalWindow'
import CheckList from '../components/ui/CheckList'
import { StatGrid } from '../components/ui/StatCard'

const ACCENT = '#84cc16'

const features = [
  { icon: Network, title: 'Neural Matchmaking', description: 'Deep learning models that analyze codebases and design portfolios to match freelancers with projects where success is statistically certain.' },
  { icon: Wallet, title: 'Autonomous Escrow', description: 'AI agents that verify project milestones and auto-release payments, reducing dispute resolution time by 90%.' },
  { icon: ScanSearch, title: 'Quality Sentinels', description: 'Persistent agents that scan deliverables for plagiarism, AI-generated low-effort content, and security vulnerabilities.' },
]

const stats = [
  { value: '-98%', label: 'Payment Latency', sub: 'Near-instant release' },
  { value: '<0.4%', label: 'Dispute Rate', sub: 'Platform average' },
  { value: '3.2s', label: 'Matching Speed', sub: 'Mean time to match' },
  { value: '140+', label: 'Global Coverage', sub: 'Countries supported' },
]

export default function FreelancerPlatform() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Decentralized Talent Infrastructure"
        badgeIcon={Globe2}
        title="Frictionless"
        highlight="Capital"
        description="We build the AI plumbing for the modern gig economy. From Smart-Contract Escrows to Neural Project Matching, we turn fragmented marketplaces into autonomous ecosystems of high-value work."
        primary={{ label: 'Scale Your Marketplace' }}
        secondary={{ label: 'Developer API', to: '/documentation' }}
      />

      <FeatureGrid items={features} accent={ACCENT} />

      <SplitSection
        reverse
        accent={ACCENT}
        title={['Trust is', 'Algorithmic.']}
        description="By integrating Proof-of-Work AI Validators, we eliminate the need for manual project management. The platform itself becomes the arbiter of quality."
        visual={
          <TerminalWindow title="MARKET_ENGINE_v8" status="TPS: 1,200+" icon={Store} accent={ACCENT}>
            <p className="text-slate-500">Matching Node Active:</p>
            <TerminalLine accent={ACCENT}>
              "Found 3 Developers in EU with Expertise in Rust-Lang &amp; Neural-Search. Success Probability: 98.2%."
            </TerminalLine>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <span className="text-slate-400">Escrow Status</span>
              <span className="flex items-center gap-2 font-bold" style={{ color: ACCENT }}><Lock className="w-3 h-3" /> Locked</span>
            </div>
          </TerminalWindow>
        }
      >
        <CheckList
          accent={ACCENT}
          items={['AI-Mediated Dispute Resolution', 'Automated Tax & Compliance Filings', 'Reputation Scoring via Output Analysis']}
        />
      </SplitSection>

      <StatGrid stats={stats} accent={ACCENT} />

      <CTASection
        accent={ACCENT}
        title="The Future is Independent."
        description="Build the infrastructure for the next billion digital nomads. Our marketplace architects are ready to deploy."
        buttonLabel="Launch Platform Hub"
        footnote="Marketplace Node // DLF Cyber City"
      />
    </main>
  )
}
