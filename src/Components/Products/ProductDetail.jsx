// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import PriceCard from './PriceCard';

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/data/products.api.json`)
      .then(response => {
        const productData = response.data.products.find(p => p.id === productId);
        setProduct(productData);
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }, [productId]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-content">
        <h1>Detalhes do Produto</h1>
        <div className="card-container">
          {/* ProductCard em um card */}
          <div className="card">
            <ProductCard product={product} />
          </div>
          {/* PriceCard em outro card */}
          <div className="card">
            <PriceCard
              price250g={product.price250g}
              price500g={product.price500g}
              price1K={product.price1K}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
