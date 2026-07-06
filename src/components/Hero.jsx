// src/components/Hero.jsx

// Importamos el CSS específico de este componente.
// Cada componente puede tener su propio archivo de estilos: mantiene todo ordenado
// y evita que los estilos de una sección se mezclen con los de otra.
import './Hero.css'

function Hero() {
  return (
    // <section> es la etiqueta semántica para una sección de la página (mejor que <div> para el SEO y accesibilidad).
    // id="inicio" -> permite que el link del navbar (href="#inicio") haga scroll hasta aquí.
    // Clases Bootstrap:
    //   bg-dark text-white -> fondo oscuro, texto blanco (coherente con el navbar corporativo)
    //   text-center        -> todo el texto centrado
    //   py-5               -> padding vertical grande (py = padding-y, arriba y abajo)
    // Clase propia:
    //   hero-section       -> la definimos en Hero.css para la animación y altura
    <section id="inicio" className="hero-section bg-dark text-white text-center py-5">
      <div className="container">

        {/* hero-content es nuestra clase propia: a ella le aplicamos la animación de entrada */}
        <div className="hero-content">

          {/* Título principal. display-3 es una clase de Bootstrap para títulos grandes y llamativos.
              fw-bold = font-weight bold (negrita). mb-4 = margin-bottom (espacio abajo). */}
          <h1 className="display-3 fw-bold mb-4">
            Soluciones digitales para tu empresa
          </h1>

          {/* Subtítulo. lead = clase Bootstrap para un párrafo introductorio más grande.
              mb-5 = margen inferior amplio. text-white-50 = blanco con 50% opacidad (más suave). */}
          <p className="lead mb-5 text-white-50">
            En TechSolve te acompañamos en cada etapa de tu transformación tecnológica:
            desarrollo, automatización, infraestructura y estrategia digital.
          </p>

          {/* Botón CTA principal. Lleva al usuario a la sección de contacto.
              btn btn-primary btn-lg -> botón azul grande de Bootstrap.
              href="#contacto" -> scroll hasta la sección de contacto (la crearemos después). */}
          <a href="#contacto" className="btn btn-primary btn-lg">
            Conversemos sobre tu proyecto
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero