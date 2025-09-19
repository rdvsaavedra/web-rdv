import { useState } from 'react'
import './Header.css'
import logoRecortado from '../../assets/images/LogoRecortado.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Cerrar menú móvil después de hacer clic
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logoRecortado} alt="Renuevo de Vida" />
          </div>

          {/* Menu Items */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('inicio')}
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('ubicacion')}
              >
                Reuniones
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                Nosotros
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('contacto')}
              >
                Contacto
              </button>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
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