export default function StatCard({ value, label, sub, accent = '#3b82f6' }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center hover:bg-white/[0.04] transition-all">
      <p className="text-4xl md:text-5xl font-black tracking-tighter mb-2" style={{ color: accent }}>
        {value}
      </p>
      <p className="text-white font-bold text-sm uppercase tracking-wider">{label}</p>
      {sub && <p className="text-slate-500 text-xs mt-1">{sub}</p>}
    </div>
  )
}

export function StatGrid({ stats, accent }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard key={s.label} accent={accent} {...s} />
        ))}
      </div>
    </section>
  )
}
