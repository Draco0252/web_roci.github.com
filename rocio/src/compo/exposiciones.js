import React from 'react';
import Expo from './expo.js'
import Ech from './img/flores.png'

function Exposiciones() {
  return (
    <div>
      <h1 className='cabezado'>Página de Exposiciones</h1>
      <p className='cabezado'>Aqui es donde e expuesto.</p>
      <Expo 
       lugar="Julio Verne"
       fecha="2-octubre-2010"
       contenido="Julio Verne fue un escritor francés nacido en Nantes el 8 de febrero de 1828 y fallecido en Amiens el 24 de marzo de 1905. Es considerado uno de los padres de la ciencia ficción moderna y uno de los autores más leídos de la historia. Escribió numerosas novelas que se han convertido en clásicos de la literatura universal, como Veinte mil leguas de viaje submarino, Viaje al centro de la Tierra y La vuelta al mundo en 80 días, entre otras. En sus obras, Verne imaginaba avances tecnológicos y científicos que, en muchos casos, se convirtieron en realidad décadas después de su muerte. Su obra ha sido traducida a numerosos idiomas y ha sido adaptada en múltiples ocasiones al cine, la televisión y otros medios de comunicación."
       imagen={Ech} />
      <Expo 
        lugar="Palacios Del Rey"
        fecha="17-diciembre-2015"
        contenido="Los castillos pueden variar en su diseño y tamaño según la época y la cultura en la que se construyeron, pero generalmente tienen algunas partes comunes. A continuación, te proporciono una descripción de algunas de las partes más comunes que se encuentran en los castillos europeos medievales:

1. Torreón: es una estructura alta y sólida, generalmente cuadrada o circular, que se utiliza como fortificación y refugio. El torreón es una de las partes más importantes del castillo y a menudo es el lugar donde reside el señor del castillo.

2. Murallas: son muros que rodean el castillo para proporcionar protección adicional contra los ataques enemigos. Las murallas también pueden tener torres defensivas en los puntos más vulnerables.

3. Patio interior: es un espacio abierto dentro del castillo rodeado por las murallas y otras estructuras del castillo. El patio interior se utiliza para una variedad de propósitos, como la celebración de ceremonias y la formación de tropas.

4. Foso: es un canal o zanja profunda que rodea las murallas exteriores del castillo. El foso se llenaba con agua en algunos castillos para dificultar el acceso a los atacantes.

5. Sala de banquetes: es una gran sala donde se celebraban banquetes y otras reuniones importantes. A menudo está decorada con obras de arte y otros objetos valiosos.

6. Cocina: es el lugar donde se preparaban los alimentos para el castillo. A menudo se encuentra en la planta baja de la estructura del castillo.

7. Capilla: es un lugar de culto dentro del castillo donde se celebraban misas y otras ceremonias religiosas.

Estas son solo algunas de las partes comunes que se encuentran en los castillos europeos medievales. Los castillos pueden tener muchas otras partes, como celdas de prisión, almacenes de armas, cuarteles y más, dependiendo de su función y diseño específico."
      imagen={Ech} />
    </div>
  );
}

export default Exposiciones;
