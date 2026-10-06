/**
 * Two-column section: a `visual` (usually a TerminalWindow) beside a heading block.
 * `title` is an array of lines; the last line is rendered in the accent colour.
 */
export default function SplitSection({ visual, title, description, accent = '#3b82f6', reverse = false, children }) {
  const lines = Array.isArray(title) ? title : [title]
  const last = lines.length - 1

  return (
    <section className="py-24 px-6 bg-[#030816]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className={reverse ? 'order-2' : 'order-2 lg:order-1'}>{visual}</div>
        <div className={reverse ? 'order-1' : 'order-1 lg:order-2'}>
          <h2 className="text-4xl md:text-7xl font-black mb-8 italic tracking-tighter uppercase leading-none text-white">
            {lines.map((line, i) =>
              i === last ? (
                <span key={line} style={{ color: accent }} className="underline decoration-current/30 underline-offset-8">
                  {line}
                </span>
              ) : (
                <span key={line}>
                  {line} <br />
                </span>
              ),
            )}
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
