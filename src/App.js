import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetail from './Components/Products/ProductDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Carousel from './Components/Carrosel/Carousel';
import Cart from './Components/ShoppingCart/YourComponent';
import Carrinho from './Pages/Carrinho';
import Favorite from './Pages/Favorite';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  const products = [
    // Lista de produtos aqui
    // Cada produto deve ter um ID, nome, preço, etc.
  ];
  const [favoriteProducts] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store products={products} />} />
          <Route
          path="/favorite"
          element={<Favorite favoriteProducts={favoriteProducts} />}
        />
          {/* Passando a lista de produtos para o ProductDetail */}
          <Route 
        path="/store/:id" 
        element={<ProductDetail products={products} addToCart={addToCart} />} 
      />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Passando a lista de produtos para o Cart */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/carrinho" element={<Carrinho cartItems={cartItems} />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
