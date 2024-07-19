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
        <div className="flex-containter" id='galeria'>
            <h2 id='galeria-titulo'>Galeria</h2>
            <ul className="galeria-ul">
                {coffees.map((coffee) => (
                    <li className="galeria-li" key={coffee.id}>
                        <h3 className='item-title'>{coffee.title}</h3>
                        <img className='cafe-img' src={coffee.image} alt={coffee.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Galeria;