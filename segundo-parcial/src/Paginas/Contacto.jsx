import React from "react"
const estiloLogo = {
   height: '100%',
   padding :'0 50%',
   margin: '0 auto',
   width: '100px'
}
const estiloMapa = {
    border : '0',
    borderRadius : '10px'
}

const estiloBotonA = {
    width: '100px',
    height: '20px',
    backgroundColor: 'bisque',
}

const estiloConsulta = {
    width: '100px',
    height: '50px',
    backgroundColor: 'bisque',
}
const Contacto = () => {
    return (
        <article>

            <section id="ubicacion">
                <h3>Como llegar</h3>
                <iframe id="direccion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5504789124307!2d-58.39096488780118!3d-34.59023917284639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabb5bc50095%3A0xa6be1dce51dc1c5a!2sRodr%C3%ADguez%20Pe%C3%B1a%201766%2C%20C1021ABL%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716128786028!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        <table id="informacionLugar">
            <br />
            <tr>                
                <td>Telefono:</td>
                <td>4450-3265</td>
            </tr>
            <br />
            <tr>                
                <td>Correo Electronico:</td>
                <td>elrincondelaroma@gmail.com</td>
            </tr>
            <br />
            <tr>                
                <td>Direccion:</td>
                <td>Rodríguez Peña 1766</td>
            </tr>
            <br />
            <tr>                
                <td>Horario Mañana:</td>
                <td>Lunes a sabado de 9:00 a 14:00</td>
            </tr>
            <br />
            <tr>                
                <td>Horario Nocturno:</td>
                <td>Lunes a sabado de 17:00 a 22:00</td>
            </tr>
            <br />
            <tr>                
                <td>Instagram:</td>
                <td><a href="https://www.instagram.com/cafemartinezoficial/">Cafeteria El Aroma</a></td>
            </tr>
            <br />
            <tr>
                <td>
                    <form>
                        <label>Consultas:</label>
                        <textarea required style={estiloConsulta}></textarea>
                        <button type="submit" style={estiloBotonA} >Enviar</button>
                    </form>
                    <br />
                </td>
            </tr>
            <tr>
            <td><img style={estiloLogo} src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png" alt="logo de instagram" /></td>
            </tr>        
        </table>
        
    </article>)
}

export default Contacto;
