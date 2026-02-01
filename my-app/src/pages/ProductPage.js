import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../Product';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../App.css';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className='full'>
        <Header />
        <main className='product-not-found'>
          <h1>Продукт не найден</h1>
          <Link to="/catalog" className='back-link'>⇦ Назад</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className='full'>
      <Header />
      <main className='product-detail-page'>
        <Link to="/catalog" className='back-link'>⇦ назад</Link>
        
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
              <span className='rating-count'>{product.reviews || '2 отзыва'}</span>
            </div>
            
            <div className='product-short-specs'>
              {Object.entries(product.specs).slice(0, 5).map(([key, value]) => (
                <div key={key}>
                  <strong>{getSpecName(key)}:</strong> {value};
                </div>
              ))}
              <a href="#specs" className='show-all-specs'>Все характеристики →</a>
            </div>

            <div className='product-bottom-section'>
              {product.review && (
                <div className='popular-review-card'>
                  <h3 className='popular-review-title'>Популярный отзыв</h3>
                  
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
                    <h4 className='review-subtitle'>Достоинства</h4>
                    <p className='review-text'>{product.review.advantages}</p>
                   
                    <button className='review-expand-btn'>развернуть ▸</button>
                  </div>
                </div>
              )}

              <div className='product-detail-price-block'>
                <div className='product-price-row'>
                  {product.oldPrice && (
                    <span className='product-old-price'>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                  )}
                  {product.discount && (
                    <span className='product-discount-badge'>{product.discount}</span>
                  )}
                  <span className='product-new-price'>{product.price.toLocaleString('ru-RU')} ₽</span>
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
        
      </main>
      <Footer />
    </div>
  );
}

function getSpecName(key) {
  const names = {
    oc:'Операционная система',
    cover: 'Корпус',
    cpu: 'Процессор',
    gpu: 'Видеокарта',
    ram: 'Оперативная память',
    storage: 'Накопитель',
    psu: 'Блок питания',
    cooling: 'Охлаждение',
    memory: 'Память',
    interface: 'Интерфейс',
    ports: 'Порты',
    power: 'Энергопотребление',
    sensor: 'Сенсор',
    buttons: 'Кнопки',
    connection: 'Подключение',
    battery: 'Батарея',
    weight: 'Вес',
    driver: 'Драйвер',
    frequency: 'Частотный диапазон',
    microphone: 'Микрофон',
    cable: 'Кабель',
    capacity: 'Емкость',
    type: 'Тип',
    cas: 'CAS Latency',
    voltage: 'Напряжение',
    rgb: 'RGB подсветка',
    switches: 'Переключатели',
    backlight: 'Подсветка',
    anticost: 'Анти-ост',
    diagonal: 'Диагональ',
    resolution: 'Разрешение',
    panel: 'Матрица',
    refresh: 'Частота обновления',
    response: 'Время отклика',
    surface: 'Поверхность',
    size: 'Размер',
    base: 'Основание',
    cleaning: 'Чистка',
    compatibility: 'Совместимость',
    rpm: 'Скорость вращения',
    cache: 'Кэш',
    formfactor: 'Форм-фактор',
    warranty: 'Гарантия',
    certificate: 'Сертификат',
    pfc: 'PFC',
    cables: 'Кабели',
    protection: 'Защита'
  };
  return names[key] || key;
}

export default ProductPage;