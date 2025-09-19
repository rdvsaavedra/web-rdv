"use client"

import { useState } from "react"
import "./Reuniones.css"
import chicosImg from "../../assets/images/Chicos.png"
import calendarioIcon from "../../assets/icons/Calendario.png"
import bibliaIcon from "../../assets/icons/BibliaBlack.png"
import oracionIcon from "../../assets/icons/OracionBlack.png"
import iglesiaIcon from "../../assets/icons/Iglesia.png"
import bebeIcon from "../../assets/icons/Bebe.png"
import jovenesIcon from "../../assets/icons/Jovenes.png"
import mujerIcon from "../../assets/icons/Mujer.png"
import corazonIcon from "../../assets/icons/Corazon.png"

const Reuniones = () => {
  const [activeTab, setActiveTab] = useState("generales")

  const reunionesData = {
    generales: {
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
    especiales: {
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
    ninos: {
      title: "Niños",
      schedule: [
        {
          day: "Domingos",
          times: [{ time: "11:00hs", activity: "Mientras transcurre la reunión", icon: bebeIcon }],
        },
      ],
    },
    adolescentes: {
      title: "Ados & Jóvenes",
      schedule: [
        {
          day: "Sábados",
          times: [{ time: "19:00hs", activity: "Reunión de jóvenes", icon: jovenesIcon }],
        },
      ],
    },
    mujeres: {
      title: "Mujeres (Segunda juventud)",
      schedule: [
        {
          day: "2do sábado del mes",
          times: [{ time: "16:00hs", activity: "Reunión de mujeres", icon: mujerIcon }],
        },
      ],
    },
    matrimonios: {
      title: "Matrimonios",
      schedule: [
        {
          day: "1er sábado del mes",
          times: [{ time: "20:00hs", activity: "Reunión de matrimonios", icon: corazonIcon }],
        },
      ],
    },
  }

  const tabs = [
    { key: "generales", label: "Generales" },
    { key: "especiales", label: "Especiales" },
    { key: "ninos", label: "Niños" },
    { key: "adolescentes", label: "Ados & Jóvenes" },
    { key: "mujeres", label: "Mujeres" },
    { key: "matrimonios", label: "Matrimonios" },
  ]

  return (
    <>
      <section id="reuniones-section" className="reuniones">
        <div className="container">
          <h2 className="reuniones-title">Nuestras Reuniones</h2>
          {/* Nuevo contenedor para el layout de 2 columnas */}
          <div className="reuniones-layout">
            {/* Columna Izquierda: Botones de Pestañas */}
            <div className="reuniones-tabs-container">
              <div className="reuniones-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Contenido de los Horarios */}
            <div className="reuniones-content-wrapper">
              <div key={activeTab} className="schedule-info fade-in">
                <h3>{reunionesData[activeTab].title}</h3>
                {reunionesData[activeTab].schedule.map((item, index) => (
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
            </div>
          </div>{" "}
          {/* Fin de .reuniones-layout */}
        </div>
      </section>

      <div className="section-divider">
        <img src={chicosImg} alt="Jóvenes en reunión" className="divider-image" />
      </div>
    </>
  )
}

export default Reuniones
