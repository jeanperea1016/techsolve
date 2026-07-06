// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Timeline from './components/Timeline'
import CasosEstudio from './components/CasosEstudio'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Timeline />
      <CasosEstudio />
      {/* Aquí abajo irán: Contacto, Footer */}
    </div>
  )
}

export default App