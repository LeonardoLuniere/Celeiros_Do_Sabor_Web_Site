import React, { useState } from 'react';
import './PriceCard.css';

function PriceCard({ price250g, price500g, price1K, handleAddToCart, productName }) {
  const [quantity250g, setQuantity250g] = useState(0);
  const [quantity500g, setQuantity500g] = useState(0);
  const [quantity1K, setQuantity1K] = useState(0);

  const handleAddToCartClick = () => {
    const total =
      quantity250g * (price250g || 0) +
      quantity500g * (price500g || 0) +
      quantity1K * (price1K || 0);

    const item = {
      name: productName,
      total,
    };

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...storedCartItems, item];

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    return (
      quantity250g * (price250g || 0) +
      quantity500g * (price500g || 0) +
      quantity1K * (price1K || 0)
    );
  };

  return (
    <div className="price-card">
      <h3>Preços:</h3>
      {price250g !== undefined && (
        <p className="price-option">
          250g: R${price250g.toFixed(2)}{' '}
          <button className="quantity-btn" onClick={() => setQuantity250g(quantity250g + 1)}>+</button>
          <span className="quantity-info">{quantity250g}</span>
          <button className="quantity-btn" onClick={() => setQuantity250g(quantity250g > 0 ? quantity250g - 1 : 0)}>-</button>
        </p>
      )}

      {price500g !== undefined && (
        <p className="price-option">
          500g: R${price500g.toFixed(2)}{' '}
          <button className="quantity-btn" onClick={() => setQuantity500g(quantity500g + 1)}>+</button>
          <span className="quantity-info">{quantity500g}</span>
          <button className="quantity-btn" onClick={() => setQuantity500g(quantity500g > 0 ? quantity500g - 1 : 0)}>-</button>
        </p>
      )}

      {price1K !== undefined && (
        <p className="price-option">
          1K: R${price1K.toFixed(2)}{' '}
          <button className="quantity-btn" onClick={() => setQuantity1K(quantity1K + 1)}>+</button>
          <span className="quantity-info">{quantity1K}</span>
          <button className="quantity-btn" onClick={() => setQuantity1K(quantity1K > 0 ? quantity1K - 1 : 0)}>-</button>
        </p>
      )}

      <p className="total">Soma total = R${calculateTotal().toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default PriceCard;
