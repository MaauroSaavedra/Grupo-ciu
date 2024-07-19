//import { useState } from 'react'
import './App.css'
import CuadroTexto from './componentes/CuadroTexto'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header'
import Video from './componentes/VideoYt'
import MainContent from './componentes/MainContent'
import Footer from './componentes/Footer'
import Menu from './Paginas/Menu'
import Contacto from './Paginas/Contacto';
import Galeria from './componentes/Galeria';
function App() {
  

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/contacto' element={<Contacto />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/galeria' element={<Galeria/>}></Route>
          </Routes>
      </Router>

      <div className="flex-container"><div className="box01">
      <CuadroTexto 
        titulo="Quienes somos"
        texto="Ubicada en el corazón del bullicioso centro urbano, El Rincón del Aroma es más que una simple cafetería; 
                es un oasis acogedor donde los clientes pueden disfrutar de una amplia variedad de bebidas calientes, refrigerios frescos y deliciosos postres, 
                todo ello en un ambiente relajado y amigable." 

        texto2="La cafetería está decorada con tonos cálidos y muebles confortables, creando un ambiente acogedor que invita 
                a los clientes a quedarse y disfrutar de su experiencia. La iluminación suave y la música de fondo crean una atmósfera relajante y propicia para la conversación 
                o simplemente para relajarse con un buen libro.
                "
      /></div>
      <div className="box02">
      <CuadroTexto 
        titulo="Historia"
        texto ="Hace más de una década, en el centro de la ciudad, una pequeña cafetería abrió sus puertas bajo el nombre de El Rincón del Aroma. Lo que muchos no saben es que esta acogedora cafetería fue creada por la abuela Tola, 
        una mujer apasionada por el café. Desde entonces, El Rincón del Aroma se ha convertido en un punto de encuentro popular, 
        donde la gente puede disfrutar de buena compañía y deliciosas bebidas en un ambiente acogedor y familiar."
        /></div>
        </div>
        <MainContent />
        <Video />
      <Footer />
    </>
  )
}

export default App