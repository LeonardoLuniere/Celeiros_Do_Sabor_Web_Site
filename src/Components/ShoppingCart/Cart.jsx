// Cart.jsx
import React from 'react';

function Cart({ products }) {
  // Verificando se 'products' é undefined ou vazio
  if (!products || products.length === 0) {
    return <div>Carrinho vazio</div>;
  }

  return (
    <div>
      <h2>Carrinho</h2>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.name}</h3>
          <p>Preço: R${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
