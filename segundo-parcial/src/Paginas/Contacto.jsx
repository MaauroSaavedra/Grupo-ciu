import React from "react";

const estiloLogo = {
   height: '70px',
   float: 'right'
}
const estiloMapa = {
  border : '0',
  borderRadius : '10px',
  margin: '10px',
  width: '100%', 
  maxWidth: '100%'
};

const estiloBotonA = {
  width: '30%', 
  height: '50px', 
  backgroundColor: 'bisque',
  marginBottom:'10px'
};

const estiloConsulta = {
  width: '60%', 
  height: '100px', 
  backgroundColor: 'bisque',
  margin: '10px 0' 
};

const Contacto = () => {
    return (
    <article className="contenedoo">
      <section id="ubicacion">
        <h3>Como llegar</h3>
        <iframe
          id="direccion"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6564.213603594494!2d-58.630110472440705!3d-34.652005604885005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7dbb6e8e933%3A0xed7cbdaf2eb10fa9!2sThe%20Coffee%20Store!5e0!3m2!1ses!2sar!4v1721263471534!5m2!1ses!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={estiloMapa}
        ></iframe>
      </section>
      <div id="tabla">
        <table id="informacionLugar">
          <tbody>
            <tr>
              <td>Telefono:</td>
              <td>4450-3265</td>
            </tr>
            <tr>
              <td>Correo Electronico:</td>
              <td>elrincondelaroma@gmail.com</td>
            </tr>
            <tr>
              <td>Direccion:</td>
              <td>Rodríguez Peña 1766</td>
            </tr>
            <tr>
              <td>Horario Mañana:</td>
              <td>Lunes a sabado de 9:00 a 14:00</td>
            </tr>
            <tr>
              <td>Horario Nocturno:</td>
              <td>Lunes a sabado de 17:00 a 22:00</td>
            </tr>
            <tr>
              <td>Instagram:</td>
              <td><a id="cafeteria" href="https://www.instagram.com/cafemartinezoficial/">Cafeteria El Aroma</a></td>
            </tr><tr>
              <td>
                <label>Consultas:</label>
              </td>
            </tr>
            </tbody>
        </table>
        <form>
                  
                  <div className="flex-container-column">
                    <textarea required style={estiloConsulta}></textarea>
                    <button type="submit" style={estiloBotonA}>Enviar</button>
                  </div>
                </form>
            <div className="flex-container-center">
                <img
                  style={estiloLogo}
                  src="https://cdn-icons-png.flaticon.com/512/1114/1114350.png"
                  alt="logo de instagram"
                />
            </div>
          
      </div>
    </article>
  );
};

export default Contacto;
