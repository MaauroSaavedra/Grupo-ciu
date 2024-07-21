import React, { useState, useEffect} from 'react';

const api = 'https://api.sampleapis.com/coffee/hot'

function Galeria(){

    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const filtrarCafes = data.filter((coffee) => 
                    coffee.title && coffee.title !== "test 1"
                );
                setCoffees(filtrarCafes);
            })
    },[]);

    return (
        <div className="imagenBloque">
            <h2 id='tituloGaleria'>Galeria</h2>
            <ul className="galeria-ul">
                {coffees.map((coffee) => (
                    <li id='listaGaleria' key={coffee.id}>
                        <h3 id='tituloCofee'>{coffee.title}</h3>
                        <img className='cafe-img' src={coffee.image} alt={coffee.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Galeria;

