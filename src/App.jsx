// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      {/* Aquí abajo irán: Timeline, Casos, Contacto, Footer */}
    </div>
  )
}

export default App