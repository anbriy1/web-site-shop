import { useState, useEffect } from 'react';

export function useCartCount() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return [cartCount, updateCartCount];
}
