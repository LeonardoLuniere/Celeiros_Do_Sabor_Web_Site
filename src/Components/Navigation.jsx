import React, { useEffect, useState } from 'react';
import { TweenMax } from 'gsap';

const menuItems = [
  { title: 'Página Inicial', link: '/' },
  { title: 'Produtos', link: '/store' },
  { title: 'About', link: '/about' },
  { title: 'Contato', link: '/contact' },
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll('.navbar a');
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        TweenMax.to(item, 0.3, { color: '#ff6600' });
      });

      item.addEventListener('mouseleave', () => {
        TweenMax.to(item, 0.3, { color: '#fff' });
      });
    });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <a key={index} href={item.link} className={item.title}>
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
