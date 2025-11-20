import { motion } from 'framer-motion'
import { ShieldCheck, Workflow, Activity, Zap, Cpu, LineChart } from 'lucide-react'

const features = [
  { icon: Cpu, title: 'AI Change Intelligence', desc: 'Predict impact, identify risk, and optimize communication with ML-driven insights.' },
  { icon: Workflow, title: 'Automated Workflows', desc: 'Trigger tasks, nudge stakeholders, and orchestrate change at scale.' },
  { icon: LineChart, title: 'Real-time Adoption', desc: 'Track adoption signals across apps and teams with unified telemetry.' },
  { icon: ShieldCheck, title: 'Enterprise Security', desc: 'SOC2-ready, SSO, RBAC, encryption-at-rest and in-transit.' },
  { icon: Activity, title: 'Live Health Score', desc: 'Measure change health with dynamic KPIs and adaptive thresholds.' },
  { icon: Zap, title: 'Seamless Integrations', desc: 'Connect Jira, Slack, Okta, Workday, and more in minutes.' },
]

export default function Features(){
  return (
    <section id="learn" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_70%_10%,rgba(234,179,8,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-white">Built for Enterprise Change</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 group-hover:scale-105 transition">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
