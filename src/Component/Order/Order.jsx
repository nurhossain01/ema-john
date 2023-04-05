import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { useLoaderData } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart)

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((pd => pd.id !== id));
    setCart(remaining);
    removeFromDb(id)
  }

  const handleClear = () => {
    setCart([]);
    clearAllShoppingCart();
  }

  return (
    <div className='order-container'>
      <div className="order-details">
        {
          cart.map(product =>
            <OrderDetails
              key={product.id}
              product={product}
              handleRemoveFromCart={handleRemoveFromCart}
            ></OrderDetails>)
        }
      </div>
      {
        cart.length > 0 && <div className="cart-container">
          <Cart cart={cart} handleClear={handleClear}></Cart>
        </div>
      }
    </div>
  );
};

export default Order;