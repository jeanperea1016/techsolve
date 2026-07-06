// src/components/Footer.jsx

function Footer() {
  return (
    // <footer> es la etiqueta semántica correcta para el pie de página.
    // bg-black -> negro (un poco más oscuro que el bg-dark, marca el cierre).
    // text-white-50 -> texto blanco tenue. py-5 -> padding vertical. mt-0 -> sin margen arriba.
    <footer className="bg-black text-white-50 py-5">
      <div className="container">

        {/* Grid de 3 columnas: marca, enlaces, contacto.
            En móvil se apilan (col-12), desde md se ponen en fila (col-md-4). */}
        <div className="row g-4">

          {/* Columna 1: marca y descripción */}
          <div className="col-12 col-md-4">
            <h5 className="text-white fw-bold mb-3">TechSolve</h5>
            <p className="mb-0">
              Soluciones digitales integrales para impulsar la transformación
              tecnológica de tu empresa.
            </p>
          </div>

          {/* Columna 2: enlaces de navegación (repiten los del navbar) */}
          <div className="col-12 col-md-4">
            <h6 className="text-white fw-bold mb-3">Navegación</h6>
            {/* list-unstyled quita los puntos de la lista. */}
            <ul className="list-unstyled">
              {/* text-decoration-none quita el subrayado. text-white-50 color tenue. */}
              <li className="mb-2">
                <a href="#servicios" className="text-white-50 text-decoration-none">Servicios</a>
              </li>
              <li className="mb-2">
                <a href="#timeline" className="text-white-50 text-decoration-none">Proceso</a>
              </li>
              <li className="mb-2">
                <a href="#casos" className="text-white-50 text-decoration-none">Casos de Éxito</a>
              </li>
              <li className="mb-2">
                <a href="#contacto" className="text-white-50 text-decoration-none">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: datos de contacto */}
          <div className="col-12 col-md-4">
            <h6 className="text-white fw-bold mb-3">Contacto</h6>
            <p className="mb-2">📧 contacto@techsolve.cl</p>
            <p className="mb-2">📱 +56 9 1234 5678</p>
            <p className="mb-0">📍 Santiago, Chile</p>
          </div>

        </div>

        {/* Línea divisoria. my-4 = margen vertical. border-secondary = color del borde. */}
        <hr className="my-4 border-secondary" />

        {/* Copyright centrado abajo. */}
        <div className="text-center">
          <small>© 2025 TechSolve. Todos los derechos reservados.</small>
        </div>

      </div>
    </footer>
  )
}

export default Footer