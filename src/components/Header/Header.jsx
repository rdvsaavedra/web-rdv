import { useState, useEffect } from 'react'
import './Header.css'
import logoCompleto from '../../assets/images/IglesiaLogoCompleto.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const sections = ['inicio', 'about', 'vida-familia', 'contacto']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('inicio')}>
            <img src={logoCompleto} alt="Renuevo de Vida" />
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <button className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={() => scrollToSection('inicio')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>Nosotros</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/c/iglesiarenuevodevidasaavedra/live" target="_blank" rel="noopener noreferrer">Reuniones</a>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeSection === 'vida-familia' ? 'active' : ''}`} onClick={() => scrollToSection('vida-familia')}>Vida en familia</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`} onClick={() => scrollToSection('contacto')}>Contacto</button>
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