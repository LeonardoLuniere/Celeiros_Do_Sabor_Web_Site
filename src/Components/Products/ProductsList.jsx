import React, { useState, useEffect } from 'react';

function ProductsList() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => {
        return response.text(); // Obter a resposta como texto
      })
      .then((text) => {
        console.log('Raw response text:', text); // Exibir o conteúdo como texto
        // Agora você pode tentar analisar o texto como JSON
        const data = JSON.parse(text);
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {productData.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
