import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
           <ul className='nav-list'>
              <li><Link to='/'>Home</Link></li>
              <li ><Link to='/login'>Login</Link></li>
              <li><Link to='/store'>Store</Link></li>
              <li><Link to='/about'>Sobre</Link></li>
              <li><Link to='/contact'>Contato</Link></li>
           </ul>
    </nav>
  );
}

export default Navigation;
