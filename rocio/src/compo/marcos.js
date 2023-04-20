import React from 'react';
import Cuadros from './Cuadros.js';

const ma = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10 },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 20 },
  { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 30 }
];

function Marcos() {
  return (
    <div>
      {ma.map(product => (
        <Cuadros key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Marcos;
