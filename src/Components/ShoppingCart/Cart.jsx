// Cart.js
import React from 'react';
import YourComponent from '../Components/ShoppingCart/YourComponent'; // Verifique se o nome do componente está correto

function Cart({ cartItems, handleAddToCart }) {
  return (
    <div className="cart">
      {cartItems.map((item, index) => (
        <YourComponent
          key={index}
          productName={item.name}
          total={item.total}
          handleAddToCart={handleAddToCart} // Se necessário, passe a função de manipulação aqui
        />
      ))}
    </div>
  );
}

export default Cart;
