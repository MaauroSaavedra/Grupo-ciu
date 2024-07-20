import React from "react"
import { Link } from "react-router-dom";

export default function Header(){
    return(
    <>
        <header>
            <div className="contenedo">
                <div>
                <h1 className="tit">El Rincón del Aroma</h1>
                <nav>
                    <ul className="main-ul">
                        <li className="etiquetas"><Link to="/inicio">Inicio</Link></li>
                        <li className="etiquetas"><Link to="/menu">Menu</Link></li>
                        <li className="etiquetas"><Link to="/contacto" >Contacto</Link></li> 
                        <li className="etiquetas"><Link to="/galeria" >Galeria</Link></li>                     
                    </ul>
                </nav>
                </div>
                <Link to="/inicio">
                    <img className="imagenBloque" src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png" alt="" />
                    </Link> 
            </div>  
        </header>
    </>
    )
}