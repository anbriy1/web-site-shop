import React from 'react';
import { Link } from 'react-router-dom';
import { builds } from '../Product';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../App.css';

function Builds() {
  return (
    <div className='Catalog'>
      <Header />
      <main className='product-detail-page'>
        <h1>
        </h1>
        <h1>
        </h1>
        <h1>
        </h1>
        {builds.map((build) => (
          <div key={build.id} style={{ marginBottom: '60px' }}>
            <div className='product-detail-container'>
              <div className='product-detail-left'>
                <div className='product-main-image'>
                  <img src={build.image} alt={build.name} />
                </div>
                <div className='product-thumbnails'>
                  <div className='product-thumbnail'>
                    <img src={build.image} alt={build.name} />
                  </div>
                  <div className='product-thumbnail'>
                    <img src={build.image} alt={build.name} />
                  </div>
                  <div className='product-thumbnail'>
                    <img src={build.image} alt={build.name} />
                  </div>
                </div>
              </div>
              
              <div className='product-detail-right'>
                <h2 className='product-detail-title'>{build.fname}</h2>
                
                <div className='product-rating'>
                  <span className='rating-stars'>★ {build.rating || '4.8'}</span>
                  <span className='rating-count'>{build.reviews || '25 отзывов'}</span>
                </div>
                
                <div className='product-short-specs'>
                  {Object.entries(build.specs).slice(0, 5).map(([key, value]) => (
                    <div key={key}>
                      <strong>{getSpecName(key)}:</strong> {value};
                    </div>
                  ))}
                </div>

                <div className='product-bottom-section'>
                  {build.review && (
                    <div className='popular-review-card'>
                      <h3 className='popular-review-title'>Популярный отзыв</h3>
                      
                      <div className='review-header'>
                        <div className='review-avatar'></div>
                        <div className='review-meta'>
                          <span className='review-author-name'>{build.review.author}</span>
                          <span className='review-separator'>—</span>
                          <span className='review-date'>{build.review.date}</span>
                          <span className='review-separator'>—</span>
                          <span className='review-likes'>❤️ {build.review.likes}</span>
                        </div>
                      </div>

                      <div className='review-content-block'>
                        <h4 className='review-subtitle'>Достоинства</h4>
                        <p className='review-text'>{build.review.advantages}</p>
                        <button className='review-expand-btn'>развернуть ▸</button>
                      </div>
                    </div>
                  )}

                  <div className='product-detail-price-block'>
                    <div className='product-price-row'>
                      {build.oldPrice && (
                        <span className='product-old-price'>{build.oldPrice.toLocaleString('ru-RU')} ₽</span>
                      )}
                      {build.discount && (
                        <span className='product-discount-badge'>{build.discount}</span>
                      )}
                      <span className='product-new-price'>{build.price.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    
                    <button className='buy-button'>В корзину</button>
                    
                    <div className='product-actions'>
                      <button className='compare-btn'>сравнить</button>
                      <button className='favorite-btn'>в избранное</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

function getSpecName(key) {
  const names = {
    cpu: 'Процессор',
    gpu: 'Видеокарта',
    ram: 'Оперативная память',
    storage: 'Накопитель',
    psu: 'Блок питания',
    cooling: 'Охлаждение',
    cover: 'Корпус'
  };
  return names[key] || key;
}

export default Builds;