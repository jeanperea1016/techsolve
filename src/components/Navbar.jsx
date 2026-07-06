// src/components/Navbar.jsx

// Un componente es una función que devuelve JSX.
// El nombre va en PascalCase (primera letra mayúscula): obligatorio en React.
function Navbar() {
  return (
    // <nav> es la etiqueta semántica correcta para una barra de navegación.
    // Las clases son de Bootstrap:
    //   navbar          -> activa el componente navbar de Bootstrap
    //   navbar-expand-lg -> la barra se "expande" (muestra links en fila) desde el breakpoint lg;
    //                       en pantallas más chicas colapsa en el menú hamburguesa
    //   navbar-dark     -> texto claro, pensado para fondos oscuros
    //   bg-dark         -> fondo oscuro (look corporativo)
    //   sticky-top      -> la barra queda fija arriba al hacer scroll
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      {/* container centra el contenido y le da márgenes responsivos */}
      <div className="container">

        {/* La "marca" o logo del sitio. navbar-brand le da el estilo destacado. */}
        <a className="navbar-brand fw-bold" href="#inicio">
          TechSolve
        </a>

        {/* Botón hamburguesa: SOLO se ve en pantallas chicas (cuando la barra colapsa).
            data-bs-toggle y data-bs-target son atributos de Bootstrap:
            le dicen "al hacer clic, abre/cierra el elemento con id=navbarNav".
            Esto funciona gracias al JS de Bootstrap que importamos en main.jsx. */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* El contenedor de los links. La clase "collapse navbar-collapse" hace que
            en móvil esté oculto hasta tocar la hamburguesa. El id conecta con el botón. */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* ms-auto (margin-start auto) empuja los links hacia la derecha */}
          <ul className="navbar-nav ms-auto">
            {/* Cada <li> es un item. nav-link da el estilo de enlace de navegación.
                Los href con # apuntan a secciones de la misma página (scroll interno). */}
            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#casos">Casos de Éxito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

// Exportamos el componente para poder importarlo en App.jsx
export default Navbar