import React, { useEffect, useState } from 'react';
import './Carrinho.css'; // Arquivo de estilo para o Carrinho

function Carrinho() {
  const [cartItems, setCartItems] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className={`cart-item ${hoverIndex === index ? 'item-hover' : ''}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <p>{item.name} - Total: {item.total}</p>
            <button className="remove-btn" onClick={() => removeItem(index)}>
              X
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Carrinho;
