import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer(){
  const iconBase = 'h-5 w-5'
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-slate-800/60 border border-white/10">
            <span className="text-yellow-300 font-bold">S</span>
          </div>
          <span className="text-white font-semibold">SIYA</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/platform" className="text-slate-300 hover:text-white transition">Platform</a>
          <a href="/pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="/resources" className="text-slate-300 hover:text-white transition">Resources</a>
          <a href="/about" className="text-slate-300 hover:text-white transition">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="group p-2 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-300/40" href="#">
            <Linkedin className={`${iconBase} text-slate-200 group-hover:text-yellow-300`} />
          </a>
          <a className="group p-2 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-300/40" href="#">
            <Twitter className={`${iconBase} text-slate-200 group-hover:text-yellow-300`} />
          </a>
          <a className="group p-2 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-300/40" href="#">
            <Github className={`${iconBase} text-slate-200 group-hover:text-yellow-300`} />
          </a>
        </div>
      </div>
    </footer>
  )
}
