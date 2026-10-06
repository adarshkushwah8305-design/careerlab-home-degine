import { Globe, MapPin, Server, Briefcase } from 'lucide-react'
import useCountUp from '../../hooks/useCountUp'
import { liveStats } from '../../data/home'

const icons = [Globe, MapPin, Server, Briefcase]
const avatars = [20, 21, 22, 23]

function LiveStat({ icon: Icon, label, value, suffix = '', description }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <Icon className="w-6 h-6 text-blue-400" />
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
        </span>
      </div>
      <p className="text-slate-500 text-xs uppercase tracking-widest">{label}</p>
      <h3 className="text-4xl font-black my-2">{count.toLocaleString('en-IN')}{suffix}</h3>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  )
}

export default function GlobalStats() {
  return (
    <>
      <section className="py-24 px-6 bg-[#030810] text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Global Learner Community</h2>
        <p className="text-slate-400 mb-10">Join thousands of aspiring AI Engineers from 30+ countries building the future together.</p>
        <div className="flex justify-center -space-x-3">
          {avatars.map((n) => (
            <img key={n} src={`/images/avatars/${n}.jpg`} alt="Student" className="w-12 h-12 rounded-full border-2 border-[#030810]" />
          ))}
          <span className="w-12 h-12 rounded-full border-2 border-[#030810] bg-blue-600 flex items-center justify-center text-xs font-black">+2k</span>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                Global Scale. <br /><span className="italic text-blue-500">Real-time Impact.</span>
              </h2>
              <p className="text-slate-400 mt-6">Monitoring global operations and infrastructure performance in real-time.</p>
            </div>
            <div className="flex gap-10">
              {[['99.9%', 'Uptime'], ['24/7', 'Monitoring']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-4xl font-black text-blue-400">{v}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStats.map((s, i) => <LiveStat key={s.label} icon={icons[i]} {...s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
