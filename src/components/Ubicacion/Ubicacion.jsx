import './Ubicacion.css'
import GoogleMap from '../Map/GoogleMap'
import iglesiaImg from '../../assets/images/Iglesia.png'
// Importa el ícono de Ubicación
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
              {/* Aquí usamos tu ícono de ubicación */}
              <div className="direccion-icon">
                <img src={UbicacionIcon} alt="Icono de Ubicación" className="ubicacion-pin-icon" />
              </div>
              <div className="direccion-text">
                <h4>Crisólogo Larralde 3471 - CABA</h4>
                {/* Si tienes una descripción adicional de la dirección, podrías ir aquí */}
                {/* <p>Horarios de atención o detalles adicionales</p> */}
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