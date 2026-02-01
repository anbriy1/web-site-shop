import '../App.css';
import { Link } from 'react-router-dom';
import { products } from '../Product';
import images from '../images';
import Header from '../components/Header';
import Footer from '../components/footer';

function Catalog() {
  const saleProducts = products.filter(p => p.category === 'sale');
  const hotProducts = products.filter(p => p.category === 'hot');
  const stockProducts = products.filter(p => p.category === 'stock');

  return (
    <div className='full'>
      <Header />
      <main>
        <div className='first-slide'>
          <h1 className='sale'>SALE ➔</h1>
        </div>
        
        <div className='image-rowing'> 
          {saleProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h3 className='product-name'>{product.name}</h3>
              <div className='price-info'>
                {product.oldPrice && <span className='old-price'>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>}
                <span className='new-price'>{product.price.toLocaleString('ru-RU')}₽</span>
                {product.discount && <span className='discount'>{product.discount}</span>}
              </div>
            </Link>
          ))}
        </div>

        <div className='first-slide'>
          <h1 className='sale'>HOT ➔</h1>
        </div>
        
        <div className='image-rowing'> 
          {hotProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h3 className='product-name'>{product.name}</h3>
              <div className='price-info'>
                <span className='new-price'>{product.price.toLocaleString('ru-RU')}₽</span>
              </div>
            </Link>
          ))}
        </div>

        <div className='first-slide'>
          <h1 className='sale'>STOCK ➔</h1>
        </div>
        
        <div className='image-rowing'> 
          {stockProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h3 className='product-name'>{product.name}</h3>
              <div className='price-info'>
                <span className='new-price'>{product.price.toLocaleString('ru-RU')}₽</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <div className='footer-up-text'>
        <h1 className='text-top-footer'>BRAND</h1>
      </div>
      <div className="brands-container">
        <div className='Brand-row'>
          <img className='intel' src={images.intel} alt="Intel" />
          <img className='nvidia' src={images.nvidia} alt="Nvidia" />
          <img className='logitech' src={images.logitech} alt="Logitech" />
        </div>

        <div className='Brand-row2'>
          <img className='msi' src={images.msi} alt="MSI" />
          <img className='hyperx' src={images.hyperx} alt="HyperX" />
          <img className='benq' src={images.benq} alt="BenQ" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;