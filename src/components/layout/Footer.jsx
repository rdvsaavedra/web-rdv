import logoCompleto from '../../assets/images/IglesiaLogoCompleto.png'
import ytIcon from '../../assets/icons/YT.png'
import igIcon from '../../assets/icons/IG.png'
import fbIcon from '../../assets/icons/FB.png'
import UbicacionIcon from '../../assets/icons/Ubicacion.png'
import CorazonIcon from '../../assets/icons/Corazon.png'

const Footer = () => {
    const handleSocialClick = (platform) => {
        const urls = {
            youtube: 'https://www.youtube.com/c/iglesiarenuevodevidasaavedra',
            instagram: 'https://www.instagram.com/iglesiarenuevodevida/?hl=es-la',
            facebook: 'https://www.facebook.com/share/1FhqzcYVMp/?mibextid=wwXIfr'
        }
        window.open(urls[platform], '_blank')
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer id="contacto" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logoCompleto} alt="Iglesia Renuevo de Vida" />
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-social-title">Contáctanos</h4>
                        <div className="social-icons-container">
                            <button className="social-btn youtube" onClick={() => handleSocialClick('youtube')} aria-label="YouTube">
                                <img src={ytIcon} alt="YouTube" />
                            </button>
                            <button className="social-btn instagram" onClick={() => handleSocialClick('instagram')} aria-label="Instagram">
                                <img src={igIcon} alt="Instagram" />
                            </button>
                            <button className="social-btn facebook" onClick={() => handleSocialClick('facebook')} aria-label="Facebook">
                                <img src={fbIcon} alt="Facebook" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-info">
                    <div className="footer-address">

                        href="https://maps.app.goo.gl/Kn3ZpuDkE51TRHkJA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-address-link"
            >
                        <img src={UbicacionIcon} alt="Ubicación" className="footer-icon location-icon" />
                        Crisólogo Larralde 3471 - CABA
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>© Copyright {currentYear}</p>
                    <p>

                        href="https://agustincervello.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-portfolio-link"
              >
                        Made with
                        <img src={CorazonIcon} alt="Corazón" className="footer-icon heart-icon" />
                        by Agus
                    </a>
                </p>
            </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer