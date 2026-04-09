import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Reuniones from './components/Reuniones/Reuniones'
import About from './components/About/About'
import Values from './components/Values/Values'
import Footer from './components/Footer/Footer'
import Equipo from './components/Equipo/Equipo'
// import VidaFamilia from './components/VidaFamilia/VidaFamilia'
import Contacto from './components/Contacto/Contacto'
import NuestraFamilia from './components/NuestraFamilia/NuestraFamilia'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Equipo />
        <Values />
        <Reuniones />
        {/* <VidaFamilia /> */}
        <Ubicacion />
        <NuestraFamilia />
      </main>
      <Footer />
    </div>
  )
}

export default App