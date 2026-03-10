import './VidaFamilia.css'

const cards = [
    {
        title: 'Acepté a Cristo',
        img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80',
    },
    {
        title: 'Células',
        img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    },
    {
        title: 'Casa Abierta',
        img: 'https://images.unsplash.com/photo-1518481852452-9415b262eba4?w=600&q=80',
    },
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