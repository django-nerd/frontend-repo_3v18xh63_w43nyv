import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Check } from 'lucide-react'

const tiers = [
  { name: 'Starter', price: 29, features: ['Up to 50 users','Email support','Basic analytics'] },
  { name: 'Professional', price: 79, features: ['Up to 500 users','Priority support','Advanced analytics'] },
  { name: 'Enterprise', price: 199, features: ['Unlimited users','SLA & SSO','Custom roles'] },
  { name: 'Custom', price: null, features: ['Tailored package','Dedicated CSM','Security review'] },
]

export default function Pricing(){
  const [annual, setAnnual] = useState(true)
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Pricing</h1>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <span>Monthly</span>
              <button onClick={()=>setAnnual(a=>!a)} className={`relative w-14 h-7 rounded-full transition ${annual? 'bg-yellow-300/60':'bg-white/20'}`}>
                <span className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform ${annual? 'translate-x-7':''}`} />
              </button>
              <span>Annual</span>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t,i)=> (
              <div key={t.name} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition">
                <div className="text-white font-semibold">{t.name}</div>
                <div className="mt-2 text-yellow-300 text-3xl font-bold">{t.price? `$${Math.round(t.price*(annual?10:1))}` : 'Contact'}</div>
                <ul className="mt-4 space-y-2">
                  {t.features.map(f=> (
                    <li key={f} className="flex items-center gap-2 text-slate-300">
                      <span className="h-5 w-5 grid place-items-center rounded-full bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 group-hover:scale-105 transition"><Check className="h-3 w-3" /></span>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-yellow-300/10 hover:border-yellow-300/40">Choose</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
