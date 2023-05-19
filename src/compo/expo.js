import React from "react";

function Expo ({lugar, fecha, contenido, imagen}) {
  return(
    <div className="fondo">
      <section className="expo">
        <h1 className="lugar">{lugar}</h1>
        <h2 className="fecha">{fecha}</h2>
        <p>{contenido}</p>
        <img className="b" src={imagen} />
      </section>
    </div>
  );
}

export default Expo;
