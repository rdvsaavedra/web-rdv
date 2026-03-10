import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Reuniones from './components/Reuniones/Reuniones'
import About from './components/About/About'
import Values from './components/Values/Values'
import Footer from './components/Footer/Footer'
import Equipo from './components/Equipo/Equipo'
import VidaFamilia from './components/VidaFamilia/VidaFamilia'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Equipo />
      <Values />
      <Reuniones />
      <VidaFamilia />
      <Ubicacion />
      <Footer />
    </div>
  )
}

export default App