"use client"

import "./Reuniones.css"
import separadorImg from "../../assets/images/Separador.webp"
import { Calendar, BookOpen, HeartHandshake, Church, Baby, Users, User, Heart } from "lucide-react"

const ICON_SIZE = 22

const reunionesData = [
  {
    id: "generales",
    title: "Reuniones Generales",
    schedule: [{
      day: "Domingos",
      times: [
        { time: "9:30hs", activity: "Escuela bíblica", icon: <BookOpen size={ICON_SIZE} /> },
        { time: "10:30hs", activity: "Oración", icon: <HeartHandshake size={ICON_SIZE} /> },
        { time: "11:00hs", activity: "Reunión general", icon: <Church size={ICON_SIZE} /> },
      ],
    }],
  },
  {
    id: "especiales",
    title: "Reuniones Especiales",
    schedule: [{
      day: "Sábado del último fin de semana del mes",
      times: [
        { time: "18:30hs", activity: "Oración", icon: <HeartHandshake size={ICON_SIZE} /> },
        { time: "19:00hs", activity: "Reunión general", icon: <Church size={ICON_SIZE} /> },
      ],
    }],
  },
  {
    id: "ninos",
    title: "Niños",
    schedule: [{
      day: "Domingos",
      times: [
        { time: "11:00hs", activity: "Mientras transcurre la reunión", icon: <Baby size={ICON_SIZE} /> },
      ],
    }],
  },
  {
    id: "adolescentes",
    title: "Ados & Jóvenes",
    schedule: [{
      day: "Sábados",
      times: [
        { time: "19:00hs", activity: "Reunión de jóvenes", icon: <Users size={ICON_SIZE} /> },
      ],
    }],
  },
  {
    id: "mujeres",
    title: "Mujeres (Segunda juventud)",
    schedule: [{
      day: "2do sábado del mes",
      times: [
        { time: "16:00hs", activity: "Reunión de mujeres", icon: <User size={ICON_SIZE} /> },
      ],
    }],
  },
  {
    id: "matrimonios",
    title: "Matrimonios",
    schedule: [{
      day: "1er sábado del mes",
      times: [
        { time: "20:00hs", activity: "Reunión de matrimonios", icon: <Heart size={ICON_SIZE} /> },
      ],
    }],
  },
]

const Reuniones = () => {
  return (
    <>
      <section id="reuniones-section" className="reuniones">
        <div className="container">
          <h2 className="reuniones-title">Reuniones</h2>
          <div className="reuniones-grid">
            {reunionesData.map((reunion) => (
              <div key={reunion.id} className="reunion-card fade-in">
                <h3>{reunion.title}</h3>
                {reunion.schedule.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-day">
                      <div className="day-icon-wrap">
                        <Calendar size={18} />
                      </div>
                      <h4>{item.day}</h4>
                    </div>
                    <div className="schedule-times">
                      {item.times.map((timeItem, timeIndex) => (
                        <div key={timeIndex} className="time-item">
                          <div className="time-wrapper">
                            <div className="time-icon-wrap">
                              {timeItem.icon}
                            </div>
                            <div className="time-info">
                              <span className="activity">{timeItem.activity}</span>
                              <span className="time">{timeItem.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider">
        <img src={separadorImg} alt="Jóvenes en reunión" className="divider-image" />
      </div>
    </>
  )
}

export default Reuniones