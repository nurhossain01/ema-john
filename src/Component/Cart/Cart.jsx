import React from 'react';
import './Cart.css';

const Cart = ({cart, handleClear, children}) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    // if(product.quantity ===0){
    //   product.quantity = 1;
    // }
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
const tax = total * 7 / 100;
const grandTotal = total + shipping + tax;

  return (
    <div className='cart-information'>
      <h3>Order Summary: </h3>
      <h6>Selected Items: {quantity}</h6>
      <h6>Total Price: ${total}</h6>
      <h6>Total Shipping Charge: ${shipping}</h6>
      <h6>Tax: {tax}</h6>
      <h4>Grand Total: {grandTotal}</h4>
      <button onClick={handleClear} className='clear-cart'>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;