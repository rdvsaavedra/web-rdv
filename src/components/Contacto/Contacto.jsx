import './Contacto.css'

const cards = [
  {
    key: 'youtube',
    category: 'Video',
    title: 'YouTube',
    url: 'https://www.youtube.com/c/iglesiarenuevodevidasaavedra',
    src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'instagram',
    category: 'Fotos',
    title: 'Instagram',
    url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la',
    src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'facebook',
    category: 'Comunidad',
    title: 'Facebook',
    url: 'https://www.facebook.com/share/1FhqzcYVMp/?mibextid=wwXIfr',
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'tiktok',
    category: 'Videos cortos',
    title: 'TikTok',
    url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la',
    src: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'whatsapp',
    category: 'Mensajes',
    title: 'WhatsApp',
    url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la',
    src: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'gmail',
    category: 'Email',
    title: 'Gmail',
    url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la',
    src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop',
  },
]

const Contacto = () => {
  const doubled = [...cards, ...cards]

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-header">
        <h2 className="contacto-title">Seguinos</h2>
        <p className="contacto-subtitle">
          Encontranos en todas las plataformas
        </p>
      </div>

      <div className="contacto-carousel-wrapper">
        <div className="contacto-track">
          {doubled.map((card, index) => (
            <a
              key={index}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-card"
            >
              <div
                className="contacto-card-bg"
                style={{ backgroundImage: `url(${card.src})` }}
              />

              <div className="contacto-card-overlay" />

              <div className="contacto-card-content">
                <span className="contacto-card-category">
                  {card.category}
                </span>
                <h3 className="contacto-card-title">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacto