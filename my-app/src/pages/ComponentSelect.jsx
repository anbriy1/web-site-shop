import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ComponentSelect.css';
import { componentsData, componentTitles } from '../Componentsdata';

function ComponentSelect() {
  const { componentType } = useParams();
  const navigate = useNavigate();
  
  const [selectedItem, setSelectedItem] = useState(null);

  const components = componentsData[componentType] || [];
  const title = componentTitles[componentType] || 'компонента';

  const isPeripheral = ['monitor', 'keyboard', 'mouse', 'headphones', 'microphone', 'mousepad'].includes(componentType);

  const handleSelect = (component) => {
    if (isPeripheral) {
      const savedPeripherals = JSON.parse(localStorage.getItem('selectedPeripherals') || '{}');
      savedPeripherals[componentType] = component;
      localStorage.setItem('selectedPeripherals', JSON.stringify(savedPeripherals));
    } else {
      const savedComponents = JSON.parse(localStorage.getItem('selectedComponents') || '{}');
      savedComponents[componentType] = component;
      localStorage.setItem('selectedComponents', JSON.stringify(savedComponents));
    }
    
    navigate('/configurator');
  };

  const handleBack = () => {
    navigate('/configurator');
  };

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className='full'>
      <main className='component-select-page'>
        <div className='select-container'>
          <div className='select-header'>
            <h1 className='select-title'>Выбор {title}</h1>
            <button className='close-button' onClick={handleBack}>✕</button>
          </div>

          <div className='components-list-view'>
            {components.map(component => (
              <div 
                key={component.id}
                className='product-item-select'
              >
                <div className='product-left'>
                  <img src={component.image} alt={component.name} className='product-image-select' />
                  
                  <div className='product-info-select'>
                    <div className='product-title-select'>
                      {component.name}
                      <div className='product-specs'>{component.specs}</div>
                      <div className='product-description'>{component.description}</div>
                    </div>
                    <button className='compare-btn'>сравнить</button>
                    <div className='product-rating-select'>
                      {renderStars(component.rating)}
                      <span className='reviews-count'>{component.reviews}</span>
                    </div>
                  </div>
                </div>

                <div className='product-right'>
                  <div className='product-price-select'>{component.price.toLocaleString('ru-RU')}₽</div>
                  <button className='select-button' onClick={() => handleSelect(component)}>
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ComponentSelect;