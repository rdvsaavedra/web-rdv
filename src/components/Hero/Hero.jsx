import './Hero.css'
import inicioImg from '../../assets/images/Inicio.png'
import LogoImg from '../../assets/images/IglesiaLogoCompleto.png'

const Hero = () => {
  const handleReunionesClick = () => {
    document.getElementById('reuniones-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <img src={inicioImg} alt="Familia en iglesia" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <p className="hero-location">Buenos Aires, Argentina</p>
            <img src={LogoImg} alt="Renuevo de vida" className="hero-logo" />
            <p className="hero-description">
              La alegría de estar en C A S A
            </p>
            <button className="hero-btn" onClick={handleReunionesClick}>
              Horarios
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero