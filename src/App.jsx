// src/App.jsx

// Importamos el componente Navbar desde la carpeta components.
// La ruta './components/Navbar' es relativa a este archivo (App.jsx está en src/).
import Navbar from './components/Navbar'

function App() {
  return (
    // Este <div> será el contenedor de TODA la landing.
    // Iremos apilando aquí los componentes de cada sección, en orden.
    <div>
      <Navbar />
      {/* Aquí abajo irán: Hero, Servicios, Timeline, etc. */}
    </div>
  )
}

export default App