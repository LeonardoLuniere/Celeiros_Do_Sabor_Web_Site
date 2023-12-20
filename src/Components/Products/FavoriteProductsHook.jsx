// FavoriteProductsHook.js
import { useState, useEffect } from 'react';

const useFavoriteProducts = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const storedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
    setFavoriteProducts(storedFavoriteProducts);
  }, []);

  const toggleFavorite = (product) => {
    const existingIndex = favoriteProducts.findIndex((favProduct) => favProduct.id === product.id);

    if (existingIndex !== -1) {
      const updatedFavorites = [...favoriteProducts];
      updatedFavorites.splice(existingIndex, 1);
      setFavoriteProducts(updatedFavorites);
      localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoriteProducts, product];
      setFavoriteProducts(updatedFavorites);
      localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
    }
  };

  const clearFavoriteProducts = () => {
    setFavoriteProducts([]);
    localStorage.removeItem('favoriteProducts');
  };

  const removeFavoriteProduct = (productId) => {
    const updatedFavorites = favoriteProducts.filter((product) => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
  };

  return { favoriteProducts, toggleFavorite, clearFavoriteProducts, removeFavoriteProduct };
};

export default useFavoriteProducts;
