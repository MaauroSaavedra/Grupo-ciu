import React from "react"
const estiloLogo = {
   height: '50px',
   padding :'0 50%',
   margin: 'auto'
}
const estiloMapa = {
    border : '0',
    borderRadius : '10px',
    margin: '10px'
}

const estiloBotonA = {
    width: '30%',
    height: '15%',
    backgroundColor: 'bisque',
}

const estiloConsulta = {
    width: '30%',
    height: '15%',
    backgroundColor: 'bisque',
    margin: '10px'
}
const Contacto = () => {
    return (
        <article className="flex-container">

            <section id="ubicacion">
                <h3>Como llegar</h3>
                <iframe id="direccion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.213603594494!2d-58.630110472440705!3d-34.652005604885005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7dbb6e8e933%3A0xed7cbdaf2eb10fa9!2sThe%20Coffee%20Store!5e0!3m2!1ses!2sar!4v1721263471534!5m2!1ses!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        <div className="flex-container-center" id="tabla">
        <table id="informacionLugar">
            <br />
            <tr>                
                <td className="letra">Telefono:</td>
                <td className="letra">4450-3265</td>
            </tr>
            <br />
            <tr>                
                <td className="letra">Correo Electronico:</td>
                <td className="letra">elrincondelaroma@gmail.com</td>
            </tr>
            <br />
            <tr>                
                <td className="letra">Direccion:</td>
                <td className="letra">Rodríguez Peña 1766</td>
            </tr>
            <br />
            <tr>                
                <td className="letra">Horario Mañana:</td>
                <td className="letra">Lunes a sabado de 9:00 a 14:00</td>
            </tr>
            <br />
            <tr>                
                <td className="letra">Horario Nocturno:</td>
                <td className="letra">Lunes a sabado de 17:00 a 22:00</td>
            </tr>
            <br />
            <tr>                
                <td className="letra">Instagram:</td>
                <td><a id="cafeteria" href="https://www.instagram.com/cafemartinezoficial/">Cafeteria El Aroma</a></td>
            </tr>
            <br />
            <tr>
                <td>
                    <form className="letra">
                        <label >Consultas:</label>
                        <div className="flex-container-column">
                            <textarea required style={estiloConsulta}></textarea>
                        <button type="submit" style={estiloBotonA} >Enviar</button>
                        </div>
                    </form>
                    <br />
                </td>
            </tr>
            <tr>
            <td className="flex-container">
                <img style={estiloLogo} src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png" alt="logo de instagram" /></td>
            </tr>
            </table>
        </div>
        
    </article>)
}

export default Contacto;
