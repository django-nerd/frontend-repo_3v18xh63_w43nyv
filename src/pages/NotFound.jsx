import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Bot } from 'lucide-react'

export default function NotFound(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto h-20 w-20 grid place-items-center rounded-2xl bg-yellow-300/10 border border-yellow-300/30 text-yellow-300">
            <Bot className="h-10 w-10 animate-pulse" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-white">Oops — page not found</h1>
          <p className="mt-2 text-slate-300">Our little AI got lost in the matrix.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/" className="px-5 py-2 rounded-lg bg-yellow-300 text-slate-900 font-semibold">Go Home</a>
            <button onClick={()=>history.back()} className="px-5 py-2 rounded-lg border border-white/20 text-white">Back</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
