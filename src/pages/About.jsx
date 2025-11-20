import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="text-center">
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-bold text-white">Built for change at enterprise scale</motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="mt-4 text-slate-300 max-w-2xl mx-auto">Our mission is to make change effortless by pairing human strategy with AI orchestration.</motion.p>
          </section>

          {/* Journey timeline */}
          <section className="mt-16">
            <h2 className="text-white font-semibold text-xl">The Journey</h2>
            <div className="mt-6 space-y-6">
              {[2021,2022,2023,2024].map((y,i)=> (
                <div key={y} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-yellow-300/20 border border-yellow-300/40" />
                  <div className="text-white font-semibold">{y}</div>
                  <div className="text-slate-300/90 text-sm">Milestone details and narrative of growth and customer impact.</div>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mt-16">
            <h2 className="text-white font-semibold text-xl">Our Values</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Trust','Clarity','Velocity','Craft','Curiosity','Empathy'].map((v)=> (
                <div key={v} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition">
                  <div className="text-yellow-300 font-semibold">{v}</div>
                  <p className="text-slate-300/90 text-sm mt-2">We operate with {v.toLowerCase()} in everything we build.</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
