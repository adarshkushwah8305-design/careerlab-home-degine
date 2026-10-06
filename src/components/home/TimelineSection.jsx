import SectionHeading from '../ui/SectionHeading'
import useCountUp from '../../hooks/useCountUp'
import { timeline } from '../../data/home'

const max = Math.max(...timeline.map((t) => t.solutions))

function TimelineBar({ year, tags, solutions, logos }) {
  const [ref, count] = useCountUp(solutions)
  return (
    <figure ref={ref} className="flex flex-col items-center gap-4 min-w-[140px]">
      <div className="flex flex-wrap justify-center gap-2 min-h-[60px] items-end">
        {logos.map((l) => (
          <img
            key={l.name}
            src={l.url}
            alt={l.name}
            loading="lazy"
            className="h-5 max-w-[60px] object-contain bg-white/90 rounded px-1 py-0.5"
          />
        ))}
      </div>
      <div
        className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600/5 to-blue-500/30 border border-blue-500/20 flex flex-col items-center justify-end p-4"
        style={{ height: `${120 + (solutions / max) * 220}px` }}
      >
        <div className="flex gap-1 mb-2">
          {tags.map((t) => <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-slate-300">{t}</span>)}
        </div>
        <span className="text-3xl font-black">{count}+</span>
        <figcaption className="text-[10px] uppercase tracking-widest text-slate-400">Solutions</figcaption>
      </div>
      <time className="text-lg font-black text-blue-400">{year}</time>
    </figure>
  )
}

export default function TimelineSection() {
  return (
    <section className="py-32 px-6 bg-[#030810]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Institutional Growth Matrix" title="Evolution Timeline" className="mb-16" />
        <div className="flex items-end gap-4 overflow-x-auto no-scrollbar pb-4">
          {timeline.map((t) => <TimelineBar key={t.year} {...t} />)}
        </div>
      </div>
    </section>
  )
}
