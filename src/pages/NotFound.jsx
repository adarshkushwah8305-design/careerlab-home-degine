import { Home } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4">Error 404 // Node Not Found</p>
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic mb-6">404</h1>
      <p className="text-slate-400 max-w-md mb-10">The page you are looking for has been moved, deleted, or never existed on this cluster.</p>
      <Button to="/" icon={Home}>Back to Home</Button>
    </main>
  )
}
