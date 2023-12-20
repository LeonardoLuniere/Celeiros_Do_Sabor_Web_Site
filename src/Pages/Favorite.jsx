// FavoritePage.js
import React from 'react';
import useFavoriteProducts from '../Components/Products/FavoriteProductsHook';

const FavoritePage = () => {
  const { favoriteProducts, clearFavoriteProducts, removeFavoriteProduct } = useFavoriteProducts();

  const handleRemoveProduct = (productId) => {
    removeFavoriteProduct(productId);
  };

  const handleClearAll = () => {
    clearFavoriteProducts();
  };

  return (
    <div>
      <h1>Produtos Favoritos</h1>
      <button onClick={handleClearAll}>Deletar Todos</button>
      <div className="product-cards">
        {favoriteProducts.map((product) => (
          <div key={product.id} className="card">
            <button onClick={() => handleRemoveProduct(product.id)}>X</button>
            <img src={`/Image/${product.image}.jpg`} alt={product.name} />
            <h2>{product.name !== undefined ? product.name : 'Nome Indisponível'}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
