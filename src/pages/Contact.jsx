import { useState } from 'react'
import { Cpu, MapPin, Phone, Mail, Clock, Send, ShieldCheck, Lock, Navigation } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { company } from '../data/site'

const areas = ['AI Transformation Strategy', 'Custom SaaS Development', 'Machine Learning Operations', 'Career Consulting (Individual)']

const inputCls =
  'w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors'

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{label}</span>
      {children}
    </label>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', area: areas[0], brief: '' })
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  // Same behaviour as the original site: the form opens a pre-filled WhatsApp chat.
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Name: ${form.name}\nEmail: ${form.email}\nArea: ${form.area}\n\n${form.brief}`
    window.open(`${company.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const credentials = [
    { icon: MapPin, title: 'Location', text: 'DLF Cyber City, 5th Floor, Cyber Green-2, Sec-25, Gurugram, HR - 122002' },
    { icon: Phone, title: 'Voice / Signal', text: company.phone, href: company.phoneHref },
    { icon: Mail, title: 'General Inquiry', text: company.email, href: `mailto:${company.email}` },
  ]

  return (
    <main className="bg-[#020617] text-slate-100">
      <section className="pt-36 pb-16 px-6 text-center">
        <Badge accent="#10b981" className="mb-6">Available for Global Deployment</Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
          Direct <br /><span className="italic text-blue-500">Command.</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-lg font-light">
          Skip the inbox. Transmit your project requirements directly to our lead engineering node via encrypted signal.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 space-y-8">
            <h3 className="flex items-center gap-3 text-xl font-black uppercase italic"><Cpu className="w-5 h-5 text-blue-500" /> HQ_Credentials</h3>
            {credentials.map(({ icon: Icon, title, text, href }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center"><Icon className="w-4 h-4 text-blue-400" /></div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{title}</h4>
                  {href ? <a href={href} className="text-white hover:text-blue-400 break-all">{text}</a> : <p className="text-white">{text}</p>}
                </div>
              </div>
            ))}
            <p className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest pt-4 border-t border-white/5">
              <Clock className="w-4 h-4" /> Average Response: 12m
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Operator Name">
                <input required type="text" placeholder="John Doe" value={form.name} onChange={update('name')} className={inputCls} />
              </Field>
              <Field label="Email Address">
                <input required type="email" placeholder="john@firm.com" value={form.email} onChange={update('email')} className={inputCls} />
              </Field>
            </div>
            <Field label="Deployment Area">
              <select value={form.area} onChange={update('area')} className={`${inputCls} appearance-none`}>
                {areas.map((a) => <option key={a} className="bg-[#0b0f1a]">{a}</option>)}
              </select>
            </Field>
            <Field label="Mission Brief">
              <textarea required rows={5} placeholder="Describe the neural requirements..." value={form.brief} onChange={update('brief')} className={inputCls} />
            </Field>
            <button type="submit" className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-sm transition-colors">
              Open Secure WhatsApp Channel <Send className="w-4 h-4" />
            </button>
            <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SOC2 Compliant</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Signal Encrypted</span>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden">
          <img src="/images/gurugram-hub.jpg" alt="Gurugram Hub" className="w-full h-80 object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform"
          >
            Navigate to Node <Navigation className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
