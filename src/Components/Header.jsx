import React, { Component } from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <h3>Rua Prefeito Baltazar Buschle, 312, Joinville, Santa Catarina, 89228-000</h3>
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
        <Navigation />
      </div>
    )
  }
}
