import { Link } from 'react-router-dom'
import { Award, BadgeCheck, Phone, ArrowRight } from 'lucide-react'
import { company } from '../../data/site'

export default function FounderSection() {
  return (
    <section className="py-32 px-6 bg-[#030810]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="/images/team-meeting.jpg"
            alt="Career Lab Consulting leadership team discussing AI strategy"
            className="w-full aspect-[4/5] object-cover rounded-[3rem]"
          />
          <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl bg-black/70 backdrop-blur border border-white/10">
            <Award className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Nominated</p>
              <p className="text-sm font-bold">Leaders 2024</p>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto max-w-xs p-5 rounded-2xl bg-blue-600 shadow-2xl">
            <p className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-1"><BadgeCheck className="w-4 h-4" /> Verified Strategy</p>
            <p className="text-sm font-bold">Driving exponential ROI for 500+ Global Enterprises</p>
          </div>
        </div>

        <div>
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Founder's Vision</span>
          <h2 className="text-3xl md:text-5xl font-black italic leading-tight mt-4 mb-8">
            "We strive to lead the field and we won't stop until we are the best at what we do"
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            At <strong className="text-white">{company.name}</strong>, our mission is personal. We believe growth is only transformative when it solves real human problems through Agentic AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 font-bold hover:bg-white/5">
              <Phone className="w-4 h-4 text-blue-400" /> {company.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-black uppercase text-xs tracking-widest">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="flex items-center gap-3 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span><strong className="text-white">Live Status</strong> · Accepting New Partnerships for Q1 2026-27</span>
          </p>
        </div>
      </div>
    </section>
  )
}
