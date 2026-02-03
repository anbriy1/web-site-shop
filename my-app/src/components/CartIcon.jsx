import { Link } from 'react-router-dom';
import images from '../images';

export default function CartIcon({ cartCount }) {
  return (
    <div className='Trash'>
      <Link to='/cart' className='cart-link'>
        <div className='cart-icon'>
          <img src={images.Trash} alt="Корзина" style={{ width: '40px', height: '40px' }} />
        </div>
        {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
      </Link>
    </div>
  );
}
