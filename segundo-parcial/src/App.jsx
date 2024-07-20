import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header'
import MainContent from './componentes/MainContent'
import Footer from './componentes/Footer'
import Menu from './Paginas/Menu'
import Contacto from './Paginas/Contacto';
import Galeria from './Paginas/Galeria';

function App() {
  

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/inicio' element={<MainContent />}> </Route>
            <Route path='/contacto' element={<Contacto />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/galeria' element={<Galeria/>}></Route>
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App