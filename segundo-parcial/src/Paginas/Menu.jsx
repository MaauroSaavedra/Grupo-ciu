import React, {useState} from "react"

const Menu = () => {

    const menuCafeteria = [
      {id: 1, nombre: 'Espreso', precio: 1500.0, descripcion: 'Café concentrado y fuerte preparado forzando agua caliente a través de granos de café finamente molidos.' },
      { id: 2, nombre: 'Americano', precio: 1250.0, descripcion: 'Café expreso diluido con agua caliente, lo que le da un sabor más suave' },
      { id: 3, nombre: 'Capuchino', precio: 2300.0, descripcion: 'Café expreso con partes iguales de espuma de leche y leche vaporizada' },
      { id: 4, nombre: 'Mocca', precio: 2200.0, descripcion: 'Café expreso mezclado con chocolate caliente y leche, cubierto con espuma de leche' },
      { id: 5, nombre: 'Latte Vainilla', precio: 3000.0, descripcion: 'Café expreso con mucha leche vaporizada y un toque de jarabe de vainilla' },
      { id: 6, nombre: 'Caramel Macchiato', precio: 2600.0, descripcion: 'Café expreso con leche vaporizada, un toque de vainilla y cubierto con un chorrito de caramelo' },
      { id: 7, nombre: 'Iced Coffee', precio: 1950.0, descripcion: 'Café servido frío, generalmente con hielo y a veces con leche o crema' },
      { id: 8, nombre: 'Iced Mocha', precio: 1950.0, descripcion: 'Café servido frío, generalmente con hielo y a veces con leche o crema' },
      { id: 9, nombre: 'Limonada Casera', precio: 1000.0, descripcion: 'Bebida refrescante hecha con jugo de limón fresco, agua y azúcar' },
      { id: 10, nombre: 'Té Helado de Durazno', precio: 2400.0, descripcion: 'Té helado con sabor a durazno, a menudo endulzado' },
      { id: 11, nombre: 'Croissants', precio: 2800.0, descripcion: 'Pasteles franceses en forma de media luna, hechos con masa de hojaldre' },
      { id: 12, nombre: 'Muffins', precio: 1600.0, descripcion: 'Pequeños pasteles esponjosos que pueden ser de varios sabores, como arándanos o chocolate' },
      { id: 13, nombre: 'Brownies', precio: 2800.0, descripcion: 'Postres densos y húmedos de chocolate, a menudo con nueces' },
      { id: 14, nombre: 'Chocotorta', precio: 4100.0, descripcion: 'Postre argentino hecho con capas de galletas de chocolate y mezcla de queso crema y dulce de leche' },
      { id: 15, nombre: 'Sánguche de Jamon y Queso', precio: 2000.0, descripcion: 'Sándwich clásico con jamón y queso entre dos rebanadas de pan' },
      { id: 16, nombre: 'Panini de Jamón y Queso', precio: 3000.0, descripcion: 'Versión prensada y caliente del sándwich de jamón y queso, típicamente hecho con pan ciabatta o focaccia' },
    ];
    
      const [producto, setProducto] = useState({1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0});
      const [total, setTotal] = useState(0);
    
      const actualizar = (id, value) => {
        setProducto({ ...producto, [id]: parseInt(value) });
      };
    
      const precioTotal = () => {
        const nuevoPrecio = menuCafeteria.reduce((total, item) => {
          return total + item.precio * (producto[item.id] || 0);}, 0).toFixed(2);
        setTotal(nuevoPrecio);
      };

      let puntosSuspensivos = (valor) => {
        return '.'.repeat(valor);
      };

    return (
        <article id="menu">
            <div id="menuCompleto">
            <div>
          <h1 id="nombreCafeteria"><u>Menú de la Cafetería</u></h1>
          <div className="menuu">
            {menuCafeteria.map(item => (
              <div key={item.id} className="menuu-item">
                <span></span>
                <h2 id="nombreMenu">{item.id}. {item.nombre}{puntosSuspensivos(50 - item.nombre.length)}Valor: ${item.precio}</h2>
                <span id="descripcionMenu">{item.descripcion}</span>
                <label id="cantidad">
                  Cantidad: 
                  <input
                    id="cuadradoCantidad"
                    type="number"
                    min="0"
                    value={producto[item.id]}
                    onChange={(valor) => actualizar(item.id, valor.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
          <button  id="botonPrecio" onClick={precioTotal}>
            Calcular Precio Total
          </button>
          <h5 id="precioTotal">Total: ${total}</h5>
        </div>
        </div>
    </article>

    )
}

export default Menu;
