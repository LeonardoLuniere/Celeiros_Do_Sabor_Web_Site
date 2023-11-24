import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Carousel.css';

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    axios.get('/data/products.api.json')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="content">
      <div className="slides">
        {products.map((product, index) => (
          <Link key={product.id} to={`/store/${product.id}`} className={`slide ${index === activeSlide ? 'active' : ''}`}>
            <img
              src={`${process.env.PUBLIC_URL}/Image/${product.image}.jpg`}
              alt={`Product ${index + 1}`}
              className="full-screen-image"
              style={{ display: index === activeSlide ? 'block' : 'none' }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
