import './App.css';
import logo from './image/logo.png'
import imag1 from './image/image1.png'
import imag2 from './image/image2.png'
import imag3 from './image/image3.png'
import imag4 from './image/image4.png'





function App() {
  return (
    <div className="App">
      <div className='full-text'>
  
      <div className="header-container">                
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className='text'>PCTRAXERS</h1>
      </div>

      <div className='pear'>
        <h2 className='pear1'>СДЕЛАЙТЕ ЗАКАЗ ЗДЕСЬ</h2>
       </div>

       </div>



      <div className='image-row'>
        <img className='image1' src={imag1} alt="image"></img>
        <img className='image2' src={imag2} alt=''></img>
        <img className='image3' src={imag3} alt=''></img>
        <img className='image4' src={imag4} alt=''></img>
      </div>
      <div className='katalog-b'>
      <button className='katalog'>Перейти в каталог</button>
      </div>
      </div>
      

    
  );
}

export default App;