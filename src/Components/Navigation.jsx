import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

const menuItems = [
  { title: 'Página Inicial', link: '/' },
  { title: 'Login', link: '/login' },
  { title: 'Produtos', link: '/store' },
  { title: 'About', link: '/about' },
  { title: 'Contato', link: '/contact' },
];

const Navigation = () => {
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
  return (
    <nav className="navbar">
    {menuItems.map((item, index) => (
      <a key={index} href={item.link} className={item.title}>
        {item.title}
      </a>
    ))}
  </nav>
  );
};

export default Navigation;
