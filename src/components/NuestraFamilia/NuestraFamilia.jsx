import './NuestraFamilia.css'
import h1 from '../../assets/images/NuestraFamilia1Horizontal.png'
import v1 from '../../assets/images/NuestraFamilia1Vertical.png'
import h2 from '../../assets/images/NuestraFamilia2Horizontal.png'
import v2 from '../../assets/images/NuestraFamilia2Vertical.png'
import v3 from '../../assets/images/NuestraFamilia3Vertical.png'
import v4 from '../../assets/images/NuestraFamilia4Vertical.png'
import v5 from '../../assets/images/NuestraFamilia5Vertical.png'
import v6 from '../../assets/images/NuestraFamilia6Vertical.png'

const photos = [
  { src: v1, horizontal: false },
  { src: v2, horizontal: false },
  { src: v3, horizontal: false },
  { src: h1, horizontal: true },
  { src: v4, horizontal: false },
  { src: v5, horizontal: false },
  { src: h2, horizontal: true },
  { src: v6, horizontal: false },
]

const doubled = [...photos, ...photos]

const NuestraFamilia = () => {
  return (
    <section id="nuestra-familia" className="nuestra-familia">
      <div className="nf-header">
        <h2 className="nf-title">Nuestra familia</h2>
        <p className="nf-subtitle">Personas reales, historias reales</p>
      </div>

      <div className="nf-track-wrapper">
        <div className="nf-track">
          {doubled.map((photo, index) => (
            <div
              key={index}
              className={`nf-card ${photo.horizontal ? 'nf-card--horizontal' : ''}`}
            >
              <div
                className="nf-card-img"
                style={{ backgroundImage: `url(${photo.src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NuestraFamilia