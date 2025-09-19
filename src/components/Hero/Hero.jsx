import './Hero.css'
import inicioImg from '../../assets/images/Inicio.png'

const Hero = () => {
  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/c/iglesiarenuevodevidasaavedra', '_blank')
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
            <p className="hero-location">Buenos aires, Argentina</p>
            <h1 className="hero-title">Renuevo de vida</h1>
            <p className="hero-description">
              Somos una iglesia cristiana donde la salud y la 
              restauración espiritual y emocional.
            </p>
            <button className="hero-btn" onClick={handleYouTubeClick}>
              Ver nuestra reunión ahora
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero