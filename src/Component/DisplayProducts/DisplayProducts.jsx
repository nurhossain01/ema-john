import React from 'react';
import './DisplayProducts.css';
import { FaCartPlus } from "react-icons/fa";

const DisplayProducts = ({ product, handleAddToCart }) => {
  const { name, price, seller, ratings, img } = product
  // console.log(product)
  return (
      <div className='Display-container'>
        <div className='product-description'>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h4>Price: {price}</h4>
          <div>
            <h6>Manufacturer: {seller}</h6>
            <h6>Rating: {ratings}</h6>
          </div>
        </div>
        <button onClick={() => handleAddToCart(product)}>Add to Cart <FaCartPlus></FaCartPlus></button>
      </div>
  );
};

export default DisplayProducts;