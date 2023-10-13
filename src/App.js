import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/store' exact element={<Store />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
