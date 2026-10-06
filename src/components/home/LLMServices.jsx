import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { llmServices } from '../../data/home'

export default function LLMServices() {
  return (
    <section className="py-32 px-6 bg-[#020617]" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Enterprise Solutions"
          title="Our LLM Services."
          description="Scaling intelligence with precision-engineered AI solutions built for accuracy and speed."
          className="mb-16"
        />
        <ul className="grid md:grid-cols-2 gap-8">
          {llmServices.map(({ icon: Icon, title, description, image }) => (
            <li key={title}>
              <article className="group h-full rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                  <span className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                  <Link to="/custom-llms" className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
