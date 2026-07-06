// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Timeline from './components/Timeline'
import CasosEstudio from './components/CasosEstudio'
import Contacto from './components/Contacto'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Timeline />
      <CasosEstudio />
      <Contacto />
      {/* Falta solo: Footer */}
    </div>
  )
}

export default App