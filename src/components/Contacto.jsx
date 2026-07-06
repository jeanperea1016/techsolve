// src/components/Contacto.jsx

import { useState, useEffect } from 'react'

function Contacto() {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState({})
  const [enviado, setEnviado] = useState(false)

  // EFECTO 1: al cargar, recupera el borrador si existe.
  useEffect(() => {
    const borrador = localStorage.getItem('borradorContacto')
    if (borrador) {
      setFormData(JSON.parse(borrador))
    }
  }, [])

  // EFECTO 2: cada vez que formData cambia, guarda el borrador.
  useEffect(() => {
    localStorage.setItem('borradorContacto', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio'
    } else if (!regexEmail.test(formData.email)) {
      nuevosErrores.email = 'Ingresa un email válido'
    }

    const regexTelefono = /^[0-9+\s()-]+$/
    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio'
    } else if (!regexTelefono.test(formData.telefono)) {
      nuevosErrores.telefono = 'Ingresa un teléfono válido'
    }

    if (!formData.empresa.trim()) {
      nuevosErrores.empresa = 'La empresa es obligatoria'
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio'
    } else if (formData.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    return nuevosErrores
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevosErrores = validar()
    setErrors(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: '',
      })
      localStorage.removeItem('borradorContacto')
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <h2 className="text-center fw-bold mb-3">Conversemos</h2>
        <p className="text-center text-white-50 mb-5">
          Cuéntanos sobre tu proyecto y te responderemos a la brevedad
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            {enviado && (
              <div className="alert alert-success text-center" role="alert">
                ✅ ¡Gracias por contactarnos! Te responderemos a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+56 9 1234 5678"
                />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input
                  type="text"
                  className={`form-control ${errors.empresa ? 'is-invalid' : ''}`}
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
                {errors.empresa && <div className="invalid-feedback">{errors.empresa}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  rows="4"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué necesitas"
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar mensaje
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto