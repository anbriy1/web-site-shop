import '../Catalog.css';
import logo from '../image/logo.png'
import img1 from "../image/image-pc.png"
import img2 from "../image/image-GR.png"
import img3 from "../image/image-mouse.png"
import img4 from "../image/image-head.png"
//fix the number "late"
import img5 from "../image/img4.png"
import img6 from "../image/img5.png"
import img7 from "../image/img6.png"
import img8 from "../image/img7.png"
import img9 from "../image/img9.png"
import img10 from "../image/img10.png"
import img11 from "../image/img11.png"
import img12 from "../image/img12.png"




function Catalog() {
  return (
    <div className='full'>
      <header className='head'>
        <img src={logo} alt='logo' className='logo-1' />
        
        <nav className='nav-links'>
          <a href="#" className='nav-btn active'>главная</a>
          <a href="#" className='nav-btn'>комплектующие</a>
          <a href="#" className='nav-btn'>готовые сборки</a>
          <a href="#" className='nav-btn'>конфигуратор</a>
        </nav>
      </header>
      <main>
      <div className='first-slide'>
        <h1 className='sale'>SALE ➔</h1>
      </div>
      
        <div className='image-rowing'> 
          <div className='product-item'>
            <img src={img1} alt="PC" />
            <h3 className='product-name'>Игровой компьютер<br/>Traxer</h3>
            <div className='price-info'>
              <span className='old-price'>149 999 ₽</span>
              <span className='new-price'>129 999₽</span>
              <span className='discount'>-20%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img2} alt="Graphics Card" />
            <h3 className='product-name'>Видеокарта RTX 4060</h3>
            <div className='price-info'>
              <span className='old-price'>129 999 ₽</span>
              <span className='new-price'>114 999₽</span>
              <span className='discount'>-10%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img3} alt="Mouse" />
            <h3 className='product-name'>Игровая мышь Pro</h3>
            <div className='price-info'>
              <span className='old-price'>3 399 ₽</span>
              <span className='new-price'>3 099₽</span>
              <span className='discount'>-9%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img4} alt="Headphones" />
            <h3 className='product-name'>Наушники Gaming</h3>
            <div className='price-info'>
              <span className='old-price'>49 999 ₽</span>
              <span className='new-price'>29 999₽</span>
              <span className='discount'>-20%</span>
            </div>
          </div>
        </div>
          <div className='first-slide'>
        <h1 className='sale'>HOT ➔</h1>
      </div>
      
      
        <div className='image-rowing'> 
          <div className='product-item'>
            <img src={img5} alt="PC" />
            <h3 className='product-name'>Игровой компьютер Zalman N4<br/></h3>
            <div className='price-info'>
              <span className='new-price'>89 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img6} alt="Graphics Card" />
            <h3 className='product-name'>Игровой компьютер MATREXX 70</h3>
            <div className='price-info'>
              <span className='new-price'>69 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img7} alt="Mouse" />
            <h3 className='product-name'>16 Гб HyperX Fury RGB 2400 МГц</h3>
            <div className='price-info'>
              <span className='new-price'>9 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img8} alt="Headphones" />
            <h3 className='product-name'>Razer Black Widow</h3>
            <div className='price-info'>
              <span className='new-price'>10 999₽</span>
            </div>
          </div>
        </div>

         <div className='first-slide'>
        <h1 className='sale'>STOCK ➔</h1>
      </div>
      
      
        <div className='image-rowing'> 
          <div className='product-item'>
            <img src={img9} alt="PC" />
            <h3 className='product-name'>Монитор 27” BenQ PD2705Q<br/></h3>
            <div className='price-info'>
              <span className='new-price'>46 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img10} alt="Graphics Card" />
            <h3 className='product-name'>Коврик Logitech G440 Hard</h3>
            <div className='price-info'>
              <span className='new-price'>3 549₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img11} alt="Mouse" />
            <h3 className='product-name'>Western Digital Original 1TB Blue</h3>
            <div className='price-info'>
              <span className='new-price'>3 890₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={img12} alt="Headphones" />
            <h3 className='product-name'>Блок питания Gamemax RGB-850</h3>
            <div className='price-info'>
              <span className='new-price'>6 999₽</span>
            </div>
          </div>
        </div>
        
      </main>
      
        <div className='footer-up-text'>
        <h1 className='text-top-footer'>BRAND</h1>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default Catalog;