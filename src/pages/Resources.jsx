import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const categories = ['Articles','Whitepapers','Templates','Webinars','Case Studies']

export default function Resources(){
  const [active, setActive] = useState('Articles')
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Resources</h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map(c=> (
              <button key={c} onClick={()=>setActive(c)} className={`px-4 py-2 rounded-lg text-sm transition ${active===c? 'bg-yellow-300 text-slate-900':'bg-white/5 text-slate-200 hover:bg-white/10'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length:6}).map((_,i)=> (
              <a key={i} href="#" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:-translate-y-1 transition block">
                <div className="h-36 bg-gradient-to-br from-yellow-300/20 to-transparent" />
                <div className="p-4">
                  <div className="text-white font-semibold">{active} #{i+1}</div>
                  <p className="text-slate-300/90 text-sm mt-1">A short description of the resource and its value.</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="text-white font-semibold text-lg">Subscribe to the newsletter</div>
            <div className="mt-3 flex gap-3">
              <input placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white outline-none focus:border-yellow-300/50" />
              <button className="px-5 rounded-lg bg-yellow-300 text-slate-900 font-semibold">Subscribe</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
