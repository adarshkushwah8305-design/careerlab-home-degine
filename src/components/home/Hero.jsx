import { ArrowRight, Play, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import ParticleCanvas from './ParticleCanvas'
import { heroExperts, successStories } from '../../data/home'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex -space-x-4">
            {heroExperts.map((src, i) => (
              <div key={src} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#020617] overflow-hidden bg-slate-800">
                <img src={src} alt={`AI Expert ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="h-6 w-px bg-white/20" />
          <p className="text-blue-500 text-[9px] md:text-[10px] font-black tracking-[0.15em] uppercase flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> The Future of Work is Autonomous
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
          Command Your <br />
          <span className="relative inline-block italic text-blue-500">AI Empire</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed px-4 font-medium">
          Deploy custom AI workforces that <span className="text-white font-bold underline decoration-blue-500/50">execute tasks</span> autonomously.
          Reduce overhead by 70% and scale instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button to="/contact" icon={ArrowRight} className="w-full sm:w-auto">Deploy AI Workforce</Button>
          <Button href={successStories[0].video} variant="ghost" className="w-full sm:w-auto">
            <Play className="w-4 h-4" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
