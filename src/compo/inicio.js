import React from 'react';
import Aps from "./img/aps.jpg"
import Ech from "./img/mon.jpg"


function Inicio () {
  return (
    <div>
      <section class="sec">
        <div class="text_R">
          <h2>Título del texto</h2>
          <p>Este es un párrafo de texto.</p>
        </div>
        <div class="image_R">
          <img class='ima' src={Ech} alt="Un cuadro apstrapto" />
        </div>
      </section>
      <section className='sec'>
        <div className='image_L'>
          <img className='ima' src={Aps} alt='un cuadro de montañas' />
        </div>
        <div className='text_L'>
          <h2>Exposiciones</h2>
          <p>Ahi te muestro con detalle rodas mis exposiciones</p>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
