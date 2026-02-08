import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Configurator.css';
import bliz from '../image/bliz.png';
import puzzel from '../image/puzzel.png';
import cards_g from '../image/cards_g.png';
import mem from '../image/mem.png';

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
    monitor: null,
    keyboard: null,
    mouse: null,
    headphones: null,
    microphone: null,
    mousepad: null
  });

  const loadComponents = () => {
    const savedComponents = localStorage.getItem('selectedComponents');
    if (savedComponents) {
      try {
        const parsed = JSON.parse(savedComponents);
        setSelectedComponents(parsed);
      } catch (e) {
        console.error('Error loading components:', e);
      }
    }

    const savedPeripherals = localStorage.getItem('selectedPeripherals');
    if (savedPeripherals) {
      try {
        const parsed = JSON.parse(savedPeripherals);
        setSelectedPeripherals(parsed);
      } catch (e) {
        console.error('Error loading peripherals:', e);
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
    { id: 'processor', name: 'Processor' },
    { id: 'motherboard', name: 'Motherboard' },
    { id: 'gpu', name: 'Graphics Card' },
    { id: 'ram', name: 'RAM' },
    { id: 'case', name: 'Case' },
    { id: 'storage', name: 'Storage' },
    { id: 'psu', name: 'Power Supply' }
  ];

  const peripherals = [
    { id: 'monitor', name: 'Monitor' },
    { id: 'keyboard', name: 'Keyboard' },
    { id: 'mouse', name: 'Mouse' },
    { id: 'headphones', name: 'Headphones' },
    { id: 'microphone', name: 'Microphone' },
    { id: 'mousepad', name: 'Mousepad' }
  ];

  const iconImages = [bliz, puzzel, cards_g, mem];

  const handleComponentClick = (id) => {
    navigate(`/select/${id}`);
  };

  const handlePeripheralClick = (id) => {
    navigate(`/select/${id}`);
  };

  const handleRemoveComponent = (id, event) => {
    event.stopPropagation();
    
    const updatedComponents = { ...selectedComponents };
    updatedComponents[id] = null;
    setSelectedComponents(updatedComponents);
    
    localStorage.setItem('selectedComponents', JSON.stringify(updatedComponents));
  };

  const handleRemovePeripheral = (id, event) => {
    event.stopPropagation();
    
    const updatedPeripherals = { ...selectedPeripherals };
    updatedPeripherals[id] = null;
    setSelectedPeripherals(updatedPeripherals);
    
    localStorage.setItem('selectedPeripherals', JSON.stringify(updatedPeripherals));
  };

  const selectedCount = Object.values(selectedComponents).filter(item => item !== null).length;
  const totalComponents = systemComponents.length;

  const componentsPrice = Object.values(selectedComponents).reduce((sum, component) => {
    if (component && component.price) {
      return sum + component.price;
    }
    return sum;
  }, 0);

  const peripheralsPrice = Object.values(selectedPeripherals).reduce((sum, peripheral) => {
    if (peripheral && peripheral.price) {
      return sum + peripheral.price;
    }
    return sum;
  }, 0);

  const totalPrice = componentsPrice + peripheralsPrice;

  const progressPercent = (selectedCount / totalComponents) * 100;

  const hasAnySelected = selectedCount > 0 || Object.values(selectedPeripherals).some(p => p !== null);

  return (
    <div className='full'>
      <Header />
      <main className='configurator-page'>
        <div className='configurator-container'>
          
          <div className='system-block'>
            <h2 className='block-title'>System Unit</h2>
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
                          <span className='component-price'>{selected.price}INR</span>
                        </div>
                        <button 
                          className='component-remove-btn'
                          onClick={(e) => handleRemoveComponent(component.id, e)}
                        >
                          remove
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
              <span className='text-uper'>Required components</span>
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

         
            <div className='peripherals-section'>
              <h3 className='peripherals-title'>Peripherals</h3>
              <div className='peripherals-grid'>
                {peripherals.map(peripheral => {
                  const selected = selectedPeripherals[peripheral.id];
                  return (
                    <div 
                      key={peripheral.id}
                      className='peripheral-item'
                      onClick={() => handlePeripheralClick(peripheral.id)}
                    >
                      {selected ? (
                        <div className='peripheral-selected'>
                          <img src={selected.image} alt={selected.name} className='peripheral-image' />
                          <button 
                            className='peripheral-remove-btn'
                            onClick={(e) => handleRemovePeripheral(peripheral.id, e)}
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className='peripheral-add-btn'>+</div>
                          <span className='peripheral-name'>{peripheral.name}</span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='all-price'>
              <span 
                className='active-price'
                style={{
                  backgroundColor: hasAnySelected ? '#22c55e' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              ></span>
              <span className='full-price'>{totalPrice.toLocaleString('en-US')}INR</span>
              <span className='active-select'>build</span>
            </div>

            <div 
              className='buy-buttonor'
              style={{
                backgroundColor: hasAnySelected ? '#F45656' : '#6b7280',
                cursor: hasAnySelected ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.3s ease'
              }}
            >
              <span className='buy-text'>Buy</span>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Configurator;