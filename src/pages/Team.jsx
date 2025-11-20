import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Linkedin } from 'lucide-react'

const team = Array.from({length:8}).map((_,i)=> ({name:`Teammate ${i+1}`, title:'Change Strategist', img:`https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop`}))

export default function Team(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Meet the Team</h1>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m,i)=> (
              <div key={i} className="group perspective">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:rotate-[0.5deg]">
                  <img src={m.img} alt="" className="h-56 w-full object-cover" />
                  <div className="p-4">
                    <div className="text-white font-semibold">{m.name}</div>
                    <div className="text-slate-300/90 text-sm">{m.title}</div>
                  </div>
                  <a href="#" className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 border border-white/20 text-slate-200 hover:text-yellow-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
