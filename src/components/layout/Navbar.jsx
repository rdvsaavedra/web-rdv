import { useState, useEffect } from 'react'
import logoRecortado from '../../assets/images/LogoRecortado.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
    }

    const navLinks = [
        { label: 'Inicio', id: 'inicio' },
        { label: 'Reuniones', id: 'reuniones-section' },
        { label: 'Nosotros', id: 'about' },
        { label: 'Contacto', id: 'contacto' },
    ]

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src={logoRecortado} alt="Renuevo de Vida" />
                    </div>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {navLinks.map(({ label, id }) => (
                            <li key={id} className="nav-item">
                                <button className="nav-link" onClick={() => scrollToSection(id)}>
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

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

export default Navbar