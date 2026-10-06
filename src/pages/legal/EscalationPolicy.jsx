import { TrendingUp, Target, Layers, HelpCircle, AlertTriangle, Siren, Ticket } from 'lucide-react'
import { LegalPage, LegalArticle, InfoTiles, LegalContact } from '../../components/sections/Legal'

const tiers = [
  { title: 'Level 01: Standard Support', tag: 'Response: 24h', text: 'Initial contact via our ticketing system or support email. Most technical and general inquiries are resolved here.' },
  { title: 'Level 02: Management Review', tag: 'Response: 48h', text: 'If Level 01 fails to provide a satisfactory solution, your case is moved to a Senior Support Specialist or Department Lead.' },
  { title: 'Level 03: Executive Escalation', tag: 'Priority: Critical', text: 'Final stage involving our Compliance Officer or Executive Management for disputes that remain unresolved after 7 business days.' },
]

const triggers = [
  'No response for over 48 business hours.',
  'Technical bug preventing service access.',
  'Dispute regarding Refund Policy eligibility.',
]

export default function EscalationPolicy() {
  return (
    <LegalPage badge="Priority Resolution" badgeIcon={TrendingUp} title="Escalation" updated="Last Updated: January 26, 2026">
      <LegalArticle icon={Target} title="Our Commitment">
        <p>We aim for first-contact resolution. However, we understand that complex technical or billing issues may require specialized attention. This policy outlines the tiered process we use to escalate and resolve your concerns with maximum efficiency and transparency.</p>
      </LegalArticle>

      <LegalArticle icon={Layers} title="Resolution Tiers" highlighted>
        <InfoTiles items={tiers} />
      </LegalArticle>

      <LegalArticle icon={HelpCircle} title="When to Escalate?">
        <ul className="space-y-3">
          {triggers.map((t) => (
            <li key={t} className="flex items-center gap-3"><AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" /> {t}</li>
          ))}
        </ul>
        <div className="mt-6 p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
          <h3 className="flex items-center gap-2 text-red-400 font-black uppercase italic mb-2"><Siren className="w-5 h-5" /> Emergency Cases</h3>
          <p className="text-sm">Data breaches, account compromises, or total platform outages are treated as Critical (Level 3) immediately. Skip standard tiers and use "EMERGENCY" in your email subject line.</p>
        </div>
      </LegalArticle>

      <LegalContact
        icon={Ticket}
        label="Escalation Desk"
        description="Please ensure you have an active Ticket ID before requesting an escalation to Level 02 or higher."
        heading="Raise a Ticket?"
        prompt="Email our specialized resolution team:"
        buttonLabel="Contact Resolutions"
      />
    </LegalPage>
  )
}
