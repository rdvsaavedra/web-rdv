import './VidaFamilia.css'
import vf1 from '../../assets/images/VidaEnFamilia1.webp'
import vf2 from '../../assets/images/VidaEnFamilia2.webp'
import vf3 from '../../assets/images/VidaEnFamilia3.webp'

const cards = [
  { title: 'Acepté a Cristo', img: vf1 },
  { title: 'Células', img: vf2 },
  { title: 'Casa Abierta', img: vf3 },
]

const VidaFamilia = () => {
  return (
    <section id="vida-familia" className="vida-familia">
      <div className="container">
        <h2 className="vf-title">Vida en familia</h2>
        <div className="vf-grid">
          {cards.map((card, i) => (
            <div className="vf-card" key={i}>
              <div className="vf-img-wrap">
                <img src={card.img} alt={card.title} className="vf-img" />
              </div>
              <p className="vf-label">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VidaFamilia