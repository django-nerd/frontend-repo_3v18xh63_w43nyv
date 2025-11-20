import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 600], [1, 0.8])

  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      {/* Gradient BG */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.2),transparent),radial-gradient(1200px_600px_at_80%_10%,rgba(147,197,253,0.15),transparent)]" />
      {/* Spline 3D */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-xs">AI-Powered Platform</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Transform Change Management With Intelligence.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 text-slate-200 text-lg max-w-xl">
              SIYA brings predictive insights, automated workflows, and real-time adoption signals to enterprise change programs.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/book-demo" className="px-6 py-3 rounded-xl bg-yellow-300 text-slate-900 font-semibold shadow-[0_0_0_0_rgba(234,179,8,0.5)] hover:shadow-[0_0_40px_8px_rgba(234,179,8,0.15)] transition-shadow">Book Demo</a>
              <a href="#learn" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Learn More</a>
            </motion.div>

            {/* Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'orgs', value: 500, suffix: '+' },
                { label: 'satisfaction', value: 95, suffix: '%' },
                { label: 'changes', value: 2000000, suffix: '+' },
              ].map((m, i) => (
                <Counter key={i} target={m.value} label={m.label} prefix={m.prefix} suffix={m.suffix} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* soft overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/60" />
    </section>
  )
}

function Counter({ target, label, prefix, suffix }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const duration = 1400
    const start = performance.now()
    let raf
    const loop = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [target])

  const display = prefix ? prefix : value.toLocaleString()

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
      <div className="text-2xl font-bold text-white">{display}{suffix || ''}</div>
      <div className="text-xs uppercase tracking-wide text-slate-300/80">{label}</div>
    </div>
  )
}
