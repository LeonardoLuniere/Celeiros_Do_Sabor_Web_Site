import React, { Component } from 'react';
import axios from 'axios';

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
        <h1>Lista de Produtos</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço 250g</th>
              <th>Preço 500g</th>
              <th>Preço 1K</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>R${product.price250g}</td>
                <td>R${product.price500g}</td>
                <td>R${product.price1K}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
