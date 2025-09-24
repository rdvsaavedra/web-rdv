import './Ubicacion.css'
import GoogleMap from '../Map/GoogleMap'
import iglesiaImg from '../../assets/images/Iglesia.png'
import UbicacionIcon from '../../assets/icons/Ubicacion.png' 

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">
        <div className="ubicacion-header">
          <h3 className="ubicacion-subtitle">visitanos</h3>
          <h2 className="ubicacion-title">Sumate a nuestras reuniones</h2>
        </div>
        
        <div className="ubicacion-content">
          <div className="ubicacion-info">
            <div className="direccion">
              <div className="direccion-icon">
                <img src={UbicacionIcon} alt="Icono de Ubicación" className="ubicacion-pin-icon" />
              </div>
              <div className="direccion-text">
                <h4>Crisólogo Larralde 3471 - Saavedra, CABA</h4>
              </div>
            </div>
            
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