// src/components/Servicios.jsx

function Servicios() {
  return (
    // Sección con id="servicios" para que el link del navbar (href="#servicios") llegue aquí.
    // py-5 = padding vertical amplio. bg-light = fondo gris muy claro (contrasta con el Hero oscuro).
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        {/* Título de la sección, centrado y con margen inferior */}
        <h2 className="text-center fw-bold mb-3">Nuestros Servicios</h2>
        <p className="text-center text-muted mb-5">
          Soluciones tecnológicas integrales para cada necesidad de tu negocio
        </p>

        {/* EL ACORDEÓN.
            - id="accordionServicios" -> identificador único, necesario para que los paneles
              sepan a qué acordeón pertenecen.
            - class "accordion" -> activa el estilo de acordeón de Bootstrap. */}
        <div className="accordion" id="accordionServicios">

          {/* ---------- PANEL 1: Desarrollo web ---------- */}
          {/* accordion-item = un panel completo (título + contenido) */}
          <div className="accordion-item">
            {/* El encabezado clickeable */}
            <h2 className="accordion-header">
              {/* Este botón es el que se toca para abrir/cerrar.
                  data-bs-toggle="collapse" -> le dice a Bootstrap que esto colapsa/expande.
                  data-bs-target="#colapso1" -> QUÉ panel abre (el del id colapso1).
                  aria-expanded / aria-controls -> accesibilidad. */}
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#colapso1"
                aria-expanded="true"
                aria-controls="colapso1"
              >
                💻 Desarrollo Web
              </button>
            </h2>
            {/* El contenido que se despliega.
                id="colapso1" -> coincide con el data-bs-target del botón.
                class "accordion-collapse collapse show" -> "show" = empieza ABIERTO.
                data-bs-parent="#accordionServicios" -> ESTO hace que al abrir un panel,
                se cierren los demás (comportamiento clásico de acordeón). */}
            <div
              id="colapso1"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionServicios"
            >
              <div className="accordion-body">
                Creamos sitios web y aplicaciones a medida, rápidas y responsivas,
                con las tecnologías más modernas del mercado. Desde landing pages
                hasta plataformas complejas.
              </div>
            </div>
          </div>

          {/* ---------- PANEL 2: Apps móviles ---------- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              {/* Fíjate: aquí el botón lleva la clase extra "collapsed" y aria-expanded="false"
                  porque este panel empieza CERRADO (a diferencia del primero). */}
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#colapso2"
                aria-expanded="false"
                aria-controls="colapso2"
              >
                📱 Aplicaciones Móviles
              </button>
            </h2>
            <div
              id="colapso2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionServicios"
            >
              <div className="accordion-body">
                Desarrollamos apps nativas y multiplataforma para iOS y Android,
                con foco en la experiencia de usuario y el rendimiento.
              </div>
            </div>
          </div>

          {/* ---------- PANEL 3: Integración ---------- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#colapso3"
                aria-expanded="false"
                aria-controls="colapso3"
              >
                🔗 Integración de Sistemas
              </button>
            </h2>
            <div
              id="colapso3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionServicios"
            >
              <div className="accordion-body">
                Conectamos tus herramientas y automatizamos flujos de trabajo:
                CRMs, ERPs, pasarelas de pago y APIs de terceros trabajando en conjunto.
              </div>
            </div>
          </div>

          {/* ---------- PANEL 4: Soporte ---------- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#colapso4"
                aria-expanded="false"
                aria-controls="colapso4"
              >
                🛠️ Soporte y Mantenimiento
              </button>
            </h2>
            <div
              id="colapso4"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionServicios"
            >
              <div className="accordion-body">
                Acompañamiento continuo para que tus sistemas funcionen sin
                interrupciones: monitoreo, actualizaciones y soporte técnico ágil.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Servicios