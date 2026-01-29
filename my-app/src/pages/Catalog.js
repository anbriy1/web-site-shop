import '../App.css';
import images from '../images';
import Header from '../components/Header';


function Catalog() {
  return (
    <div className='full'>
      <Header />
      {/*FIX SIZE MAIN*/}
      <main>
      <div className='first-slide'>
        <h1 className='sale'>SALE ➔</h1>
      </div>
      
        <div className='image-rowing'> 
          <div className='product-item'>
            <img src={images.img1} alt="PC" />
            <h3 className='product-name'>Игровой компьютер<br/>Traxer</h3>
            <div className='price-info'>
              <span className='old-price'>149 999 ₽</span>
              <span className='new-price'>129 999₽</span>
              <span className='discount'>-20%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img2} alt="Graphics Card" />
            <h3 className='product-name'>Видеокарта RTX 4060</h3>
            <div className='price-info'>
              <span className='old-price'>129 999 ₽</span>
              <span className='new-price'>114 999₽</span>
              <span className='discount'>-10%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img3} alt="Mouse" />
            <h3 className='product-name'>Игровая мышь Pro</h3>
            <div className='price-info'>
              <span className='old-price'>3 399 ₽</span>
              <span className='new-price'>3 099₽</span>
              <span className='discount'>-9%</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img4} alt="Headphones" />
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
            <img src={images.img5} alt="PC" />
            <h3 className='product-name'>Игровой компьютер Zalman N4<br/></h3>
            <div className='price-info'>
              <span className='new-price'>89 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img6} alt="Graphics Card" />
            <h3 className='product-name'>Игровой компьютер MATREXX 70</h3>
            <div className='price-info'>
              <span className='new-price'>69 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img7} alt="Mouse" />
            <h3 className='product-name'>16 Гб HyperX Fury RGB 2400 МГц</h3>
            <div className='price-info'>
              <span className='new-price'>9 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img8} alt="Headphones" />
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
            <img src={images.img9} alt="PC" />
            <h3 className='product-name'>Монитор 27” BenQ PD2705Q<br/></h3>
            <div className='price-info'>
              <span className='new-price'>46 999₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img10} alt="Graphics Card" />
            <h3 className='product-name'>Коврик Logitech G440 Hard</h3>
            <div className='price-info'>
              <span className='new-price'>3 549₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img11} alt="Mouse" />
            <h3 className='product-name'>Western Digital Original 1TB Blue</h3>
            <div className='price-info'>
              <span className='new-price'>3 890₽</span>
            </div>
          </div>

          <div className='product-item'>
            <img src={images.img12} alt="Headphones" />
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
      <div className="brands-container">
      <div className='Brand-row'>
        <img className='intel'src={images.intel}></img>
        <img className='nvidia'src={images.nvidia}></img>
        <img className='logitech'src={images.logitech}></img>
        </div>

         <div className='Brand-row2'>
        <img className='msi'src={images.msi}></img>
        <img className='hyperx'src={images.hyperx}></img>
        <img className='benq'src={images.benq}></img>
        </div>
        </div>
      <footer>
      </footer>
    </div>
  );
}

export default Catalog;