import FeatureCard from '../ui/FeatureCard'

export default function FeatureGrid({ items, accent, footer }) {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <FeatureCard key={item.title} accent={accent} footer={footer} {...item} />
        ))}
      </div>
    </section>
  )
}
