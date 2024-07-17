export default function Header(){
    return(
    <>
        <header>
            <div className="headerBloque">
                <h1>El Rincón del Aroma</h1>
                <nav>
                    <ul className="main-ul">
                        <li class="liMenu"><a href="./menu.html">Menu</a></li>
                        <li class="liMenu"><a href="./contacto.html">Contacto</a></li>
                        <li class="liMenu"><a href="#ubicacion">Ubicacion</a></li>
                    </ul>
                </nav>
            </div>  
            <img className="imagenBloque" src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png" alt="" /> 
        </header>
    
    </>
    )
}