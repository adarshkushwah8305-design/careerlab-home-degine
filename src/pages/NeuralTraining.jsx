import { Cpu, Filter, Flame, Target, Rocket, Server } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import SplitSection from '../components/sections/SplitSection'
import CTASection from '../components/sections/CTASection'
import TerminalWindow from '../components/ui/TerminalWindow'
import { alpha } from '../utils/color'

const ACCENT = '#f59e0b'

const steps = [
  { icon: Filter, step: 'Step 01', title: 'Cleanse', sub: 'Data Curation' },
  { icon: Flame, step: 'Step 02', title: 'Forge', sub: 'Weight Tuning' },
  { icon: Target, step: 'Step 03', title: 'Align', sub: 'RLHF Loop' },
  { icon: Rocket, step: 'Step 04', title: 'Deploy', sub: 'Model Quantization' },
]

const specialties = [
  { title: 'Quantized Distillation', description: 'Compressing 70B models into 8-bit or 4-bit precision with zero accuracy loss.' },
  { title: 'Custom RLHF', description: 'Aligning models to your corporate ethics and safety guidelines through human feedback.' },
  { title: 'Vector Embeddings', description: 'Training custom embedding models for industry-specific semantic search.' },
]

const compute = [
  ['Total FLOPs', '420.5 Peta'],
  ['Interconnect', 'NVLink 4.0'],
  ['SLA Uptime', '99.995%'],
]

// Fake loss curve heights for the chart mockup
const bars = [92, 80, 71, 60, 52, 44, 37, 31, 26, 22, 18, 15, 12, 10, 9, 8]

export default function NeuralTraining() {
  return (
    <main className="bg-[#020617] text-slate-100">
      <PageHero
        accent={ACCENT}
        badge="Hyper-Parameter Optimization Active"
        badgeIcon={Cpu}
        title="Neural"
        highlight="Distillation"
        description="Generic models aren't enough for the enterprise. We forge custom weights using LoRA, QLoRA, and Full-Parameter Tuning to bake your proprietary domain expertise into the model's core architecture."
        primary={{ label: 'Start Training Run' }}
        secondary={{ label: 'View GPU Clusters' }}
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, step, title, sub }) => (
            <div key={step} className="p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 text-center hover:-translate-y-1 transition-all">
              <Icon className="w-8 h-8 mx-auto mb-6" style={{ color: ACCENT }} />
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{step}</h4>
              <p className="text-2xl font-black uppercase italic">{title}</p>
              <p className="text-slate-400 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <SplitSection
        accent={ACCENT}
        title={['Refining', 'The', 'Synapse.']}
        description="We specialize in Parameter-Efficient Fine-Tuning (PEFT). This allows us to deliver high-performance, specialized models that fit on consumer hardware without sacrificing the reasoning depth of foundation models."
        visual={
          <TerminalWindow title="LIVE_LOSS_CONVERGENCE" status="Cluster: H100_NODE_4" accent={ACCENT}>
            <div className="flex items-end gap-1 h-40">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: alpha(ACCENT, 0.2 + i * 0.04) }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-slate-500 text-[10px] uppercase">Learning Rate</p>
                <p className="text-white text-lg font-bold">2e-5</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-slate-500 text-[10px] uppercase">Validation Error</p>
                <p className="text-lg font-bold" style={{ color: ACCENT }}>0.0042</p>
              </div>
            </div>
            <p className="text-slate-500 text-[11px]">
              <span style={{ color: ACCENT }}>LOG:</span> Applying Low-Rank Adaptation (LoRA) to Self-Attention layers... Memory efficient mode enabled.
            </p>
          </TerminalWindow>
        }
      >
        <div className="space-y-4">
          {specialties.map((s) => (
            <div key={s.title} className="pl-6 border-l-2" style={{ borderColor: alpha(ACCENT, 0.4) }}>
              <h4 className="font-bold text-white uppercase tracking-wide text-sm">{s.title}</h4>
              <p className="text-slate-500 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </SplitSection>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Server className="w-12 h-12 mx-auto mb-6" style={{ color: ACCENT }} />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Massive Scale Compute</h2>
          <p className="text-slate-400 mb-12">Dedicated H100 and A100 clusters optimized for rapid iteration.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {compute.map(([label, value]) => (
              <div key={label} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{label}</p>
                <p className="text-3xl font-black" style={{ color: ACCENT }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        accent={ACCENT}
        title="Own Your Intelligence"
        description="Stop relying on public APIs. Train a model that is legally and technically yours."
        buttonLabel="Schedule Training Audit"
        footnote="Compute Node // Gurugram, India"
      />
    </main>
  )
}
