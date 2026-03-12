import './Equipo.css'
import alePhoto from '../../assets/images/EquipoAle.png'
import gusPhoto from '../../assets/images/EquipoGus.png'

const miembros = [
  {
    nombre: 'Alejandro Casal',
    rol: 'Pastor Principal',
    foto: alePhoto,
  },
  {
    nombre: 'Gustavo Lauriente',
    rol: 'Líder',
    foto: gusPhoto,
  },
]

const Equipo = () => {
  return (
    <section className="equipo">
      <div className="container">
        <h2 className="equipo-title">Equipo de Buenos Aires</h2>

        <div className="equipo-grid">
          {miembros.map((miembro, index) => (
            <div key={index} className="equipo-card">
              <div className="equipo-foto">
                {miembro.foto
                  ? <img src={miembro.foto} alt={miembro.nombre} />
                  : <div className="equipo-foto-placeholder" />
                }
              </div>

              <h3 className="equipo-nombre">{miembro.nombre}</h3>
              <p className="equipo-rol">{miembro.rol}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Equipo