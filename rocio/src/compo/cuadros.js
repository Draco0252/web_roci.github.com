import React from 'react';

function Cuadros({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.price} €</p>
    </div>
  );
}

export default Cuadros;
