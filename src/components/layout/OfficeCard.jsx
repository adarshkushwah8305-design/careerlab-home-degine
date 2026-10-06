import { MapPin, Phone, Navigation } from 'lucide-react'

export default function OfficeCard({ city, country, address, phone, map }) {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <div className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
      <div className="relative h-28 overflow-hidden">
        <img
          src={`/images/maps/${map}.png`}
          alt={`Map of ${city}`}
          loading="lazy"
          className="w-full h-full object-cover grayscale invert opacity-40 group-hover:opacity-60 transition-opacity"
        />
        <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-500 drop-shadow-lg" />
        <span className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-widest bg-black/60 text-blue-300 px-2 py-1 rounded">
          {country}
        </span>
      </div>
      <div className="p-5 space-y-3">
        <h4 className="text-white font-bold">{city}</h4>
        <p className="text-slate-500 text-xs leading-relaxed min-h-[3rem]">{address}</p>
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
          <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white">
            <Phone className="w-3 h-3" /> {phone}
          </a>
          <a href={directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300">
            <Navigation className="w-3 h-3" /> Directions
          </a>
        </div>
      </div>
    </div>
  )
}
