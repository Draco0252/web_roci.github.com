import React from 'react';
import IMG from './img/favicon.png'
import Cuadros from './cuadro.json'

function Galeria() {
  return (
    <div className='cabezado'>
      <h1>Página de Galeria</h1>
      <p>Aqui te muestro mis cuadros.</p>
      <div class='galeria'>
        {Cuadros.map((producto) => (
          <div key={producto.id} className="cuadros">
            <img className='b' src={producto.image} alt={producto.name} />
            <h3>{producto.name}</h3>
            <h4>{producto.category}</h4>
            <a href='#' class='boton'>Ver mas</a>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Galeria;
