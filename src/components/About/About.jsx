import './About.css'
import { Lightbulb, Target } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const About = () => {
  const reveal = useScrollReveal()
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="vision-mission" ref={reveal}>
          <div className="vm-item vision">
            <div className="vm-header">
              <Lightbulb size={28} color="var(--primary-color)" />
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
              <blockquote className="vm-quote" style={{ marginTop: '16px' }}>
                <p><sup>13</sup>Hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida de la estatura de la plenitud de Cristo.</p>
                <cite>— Efesios 4:13</cite>
              </blockquote>
            </div>
          </div>

          <div className="vm-item mission">
            <div className="vm-header">
              <Target size={28} color="var(--accent-color)" />
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
    </section>
  )
}

export default About