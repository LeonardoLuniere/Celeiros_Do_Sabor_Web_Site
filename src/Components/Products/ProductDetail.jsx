import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard'; // Importe o ProductCard
import Header from '../Header';

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Faça a chamada à sua API para obter os detalhes do produto com o ID específico
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
      <Header />
      <div className="product-content">
        <h1>Detalhes do Produto</h1>
        <br/>
        <ProductCard product={product} /> {/* Renderize o ProductCard com os detalhes do produto */}
      </div>
    </div>
  );
}

export default ProductDetail;
