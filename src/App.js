import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; // Importe o componente Header
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductDetail from './Components/Products/ProductDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Carousel from './Components/Carrosel/Carousel';
import Cart from './Components/ShoppingCart/Cart';

function App() {
  // Suponha que você obtenha a lista de produtos de alguma fonte, como uma API.
  // Vou criar uma lista fictícia de produtos apenas para demonstração.
  const products = [
    // Lista de produtos aqui
  ];

  return (
    <Router>
      <div>
        {/* Renderize o Header fora do Routes para que ele apareça em todas as páginas */}
        <Header />

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store products={products} />} />
          <Route path="/store/:id" element={<ProductDetail products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
