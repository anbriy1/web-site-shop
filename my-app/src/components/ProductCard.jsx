import { Link } from 'react-router-dom';

function ProductCard({ product, onClick, asLink = true }) {
  const content = (
    <>
      <img src={product.image} alt={product.name} />
      <h3 className='product-name'>{product.name}</h3>
      <div className='price-info'>
        {product.oldPrice && <span className='old-price'>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>}
        <span className='new-price'>{product.price.toLocaleString('ru-RU')}₽</span>
        {product.discount && <span className='discount'>{product.discount}</span>}
      </div>
    </>
  );

  if (asLink) {
    return (
      <Link
        to={`/product/${product.id}`}
        className='product-item'
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className='product-item'
      style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', cursor: 'pointer' }}
      onClick={onClick}
    >
      {content}
    </div>
  );
}

export default ProductCard;
