export default function MainContent(){
    const estiloImagenes = {
        width: '500px',
        padding: '2%',
        display: 'inline-block'
    }
    const estiloP = {
        color : 'bisque',
        paddingBottom : '2%',
        textAlign: 'center',
        fontSize: '300%'
    } 
    
    return(
    <> 
        <div className="imagenTextoSectores">
       <a href="https://www.youtube.com/watch?v=GF3tNrOZ9ww" target="_blank">
       <img className="imagenesSectores" src="https://www.mahesofoodservice.com/blog/wp-content/uploads/2023/09/diseno-de-restaurantes-y-cafeterias.jpg" alt="Sector Interior" /></a> 
        <div className="textoSectores">
        <p style={estiloP}><u>Sector Terraza</u></p> 
            <p>Nuestra terraza es el lugar ideal para aquellos que buscan un ambiente elegante y sofisticado. Con una vista panorámica impresionante, este sector es perfecto para reuniones sociales, citas románticas o simplemente para disfrutar de un café con una vista espectacular.</p>
            
            <ul>
                <li> <u>Opciones de Asientos Variadas</u>: En la terraza, los clientes pueden encontrar una variedad de opciones de asientos, como sillas cómodas, sofás y bancos, adaptándose a diferentes preferencias y necesidades.</li>
                <br />
                <li> <u>Ambiente Sofisticado</u>: Diseñada con un toque de elegancia, la terraza es el lugar perfecto para impresionar a tus amigos o colegas.</li>
                <br />
                <li> <u>Eventos Especiales</u>: Organizamos eventos temáticos y noches de música en vivo en la terraza, añadiendo un toque especial a tu experiencia.</li>
            </ul>

            <h5>Presionando la imagen vera un video ilustrativo sobre nuestra terraza </h5>
        </div>
        </div>

       <div className="imagenTextoSectores">
        <img  className="imagenesSectores" src="https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg?resize=600%2C375&ssl=1" alt="Sector Naturaleza" />
        <div className="textoSectores">
        <p style={estiloP}><u>Sector Naturaleza</u></p>
            <p>Para aquellos que prefieren disfrutar de su café al aire libre, nuestro sector aire libre es el lugar perfecto. Rodeado de jardines y áreas verdes, este espacio ofrece un ambiente tranquilo y relajante, ideal para desconectar de la rutina diaria.</p>
        
            <ul>
                <li> <u>Contacto con la Naturaleza</u>: Disfrutar de un café en medio de la naturaleza puede ser una experiencia revitalizante, ayudando a reducir el estrés y mejorar el bienestar general.</li>
                <br />
                <li> <u>Espacio para Mascotas</u>: Nuestro sector aire libre es pet-friendly, lo que significa que puedes traer a tu mascota y disfrutar juntos de un momento agradable.</li>
                <br />
                <li> <u>Aire Fresco</u>: Respirar aire fresco mientras saboreas un delicioso café es una de las mejores maneras de empezar o terminar el día.</li>
            </ul>
        </div>
        </div>

       <div className="imagenTextoSectores">
       <img className="imagenesSectores" src="https://i.pinimg.com/736x/bd/c5/98/bdc59891766c56118179ec0c1cac1a77.jpg" alt="Sector Infantil" />
       <div className="textoSectores" >
       <p style={estiloP}><u>Sector Infantil</u></p>
            <p>Nuestro sector infantil está especialmente diseñado para que las familias con niños pequeños puedan disfrutar de un momento de relax mientras sus hijos se divierten de manera segura. Este espacio cuenta con una variedad de juegos interactivos, libros y actividades creativas que mantendrán a los más pequeños entretenidos.</p>
        
            <ul>
                <li> <u>Ambiente Seguro y Divertido</u>: Los padres pueden relajarse y disfrutar de su café sabiendo que sus hijos están en un entorno seguro y supervisado.</li>
                <br />
                <li> <u>Menú Infantil</u>: Ofrecemos un menú especial para niños, con opciones saludables y deliciosas, perfectas para los más pequeños.</li>
                <br />
                <li> <u>Actividades Educativas</u>: Nuestro sector infantil incluye juegos educativos que fomentan el aprendizaje y la creatividad en los niños.</li>
            </ul>
        </div>
        </div>
        </>
    )
}