import { useState, useEffect, useRef } from 'react'
import './Values.css'
import { HandHeart, Feather, Flame, Users, ListChecks, Palette, Home } from 'lucide-react'

const ICON_SIZE = 30

const values = [
  { icon: <HandHeart size={ICON_SIZE} />, title: 'Gracia', description: 'Enfocados en la bondad increíble y la misericordia suprema', reference: 'Salmo 23:6a' },
  { icon: <Feather size={ICON_SIZE} />, title: 'Espiritualidad', description: 'Buscando permanentemente la intimidad espiritual con el Espíritu', reference: 'Salmo 23:6a' },
  { icon: <Flame size={ICON_SIZE} />, title: 'Pasión', description: 'Con curiosidad e intensidad por la Persona de Jesús Señor', reference: 'Jn 6:67a' },
  { icon: <Users size={ICON_SIZE} />, title: 'Trabajo en equipo', description: 'Como filosofía fundamental que enriquece nuestros ministerios', reference: 'Ecl 4:9-10' },
  { icon: <ListChecks size={ICON_SIZE} />, title: 'Organización', description: 'Sirviendo con claridad y orden', reference: '1 Co 14:40' },
  { icon: <Palette size={ICON_SIZE} />, title: 'Creatividad', description: 'Buscando hacer las cosas de una manera nueva y fresca', reference: '1 Cr 23:5-6a' },
  { icon: <Home size={ICON_SIZE} />, title: 'Familiaridad', description: 'Informando responsablemente la unidad y el afecto mutuo', reference: 'Ef 2:19' },
]

const Values = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const panelRef = useRef(null)

  const handleClick = (index, e) => {
    if (e) e.stopPropagation()
    setActiveIndex(activeIndex === index ? null : index)
  }

  const activeValue = activeIndex !== null ? values[activeIndex] : null

  useEffect(() => {
    if (activeIndex === null) return

    const handleOutsideClick = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setActiveIndex(null)
      }
    }

    const handleScroll = () => setActiveIndex(null)

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeIndex])

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
              onClick={(e) => handleClick(index, e)}
            >
              <div className="value-icon-wrap">
                {value.icon}
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

      {activeValue && (
        <div className="values-mobile-panel" ref={panelRef}>
          <div className="panel-handle" />
          <div className="panel-icon-wrap">
            {activeValue.icon}
          </div>
          <h3 className="cloud-title">{activeValue.title}</h3>
          <p className="cloud-description">{activeValue.description}</p>
          <span className="cloud-reference">{activeValue.reference}</span>
        </div>
      )}
    </section>
  )
}

export default Values