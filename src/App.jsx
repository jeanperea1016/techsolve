// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Timeline from './components/Timeline'
import CasosEstudio from './components/CasosEstudio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Timeline />
      <CasosEstudio />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App