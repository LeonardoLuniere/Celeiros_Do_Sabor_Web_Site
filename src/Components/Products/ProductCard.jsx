// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <a href={product.youtubeLink} target="_blank" rel="noopener noreferrer">
        Ver vídeo no YouTube
      </a>
    </div>
  );
}

export default ProductCard;
