import SectionHeading from '../ui/SectionHeading'
import { audiences } from '../../data/home'
import { hexToRgb } from '../../utils/color'

function AudienceCard({ icon: Icon, color, title, description }) {
  return (
    <div className="aud-card" style={{ '--card-rgb': hexToRgb(color) }}>
      <div className="aud-face p-8 gap-5">
        <div className="aud-glow" />

        <div className="aud-icon relative">
          <Icon className="w-5 h-5" />
        </div>

        <h3 className="relative font-bold text-slate-200">
          {title}
        </h3>

        <div className="aud-rule" />

        <p className="relative text-[13px] leading-relaxed text-slate-500 max-w-[24ch]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#030810] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Audience Heading */}
        <div className="text-center mb-16">

          {/* Audience + Lines */}
          <div className="flex items-center justify-center gap-3 mb-5">

            {/* Left Line */}
            <div
              className="h-px w-8"
              style={{
                background:
                  'linear-gradient(to right, #3b82f6, transparent)',
              }}
            />

            {/* Audience */}
            <span className="text-sm font-medium text-blue-400">
              Audience
            </span>

            {/* Right Line */}
            <div
              className="h-px w-8"
              style={{
                background:
                  'linear-gradient(to left, #3b82f6, transparent)',
              }}
            />

          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Who This Is <br />

            <span
              style={{
                background:
                  'linear-gradient(135deg, #3b82f6 0%, #3b82f6 55%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Built For
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 mx-auto max-w-2xl text-slate-400">
            Designed for teams actively building, adopting, and scaling AI
            systems in production environments.
          </p>

        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <AudienceCard key={a.title} {...a} />
          ))}
        </div>

      </div>
    </section>
  )
}