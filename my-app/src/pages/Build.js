import Header from '../components/Header';
import Footer from '../components/footer';
import ProductDetailCard from '../components/ProductDetailCard';
import { builds } from '../Product';
import { useCartCount } from '../hooks/useCartCount';
import '../App.css';

function Builds() {
  const [, updateCartCount] = useCartCount();

  const addToCart = (build) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(build);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };

  return (
    <div className='Catalog'>
      <Header />
      <main className='product-detail-page'>
        {builds.map((build) => (
          <div key={build.id} style={{ marginBottom: '60px' }}>
            <ProductDetailCard
              item={build}
              specLinks
              rating="4.8"
              reviews="25 reviews"
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Builds;
