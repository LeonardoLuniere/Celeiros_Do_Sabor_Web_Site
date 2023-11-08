import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetail from './Components/Products/ProductDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';

function App() {
  // Suponha que você obtenha a lista de produtos de alguma fonte, como uma API.
  // Vou criar uma lista fictícia de produtos apenas para demonstração.
  const products = [
    // Lista de produtos aqui
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/store" exact element={<Store products={products} />} />
          <Route path="/store/:id" element={<ProductDetail products={products} />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
