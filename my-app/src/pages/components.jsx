import Header from '../components/Header';
import Footer from '../components/footer';
import ProductDetailCard from '../components/ProductDetailCard';
import { components } from '../Product';
import { useCartCount } from '../hooks/useCartCount';
import '../App.css';

function Components() {
  const [, updateCartCount] = useCartCount();

  const addToCart = (component) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(component);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };

  return (
    <div className='Catalog'>
      <Header />
      <main className='product-detail-page'>
        {components.map((component) => (
          <div key={component.id} style={{ marginBottom: '60px' }}>
            <ProductDetailCard
              item={component}
              specLinks
              rating="4.5"
              reviews="12 reviews"
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Components;
