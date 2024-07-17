import React from "react"
import { Link } from "react-router-dom";

export default function Header(){
    return(
    <>
        <header>
            <div className="headerBloque">
                <h1>El Rincón del Aroma</h1>
                <nav>
                    <ul className="main-ul">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contacto" >Contacto</Link></li>                    
                    </ul>
                </nav>
            </div>  
            <img className="imagenBloque" src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png" alt="" /> 
        </header>
    </>
    )
}