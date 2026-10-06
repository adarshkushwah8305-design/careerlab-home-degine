import { FileText, CheckSquare, CreditCard, AlertCircle, Scale, Ban, Receipt, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LegalPage, LegalArticle } from '../../components/sections/Legal'

export default function TermsOfService() {
  return (
    <LegalPage badge="User Agreement" badgeIcon={FileText} title="Terms of" subtitle="Service." updated="Effective Date: January 24, 2026">
      <LegalArticle icon={CheckSquare} title="1. Acceptance of Terms">
        <p>Hamari services access karke aap confirm karte hain ki aap in terms ko follow karenge. Agar aap in rules se agree nahi karte, toh aap hamari services use nahi kar sakte.</p>
      </LegalArticle>

      <LegalArticle icon={CreditCard} title="2. Payment & Razorpay">
        <p>Saari payments Razorpay gateway ke through process hoti hain. Transactions ke waqt aapko Razorpay ki apni terms and conditions ko bhi follow karna hoga. Hum payment failures ya gateway-level issues ke liye responsible nahi hain.</p>
      </LegalArticle>

      <LegalArticle icon={AlertCircle} title="3. Service Limitations">
        <p>Hamari maintenance aur upgrade services 'as-is' basis par milti hain. Hum 100% bug-free software ki guarantee nahi dete, lekin best industry practices follow karte hain.</p>
      </LegalArticle>

      <LegalArticle icon={Scale} title="4. Liability & Indemnity" highlighted>
        <p>Kisi bhi condition mein hum (ya hamare developers) aapke data loss, revenue loss, ya system downtime ke liye liable nahi honge jo kisi third-party tool ya unforeseen circumstances ki wajah se ho.</p>
      </LegalArticle>

      <LegalArticle icon={Ban} title="5. Termination" highlighted>
        <p>Hum bina notice ke un accounts ki services terminate kar sakte hain jo hamari terms ko breach karte hain ya suspicious financial activity (via Razorpay) show karte hain.</p>
      </LegalArticle>

      <article className="p-8 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20 space-y-4">
        <h4 className="flex items-center gap-2 text-emerald-400 font-black uppercase tracking-wider"><Receipt className="w-5 h-5" /> Transaction Policy</h4>
        <p className="text-slate-400 font-light leading-relaxed">
          Saari billed amount non-refundable hain unless explicitly mentioned in our Refund Policy. Payment dispute ke case mein, Razorpay ke investigation protocols final honge. Hum recommendation dete hain ki payment karte waqt aap ek stable internet connection use karein.
        </p>
      </article>

      <div className="text-center space-y-4">
        <p className="text-slate-500">In terms se judi koi bhi clarify chahiye?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
          Contact Legal Team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </LegalPage>
  )
}
