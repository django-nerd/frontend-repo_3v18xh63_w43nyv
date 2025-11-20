import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Platform from './Platform'
import About from './About'
import Team from './Team'
import Pricing from './Pricing'
import Resources from './Resources'
import BookDemo from './BookDemo'
import Login from './Login'
import Contact from './Contact'
import NotFound from './NotFound'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/book-demo" element={<BookDemo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
