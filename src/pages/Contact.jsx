import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone, Mail, Calendar, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(1200px_800px_at_50%_-10%,#0a1a3a,transparent)]">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact us</h1>
            <p className="mt-3 text-slate-300">We'd love to hear from you.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[{icon:Phone,label:'Phone'},{icon:Mail,label:'Email'},{icon:Calendar,label:'Book'}].map((c,i)=> (
                <a key={i} href="#" className="group p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:-translate-y-0.5 transition">
                  <c.icon className="h-5 w-5 mb-2 text-yellow-300" />
                  {c.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <div className="grid gap-3">
                <input placeholder="Full name" className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
                <input placeholder="Work email" className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
                <input placeholder="Company" className="px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
                <textarea placeholder="Message" className="h-28 px-4 py-3 rounded-lg bg-transparent border border-white/10 text-white outline-none focus:border-yellow-300/50" />
                <button className="mt-2 py-3 rounded-lg bg-yellow-300 text-slate-900 font-semibold">Send</button>
              </div>
            </form>
            <div className="mt-6 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-300/10 to-transparent grid place-items-center text-slate-300">
              <MapPin className="h-6 w-6" />
              <span className="sr-only">Animated map placeholder</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
