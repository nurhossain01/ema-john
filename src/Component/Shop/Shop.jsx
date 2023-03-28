import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
 const [cart, setCart] = useState([]);
console.log(cart)
  const handleAddToCart = (product) =>{ 
      const newCart = [...cart, product];
      setCart(newCart)   
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products?.map(product => <DisplayProducts key={product.id} product={product} handleAddToCart={handleAddToCart}></DisplayProducts>)
        }
      </div>
      <div className="cart-container">
        <h2>Cart Summary {cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;