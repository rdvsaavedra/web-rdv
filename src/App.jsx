import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Reuniones from './components/Reuniones/Reuniones'
import About from './components/About/About'
import Values from './components/Values/Values'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ubicacion />
      <Reuniones />
      <About />
      <Values />
      <Footer />
    </div>
  )
}

export default App