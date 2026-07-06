// src/components/CasosEstudio.jsx

function CasosEstudio() {
  return (
    // id="casos" para el link del navbar. py-5 padding. Fondo claro (contrasta con Timeline oscuro).
    <section id="casos" className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-3">Casos de Éxito</h2>
        <p className="text-center text-muted mb-5">
          Proyectos reales que transformaron el negocio de nuestros clientes
        </p>

        {/* EL GRID DE BOOTSTRAP.
            row = fila. g-4 = "gap" (espacio) entre columnas.
            Dentro van 3 columnas. Las clases col explican el responsive:
              col-12      -> en móvil (default), cada card ocupa el ancho completo (1 por fila)
              col-md-4    -> desde el breakpoint md (tablet+), cada card ocupa 4/12 = 1/3
                             (o sea, 3 cards por fila)
            Esto es EXACTAMENTE el "grid system" que evalúa la rúbrica. */}
        <div className="row g-4">

          {/* ---------- CARD 1: E-commerce ---------- */}
          <div className="col-12 col-md-4">
            {/* card = tarjeta de Bootstrap. h-100 = altura 100% (todas las cards
                de la fila quedan del mismo alto aunque tengan distinto texto).
                shadow-sm = sombra sutil. border-0 = sin borde. */}
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                {/* Ícono/emoji grande como imagen simbólica del caso */}
                <div className="fs-1 mb-3">🛒</div>
                <h5 className="card-title fw-bold">Plataforma E-commerce</h5>
                <p className="card-text text-muted">
                  Tienda online completa con pasarela de pagos y gestión de inventario.
                </p>
                {/* El botón que ABRE el modal.
                    data-bs-toggle="modal" -> le dice a Bootstrap "esto abre un modal".
                    data-bs-target="#modalCaso1" -> CUÁL modal (el del id modalCaso1). */}
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCaso1"
                >
                  Ver caso
                </button>
              </div>
            </div>
          </div>

          {/* ---------- CARD 2: App logística ---------- */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="fs-1 mb-3">🚚</div>
                <h5 className="card-title fw-bold">App de Logística</h5>
                <p className="card-text text-muted">
                  Sistema de seguimiento de flota y rutas en tiempo real.
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCaso2"
                >
                  Ver caso
                </button>
              </div>
            </div>
          </div>

          {/* ---------- CARD 3: Portal corporativo ---------- */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="fs-1 mb-3">🏢</div>
                <h5 className="card-title fw-bold">Portal Corporativo</h5>
                <p className="card-text text-muted">
                  Intranet a medida para gestión documental y comunicación interna.
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCaso3"
                >
                  Ver caso
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== LOS MODALES ====================
          Van FUERA del grid pero DENTRO de la section.
          Cada modal está oculto por defecto; aparece cuando su botón lo activa.
          El id de cada modal coincide con el data-bs-target de su botón. */}

      {/* ---------- MODAL 1: E-commerce ---------- */}
      {/* class "modal fade" -> modal con transición suave. tabIndex y aria para accesibilidad. */}
      <div className="modal fade" id="modalCaso1" tabIndex="-1" aria-hidden="true">
        {/* modal-dialog centra y limita el ancho. modal-lg = modal grande. */}
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {/* Cabecera del modal: título + botón X para cerrar */}
            <div className="modal-header">
              <h5 className="modal-title fw-bold">🛒 Plataforma E-commerce</h5>
              {/* data-bs-dismiss="modal" -> este botón CIERRA el modal */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            {/* Cuerpo: el detalle completo del caso */}
            <div className="modal-body">
              <p><strong>Cliente:</strong> Retail de moda con 3 tiendas físicas.</p>
              <p><strong>Desafío:</strong> Necesitaban vender online sin perder el control del inventario compartido entre tiendas y web.</p>
              <p><strong>Solución:</strong> Desarrollamos una tienda con sincronización de stock en tiempo real, pasarela de pagos local e integración con su sistema contable.</p>
              <p className="mb-0"><strong>Resultado:</strong> +40% en ventas durante el primer trimestre y gestión unificada de inventario.</p>
            </div>
            {/* Pie: botón de cerrar */}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MODAL 2: App logística ---------- */}
      <div className="modal fade" id="modalCaso2" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">🚚 App de Logística</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p><strong>Cliente:</strong> Empresa de distribución con flota de 25 vehículos.</p>
              <p><strong>Desafío:</strong> No tenían visibilidad de dónde estaban sus camiones ni de los tiempos de entrega.</p>
              <p><strong>Solución:</strong> App móvil con geolocalización en tiempo real, optimización de rutas y notificaciones automáticas al cliente final.</p>
              <p className="mb-0"><strong>Resultado:</strong> Reducción del 30% en tiempos de entrega y mejor satisfacción del cliente.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MODAL 3: Portal corporativo ---------- */}
      <div className="modal fade" id="modalCaso3" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">🏢 Portal Corporativo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p><strong>Cliente:</strong> Empresa de servicios con 200 empleados.</p>
              <p><strong>Desafío:</strong> La información interna estaba dispersa en correos y carpetas, sin un punto central.</p>
              <p><strong>Solución:</strong> Intranet con gestión documental, directorio de personal, noticias internas y control de accesos por rol.</p>
              <p className="mb-0"><strong>Resultado:</strong> Comunicación interna centralizada y 50% menos tiempo buscando documentos.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CasosEstudio