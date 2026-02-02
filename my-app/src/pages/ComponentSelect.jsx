import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ComponentSelect.css';

const componentsData = {
  processor: [
    { 
      id: 1, 
      name: 'Intel Core i9-13900K', 
      price: 45000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/71dc70270fae33c02f72276ab4995410/66e4986f12ca85239f674009ee5bacf714e92c3510d948945d966f14dabf1000.jpg',
      specs: '24 ядра, 5.8 ГГц',
      description: 'Intel Core i9-13900K 24 ядра (8P + 16E), до 5.8 ГГц, L3 36 МБ, сокет LGA1700',
      rating: 5,
      reviews: 58
    },
    { 
      id: 2, 
      name: 'AMD Ryzen 9 7950X', 
      price: 48000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/076feade9cec44b49a619dad24308be3/8650f24d3ba4df75e3f378043372178fa62fa5db5915fc7ac2d836192c9dffcb.jpg',
      specs: '16 ядер, 5.7 ГГц',
      description: 'AMD Ryzen 9 7950X 16 ядер, до 5.7 ГГц, L3 64 МБ, сокет AM5',
      rating: 5,
      reviews: 58
    },
    { 
      id: 3, 
      name: 'Intel Core i7-13700K', 
      price: 35000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/e04c57f7734afd87b7b9ff0e48a78700/d4c5ac285e704d29542c41df4dd58bfdbea2e26bf597cce45714c6285b2985f4.jpg',
      specs: '16 ядер, 5.4 ГГц',
      description: 'Intel Core i7-13700K 16 ядер (8P + 8E), до 5.4 ГГц, L3 30 МБ, сокет LGA1700',
      rating: 5,
      reviews: 58
    },
    { 
      id: 4, 
      name: 'AMD Ryzen 7 7800X3D', 
      price: 38000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/bbd34c68dedfd816f74f2e1c8982ee28/a456db21c4184e22b75ccb0c07c70c520aacaa20efed5a50da6e0c6c3d17c2d7.jpg.webp',
      specs: '8 ядер, 5.0 ГГц, 3D V-Cache',
      description: 'AMD Ryzen 7 7800X3D 8 ядер, до 5.0 ГГц, 3D V-Cache 96 МБ, сокет AM5',
      rating: 5,
      reviews: 58
    }
  ],
  motherboard: [
    { 
      id: 1, 
      name: 'ASUS ROG STRIX Z790-E', 
      price: 32000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/c6e68c950f1b8be932dd0da3b13aa264/375177002f20f941889f429251d5141528f52adb676721a558a4181cd98adf2d.jpg',
      specs: 'LGA1700, DDR5',
      description: 'Материнская плата ASUS ROG STRIX Z790-E GAMING WIFI [LGA1700, DDR5, PCIe 5.0]',
      rating: 5,
      reviews: 42
    },
    { 
      id: 2, 
      name: 'MSI MPG X670E Carbon', 
      price: 35000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/edd7c542283ef7ceb070c335441b762f/de582a642804d9593c779dec0755f31b92365069831db221d956b521abd2088f.jpg',
      specs: 'AM5, DDR5',
      description: 'Материнская плата MSI MPG X670E CARBON WIFI [AM5, DDR5, PCIe 5.0]',
      rating: 5,
      reviews: 38
    },
    { 
      id: 3, 
      name: 'Gigabyte Z790 AORUS', 
      price: 28000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/320/250/57bd5bfc8bad53e913b3d2d848f1bec3/9c93d2115e55871721eb11d5eb8b569bfc48721aaf45b7d9abd86310ddcded61.png',
      specs: 'LGA1700, DDR5',
      description: 'Материнская плата Gigabyte Z790 AORUS ELITE AX [LGA1700, DDR5]',
      rating: 4,
      reviews: 35
    },
    { 
      id: 4,
      name: 'ASRock X670E Steel Legend',
      price: 30000,
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/a52f8b72eb8fe59e5c2adc9298dc8088/59cc7658de5e8a7801d7aca3cb695de38515a14343f9b023fc3477d9c2724e43.png.webp',
      specs: 'AM5, DDR5',
      description: 'Материнская плата ASRock X670E Steel Legend [AM5, DDR5, PCIe 5.0]',
      rating: 4,
      reviews: 29
    }
  ],
  gpu: [
    { id: 1, 
      name: 'NVIDIA RTX 4090', 
      price: 145000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/c67823093ce868efdac2bad03e62d92b/d8e7ca72dc7e53dffa0a5eaee437589270792d1ebd0737818a14b74820c33acf.png', 
      specs: '24GB GDDR6X', 
      description: 'Видеокарта NVIDIA GeForce RTX 4090 [24GB GDDR6X, 384bit, HDMI, 3xDP]', 
      rating: 5, 
      reviews: 127 },
    { id: 2, 
      name: 'NVIDIA RTX 4080', 
      price: 95000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/90f2e5a097d067f83b316abcd4183bdf/b47de49baebd923f0c25f0c77b005ccf80113704f94c3f1975acbf1f599cd7fc.jpg.webp', 
      specs: '16GB GDDR6X', 
      description: 'Видеокарта NVIDIA GeForce RTX 4080 [16GB GDDR6X, 256bit, HDMI, 3xDP]', 
      rating: 5, 
      reviews: 89 },
    { id: 3, 
      name: 'AMD RX 7900 XTX', 
      price: 85000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/dfca42d5e03ac186a5ae8a153a76dcce/7d7c8dcff2a0dcfffe8bcfb47b60c123456b6e4e7e1b756cc3c5dd2cc54eff20.png.webp', 
      specs: '24GB GDDR6', 
      description: 'Видеокарта AMD Radeon RX 7900 XTX [24GB GDDR6, 384bit, HDMI, 2xDP]', 
      rating: 4, 
      reviews: 76 },
    { id: 4, name: 'NVIDIA RTX 4070 Ti', price: 68000, image: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/c29921925140fb9f5fa9a40964c2258b/a3f15aa5386aa9993f3db2e1e1246a0f37492aa4beb96fdb4ea81cc4d8724bba.jpg.webp', specs: '12GB GDDR6X', description: 'Видеокарта NVIDIA GeForce RTX 4070 Ti [12GB GDDR6X, 192bit, HDMI, 3xDP]', rating: 5, reviews: 94 }
  ],
  ram: [
    { id: 1, 
      name: 'G.Skill Trident Z5 32GB', 
      price: 12000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/4bbb1512a05f9bf440dd25c39379a6bb/d2012f480b477d44fc20f3aa62dbe57822463dc62efc5a89a81e4b352f5e9ba2.png.webp', 
      specs: 'DDR5-6000, 2x16GB', 
      description: 'Оперативная память G.Skill Trident Z5 RGB [DDR5, 2x16GB, 6000MHz, CL36]', 
      rating: 5, 
      reviews: 45 },
    { id: 2, name: 'Corsair Dominator 64GB', 
      price: 22000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/f98648bddedc8710588fb82775963794/977a99cef0ff4f91483b036789f8ec6a73072c13222d1d60b6071c7d878043ae.jpg.webp', 
      specs: 'DDR5-6400, 2x32GB', 
      description: 'Оперативная память Corsair Dominator Platinum RGB [DDR5, 2x32GB, 6400MHz, CL32]', 
      rating: 5, 
      reviews: 38 },
    { id: 3, 
      name: 'Kingston Fury 32GB', 
      price: 10000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/77c70577b3b98802e69b804cd9a2d42b/4e836d64618e0ce56357a6a571fa4d0f644a5600fe297db94f2fc97216c46992.jpg.webp', 
      specs: 'DDR5-5600, 2x16GB', 
      description: 'Оперативная память Kingston FURY Beast [DDR5, 2x16GB, 5600MHz, CL36]', 
      rating: 4, 
      reviews: 52 },
    { id: 4, 
      name: 'ADATA XPG Lancer 32GB', 
      price: 9500, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/115bda766e0307129505c99a2efd0378/2d8335bfdf8e485a78e57c9075d0a602ccb1facb5d81eaefec42a4b727502330.jpg.webp', 
      specs: 'DDR5-5600, 2x16GB', 
      description: 'Оперативная память ADATA XPG Lancer [DDR5, 2x16GB, 5600MHz]', 
      rating: 4, 
      reviews: 33 }
  ],
  case: [
    { id: 1, 
      name: 'Lian Li O11 Dynamic', 
      price: 15000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/ab1778b4c8a3afaff708db0834c1f8ab/7f1ac5cf9001b8b8fcf120d719779c6e5f06f17dd530549e72f1bb240367c01e.jpg.webp', 
      specs: 'Mid Tower, Стекло', 
      description: 'Корпус Lian Li O11 Dynamic [Mid Tower, Tempered Glass, ATX, Черный]', 
      rating: 5, 
      reviews: 63 },
    { id: 2, 
      name: 'Fractal Design Torrent', 
      price: 18000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/1a7c47f30a7484df4663ade8740c5b8f/5d1389e0c203ac82f8c970bbbcb99fa899a5f6a1879a5c7a3b5627f442043878.jpg.webp', 
      specs: 'Full Tower, RGB', 
      description: 'Корпус Fractal Design Torrent [Full Tower, Tempered Glass, E-ATX, RGB]', 
      rating: 5, 
      reviews: 41 },
    { id: 3, 
      name: 'NZXT H7 Flow', 
      price: 12000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/4b962b8d0b8a433f5eeb6f3840e61e91/47062c5191e47b5ad9be4bfdf0c2db3b326583e88973df54007e7bd56f712adb.jpg.webp', 
      specs: 'Mid Tower', 
      description: 'Корпус NZXT H7 Flow [Mid Tower, Tempered Glass, ATX, Белый]', 
      rating: 4, 
      reviews: 55 },
    { id: 4, 
      name: 'DeepCool CH560 Digital', 
      price: 11000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9588669005038fc5a36b86407049be40/8c5e76b358b5b8f47db3e7236d4b04190be71620c66c1abc1b29caeb310fbc61.jpg.webp', 
      specs: 'Mid Tower, RGB', 
      description: 'Корпус DeepCool CH560 Digital [Mid Tower, Tempered Glass, ATX, RGB]', 
      rating: 5, 
      reviews: 47 }
  ],
  storage: [
    { id: 1, 
      name: 'Samsung 990 PRO 2TB', 
      price: 16000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/71a4fe5a2a343aa223fb5188d43c0df3/035f9c986a324bd5b9fb8dc652ba6aab02d738caf8715c7d82bc5d3421c7028f.jpg.webp', 
      specs: 'NVMe, 7450 MB/s', 
      description: 'SSD накопитель Samsung 990 PRO [2TB, M.2 NVMe, 7450/6900 MB/s]', 
      rating: 5, 
      reviews: 78 },
    { id: 2, 
      name: 'WD Black SN850X 2TB', 
      price: 14000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/eaff0182d889a8cfaba9cbcef64f9f25/229504b30c23b6b9d96a39e777f4215a3d94d9e3bdfca881aba4535f3385014a.jpg.webp', 
      specs: 'NVMe, 7300 MB/s', 
      description: 'SSD накопитель WD Black SN850X [2TB, M.2 NVMe, 7300/6600 MB/s]', 
      rating: 5, 
      reviews: 65 },
    { id: 3, 
      name: 'Crucial T700 1TB', 
      price: 12000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/300/300/077b7eb3b086b196275e9fad23bdcb0f/2df94ad4ef0b53a7b23a025866b9343662d1bd1564833591646f194317f3762c.jpg.webp', 
      specs: 'NVMe Gen5, 12400 MB/s', 
      description: 'SSD накопитель Crucial T700 [1TB, M.2 NVMe Gen5, 12400/11800 MB/s]', 
      rating: 5, 
      reviews: 43 },
    { id: 4, 
      name: 'Kingston KC3000 2TB', 
      price: 13500, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/15dca7046cdb1e6eb9b6844a6bc27310/1aff906b6a1ff1b8ce05763da72cbf2b71c1697f907ff72c789c0ce7f7063782.jpg.webp', 
      specs: 'NVMe, 7000 MB/s',
       description: 'SSD накопитель Kingston KC3000 [2TB, M.2 NVMe, 7000/7000 MB/s]', 
       rating: 5, 
       reviews: 59 }
  ],
  psu: [
    { id: 1, 
      name: 'Corsair RM1000x', 
      price: 18000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/300/300/41611396ae10fe553e12c1546b4443e0/49fde49845f382b9e6fb38b4b7838057ae2c4a0b7cf5753e2b79aceef169174f.jpg.webp', 
      specs: '1000W, 80+ Gold', 
      description: 'Блок питания Corsair RM1000x [1000W, 80+ Gold, Модульный, ATX 3.0]', 
      rating: 5, 
      reviews: 56 },
    { id: 2, 
      name: 'Seasonic Prime TX-1000', 
      price: 25000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/82ff7eb36add494aefc0976e9abc8cba/e8224f98dc85195072c50222c9ddf0e8d21f21fc48bf9b7c4325032298008178.jpg.webp', 
      specs: '1000W, 80+ Titanium', 
      description: 'Блок питания Seasonic Prime TX-1000 [1000W, 80+ Titanium, Полностью модульный]', 
      rating: 5, 
      reviews: 34 },
    { id: 3, 
      name: 'be quiet! Dark Power 13', 
      price: 22000, 
      image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/56dc8e70af9879f0c9cac410a3f36e09/8bc6e8dc2798e81e8b424889eda636e84440f952446be325aeb0eaa16b542c0e.jpg.webp', 
      specs: '1000W, 80+ Titanium', 
      description: 'Блок питания be quiet! Dark Power 13 [1000W, 80+ Titanium, Модульный]', 
      rating: 5, 
      reviews: 28 },
    { id: 4, 
      name: 'MSI MPG A1000G', 
      price: 16000, 
      image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6ae90410391a3dce2c3795941dd4614a/a1d848e3fe0c040849ad98be98d9d62a32e3b8b648f53a177b19cbcd410a6cbd.jpg.webp', 
      specs: '1000W, 80+ Gold', 
      description: 'Блок питания MSI MPG A1000G PCIE5 [1000W, 80+ Gold, Модульный, ATX 3.0]', 
      rating: 4, 
      reviews: 41 }
  ]
};

const componentTitles = {
  processor: 'процессора',
  motherboard: 'материнской платы',
  gpu: 'видеокарты',
  ram: 'оперативной памяти',
  case: 'корпуса',
  storage: 'накопителя',
  psu: 'блока питания'
};

function ComponentSelect() {
  const { componentType } = useParams();
  const navigate = useNavigate();
  
  const [selectedItem, setSelectedItem] = useState(null);

  const components = componentsData[componentType] || [];
  const title = componentTitles[componentType] || 'компонента';

  const handleSelect = (component) => {
    const savedComponents = JSON.parse(localStorage.getItem('selectedComponents') || '{}');
    savedComponents[componentType] = component;
    localStorage.setItem('selectedComponents', JSON.stringify(savedComponents));
    
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
