import { useState } from 'react'
import './Values.css'
import graciaIcon from '../../assets/icons/Gracia.png'
import espiritualidadIcon from '../../assets/icons/Espiritualidad.png'
import pasionIcon from '../../assets/icons/Pasion.png'
import trabajoEquipoIcon from '../../assets/icons/TrabajoEnEquipo.png'
import organizacionIcon from '../../assets/icons/Organizacion.png'
import creatividadIcon from '../../assets/icons/Creatividad.png'
import familiaridadIcon from '../../assets/icons/Familiaridad.png'

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  const values = [
    {
      icon: graciaIcon,
      title: 'Gracia',
      description: 'Enfocados en la bondad increíble y la misericordia suprema',
      reference: 'Salmo 23:6a'
    },
    {
      icon: espiritualidadIcon,
      title: 'Espiritualidad',
      description: 'Buscando permanentemente la intimidad espiritual con el Espíritu',
      reference: 'Salmo 23:6a'
    },
    {
      icon: pasionIcon,
      title: 'Pasión',
      description: 'Con curiosidad e intensidad por la Persona de Jesús Señor',
      reference: 'Jn 6:67a'
    },
    {
      icon: trabajoEquipoIcon,
      title: 'Trabajo en equipo',
      description: 'Como filosofía fundamental que enriquece nuestros ministerios',
      reference: 'Ecl 4:9-10'
    },
    {
      icon: organizacionIcon,
      title: 'Organización',
      description: 'Sirviendo con claridad y orden',
      reference: '1 Co 14:40'
    },
    {
      icon: creatividadIcon,
      title: 'Creatividad',
      description: 'Buscando hacer las cosas de una manera nueva y fresca',
      reference: '1 Cr 23:5-6a'
    },
    {
      icon: familiaridadIcon,
      title: 'Familiaridad',
      description: 'Informando responsablemente la unidad y el afecto mutuo',
      reference: 'Ef 2:19'
    }
  ]

  return (
    <section className="values">
      <div className="container">
        <div className="values-header">
          <h2 className="values-title">Nuestros valores</h2>
          <p className="values-subtitle">El carácter que nos define</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className={`value-item ${activeIndex === index ? 'active' : ''}`}
              style={{ '--i': index }}
              onClick={() => handleClick(index)}
            >
              <div className="value-icon-wrap">
                <img src={value.icon} alt={value.title} className="value-icon-img" />
                <div className="value-glow" />
              </div>
              <div className="value-cloud">
                <div className="cloud-tail" />
                <h3 className="cloud-title">{value.title}</h3>
                <p className="cloud-description">{value.description}</p>
                <span className="cloud-reference">{value.reference}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values