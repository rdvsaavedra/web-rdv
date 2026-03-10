import { useState, useEffect } from 'react'
import './Hero.css'
import LogoImg from '../../assets/images/IglesiaLogoCompleto.png'
import ubicacionIcon from '../../assets/icons/Ubicacion.png'

import foto1 from '../../assets/images/FotoBannerHero1.png'
import foto2 from '../../assets/images/FotoBannerHero2.png'
import foto3 from '../../assets/images/FotoBannerHero3.png'
import foto4 from '../../assets/images/FotoBannerHero4.png'

const slides = [foto1, foto2, foto3, foto4]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length)
  }

  const next = () => setCurrent(prev => (prev + 1) % slides.length)
  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    console.log('slide actual:', current)
  }, [current])

  const handleReunionesClick = () => {
    document.getElementById('reuniones-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">

      {/* Carrusel */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Flechas */}
      <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Anterior">‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Siguiente">›</button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <div className="hero-location">
              <img src={ubicacionIcon} alt="Ubicación" className="hero-location-pin" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <img src={LogoImg} alt="Renuevo de vida" className="hero-logo" />
            <p className="hero-description">La alegría de estar en C A S A</p>
            <button className="hero-btn" onClick={handleReunionesClick}>
              <span>Horarios</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero