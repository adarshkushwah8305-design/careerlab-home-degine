import { Star } from 'lucide-react'
import { awards, insights } from '../../data/home'

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      <span className="font-black mr-1">{value}</span>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(value) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
      ))}
    </div>
  )
}

export default function AwardsInsights() {
  return (
    <section className="py-32 px-6 bg-[#030810]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">Trusted Excellence</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {awards.map((a) => (
            <div key={a.title} className="flex flex-col items-center text-center gap-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <div className="h-20 flex items-center"><img src={a.image} alt={a.title} className="max-h-20 max-w-[160px] object-contain" /></div>
              <p className="font-bold">{a.title}</p>
              <Rating value={a.rating} />
              <p className="text-slate-500 text-xs">{a.reviews} reviews</p>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Knowledge Base</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mt-2">Latest Insights.</h2>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5">Explore All</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post) => (
            <article key={post.title} className="group rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="h-52 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  <span className="text-blue-400">{post.category}</span>·<span>Career Lab</span>·<span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug mb-4 group-hover:text-blue-300 transition-colors">{post.title}</h3>
                <span className="text-sm font-bold text-blue-400">Read Article →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
