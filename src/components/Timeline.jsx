// src/components/Timeline.jsx

import './Timeline.css'  // estilos propios para la línea, los puntos y la animación

function Timeline() {
  return (
    // id="timeline" para el link del navbar (href="#timeline").
    // py-5 = padding vertical amplio. Fondo oscuro para contrastar con Servicios (que era claro).
    <section id="timeline" className="py-5 bg-dark text-white">
      <div className="container">

        <h2 className="text-center fw-bold mb-3">Nuestro Proceso</h2>
        <p className="text-center text-white-50 mb-5">
          Un método probado que aplicamos en cada proyecto
        </p>

        {/* Contenedor de la línea de tiempo. "timeline" es nuestra clase propia (CSS). */}
        <div className="timeline">

          {/* ---------- FASE 1 ---------- */}
          {/* Cada "timeline-item" es un hito. La clase propia dibuja el punto y conecta la línea. */}
          <div className="timeline-item">
            <div className="timeline-content">
              {/* Badge con el número de fase. bg-primary = azul de Bootstrap. */}
              <span className="badge bg-primary mb-2">Fase 1</span>
              <h5 className="fw-bold">Descubrimiento</h5>
              <p className="text-white-50 mb-0">
                Analizamos tu negocio, objetivos y requerimientos para entender
                exactamente qué necesitas y proponer la mejor solución.
              </p>
            </div>
          </div>

          {/* ---------- FASE 2 ---------- */}
          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">Fase 2</span>
              <h5 className="fw-bold">Diseño</h5>
              <p className="text-white-50 mb-0">
                Definimos la arquitectura, la experiencia de usuario y el aspecto
                visual, validando cada decisión contigo antes de programar.
              </p>
            </div>
          </div>

          {/* ---------- FASE 3 ---------- */}
          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">Fase 3</span>
              <h5 className="fw-bold">Desarrollo</h5>
              <p className="text-white-50 mb-0">
                Construimos la solución con entregas incrementales, para que veas
                el avance real y puedas dar feedback en cada etapa.
              </p>
            </div>
          </div>

          {/* ---------- FASE 4 ---------- */}
          <div className="timeline-item">
            <div className="timeline-content">
              <span className="badge bg-primary mb-2">Fase 4</span>
              <h5 className="fw-bold">Entrega y Soporte</h5>
              <p className="text-white-50 mb-0">
                Desplegamos el proyecto, capacitamos a tu equipo y te acompañamos
                con soporte continuo para asegurar el éxito a largo plazo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Timeline