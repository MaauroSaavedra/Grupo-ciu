import React, { useState, useEffect } from 'react';

const api = 'https://api.sampleapis.com/coffee/hot';

function Galeria() {
    const [coffees, setCoffees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                const filtrarCafes = data.filter((coffee) =>
                    coffee.title && coffee.title !== "test 1"
                );
                setCoffees(filtrarCafes);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCoffees = coffees.filter((coffee) =>
        coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-container-column">
            <h2 id='tituloGaleria'>Galeria</h2>
            <input
                type="text"
                placeholder="Buscar café"
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-input'
                
            />
            <ul className="galeria-ul">
                {filteredCoffees.map((coffee) => (
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