// PriceCard.js
import React, { useState } from 'react';
import './PriceCard.css'; // Importe o arquivo CSS para estilização

function PriceCard({ price250g, price500g, price1K }) {
  const [quantity250g, setQuantity250g] = useState(0);
  const [quantity500g, setQuantity500g] = useState(0);
  const [quantity1K, setQuantity1K] = useState(0);

  const addToCart = () => {
    const total = quantity250g * price250g + quantity500g * price500g + quantity1K * price1K;
    // Aqui você pode enviar 'total' para o carrinho
    console.log('Total enviado ao carrinho:', total);
  };
  const handleAddToCart = () => {
    const total = quantity250g * price250g + quantity500g * price500g + quantity1K * price1K;
    addToCart('Produto', total); // Ajuste aqui para passar os dados do produto
  };
  return (
    <div className="price-card">
      <h3>Preços:</h3>
      <p className="price-option">
        250g: R${price250g.toFixed(2)} 
        <button className="quantity-btn" onClick={() => setQuantity250g(quantity250g + 1)}>+</button>
        <span className="quantity-info">{quantity250g}</span>
        <button className="quantity-btn" onClick={() => setQuantity250g(quantity250g > 0 ? quantity250g - 1 : 0)}>-</button>
      </p>
      <p className="price-option">
        500g: R${price500g.toFixed(2)} 
        <button className="quantity-btn" onClick={() => setQuantity500g(quantity500g + 1)}>+</button>
        <span className="quantity-info">{quantity500g}</span>
        <button className="quantity-btn" onClick={() => setQuantity500g(quantity500g > 0 ? quantity500g - 1 : 0)}>-</button>
      </p>
      <p className="price-option">
        1K: R${price1K.toFixed(2)} 
        <button className="quantity-btn" onClick={() => setQuantity1K(quantity1K + 1)}>+</button>
        <span className="quantity-info">{quantity1K}</span>
        <button className="quantity-btn" onClick={() => setQuantity1K(quantity1K > 0 ? quantity1K - 1 : 0)}>-</button>
      </p>
      <p className="total">Soma total = R${(quantity250g * price250g + quantity500g * price500g + quantity1K * price1K).toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
}

export default PriceCard;
