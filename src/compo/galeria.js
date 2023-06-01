import React, { useState } from 'react';
import Cuadros from './cuadro.json';

function Galeria() {
  const [selectedCuadro, setSelectedCuadro] = useState(null);
  const [filtroColeccion, setFiltroColeccion] = useState(null);

  function handleVerMasClick(cuadro) {
    setSelectedCuadro(cuadro);
  }

  function handleCloseClick() {
    setSelectedCuadro(null);
  }

  // Función para filtrar los cuadros por colección
  function handleFiltrarClick(coleccion) {
    setFiltroColeccion(coleccion);
  }

  // Obtener la lista de colecciones únicas de los cuadros
  const coleccionesUnicas = [...new Set(Cuadros.map((cuadro) => cuadro.coleccion))];

  // Filtrar los cuadros según la colección seleccionada
  const cuadrosFiltrados = filtroColeccion ? Cuadros.filter((cuadro) => cuadro.coleccion === filtroColeccion) : Cuadros;

  return (
    <div className='cabezado'>
      <h1>Página de Galeria</h1>
      <p>Aqui te muestro mis cuadros.</p>
      {/* Botones para filtrar por colección */}
      <div className='etiquetas'>
        <h2 className='colecion'>Colecciones</h2>
        {coleccionesUnicas.map((coleccion) => (
          <button className='boton' key={coleccion} onClick={() => handleFiltrarClick(coleccion)}>
            {coleccion}
          </button>
        ))}
        <button className='boton' onClick={() => setFiltroColeccion(null)}>Mostrar todos</button>
      </div>
      <div className='galeria'>
        {cuadrosFiltrados.map((cuadro) => (
          <div key={cuadro.id} className='cuadros'>
            <img className='b' src={cuadro.image} alt={cuadro.name} />
            <h3>{cuadro.coleccion}</h3>
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
              <div>
                <h3>{selectedCuadro.coleccion}</h3>
                <hr />
                <p>{selectedCuadro.description}</p>
              </div>
              <div>
                <button onClick={handleCloseClick}>Volver</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;

