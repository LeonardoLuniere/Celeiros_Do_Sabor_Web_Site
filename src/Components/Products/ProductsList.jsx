// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import useFavoriteProducts from './FavoriteProductsHook'; // Importando o hook


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { favoriteProducts, toggleFavorite } = useFavoriteProducts(); // Usando o hook
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data/products.api.json')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  const handleMoreInfo = (product) => {
    if (favoriteProducts.some((fav) => fav.id === product.id)) {
      console.log('Produto favorito:', product);
      navigate('/favorite'); // Use navigate para navegar para a página de favoritos
    } else {
      console.log('Produto não é favorito:', product);
      navigate(`/product/${product.id}`); // Navega para a página do produto
    }
  };


  return (
    <div className="product-cards">
      <h1 className='centerList'>Lista de Produtos</h1>
      <div className="card-container">
        {Array.isArray(products) && products.map((product, index) => (
          <div key={index} className="card">
            <FontAwesomeIcon
              icon={favoriteProducts.some((fav) => fav.id === product.id) ? faHeartSolid : faHeartRegular}
              onClick={() => toggleFavorite(product)}
              style={{ color: favoriteProducts.some((fav) => fav.id === product.id) ? 'red' : 'grey' }}
            />
            <div className="product-details">
              <div className="product-image-container">
                <img src={`/Image/${product.image}.jpg`} alt={product.name} />
              </div>
              <h2>{product.name !== undefined ? product.name : 'Nome Indisponível'}</h2>
              <p>Preço 250g: {product.price250g !== undefined ? `R$${product.price250g.toFixed(2)}` : ''}</p>
              <p>Preço 500g: {product.price500g !== undefined ? `R$${product.price500g.toFixed(2)}` : ''}</p>
              <p>Preço 1K: {product.price1K !== undefined ? `R$${product.price1K.toFixed(2)}` : ''}</p>
            </div>
            {/* Restante das informações ou links */}
            <Link to={`/store/${product.id}`} onClick={() => handleMoreInfo(product.id)}>
              Mais Informações
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList ;