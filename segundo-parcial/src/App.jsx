//import { useState } from 'react'
import './App.css'
import CuadroTexto from './componentes/CuadroTexto'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import MainContent from './componentes/MainContent'


function App() {
  

  return (
    <>
      <Header />
      <CuadroTexto 
        titulo="Quienes somos"
        texto="Ubicada en el corazón del bullicioso centro urbano, El Rincón del Aroma es más que una simple cafetería; 
                es un oasis acogedor donde los clientes pueden disfrutar de una amplia variedad de bebidas calientes, refrigerios frescos y deliciosos postres, 
                todo ello en un ambiente relajado y amigable." 

        texto2="La cafetería está decorada con tonos cálidos y muebles confortables, creando un ambiente acogedor que invita 
                a los clientes a quedarse y disfrutar de su experiencia. La iluminación suave y la música de fondo crean una atmósfera relajante y propicia para la conversación 
                o simplemente para relajarse con un buen libro.
                "
        />

      <CuadroTexto 
        titulo="Historia"
        texto = "Hace más de una década, en el centro de la ciudad, una pequeña cafetería abrió sus puertas bajo el nombre de 
        El Rincón del Aroma. Lo que muchos no saben es que esta acogedora cafetería fue creada por la abuela Tola, 
        una mujer apasionada por el café. Desde entonces, El Rincón del Aroma se ha convertido en un punto de encuentro popular, 
        donde la gente puede disfrutar de buena compañía y deliciosas bebidas en un ambiente acogedor y familiar."
        
        /> 
        <MainContent />
        <Footer />
    </>
  )
}

export default App
