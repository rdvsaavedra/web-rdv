import './NuestraFamilia.css'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import h1 from '../../assets/images/NuestraFamilia1Horizontal.webp'
import v1 from '../../assets/images/NuestraFamilia1Vertical.webp'
import h2 from '../../assets/images/NuestraFamilia2Horizontal.webp'
import v2 from '../../assets/images/NuestraFamilia2Vertical.webp'
import v3 from '../../assets/images/NuestraFamilia3Vertical.webp'
import v4 from '../../assets/images/NuestraFamilia4Vertical.webp'
import v5 from '../../assets/images/NuestraFamilia5Vertical.webp'
import v6 from '../../assets/images/NuestraFamilia6Vertical.webp'

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
  const reveal = useScrollReveal()
  return (
    <section id="nuestra-familia" className="nuestra-familia">
      <div className="nf-header" ref={reveal}>
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