import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent),radial-gradient(1000px_600px_at_80%_20%,#0b2348,transparent)] from-[#0b1b36] via-[#0a1530] to-[#040b1a] bg-slate-950">
      <div className="fixed inset-0 -z-0 pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}
