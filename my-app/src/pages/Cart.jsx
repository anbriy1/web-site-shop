import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const groupedCart = savedCart.reduce((acc, product) => {
      const existing = acc.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);
    setCart(groupedCart);
  };

  const removeFromCart = (productId) => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = savedCart.findIndex(item => item.id === productId);
    if (index !== -1) {
      savedCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(savedCart));
      loadCart();
    }
  };

  const addQuantity = (productId) => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = cart.find(item => item.id === productId);
    savedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    loadCart();
  };

  const decreaseQuantity = (productId) => {
    removeFromCart(productId);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
  };

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    loadCart();
  };

  return (
    <div className='full'>
      <Header />
      <div className='cart-page'>
        <div className='cart-header-section'>
          <button className='cart-back-btn' onClick={() => navigate(-1)}>←</button>
          <h1 className='cart-title'>Корзина</h1>
        </div>

        {cart.length === 0 ? (
          <div className='empty-cart'>
            <p className='empty-cart1'>Корзина пуста</p>
            <p>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</p>
          </div>
        ) : (
          <>
            <div className='cart-items'>
              {cart.map((product) => (
                <div key={product.id} className='cart-item'>
                  <img src={product.image} alt={product.name} className='cart-item-image' />
                  
                  <div className='cart-item-info'>
                    <h3>{product.name}</h3>
                    <div className='cart-item-actions'>
                      <button className='cart-item-favorite'>в избранное</button>
                      <button className='cart-item-delete' onClick={() => {
                        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        const filtered = savedCart.filter(item => item.id !== product.id);
                        localStorage.setItem('cart', JSON.stringify(filtered));
                        loadCart();
                      }}>удалить</button>
                    </div>
                  </div>

                  <div className='cart-item-quantity'>
                    <button 
                      className='quantity-btn' 
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className='quantity-value'>{product.quantity}</span>
                    <button 
                      className='quantity-btn' 
                      onClick={() => addQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className='cart-item-price-section'>
                    <div className='cart-item-price'>{product.price.toLocaleString('ru-RU')}₽</div>
                    <div className='cart-item-availability'>в наличии</div>
                    <div className='cart-item-stores'>в 3 магазинах</div>
                  </div>
                </div>
              ))}
            </div>

            <div className='cart-summary'>
              <div className='cart-summary-row'>
                <span className='cart-summary-label'>ИТОГО:</span>
                <span className='cart-summary-items'>{getTotalItems()} товар</span>
                <span className='cart-summary-price'>{getTotalPrice().toLocaleString('ru-RU')}₽</span>
              </div>
              <button className='checkout-btn'>перейти к оформлению</button>
            </div>
          </>
        )}
      </div>
     
    </div>
  );
}

export default Cart;