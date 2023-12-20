import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Header extends Component {
  state = {
    query: '',
    cartItems: [],
    showLogin: false
  };

  componentDidMount() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.setState({ cartItems: storedCartItems });
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pesquisando por:', this.state.query);
  };

  render() {
    const { cartItems, showLogin } = this.state;
    const totalItems = cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);

    return (
      <div className="header">
        <div className="header-top">
          <h3>R. Leão XIII, 220 - Bom RetiroJoinville - SC, 89223-260</h3>
          <div className="social-icons">
            <a href="https://api.whatsapp.com/send?phone=%2B5547991723891&data=ARBu7x2RTHc8M6yJCOrhtTUcAc7Dq986yMlMVZr_DKplwX5cLNaNJhvY0WIZJLNx967qaRpMHzaB2D89zJIGNksYRLhj0ZtufZq5kkTnd5UYpB7UAf1MxzYlv7RAIz9K7NRT6AqTKuKGukdTVdai7H700A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR31BEtZB0ce-zzRwkoOmMQC6OsGFFphtYSvHkTyjO_Krf23VCP2P8UdxoQ" 
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.facebook.com/celeirodosaborjoinville" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/celeirodosaborjoinville/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className='main-mid-menu'>
          <div className='main-bar'>
            <div className='Logo'>
              <img src='/Image/celeirosDoSabor2-PhotoRoom.png-PhotoRoom.png' alt='Celeiros Do Sabor'/>
            </div>
            <div className="search-bar">
              <form onSubmit={this.handleSubmit}>
                <span className="input">
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={this.state.query}
                    onChange={this.handleInputChange}
                  />
                  <span></span>
                </span>
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
            <div className='button-icon-main-bar'>
              <div className="user-actions">
              <Link to="/login"> {/* Link para a página de login */}
              <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/favorite"> {/* Link para a página de carrinho */}
                <FontAwesomeIcon icon={faHeart} />
                </Link>
                <div className="cart-icon" >
                  <Link to="/carrinho"> {/* Link para a página de carrinho */}
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {totalItems > 0 && <span className="cart-quantity">{totalItems}</span>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showLogin && (
          <div className="login-overlay" onMouseLeave={this.toggleLogin}>
            {/* Seu formulário de login */}
          </div>
        )}
        <Navigation />
      </div>
    );
  }
}
