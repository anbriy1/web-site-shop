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

  return (
    <div className='full'>
      <Header />
      <div className='cart-page'>
        <div className='cart-header-section'>
          <button className='cart-back-btn' onClick={() => navigate(-1)}>←</button>
          <h1 className='cart-title'>Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className='empty-cart'>
            <p className='empty-cart1'>Your cart is empty</p>
            <p>Check out offers on the main page, browse the catalog or use search</p>
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
                      <button className='cart-item-favorite'>add to favorites</button>
                      <button className='cart-item-delete' onClick={() => {
                        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        const filtered = savedCart.filter(item => item.id !== product.id);
                        localStorage.setItem('cart', JSON.stringify(filtered));
                        loadCart();
                      }}>remove</button>
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
                    <div className='cart-item-price'>{product.price.toLocaleString('en-US')}INR</div>
                    <div className='cart-item-availability'>in stock</div>
                    <div className='cart-item-stores'>in 3 stores</div>
                  </div>
                </div>
              ))}
            </div>

            <div className='cart-summary'>
              <div className='cart-summary-row'>
                <span className='cart-summary-label'>TOTAL:</span>
                <span className='cart-summary-items'>{getTotalItems()} item(s)</span>
                <span className='cart-summary-price'>{getTotalPrice().toLocaleString('en-US')}INR</span>
              </div>
              <button className='checkout-btn'>Proceed to checkout</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;