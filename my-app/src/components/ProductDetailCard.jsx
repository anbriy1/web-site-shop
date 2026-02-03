import { Link } from 'react-router-dom';
import { getSpecName } from '../utils/specNames';

export default function ProductDetailCard({
  item,
  specLinks,
  rating = '4.5',
  reviews = '12 отзывов',
  onAddToCart
}) {
  const specs = item.specs || {};
  const specEntries = Object.entries(specs).slice(0, 5);

  return (
    <div className='product-detail-container'>
      <div className='product-detail-left'>
        <div className='product-main-image'>
          <img src={item.image} alt={item.name} />
        </div>
        <div className='product-thumbnails'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='product-thumbnail'>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div className='product-detail-right'>
        <h2 className='product-detail-title'>{item.fname}</h2>

        <div className='product-rating'>
          <span className='rating-stars'>★ {item.rating || rating}</span>
          <span className='rating-count'>{item.reviews || reviews}</span>
        </div>

        <div className='product-short-specs'>
          {specEntries.map(([key, value]) => (
            <div key={key}>
              <strong>{getSpecName(key)}:</strong> {value};
            </div>
          ))}
          {specLinks && (
            <Link to={`/specifications/${item.id}`} className='show-all-specs'>Все характеристики →</Link>
          )}
        </div>

        <div className='product-bottom-section'>
          {item.review && (
            <div className='popular-review-card'>
              <h3 className='popular-review-title'>Популярный отзыв</h3>
              <div className='review-header'>
                <div className='review-avatar'></div>
                <div className='review-meta'>
                  <span className='review-author-name'>{item.review.author}</span>
                  <span className='review-separator'>—</span>
                  <span className='review-date'>{item.review.date}</span>
                  <span className='review-separator'>—</span>
                  <span className='review-likes'>❤️ {item.review.likes}</span>
                </div>
              </div>
              <div className='review-content-block'>
                <h4 className='review-subtitle'>Достоинства</h4>
                <p className='review-text'>{item.review.advantages}</p>
                <button className='review-expand-btn'>развернуть ▸</button>
              </div>
            </div>
          )}

          <div className='product-detail-price-block'>
            <div className='product-price-row'>
              {item.oldPrice && (
                <span className='product-old-price'>{item.oldPrice.toLocaleString('ru-RU')} ₽</span>
              )}
              {item.discount && (
                <span className='product-discount-badge'>{item.discount}</span>
              )}
              <span className='product-new-price'>{item.price.toLocaleString('ru-RU')} ₽</span>
            </div>
            {onAddToCart && (
              <button className='buy-button' onClick={() => onAddToCart(item)}>В корзину</button>
            )}
            <div className='product-actions'>
              <button className='compare-btn'>сравнить</button>
              <button className='favorite-btn'>в избранное</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
