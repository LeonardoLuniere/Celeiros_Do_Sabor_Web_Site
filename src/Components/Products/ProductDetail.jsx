import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import PriceCard from './PriceCard';

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingProductIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].total += item.total;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  useEffect(() => {
    axios.get(`/data/products.api.json`)
      .then(response => {
        const productData = response.data.products.find(p => p.id === productId);
        console.log("Dados do produto:", productData);
        setProduct(productData);
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, [productId]);
  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log('Items do localStorage:', storedCartItems);
  
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  return (
    <div className="product-detail-page">
      <div className="product-content">
        <h1>Detalhes do Produto</h1>
        <div className="card-container">
          <div className="card">
            <ProductCard product={product} />
          </div>
          <div className="card">
            {/* Verifica se o produto existe antes de renderizar o PriceCard */}
            {product && (
              <PriceCard
                price250g={product.price250g}
                price500g={product.price500g}
                price1K={product.price1K}
                handleAddToCart={handleAddToCart}
                productName={product.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
