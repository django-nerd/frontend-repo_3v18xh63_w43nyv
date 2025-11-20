import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { to: '/platform', label: 'Platform' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-blue-500/40 to-cyan-400/40 opacity-60 group-hover:opacity-90 transition" />
              <div className="relative h-9 w-9 rounded-xl grid place-items-center bg-slate-800/60 border border-white/10">
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">SIYA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'text-yellow-300 bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login" className="text-slate-200 hover:text-white text-sm">Log in</NavLink>
            <NavLink to="/book-demo" className="px-4 py-2 rounded-lg bg-yellow-300 text-slate-900 font-semibold hover:brightness-110 transition-transform hover:-translate-y-0.5">Book Demo</NavLink>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?'text-yellow-300 bg-white/5':'text-slate-200 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </NavLink>
          ))}
          <div className="pt-2 flex gap-2">
            <NavLink to="/login" onClick={()=>setOpen(false)} className="flex-1 text-center px-3 py-2 rounded-lg bg-white/5 text-slate-200">Log in</NavLink>
            <NavLink to="/book-demo" onClick={()=>setOpen(false)} className="flex-1 text-center px-3 py-2 rounded-lg bg-yellow-300 text-slate-900 font-semibold">Book Demo</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
