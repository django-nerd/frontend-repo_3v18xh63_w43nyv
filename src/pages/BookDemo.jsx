import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, Mail, MessageCircle, Sparkles } from 'lucide-react'

export default function BookDemo(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Book a live demo</h1>
            <p className="mt-3 text-slate-300">See how SIYA powers intelligent, low-friction change.</p>
            <ul className="mt-8 space-y-4">
              {['Predictive insights','Automated workflows','Live adoption metrics','Enterprise controls'].map((f)=> (
                <li key={f} className="flex items-center gap-3 text-slate-200">
                  <span className="h-8 w-8 grid place-items-center rounded-lg bg-yellow-300/10 border border-yellow-300/30 text-yellow-300"><Sparkles className="h-4 w-4" /></span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
              <a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white" href="#"><Phone className="inline h-4 w-4 mr-2"/>Phone</a>
              <a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white" href="#"><Mail className="inline h-4 w-4 mr-2"/>Email</a>
              <a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white" href="#"><MessageCircle className="inline h-4 w-4 mr-2"/>Chat</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-yellow-300/20 to-transparent blur-xl" />
            <form onSubmit={(e)=>e.preventDefault()} className="relative rounded-3xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur">
              <div className="grid gap-4">
                <Field label="Full name" />
                <Field label="Work email" type="email" />
                <Field label="Company" />
                <Field label="Message" type="textarea" />
                <MagneticButton>Request Demo</MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Field({ label, type='text' }){
  return (
    <label className="group grid gap-1 text-sm text-slate-200">
      <span>{label}</span>
      {type==='textarea' ? (
        <textarea className="h-28 px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
      ) : (
        <input type={type} className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
      )}
    </label>
  )
}

import { useRef, useState } from 'react'
function MagneticButton({ children }){
  const ref = useRef(null)
  const [pos, setPos] = useState({x:0,y:0})
  const onMove = (e)=>{
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width/2
    const y = e.clientY - r.top - r.height/2
    setPos({x, y})
  }
  const onLeave = ()=> setPos({x:0,y:0})
  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative overflow-hidden mt-2 px-6 py-3 rounded-xl bg-yellow-300 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(234,179,8,0.2)]">
      <span className="relative z-10">{children}</span>
      <span style={{transform:`translate(${pos.x*0.15}px, ${pos.y*0.15}px)`}} className="pointer-events-none absolute inset-0 grid place-items-center opacity-30">✨</span>
    </button>
  )
}
