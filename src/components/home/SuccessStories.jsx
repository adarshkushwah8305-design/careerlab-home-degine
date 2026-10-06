import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight, Play, Star } from 'lucide-react'
import { successStories } from '../../data/home'

export default function SuccessStories() {
  const [index, setIndex] = useState(0)
  const total = successStories.length
  const story = successStories[index]
  const go = (step) => setIndex((i) => (i + step + total) % total)

  return (
    <section className="py-32 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              <Star className="w-3 h-3" /> Success Stories
            </h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Real Impact, <span className="italic text-blue-500">Measured.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => go(-1)} aria-label="Previous story" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-sm text-slate-500">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button onClick={() => go(1)} aria-label="Next story" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div key={index} className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 animate-fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">{story.title}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">{story.description}</p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {story.stats.map(([v, l]) => (
                <div key={l}>
                  <p className="text-4xl font-black text-blue-400">{v}</p>
                  <p className="text-slate-500 text-sm">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-blue-400">
              Read Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <a href={story.video} target="_blank" rel="noopener noreferrer" className="group relative rounded-[2rem] overflow-hidden block">
            <img src={story.image} alt="Watch Success Story" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3">
              <span className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white" />
              </span>
              <p className="text-sm font-bold">Watch on YouTube</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
