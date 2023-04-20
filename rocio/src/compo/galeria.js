import React from 'react';
import IMG from './img/favicon.png'

function Galeria() {
  return (
    <div>
      <h1>Página de Galeria</h1>
      <p>Aqui te muestro mis cuadros.</p>
      <div class='galeria'>
        <div class='cuadros'>
         <img src={IMG} />
         <div>
           <h3>Titulo</h3>
           <p>Descripcion corta</p>
           <p>precio</p>
           <a href='#' class='boton'>Ver mas</a>
         </div>
       </div>
         <div class='cuadros'>
         <img src={IMG} />
         <div>
           <h3>Titulo</h3>
           <p>Descripcion corta</p>
           <p>precio</p>
           <a href='#' class='boton'>Ver mas</a>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
