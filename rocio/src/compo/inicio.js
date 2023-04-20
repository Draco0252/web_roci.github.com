import React from 'react';
import IMG from "./img/ech.jpg"


function Inicio () {
  return (
    <div>
      <section class="sec">
        <div class="text_R">
          <h2>Título del texto</h2>
          <p>Este es un párrafo de texto.</p>
        </div>
        <div class="image_R">
          <img src={IMG} alt="Un cuadro apstrapto" />
        </div>
      </section>
    </div>
  );
}

export default Inicio;
