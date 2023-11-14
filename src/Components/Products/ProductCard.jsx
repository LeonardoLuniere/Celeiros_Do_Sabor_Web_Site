import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`/Image/${product.image}.jpg`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <div className="video-links">
        <h3>More Information:</h3>
        <ul>
          {Array.isArray(product.videoLinks) && product.videoLinks.length > 0 ? (
            product.videoLinks.map((videoLink, index) => (
              <li key={index}>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                  {product.nameUrl}
                </a>
              </li>
            ))
          ) : (
            <li>Nenhum link de vídeo disponível</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
