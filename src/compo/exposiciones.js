import React from 'react';
import Expo from './expo.js'
import Ech from './img/expo-2023.jpeg'
import Inmo from './img/inmo-encuentro.jpeg'
import Fla from './img/fla.jpeg'
import Zoco from './img/zoco.jpeg'
import Zoco2 from './img/zoco2.jpeg'

function Exposiciones() {
  return (
    <div>
      <h1 className='cabezado'>Página de Exposiciones</h1>
      <p className='cabezado'>Aqui es donde e expuesto.</p>
      <Expo
      lugar="Zoco Viapol"
      fecha="14-Mayo-2023"
      contenido="Estube en Venta directa al público de distintos lienzos, canvas y papel."
      imagen={Zoco2}/>
      <Expo
      lugar="Zoco en Parque de María Luisa"
      fecha="14-Marzo-2023"
      contenido="Venta directa al público de distintos lienzos, canvas y papel, Todos enmarcados"
      imagen={Zoco}/>
      <Expo 
       lugar="Galería Sala Aires De Córdoba"
       fecha="15-Febrero-2023"
       contenido="Particípe en la exposición From me, to you, celebrada entre el 17 de febrero hasta el 14 de marzo, obras confeccionadas mediante acrílico sobre lienzo. Feria de Córdoba (32x62 cm), Ramo de Rosas Para Tí (43x53 cm) y Come With Me (67x46 cm)."
       imagen={Ech} />
      <Expo 
        lugar="Galería Sala Encuentro en Sevilla"
        fecha="Septiembre/Octubre-2022"
        contenido="Exposición individual de 15 cuadros con técnica de acrílico sobre lienzos, canvas y cristal. temática sobre primavera, flamencas, paisajes y abstractos."
     imagen={Inmo} />
      <Expo 
      lugar="Restaurante Trashumante"
      fecha="Mayo/Junio-2022"
      contenido="Colección de serie de lienzos con temática PRIMAVERA EN ANDALUCÍA. Serie de 20 lienzos que reflejan las fiestas y el colorido de la primavera en Andalucía."
      imagen={Fla} />
    </div>
  );
}

export default Exposiciones;
