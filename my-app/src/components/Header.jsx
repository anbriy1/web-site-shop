import { Link, useLocation } from 'react-router-dom';
import images from '../images';
import '../App.css'; 

function Header() {
  const location = useLocation();
  

  const isActive = (path) => {
   
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className='head'>
      <img src={images.logo} alt='logo' className='logo-1' />
      
      <nav className='nav-links'>
        <Link 
          to="/catalog" 
          className={isActive('/catalog') || isActive('/product') ? 'nav-btn active' : 'nav-btn'}
        >
          catalog
        </Link>
        <Link 
          to="/components" 
          className={isActive('/components') ? 'nav-btn active' : 'nav-btn'}
        >
          components
        </Link>
        <Link 
          to="/builds" 
          className={isActive('/builds') ? 'nav-btn active' : 'nav-btn'}
        >
          ready builds
        </Link>
        <Link 
          to="/configurator" 
          className={isActive('/configurator') ? 'nav-btn active' : 'nav-btn'}
        >
          configurator
        </Link>
      </nav>
    </header>
  );
}

export default Header;