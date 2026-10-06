import { Database, Server, BookOpen, SlidersHorizontal, Lock, FileCheck2 } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import FeatureGrid from '../components/sections/FeatureGrid'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow, { TerminalLine } from '../components/ui/TerminalWindow'
import CheckList from '../components/ui/CheckList'

const ACCENT = '#8b5cf6'

const features = [
  { icon: Server, title: 'In-House Hosting', description: 'Full deployment on your own AWS/Azure/GCP VPC or On-Premise H100 clusters. No external API calls, ever.' },
  { icon: BookOpen, title: 'Domain Knowledge', description: "Models trained specifically on your industry's jargon, legal standards, and internal documentation." },
  { icon: SlidersHorizontal, title: 'Bias Control', description: "Remove the 'preachy' filters of public models. We align the LLM strictly to your corporate values and safety needs." },
]

const comparison = [
  ['Data Privacy', 'Shared/Terms-subject', '100% Sovereign'],
  ['Domain Specificity', 'Generalized', 'Industry Expert'],
  ['Long-term Cost', 'Variable Token Fees', 'Fixed Infra CapEx'],
]

export default function CustomLLMs() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Sovereign Model Infrastructure"
        badgeIcon={Database}
        title="Private"
        highlight="Foundations"
        description="Stop leasing intelligence. Build it. We deploy Custom-Weights LLMs directly into your VPC, ensuring your proprietary data never touches a public server and your competitive advantage stays encrypted."
        primary={{ label: 'Claim Your Weights' }}
        secondary={{ label: 'Security Protocol', to: '/security-protocol' }}
      />

      <FeatureGrid items={features} accent={ACCENT} />

      <SplitSection
        reverse
        accent={ACCENT}
        title={['Zero Leakage', 'Architecture.']}
        description="We leverage Mixture-of-Experts (MoE) and Speculative Decoding to ensure your custom model isn't just private—it's faster and more cost-efficient than any commercial alternative."
        visual={
          <TerminalWindow title="SOVEREIGN_CORE_v1.0" status="ENCRYPTION: AES-256" icon={Lock} accent={ACCENT}>
            <p className="text-slate-500">Internal Knowledge Graph Connected</p>
            <TerminalLine accent={ACCENT}>
              "I have reviewed the internal Q3 engineering reports. The discrepancy in the thermal manifold was due to..."
            </TerminalLine>
            <p className="flex items-center gap-2 text-emerald-400 text-[10px]">
              <FileCheck2 className="w-3 h-3" /> VERIFIED_INTERNAL_SOURCE: PROJECT_ORION_DOCS.PDF
            </p>
          </TerminalWindow>
        }
      >
        <CheckList
          accent={ACCENT}
          items={['HIPAA / SOC2 / GDPR Compliant Inference', 'Immutable Audit Trails for Every Token', 'Sub-100ms Latency for Edge Deployment']}
        />
      </SplitSection>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto overflow-x-auto rounded-[2rem] border border-white/10">
          <table className="w-full text-left text-sm min-w-[520px]">
            <thead className="bg-white/5">
              <tr>
                {['Feature', 'Public LLMs', 'Custom Foundations'].map((h, i) => (
                  <th key={h} className="p-6 text-[10px] font-black uppercase tracking-[0.2em]" style={i === 2 ? { color: ACCENT } : undefined}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map(([feature, pub, custom]) => (
                <tr key={feature} className="border-t border-white/5">
                  <td className="p-6 font-bold text-white">{feature}</td>
                  <td className="p-6 text-slate-500">{pub}</td>
                  <td className="p-6 font-bold" style={{ color: ACCENT }}>{custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTASection
        accent={ACCENT}
        title="Your Data. Your Model."
        description="Ready to take ownership? Let's architect a model that works exclusively for your enterprise."
        buttonLabel="Initialize Build Run"
        footnote="Private Node Cluster // Gurugram Hub"
      />
    </main>
  )
}
