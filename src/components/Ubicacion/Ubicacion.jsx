import './Ubicacion.css'
import GoogleMap from '../Map/GoogleMap'
import iglesiaImg from '../../assets/images/FotoIglesiaFrente.webp'
import { MapPin } from 'lucide-react'

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">

        <div className="ubicacion-header">
          <span className="ubicacion-eyebrow">
            <MapPin size={13} />
            visitanos
          </span>
          <h2 className="ubicacion-title">Sumate a nuestras reuniones</h2>
        </div>

        <div className="ubicacion-content">
          <div className="ubicacion-info">
            <a
              href="https://maps.app.goo.gl/Kn3ZpuDkE51TRHkJA"
              target="_blank"
              rel="noopener noreferrer"
              className="direccion-card"
            >
              <div className="direccion-icon-wrap">
                <MapPin size={20} />
              </div>
              <div className="direccion-text">
                <span className="direccion-label">Dirección</span>
                <h4>Crisólogo Larralde 3471</h4>
                <p>Saavedra, CABA</p>
              </div>
              <span className="direccion-arrow">→</span>
            </a>

            <div className="iglesia-image">
              <img src={iglesiaImg} alt="Iglesia Renuevo de Vida" />
            </div>
          </div>

          <div className="ubicacion-map">
            <GoogleMap />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Ubicacion