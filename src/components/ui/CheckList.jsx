import { CheckCircle2 } from 'lucide-react'

export default function CheckList({ items, accent = '#3b82f6', icon: Icon = CheckCircle2 }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
          <Icon className="w-5 h-5 shrink-0" style={{ color: accent }} />
          {item}
        </li>
      ))}
    </ul>
  )
}
