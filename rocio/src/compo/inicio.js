import React from 'react';
import Aps from "./img/ap.jpeg"
import Ech from "./img/nao.jpeg"


function Inicio () {
  return (
    <div>
      <section class="sec">
        <div class="text_R">
          <h2>Esta Es Mi Web</h2>
          <p>Aquí es donde podrás conocer más de mí y de  lo que más me gusta hacer.</p>
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
          <p>Ahí te muestro con detalle todos los lugares en los que he expuesto.</p>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
