import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Accordion({ items, accent = '#3b82f6', defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.question}
            className={`rounded-[2rem] border transition-all ${isOpen ? 'bg-white/[0.04] border-white/10' : 'bg-white/[0.02] border-white/5'}`}
          >
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left"
              >
                <span className="text-base md:text-lg font-bold text-white">{item.question}</span>
                <span
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                  style={isOpen ? { background: accent, color: '#fff' } : { background: 'rgba(255,255,255,0.05)', color: '#64748b' }}
                >
                  <Plus className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${i}`}
              className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 md:px-8 pb-8 text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
