import '../App.css';
import { useNavigate } from 'react-router-dom';
import { products } from '../Product';
import Header from '../components/Header';
import Footer from '../components/footer';
import CartIcon from '../components/CartIcon';
import BrandsSection from '../components/BrandsSection';
import ProductCard from '../components/ProductCard';
import { useCartCount } from '../hooks/useCartCount';

function Catalog() {
  const [cartCount, updateCartCount] = useCartCount();
  const navigate = useNavigate();

  const saleProducts = products.filter(p => p.category === 'sale');
  const hotProducts = products.filter(p => p.category === 'hot');
  const stockProducts = products.filter(p => p.category === 'stock');

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Товар добавлен в корзину!');
  };

  const handleSaleClick = (product, e) => {
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      addToCart(product);
    }
  };

  return (
    <div className='full'>
      <Header />
      <main>
        <div className='first-slide'>
          <h1 className='sale'>SALE ➔</h1>
        </div>
        <div className='image-rowing'>
          {saleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={(e) => handleSaleClick(product, e)}
              asLink={true}
            />
          ))}
        </div>

        <CartIcon cartCount={cartCount} />

        <div className='first-slide'>
          <h1 className='sale'>HOT ➔</h1>
        </div>
        <div className='image-rowing'>
          {hotProducts.map(product => (
            <div key={product.id} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <ProductCard
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
                asLink={false}
              />
            </div>
          ))}
        </div>

        <div className='first-slide'>
          <h1 className='sale'>STOCK ➔</h1>
        </div>
        <div className='image-rowing'>
          {stockProducts.map(product => (
            <div key={product.id} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <ProductCard
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
                asLink={false}
              />
            </div>
          ))}
        </div>
      </main>

      <BrandsSection />
      <Footer />
    </div>
  );
}

export default Catalog;
