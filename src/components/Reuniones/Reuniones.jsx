"use client"

import "./Reuniones.css"
import separadorImg from "../../assets/images/Separador.png"
import calendarioIcon from "../../assets/icons/Calendario.png"
import bibliaIcon from "../../assets/icons/BibliaBlack.png"
import oracionIcon from "../../assets/icons/OracionBlack.png"
import iglesiaIcon from "../../assets/icons/Iglesia.png"
import bebeIcon from "../../assets/icons/Bebe.png"
import jovenesIcon from "../../assets/icons/Jovenes.png"
import mujerIcon from "../../assets/icons/Mujer.png"
import corazonIcon from "../../assets/icons/Corazon.png"

const Reuniones = () => {
  const reunionesData = [
    {
      id: "generales",
      title: "Reuniones Generales",
      schedule: [
        {
          day: "Domingos",
          times: [
            { time: "9:30hs", activity: "Escuela bíblica", icon: bibliaIcon },
            { time: "10:30hs", activity: "Oración", icon: oracionIcon },
            { time: "11:00hs", activity: "Reunión general", icon: iglesiaIcon },
          ],
        },
      ],
    },
    {
      id: "especiales",
      title: "Reuniones Especiales",
      schedule: [
        {
          day: "Sábado del último fin de semana del mes",
          times: [
            { time: "18:30hs", activity: "Oración", icon: oracionIcon },
            { time: "19:00hs", activity: "Reunión general", icon: iglesiaIcon },
          ],
        },
      ],
    },
    {
      id: "ninos",
      title: "Niños",
      schedule: [
        {
          day: "Domingos",
          times: [{ time: "11:00hs", activity: "Mientras transcurre la reunión", icon: bebeIcon }],
        },
      ],
    },
    {
      id: "adolescentes",
      title: "Ados & Jóvenes",
      schedule: [
        {
          day: "Sábados",
          times: [{ time: "19:00hs", activity: "Reunión de jóvenes", icon: jovenesIcon }],
        },
      ],
    },
    {
      id: "mujeres",
      title: "Mujeres (Segunda juventud)",
      schedule: [
        {
          day: "2do sábado del mes",
          times: [{ time: "16:00hs", activity: "Reunión de mujeres", icon: mujerIcon }],
        },
      ],
    },
    {
      id: "matrimonios",
      title: "Matrimonios",
      schedule: [
        {
          day: "1er sábado del mes",
          times: [{ time: "20:00hs", activity: "Reunión de matrimonios", icon: corazonIcon }],
        },
      ],
    },
  ]

  return (
    <>
      <section id="reuniones-section" className="reuniones">
        <div className="container">
          <h2 className="reuniones-title">Reuniones</h2>
          {/* Contenedor de grilla de tarjetas */}
          <div className="reuniones-grid">
            {reunionesData.map((reunion) => (
              <div key={reunion.id} className="reunion-card fade-in">
                <h3>{reunion.title}</h3>
                {reunion.schedule.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-day">
                      <img src={calendarioIcon} alt="Calendario" className="day-icon" />
                      <h4>{item.day}</h4>
                    </div>
                    <div className="schedule-times">
                      {item.times.map((timeItem, timeIndex) => (
                        <div key={timeIndex} className="time-item">
                          <div className="time-wrapper">
                            <img src={timeItem.icon} alt={timeItem.activity} className="time-icon" />
                            <div className="time-info">
                              <span className="time">{timeItem.time}</span>
                              <span className="activity">{timeItem.activity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>{" "}
          {/* Fin de .reuniones-grid */}
        </div>
      </section>

      <div className="section-divider">
        <img src={separadorImg} alt="Jóvenes en reunión" className="divider-image" />
      </div>
    </>
  )
}

export default Reuniones
