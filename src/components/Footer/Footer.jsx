import './Footer.css'
import logoCompleto from '../../assets/images/IglesiaLogoCompleto.png'
import ytIcon from '../../assets/icons/YT.png'
import igIcon from '../../assets/icons/IG.png'
import fbIcon from '../../assets/icons/FB.png'
import UbicacionIcon from '../../assets/icons/Ubicacion.png'

const Footer = () => {
  const socials = [
    { key: 'youtube', icon: ytIcon, label: 'YouTube', url: 'https://www.youtube.com/c/iglesiarenuevodevidasaavedra' },
    { key: 'instagram', icon: igIcon, label: 'Instagram', url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la' },
    { key: 'facebook', icon: fbIcon, label: 'Facebook', url: 'https://www.facebook.com/share/1FhqzcYVMp/?mibextid=wwXIfr' },
    { key: 'tiktok', icon: null, label: 'TikTok', url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la' },
    { key: 'whatsapp', icon: null, label: 'WhatsApp', url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la' },
    { key: 'gmail', icon: null, label: 'Gmail', url: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la' },
  ]
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="footer">
      <div className="container">

        <div className="footer-top">
          <div className="footer-logo">
            <img src={logoCompleto} alt="Iglesia Renuevo de Vida" />
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">Seguinos</h4>
            <div className="social-icons-container">
              {socials.map(s => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-btn ${s.key}`}
                  aria-label={s.label}
                >
                  {s.icon
                    ? <img src={s.icon} alt={s.label} />
                    : <span className="social-svg">{svgIcons[s.key]}</span>
                  }
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a
            href="https://maps.app.goo.gl/Kn3ZpuDkE51TRHkJA"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address-link"
          >
            <img src={UbicacionIcon} alt="Ubicación" className="footer-icon" />
            Crisólogo Larralde 3471 - CABA
          </a>

          <div className="footer-copyright">
            <p>© {currentYear} Iglesia Renuevo de Vida</p>
            <a
              href="https://agustincervello.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-portfolio-link"
            >
              Made by Agus
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

const svgIcons = {
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  ),
  gmail: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.64l8.073-6.147C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  )
}

export default Footer