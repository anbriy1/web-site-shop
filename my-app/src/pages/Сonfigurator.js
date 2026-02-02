import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import './Configurator.css';
import bliz from "../image/bliz.png"
import puzzel from "../image/puzzel.png"
import cards_g from "../image/cards_g.png"
import mem from "../image/mem.png"

function Configurator() {
  const navigate = useNavigate();
  
  const [selectedComponents, setSelectedComponents] = useState({
    processor: null,
    motherboard: null,
    gpu: null,
    ram: null,
    case: null,
    storage: null,
    psu: null
  });

  const [selectedPeripherals, setSelectedPeripherals] = useState({
    monitor: false,
    keyboard: false,
    mouse: false,
    headphones: false,
    microphone: false,
    mousepad: false
  });

  const loadComponents = () => {
    const savedComponents = localStorage.getItem('selectedComponents');
    if (savedComponents) {
      try {
        const parsed = JSON.parse(savedComponents);
        setSelectedComponents(parsed);
      } catch (e) {
        console.error('Ошибка загрузки компонентов:', e);
      }
    }
  };

  useEffect(() => {
    loadComponents();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        loadComponents();
      }
    };

    const handleFocus = () => {
      loadComponents();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const systemComponents = [
    { id: 'processor', name: 'Процессор' },
    { id: 'motherboard', name: 'Материнская плата' },
    { id: 'gpu', name: 'Видеокарта' },
    { id: 'ram', name: 'Оперативная память' },
    { id: 'case', name: 'Корпус' },
    { id: 'storage', name: 'Хранение данных' },
    { id: 'psu', name: 'Блок питания' }
  ];

  const peripherals = [
    { id: 'monitor', name: 'Монитор' },
    { id: 'keyboard', name: 'Клавиатура' },
    { id: 'mouse', name: 'Мышь' },
    { id: 'headphones', name: 'Наушники' },
    { id: 'microphone', name: 'Микрофон' },
    { id: 'mousepad', name: 'Коврик' }
  ];

  const iconImages = [bliz, puzzel, cards_g, mem];

  const handleComponentClick = (id) => {
    navigate(`/select/${id}`);
  };

  const handleRemoveComponent = (id, event) => {
    event.stopPropagation();
    
    const updatedComponents = { ...selectedComponents };
    updatedComponents[id] = null;
    setSelectedComponents(updatedComponents);
    
    localStorage.setItem('selectedComponents', JSON.stringify(updatedComponents));
  };

  const handlePeripheralToggle = (id) => {
    setSelectedPeripherals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const selectedCount = Object.values(selectedComponents).filter(item => item !== null).length;
  const totalComponents = systemComponents.length;

  const totalPrice = Object.values(selectedComponents).reduce((sum, component) => {
    if (component && component.price) {
      return sum + component.price;
    }
    return sum;
  }, 0);

  const progressPercent = (selectedCount / totalComponents) * 100;

  const hasAnySelected = selectedCount > 0;

  return (
    <div className='full'>
      <Header />
      <main className='configurator-page'>
        <div className='configurator-container'>
          
          <div className='system-block'>
            <h2 className='block-title'>Системный блок</h2>
            <div className='components-list'>
              {systemComponents.map(component => {
                const selected = selectedComponents[component.id];
                return (
                  <div 
                    key={component.id}
                    className='component-item'
                    onClick={() => handleComponentClick(component.id)}
                  >
                    {selected ? (
                      <div className='component-selected'>
                        <img src={selected.image} alt={selected.name} className='component-image' />
                        <div className='component-info'>
                          <span className='component-name-small'>{component.name}</span>
                          <span className='component-model'>{selected.name}</span>
                          <span className='component-price'>{selected.price}₽</span>
                        </div>
                        <button 
                          className='component-remove-btn'
                          onClick={(e) => handleRemoveComponent(component.id, e)}
                        >
                          убрать
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className='component-add-btn'>+</div>
                        <span className='component-name'>{component.name}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className='summary-icons-right'>
            {iconImages.map((imgSrc, index) => (
              <div key={index} className='icon-box'>
                <img src={imgSrc} alt={`Icon ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className='info-block'>
            <div className='text-up'>
              <span className='text-uper'>Обязательных комплектующих</span>
            </div>
            <div className='Complete'>
              <span 
                className='Complete-full'
                style={{
                  width: `${progressPercent}%`,
                  background: progressPercent > 0 
                    ? 'linear-gradient(90deg, #4ade80 0%, #ffffff 100%)' 
                    : 'transparent',
                  transition: 'width 0.3s ease'
                }}
              ></span>
              <span className='Complete-text'>{selectedCount}/{totalComponents}</span>
            </div>
            <div className='all-price'>
              <span 
                className='active-price'
                style={{
                  backgroundColor: hasAnySelected ? '#22c55e' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              ></span>
              <span className='full-price'>{totalPrice.toLocaleString('ru-RU')}₽</span>
              <span className='active-select'>сборка</span>
            </div>

            <div 
              className='buy-buttonor'
              style={{
                backgroundColor: hasAnySelected ? '#F45656' : '#6b7280',
                cursor: hasAnySelected ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.3s ease'
              }}
            >
              <span className='buy-text'>Купить</span>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Configurator;