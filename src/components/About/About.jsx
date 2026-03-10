import './About.css'
import pastorImg from '../../assets/images/Pastor.png'
import visionIcon from '../../assets/icons/Vision.png'
import misionIcon from '../../assets/icons/Mision.png'
import comunidadIcon from '../../assets/icons/Comunidad.png'
import oracionIcon from '../../assets/icons/Oracion.png'
import palabraIcon from '../../assets/icons/Palabra.png'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/*
        <div className="about-content">
          <div className="about-text">
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
        */}

        <div className="vision-mission">
          <div className="vm-item vision">
            <div className="vm-header">
              <img src={visionIcon} alt="Visión" className="vm-icon" />
              <h3>Visión</h3>
            </div>
            <div className="vm-content">
              <blockquote className="vm-quote">
                <p><sup>13</sup>Vosotros sois la sal de la tierra; pero si la sal se desvaneciere, ¿con qué será salada? No sirve más para nada, sino para ser echada fuera y hollada por los hombres.</p>
                <p><sup>14</sup>Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.</p>
                <p><sup>15</sup>Ni se enciende una luz y se pone debajo de un almud, sino sobre el candelero, y alumbra a todos los que están en casa.</p>
                <p><sup>16</sup>Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que están los cielos.</p>
                <cite>— Mateo 5:13-16</cite>
              </blockquote>
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
              <blockquote className="vm-quote" style={{ marginTop: '16px' }}>
                <p><sup>13</sup>hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida de la estatura de la plenitud de Cristo.</p>
                <cite>— Efesios 4:13</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="hero-text-wrapper">
            <p className="hero-eyebrow">Jesús, una fuente de agua</p>
            <h1 className="hero-title">VIVA</h1>
            <div className="hero-divider" />
          </div>
        </div>
      </div>
      */}
    </section>
  )
}

export default About