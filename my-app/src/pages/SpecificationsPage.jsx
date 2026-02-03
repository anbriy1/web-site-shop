import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, components, builds } from '../Product';
import { detailedSpecs } from './Detailedspecs.js';
import Header from '../components/Header';
import Footer from '../components/footer';
import { getSpecNameDetail } from '../utils/specNames';
import './SpecificationsPage.css';

function SpecificationsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  let product = products.find(p => p.id === id);
  if (!product) product = components.find(p => p.id === id);
  if (!product) product = builds.find(p => p.id === id);

  if (!product) {
    return (
      <div className='full'>
        <Header />
        <main className='product-not-found'>
          <h1>Продукт не найден</h1>
          <Link to="/catalog" className='back-linkp'>⇦ Назад</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const specs = detailedSpecs[id] || product.specs;

  const specCategories = {
    'Заводские данные': ['warranty', 'manufacturer', 'country'],
    'Программное обеспечение': ['oc'],
    'Процессор': ['cpu', 'buttons', 'threads', 'frequency', 'anticost', 'socket_cpu', 'cache', 'cores', 'turbo', 'socket', 'tdp', 'lithography', 'memory_support', 'pci_express', 'max_temp', 'integrated_gpu', 'architecture', 'l2_cache', 'l3_cache', 'max_memory', 'memory_channels'],
    'Материнская плата': ['cover', 'chipset', 'ram', 'formfactor_mb'],
    'Оперативная память': ['memory', 'formfactor', 'ram_installed', 'ram_total', 'ram_frequency', 'cas', 'voltage', 'rgb', 'capacity', 'timings', 'profile', 'height', 'heat_spreader'],
    'Видеокарта': ['gpu', 'type', 'gpu_memory', 'interface', 'memory_type', 'ports', 'power', 'clock_base', 'clock_boost', 'length', 'slots', 'interface_p', 'maks_p', 'memory_bandwidth', 'cuda_cores', 'ray_tracing_cores', 'tensor_cores', 'max_resolution', 'directx', 'opengl'],
    'Накопитель': ['storage', 'storage_type', 'storage_interface', 'storage_speed', 'capacity', 'rpm', 'cache', 'noise'],
    'Блок питания': ['psu', 'certificate', 'pfc', 'cables', 'protection', 'power', 'efficiency', 'fan_speed', 'formfactor', 'depth'],
    'Охлаждение': ['cooling', 'cooling_type', 'heatpipes', 'fan', 'rpm', 'noise', 'compatibility', 'tdp', 'height', 'width', 'depth', 'weight', 'rgb', 'material', 'bearing', 'fan_connector', 'airflow'],
    'Корпус': ['case', 'case_rgb', 'case_fans'],
    'Периферия': ['sensor', 'buttons', 'connection', 'battery', 'weight', 'interface_p', 'polling', 'switches', 'battery_type', 'driver', 'frequency', 'microphone', 'cable', 'surround', 'impedance', 'sensitivity', 'mic_frequency', 'backlight', 'anticost', 'keys', 'wrist_rest', 'surface', 'size', 'base', 'cleaning', 'compatibility', 'thickness'],
    'Монитор': ['diagonal', 'resolution', 'panel', 'refresh', 'response', 'ports', 'brightness', 'contrast', 'color', 'hdr', 'vesa']
  };

  return (
    <div className='full'>
      <Header />
      <main className='specifications-page'>
        <div className='specs-header'>
          <button onClick={() => navigate(-1)} className='back-linkp'>⇦ назад</button>
          <div className='specs-product-info'>
            <img src={product.image} alt={product.name} className='specs-product-image' />
            <div className='specs-buy-section'>
             <span className='specs-price'>{product.price.toLocaleString('ru-RU')} ₽</span>
             <button className='specs-buy-button'>купить</button>
           </div>
          </div>
        </div>

        <h1 className='specs-main-title'>Характеристики {product.fname}</h1>

        <div className='specs-content'>
          {Object.entries(specCategories).map(([categoryName, keys]) => {
            const categorySpecs = keys
              .filter(key => specs[key])
              .map(key => ({ key, value: specs[key] }));

            if (categorySpecs.length === 0) return null;

            return (
              <div key={categoryName} className='spec-category'>
                <h2 className='spec-category-title'>{categoryName}</h2>
                <div className='spec-list'>
                  {categorySpecs.map(({ key, value }) => (
                    <div key={key} className='spec-row'>
                      <span className='spec-label'>{getSpecNameDetail(key)}</span>
                      <span className='spec-line'></span>
                      <span className='spec-value'>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SpecificationsPage;