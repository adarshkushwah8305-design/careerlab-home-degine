import { useState } from 'react'
import { BookOpen, Layers, KeyRound, Gauge, Terminal, Code2, Copy, Check, Zap, ShieldCheck, Network } from 'lucide-react'
import Badge from '../components/ui/Badge'

const ACCENT = '#6366f1'

const gettingStarted = [
  { icon: BookOpen, label: 'Introduction', href: '#intro' },
  { icon: Layers, label: 'Architecture Overview', href: '#architecture' },
  { icon: KeyRound, label: 'API Authentication', href: '#inference' },
  { icon: Gauge, label: 'Rate Limits', href: '#features' },
]

const endpoints = [
  ['POST', '/v1/chat/completions'],
  ['POST', '/v1/embeddings'],
  ['GET', '/v1/models/weights'],
]

const installCmd = 'npm install @gurugram-ai/core-sdk'

const sampleCode = `const response = await ai.chat.completions.create({
  model: "gurugram-ultra-v1",
  messages: [{ role: "user", content: "Analyze market debt." }],
  security: {
    pii_redaction: true,
    adversarial_check: true
  },
  stream: true
});`

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button onClick={copy} aria-label="Copy" className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}

export default function Documentation() {
  return (
    <main className="bg-[#020617] text-slate-100 pt-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-12">
        <aside className="hidden lg:block sticky top-28 self-start space-y-8">
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Getting Started</h5>
            <ul className="space-y-1">
              {gettingStarted.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5">
                    <Icon className="w-4 h-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Model Endpoints</h5>
            <ul className="space-y-2 font-mono text-xs">
              {endpoints.map(([method, path]) => (
                <li key={path} className="flex gap-2 px-3 py-2 rounded-lg bg-white/[0.02]">
                  <span className={method === 'GET' ? 'text-emerald-400' : 'text-indigo-400'}>{method}</span>
                  <span className="text-slate-400 truncate">{path}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">System Status</p>
            <p className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All Clusters Operational
            </p>
          </div>
        </aside>

        <article className="pb-24 space-y-16 min-w-0">
          <header id="intro">
            <Badge icon={Terminal} accent={ACCENT} className="mb-6">Developer Reference v2.4.0</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">
              The Neural <span style={{ color: ACCENT }}>SDK.</span>
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-3xl">
              Connect your legacy enterprise systems to high-performance private LLMs. Our SDK handles the complex orchestration of vector retrieval, prompt safety, and token efficiency automatically.
            </p>
          </header>

          <section id="architecture" className="relative rounded-[2rem] overflow-hidden">
            <img src="/images/docs-architecture.jpg" alt="Neural Network Architecture" className="w-full h-72 object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="flex items-center gap-2 text-xl font-bold"><Network className="w-5 h-5" style={{ color: ACCENT }} /> Distributed Inference Architecture</h4>
              <p className="text-slate-400 text-sm mt-1">Our global edge network reduces LLM latency by processing non-sensitive tokens at the nearest node.</p>
            </div>
          </section>

          <section id="installation">
            <h3 className="flex items-center gap-3 text-2xl font-black uppercase italic mb-4"><Code2 className="w-6 h-6" style={{ color: ACCENT }} /> 01. Integration</h3>
            <p className="text-slate-400 mb-4">Install the core library using your preferred package manager:</p>
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-sm">
              <code className="text-emerald-400 truncate">$ {installCmd}</code>
              <CopyButton text={installCmd} />
            </div>
          </section>

          <section id="inference">
            <h3 className="flex items-center gap-3 text-2xl font-black uppercase italic mb-4"><ShieldCheck className="w-6 h-6" style={{ color: ACCENT }} /> 02. Secure Inference</h3>
            <div className="rounded-xl bg-black/50 border border-white/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                <span className="font-mono text-xs text-slate-500">Inference_Request.ts</span>
                <CopyButton text={sampleCode} />
              </div>
              <pre className="p-6 overflow-x-auto text-sm text-indigo-200"><code>{sampleCode}</code></pre>
            </div>
          </section>

          <section id="features" className="grid sm:grid-cols-2 gap-6">
            {[
              [Zap, 'Sub-100ms TTFT', 'Optimized speculative decoding for near-instant first token generation.'],
              [ShieldCheck, 'SOC2 Data Guard', 'Automated compliance mapping for every inference call made to the model.'],
            ].map(([Icon, title, text]) => (
              <div key={title} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                <Icon className="w-6 h-6 mb-4" style={{ color: ACCENT }} />
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-slate-400 text-sm">{text}</p>
              </div>
            ))}
          </section>
        </article>
      </div>
    </main>
  )
}
