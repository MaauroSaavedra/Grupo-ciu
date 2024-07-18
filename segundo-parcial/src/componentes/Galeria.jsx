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
                setCoffees(data);
            })
    },[]);

    return (
        <div className="imagenBloque">
            <h2>Galeria</h2>
            <ul className="galeria-ul">
                {coffees.map((coffee) => (
                    <li key={coffee.id}>
                        <h3>{coffee.title}</h3>
                        <img className='cafe-img' src={coffee.image} alt={coffee.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Galeria;