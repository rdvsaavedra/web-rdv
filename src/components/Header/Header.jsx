import { useState } from 'react'
import './Header.css'
import logoRecortado from '../../assets/images/LogoRecortado.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('inicio')}>
            <img src={logoRecortado} alt="Renuevo de Vida" />
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('inicio')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('about')}>Nosotros</button>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/c/iglesiarenuevodevidasaavedra/live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reuniones
              </a>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('vida-familia')}>Vida en familia</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('contacto')}>Contacto</button>
            </li>
          </ul>

          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header