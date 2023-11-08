import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get('/data/products.api.json')
      .then(response => {
        this.setState({ products: response.data.products });
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1 className='centerList'>Lista de Produtos</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço 250g</th>
              <th>Preço 500g</th>
              <th>Preço 1K</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.map((product, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/store/${product.id}`}>{product.name}</Link>
                </td>
                <td className="price-cell">{product.price250g !== undefined ? `R$${product.price250g.toFixed(2)}` : ''}</td>
                <td className="price-cell">{product.price500g !== undefined ? `R$${product.price500g.toFixed(2)}` : ''}</td>
                <td className="price-cell">{product.price1K !== undefined ? `R$${product.price1K.toFixed(2)}` : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
