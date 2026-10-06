import { ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { alpha } from '../../utils/color'

/**
 * Hero used by every product page: badge, two-line title (second line gradient italic),
 * description and up to two CTAs.
 */
export default function PageHero({ badge, badgeIcon, title, highlight, description, primary, secondary, accent = '#3b82f6' }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: `radial-gradient(circle at 50% 30%, ${alpha(accent, 0.15)} 0%, transparent 70%)` }}
      />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center animate-fade-up">
        <Badge icon={badgeIcon} accent={accent} className="mb-6">{badge}</Badge>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-10">
          {title} <br />
          <span
            className="italic pr-2"
            style={{
              backgroundImage: `linear-gradient(to right, ${alpha(accent, 0.6)}, ${accent}, ${alpha(accent, 0.8)})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {highlight}
          </span>
        </h1>
        <p className="max-w-2xl text-slate-400 text-base md:text-xl leading-relaxed mb-12 font-light">{description}</p>
        {(primary || secondary) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {primary && (
              <Button to={primary.to ?? '/contact'} accent={accent} icon={ArrowRight}>
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button to={secondary.to ?? '/contact'} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
