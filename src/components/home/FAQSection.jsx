import { Link } from 'react-router-dom'
import { HelpCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { faqs } from '../../data/home'

export default function FAQSection() {
  return (
    <section className="py-32 px-6 bg-[#020617]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <HelpCircle className="w-10 h-10 text-blue-500 mx-auto mb-6" />
        <SectionHeading
          eyebrow="Support Center"
          title="Common Enquiries."
          description="Detailed answers to our most frequent technical questions."
          className="mb-16"
        />
        <Accordion items={faqs} />
        <div className="mt-12 text-center space-y-4">
          <p className="text-slate-400">Still have questions? Our engineers are here to help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Speak to an Expert <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
