import React from 'react';
import { Link } from 'react-router-dom';
import { components } from '../Product';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../App.css';

function Components() {
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
        {components.map((component) => (
          <div key={component.id} style={{ marginBottom: '60px' }}>
            <div className='product-detail-container'>
              <div className='product-detail-left'>
                <div className='product-main-image'>
                  <img src={component.image} alt={component.name} />
                </div>
                <div className='product-thumbnails'>
                  <div className='product-thumbnail'>
                    <img src={component.image} alt={component.name} />
                  </div>
                  <div className='product-thumbnail'>
                    <img src={component.image} alt={component.name} />
                  </div>
                  <div className='product-thumbnail'>
                    <img src={component.image} alt={component.name} />
                  </div>
                </div>
              </div>
              
              <div className='product-detail-right'>
                <h2 className='product-detail-title'>{component.fname}</h2>
                
                <div className='product-rating'>
                  <span className='rating-stars'>★ {component.rating || '4.5'}</span>
                  <span className='rating-count'>{component.reviews || '12 отзывов'}</span>
                </div>
                
                <div className='product-short-specs'>
                  {Object.entries(component.specs).slice(0, 5).map(([key, value]) => (
                    <div key={key}>
                      <strong>{getSpecName(key)}:</strong> {value};
                    </div>
                  ))}
                </div>

                <div className='product-bottom-section'>
                  {component.review && (
                    <div className='popular-review-card'>
                      <h3 className='popular-review-title'>Популярный отзыв</h3>
                      
                      <div className='review-header'>
                        <div className='review-avatar'></div>
                        <div className='review-meta'>
                          <span className='review-author-name'>{component.review.author}</span>
                          <span className='review-separator'>—</span>
                          <span className='review-date'>{component.review.date}</span>
                          <span className='review-separator'>—</span>
                          <span className='review-likes'>❤️ {component.review.likes}</span>
                        </div>
                      </div>

                      <div className='review-content-block'>
                        <h4 className='review-subtitle'>Достоинства</h4>
                        <p className='review-text'>{component.review.advantages}</p>
                        <button className='review-expand-btn'>развернуть ▸</button>
                      </div>
                    </div>
                  )}

                  <div className='product-detail-price-block'>
                    <div className='product-price-row'>
                      {component.oldPrice && (
                        <span className='product-old-price'>{component.oldPrice.toLocaleString('ru-RU')} ₽</span>
                      )}
                      {component.discount && (
                        <span className='product-discount-badge'>{component.discount}</span>
                      )}
                      <span className='product-new-price'>{component.price.toLocaleString('ru-RU')} ₽</span>
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
    memory: 'Память',
    interface: 'Интерфейс',
    ports: 'Порты',
    cooling: 'Охлаждение',
    power: 'Энергопотребление',
    cores: 'Ядра',
    threads: 'Потоки',
    frequency: 'Частота',
    turbo: 'Турбо частота',
    socket: 'Сокет',
    tdp: 'TDP',
    type: 'Тип',
    heatpipes: 'Тепловые трубки',
    fan: 'Вентилятор',
    rpm: 'Обороты',
    noise: 'Уровень шума',
    compatibility: 'Совместимость'
  };
  return names[key] || key;
}

export default Components;