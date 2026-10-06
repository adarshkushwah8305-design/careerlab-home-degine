import { Crown, Rocket, PenTool, Target, User } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow, { TerminalLine } from '../components/ui/TerminalWindow'
import CheckList from '../components/ui/CheckList'

const ACCENT = '#ec4899'

const features = [
  { icon: Rocket, title: 'AI SaaS Launchpad', description: 'From concept to deployed app in record time. We handle the LLM integration, subscription logic, and hosting so you can focus on growth.' },
  { icon: PenTool, title: 'Content Autonomy', description: 'Custom agents that learn your voice and automate your social presence, newsletter, and video scripts across all platforms.' },
  { icon: Target, title: 'Niche Dominance', description: 'Using AI to identify market gaps and automate lead generation for your specific consulting or digital product niche.' },
]

export default function IndividualProjects() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Force Multiplier for Creators"
        badgeIcon={Crown}
        title="One Person"
        highlight="Empire"
        description="You have the vision; we provide the neural infrastructure. We help solo founders build AI-powered SaaS, automated content engines, and personal brand OSs that run while you sleep."
        primary={{ label: 'Launch Your Idea' }}
        secondary={{ label: 'View Creator Stack' }}
      />

      <FeatureGrid items={features} accent={ACCENT} />

      <SplitSection
        reverse
        accent={ACCENT}
        title={['Scale', 'Without', 'Employees.']}
        description="We help you build a Human-in-the-Loop system where AI handles 90% of the operational heavy lifting, leaving you with the creative 10%."
        visual={
          <TerminalWindow title="CREATOR_CORE_v1" status="SOLO_MODE: ENABLED" icon={User} accent={ACCENT}>
            <p className="text-slate-500">Personal Brand Analysis:</p>
            <TerminalLine accent={ACCENT}>
              "Analyzing audience sentiment across X and LinkedIn. Generating 7-day content cluster optimized for conversion."
            </TerminalLine>
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <span className="text-slate-400">SaaS MRR Engine</span>
              <span className="font-bold animate-pulse" style={{ color: ACCENT }}>Processing</span>
            </div>
          </TerminalWindow>
        }
      >
        <CheckList accent={ACCENT} items={['Automated MVP Development', 'Global Distribution Infrastructure', 'Personal AI Brand Twin']} />
      </SplitSection>

      <CTASection
        accent={ACCENT}
        title="Stop Dreaming. Start Building."
        description="You don't need a team of 50. You need the right agents. Let's build your AI-driven future together."
        buttonLabel="Get Your Personal Audit"
        footnote="Individual Lab // Gurugram Hub"
      />
    </main>
  )
}
