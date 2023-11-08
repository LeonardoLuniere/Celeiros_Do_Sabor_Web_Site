import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const productId = parseInt(id, 30);
  console.log('ID da rota:', productId);

  const product = products.find((p) => p.id === productId);
  console.log('Produto encontrado:', product);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <h2>{product.name}</h2>
      <p>Preço 250g: R${product.price250g.toFixed(2)}</p>
      <p>Preço 500g: R${product.price500g.toFixed(2)}</p>
      <p>Preço 1K: R${product.price1K.toFixed(2)}</p>
    </div>
  );
}


export default ProductDetail;
