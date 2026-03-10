import './Ubicacion.css'
import GoogleMap from '../Map/GoogleMap'
import iglesiaImg from '../../assets/images/FotoIglesiaFrente.png'
import UbicacionIcon from '../../assets/icons/Ubicacion.png'

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">

        <div className="ubicacion-header">
          <span className="ubicacion-eyebrow">
            <img src={UbicacionIcon} alt="" className="eyebrow-icon" />
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
                <img src={UbicacionIcon} alt="Ubicación" className="ubicacion-pin-icon" />
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