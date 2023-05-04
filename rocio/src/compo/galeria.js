import React, { useState } from 'react';
import Cuadros from './cuadro.json';

function Galeria() {
  const [selectedCuadro, setSelectedCuadro] = useState(null);

  function handleVerMasClick(cuadro) {
    setSelectedCuadro(cuadro);
  }

  function handleCloseClick() {
    setSelectedCuadro(null);
  }

  return (
    <div className='cabezado'>
      <h1>Página de Galeria</h1>
      <p>Aqui te muestro mis cuadros.</p>
      <div className='galeria'>
        {Cuadros.map((cuadro) => (
          <div key={cuadro.id} className='cuadros'>
            <img className='b' src={cuadro.image} alt={cuadro.name} />
            <h3>{cuadro.name}</h3>
            <button className='boton' onClick={() => handleVerMasClick(cuadro)}>Ver mas</button>
          </div>
        ))}
      </div>
      {selectedCuadro && (
        <div className='detalle activo'>
          <div className='ver-mas'>
            <div className='ver-mas-imagen'>
              <img className='b' src={selectedCuadro.image} alt={selectedCuadro.name} />
            </div>
            <div className='ver-mas-texto'>
              <h3>{selectedCuadro.category}</h3>
              <hr />
              <h3>{selectedCuadro.name}</h3>
              <p>{selectedCuadro.description}</p>
              <button onClick={handleCloseClick}>Volver</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;

