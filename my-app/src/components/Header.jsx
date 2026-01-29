import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../images';
import '../App.css'; 

function Header() {
  const location = useLocation();

  return (
    <header className='head'>
      <img src={images.logo} alt='logo' className='logo-1' />
      
      <nav className='nav-links'>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'nav-btn active' : 'nav-btn'}
        >
          главная
        </Link>
        <Link 
          to="/components" 
          className={location.pathname === '/components' ? 'nav-btn active' : 'nav-btn'}
        >
          комплектующие
        </Link>
        <Link 
          to="/builds" 
          className={location.pathname === '/builds' ? 'nav-btn active' : 'nav-btn'}
        >
          готовые сборки
        </Link>
        <Link 
          to="/configurator" 
          className={location.pathname === '/configurator' ? 'nav-btn active' : 'nav-btn'}
        >
          конфигуратор
        </Link>
      </nav>
    </header>
  );
}

export default Header;