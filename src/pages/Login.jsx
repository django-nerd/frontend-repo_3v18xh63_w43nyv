import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Shield } from 'lucide-react'

export default function Login(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5">
            <div className="mx-auto w-12 h-12 grid place-items-center rounded-xl bg-yellow-300/10 border border-yellow-300/30 text-yellow-300">
              <Shield className="h-6 w-6" />
            </div>
            <h1 className="mt-4 text-white text-2xl font-semibold">Welcome back</h1>
            <p className="text-slate-300/90 text-sm">Secure access to your workspace</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid gap-3">
              <input placeholder="Work email" className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
              <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
              <button className="mt-2 py-3 rounded-lg bg-yellow-300 text-slate-900 font-semibold">Log in</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
