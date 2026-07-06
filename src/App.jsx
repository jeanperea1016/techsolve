// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Timeline from './components/Timeline'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Timeline />
      {/* Aquí abajo irán: Casos, Contacto, Footer */}
    </div>
  )
}

export default App