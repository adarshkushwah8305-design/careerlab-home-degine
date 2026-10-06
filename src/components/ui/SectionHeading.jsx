/**
 * Eyebrow + big title + optional description. `title` may contain JSX (e.g. <br/>).
 */
export default function SectionHeading({
  eyebrow, title, description, accent = '#3b82f6', align = 'center', className = '', as: Tag = 'h2',
}) {
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <header className={`flex flex-col max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: accent }}>
          {eyebrow}
        </span>
      )}
      <Tag className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-white">
        {title}
      </Tag>
      {description && <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">{description}</p>}
    </header>
  )
}
