import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { quote: 'SIYA gave us predictive visibility and cut rollout friction by 40%.', author: 'VP Transformation, Global Retail' },
  { quote: 'Finally, a platform that treats change like a product. Brilliant.', author: 'Head of Change, FinTech' },
  { quote: 'We orchestrated a 60k-seat migration with confidence. Stellar.', author: 'CIO, Manufacturing' },
]

export default function Carousel(){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setIndex((i)=> (i+1)%testimonials.length), 4000)
    return ()=> clearInterval(id)
  },[])

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.5}}>
            <p className="text-xl md:text-2xl text-white/90">“{testimonials[index].quote}”</p>
            <p className="mt-4 text-slate-300">{testimonials[index].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
