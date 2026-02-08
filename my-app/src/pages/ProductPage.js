import { useParams, Link } from 'react-router-dom';
import { products } from '../Product';
import Header from '../components/Header';
import Footer from '../components/footer';
import { getSpecName } from '../utils/specNames';
import { useCartCount } from '../hooks/useCartCount';
import '../App.css';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [, updateCartCount] = useCartCount();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  };

  if (!product) {
    return (
      <div className='full'>
        <Header />
        <main className='product-not-found'>
          <h1>Product not found</h1>
          <Link to="/catalog" className='back-link'>⇦ Back</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='full'>
      <Header />
      <main className='product-detail-page'>
        <Link to="/catalog" className='back-link'>⇦ Back</Link>

        <div className='product-detail-container'>
          <div className='product-detail-left'>
            <div className='product-main-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='product-thumbnails'>
              <div className='product-thumbnail'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='product-thumbnail'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='product-thumbnail'>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          </div>

          <div className='product-detail-right'>
            <h1 className='product-detail-title'>{product.fname}</h1>

            <div className='product-rating'>
              <span className='rating-stars'>★ {product.rating || '3.0'}</span>
              <span className='rating-count'>{product.reviews || '2 reviews'}</span>
            </div>

            <div className='product-short-specs'>
              {Object.entries(product.specs).slice(0, 5).map(([key, value]) => (
                <div key={key}>
                  <strong>{getSpecName(key)}:</strong> {value};
                </div>
              ))}
              <Link to={`/specifications/${id}`} className='show-all-specs'>All specifications →</Link>
            </div>

            <div className='product-bottom-section'>
              {product.review && (
                <div className='popular-review-card'>
                  <h3 className='popular-review-title'>Popular review</h3>
                  <div className='review-header'>
                    <div className='review-avatar'></div>
                    <div className='review-meta'>
                      <span className='review-author-name'>{product.review.author}</span>
                      <span className='review-separator'>—</span>
                      <span className='review-date'>{product.review.date}</span>
                      <span className='review-separator'>—</span>
                      <span className='review-likes'>❤️ {product.review.likes}</span>
                    </div>
                  </div>
                  <div className='review-content-block'>
                    <h4 className='review-subtitle'>Pros</h4>
                    <p className='review-text'>{product.review.advantages}</p>
                    <button className='review-expand-btn'>expand ▸</button>
                  </div>
                </div>
              )}

              <div className='product-detail-price-block'>
                <div className='product-price-row'>
                  {product.oldPrice && (
                    <span className='product-old-price'>{product.oldPrice.toLocaleString('en-US')} INR</span>
                  )}
                  {product.discount && (
                    <span className='product-discount-badge'>{product.discount}</span>
                  )}
                  <span className='product-new-price'>{product.price.toLocaleString('en-US')} INR</span>
                </div>
                <button className='buy-button' onClick={addToCart}>Add to cart</button>
                <div className='product-actions'>
                  <button className='compare-btn'>compare</button>
                  <button className='favorite-btn'>add to favorites</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
