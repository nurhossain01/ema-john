import React from 'react';
import './OrderDetails.css'
import { FaTrashAlt } from "react-icons/fa";

const OrderDetails = ({ product, handleRemoveFromCart }) => {
  const { name, img, price, id, quantity } = product;
  console.log(product)
  return (
    <div className='order-container-layout'>
      <div className='order-product'>
        <img src={img} alt="" />
        <div className='info'>
          <h4>{name}</h4>
          <h4>Price: <span className='price-info'>${price}</span></h4>
          <h4>Shipping Charge: <span className='shipping-info'>$5</span></h4>
          <h4>Quantity: {quantity}</h4>
        </div>
      </div>
      <div className='trash-icon'>
        <FaTrashAlt onClick={ () => handleRemoveFromCart(id)}></FaTrashAlt>
      </div>
    </div>
  );
};

export default OrderDetails;