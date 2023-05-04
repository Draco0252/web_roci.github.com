import React from 'react';
import Expo from './expo.js'
import Ech from './img/ech.jpg'

function Exposiciones() {
  return (
    <div>
      <h1 className='cabezado'>Página de Exposiciones</h1>
      <p className='cabezado'>Aqui es donde e expuesto.</p>
      <Expo 
       lugar="Julio Verne"
       fecha="2-octubre-2010"
       contenido="amogos"
       imagen={Ech} />
      <Expo 
        lugar="Palacios Del Rey"
        fecha="17-diciembre-2015"
        contenido="Fue muy divertido porque fue al are libre." />
    </div>
  );
}

export default Exposiciones;
