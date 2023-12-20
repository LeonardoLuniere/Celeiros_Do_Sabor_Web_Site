import React from 'react';

const ProductCard = ({ product }) => {
  // Verifica se 'product' existe e se tem todas as propriedades necessárias
  if (!product || !product.image || !product.name) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-card">
      <img src={`/Image/${product.image}.jpg`} alt={product.name} />
      <h2>{product.name}</h2>

      {product.description && <p>{product.description}</p>}

      {product.videoLinks && product.videoLinks.length > 0 && (
        <div className="video-links">
          <h3>More Information:</h3>
          <ul>
            {product.videoLinks.map((videoLink, index) => (
              <li key={index}>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                  {product.nameUrl || 'Link do vídeo'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!product.description && !product.videoLinks && (
        <p>Nenhuma informação adicional disponível</p>
      )}
    </div>
  );
};

export default ProductCard;
