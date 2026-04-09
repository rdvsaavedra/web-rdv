import './Equipo.css'
import aleYCariPhoto from '../../assets/images/EquipoAleYCari.webp'
import anaPhoto from '../../assets/images/EquipoAnaJorquera.webp'
import gabiPhoto from '../../assets/images/EquipoGabiDura.webp'
import gustavoPhoto from '../../assets/images/EquipoGustavoLauriente.webp'
import luisPhoto from '../../assets/images/EquipoLuisGimenez.webp'

const pastores = [
  { nombre: 'Alejandro y Carina Casal', rol: 'Pastores Principales', foto: aleYCariPhoto },
]

const equipoPastoral = [
  { nombre: 'Ana Jorquera', rol: 'Equipo Pastoral', foto: anaPhoto },
  { nombre: 'Gabriela Durá', rol: 'Equipo Pastoral', foto: gabiPhoto },
  { nombre: 'Gustavo Lauriente', rol: 'Equipo Pastoral', foto: gustavoPhoto },
  { nombre: 'Luis Gimenez', rol: 'Equipo Pastoral', foto: luisPhoto },
]

const Equipo = () => {
  return (
    <section className="equipo">
      <div className="equipo-bg">
        <div className="equipo-orb equipo-orb--1" />
        <div className="equipo-orb equipo-orb--2" />
        <div className="equipo-orb equipo-orb--3" />
      </div>

      <div className="container">
        <h2 className="equipo-title">Nuestro equipo</h2>

        <div className="equipo-layout">

          <div className="equipo-col equipo-col--pastores">
            <h3 className="equipo-col-title">Pastores</h3>
            {pastores.map((miembro, index) => (
              <div key={index} className="equipo-card">
                <div className="equipo-foto equipo-foto--grande">
                  <img src={miembro.foto} alt={miembro.nombre} />
                </div>
                <h4 className="equipo-nombre">{miembro.nombre}</h4>
              </div>
            ))}
          </div>

          <div className="equipo-divisor">
            <div className="equipo-divisor-line" />
          </div>

          <div className="equipo-col equipo-col--pastoral">
            <h3 className="equipo-col-title">Equipo pastoral</h3>
            <div className="equipo-grid">
              {equipoPastoral.map((miembro, index) => (
                <div key={index} className="equipo-card">
                  <div className="equipo-foto">
                    <img src={miembro.foto} alt={miembro.nombre} />
                  </div>
                  <h4 className="equipo-nombre">{miembro.nombre}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Equipo