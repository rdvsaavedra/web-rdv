import './About.css'
import pastorImg from '../../assets/images/Pastor.png'
import visionIcon from '../../assets/icons/Vision.png'
import misionIcon from '../../assets/icons/Mision.png'
import comunidadIcon from '../../assets/icons/Comunidad.png'
import oracionIcon from '../../assets/icons/Oracion.png'
import palabraIcon from '../../assets/icons/Palabra.png'

const About = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/iglesiarenuevodevida/?hl=es-la', '_blank')
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro-wrapper">
              <video className="about-intro-accent" autoPlay loop muted>
                <source src="/src/assets/icons/biblia.mp4" type="video/mp4" />
              </video>
              <p className="about-intro">Donde la gracia de Dios te encuentra tal como eres</p>
            </div>
            
            <h2 className="about-title">
              Un lugar de <span className="title-highlight">fe</span> y{' '}
              <span className="title-highlight">encuentro</span>
            </h2>
            
            <div className="about-description">
              <p className="description-paragraph">
                En nuestra iglesia <strong>creemos profundamente</strong> en la gracia transformadora de Dios. 
                Somos una comunidad que abraza a cada persona tal como es, ofreciendo un espacio 
                donde encontrarás <em>comprensión, esperanza y amor real</em> que trasciende cualquier 
                situación.
              </p>
              
              <p className="description-paragraph">
                Creemos firmemente en el <strong>poder restaurador de Jesús</strong> y en Su capacidad 
                para renovar vidas, sanar heridas y transformar historias. No importa de dónde 
                vienes o por qué estás atravesando, aquí encontrarás personas genuinas que se 
                caracterizan por ser <span className="text-accent">familia</span>.
              </p>
            </div>
            
            <div className="cta-section">
              <button className="instagram-btn" onClick={handleInstagramClick}>
                <span className="btn-text">Síguenos</span>
                <span className="btn-handle">@iglesiarenuevodevida</span>
              </button>
              <p className="cta-subtitle">Únete a nuestra comunidad digital</p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img src={pastorImg} alt="Pastor y congregación" />
              <div className="image-overlay">
                <div className="overlay-text">
                  <div className="overlay-item">
                    <img src={comunidadIcon} alt="Comunidad" />
                    <p>Comunidad</p>
                  </div>
                  <div className="overlay-item">
                    <img src={oracionIcon} alt="Oración" />
                    <p>Oración</p>
                  </div>
                  <div className="overlay-item">
                    <img src={palabraIcon} alt="Palabra" />
                    <p>Palabra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="vision-mission">
          <div className="vm-item vision">
            <div className="vm-header">
              <img src={visionIcon} alt="Visión" className="vm-icon" />
              <h3>Visión</h3>
            </div>
            <div className="vm-content">
              <div className="vm-point">
                <h4>Exógena</h4>
                <p>Tener presencia e influencia espiritual en nuestro barrio.</p>
              </div>
              <div className="vm-point">
                <h4>Endógena</h4>
                <p>Que cada persona pueda llegar a crecer en sabiduría y madurez espiritual.</p>
              </div>
            </div>
          </div>
          
          <div className="vm-item mission">
            <div className="vm-header">
              <img src={misionIcon} alt="Misión" className="vm-icon" />
              <h3>Misión</h3>
            </div>
            <div className="vm-content">
              <div className="mission-subtitle">
                <strong>Cinco áreas de desarrollo</strong>
              </div>
              <blockquote className="mission-quote">
                "Por tanto, <mark>id</mark> (Evangelismo-Trabajo social), y <mark>haced discípulos</mark> a todas las naciones 
                (Discipulado-Pastoreo), <mark>bautizándolos</mark> (Comunión) en el nombre del padre, del Hijo y del Espíritu Santo; 
                <mark>enseñándoles</mark> (Capacitación) que <mark>guarden</mark> (Servicio) todas las cosas que os he mandado."
                <cite>— Mateo 28:19-20</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-hero">
        <div className="hero-particles"></div>
        <div className="about-hero-content">
          <div className="hero-text-wrapper">
            <h2 className="hero-subtitle">Jesús, una fuente de agua</h2>
            <h1 className="hero-title">
              <span className="title-letter">V</span>
              <span className="title-letter">I</span>
              <span className="title-letter">V</span>
              <span className="title-letter">A</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About