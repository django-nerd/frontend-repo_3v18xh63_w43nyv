import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Shield, Cpu, PlugZap, Lock, Server, Code2 } from 'lucide-react'

const tabs = ['Overview','Features','Integrations','Security','API']

export default function Platform(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">The SIYA Platform</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">A unified layer that brings intelligence, orchestration, and trust to enterprise change.</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {tabs.map((t,i)=> (
              <button key={t} className="px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-yellow-300/40 hover:bg-yellow-300/5 transition">{t}</button>
            ))}
          </div>

          {/* Icon cards */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{icon:Cpu, t:'AI-Powered Change Intelligence'},{icon:PlugZap,t:'Deep Integrations'},{icon:Shield,t:'Enterprise-Grade'},{icon:Lock,t:'Zero-Trust Controls'},{icon:Server,t:'Scalable Cloud'},{icon:Code2,t:'Open API'}].map((c,i)=> (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-yellow-300/10 border border-yellow-300/30 text-yellow-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{c.t}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolorum.</p>
              </motion.div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent h-72 hover:shadow-[0_0_60px_rgba(234,179,8,0.08)] transition" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
