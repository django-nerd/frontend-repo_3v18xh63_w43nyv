import { motion } from 'framer-motion'
import { StepForward, Target, BellRing, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: StepForward, title: 'Ingest & Map', desc: 'Connect systems and map stakeholders with AI-powered discovery.' },
  { icon: Target, title: 'Predict & Plan', desc: 'Identify impact, risk, and plan interventions using simulations.' },
  { icon: BellRing, title: 'Nudge & Orchestrate', desc: 'Automate nudges, tasks, and comms across channels.' },
  { icon: CheckCircle2, title: 'Measure & Adapt', desc: 'Track adoption signals and adapt in real-time.' },
]

export default function HowItWorks(){
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-white text-center">How SIYA Works</motion.h2>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-yellow-300/40 to-transparent" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{opacity:0, x: i%2? 40:-40}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.6}} className={`grid md:grid-cols-2 gap-6 items-center ${i%2? 'md:text-left md:pl-20':'md:text-right md:pr-20'}`}>
                <div className={`order-2 md:order-${i%2?2:1}`}>
                  <h3 className="text-white font-semibold text-xl flex items-center gap-3 justify-end md:justify-initial">
                    <span className="h-10 w-10 rounded-full grid place-items-center bg-yellow-300/10 border border-yellow-300/30 text-yellow-300">
                      <s.icon className="h-5 w-5" />
                    </span>
                    {s.title}
                  </h3>
                  <p className="text-slate-300/90 mt-2 text-sm">{s.desc}</p>
                </div>
                <div className={`order-1 md:order-${i%2?1:2}`}>
                  <div className="h-40 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
