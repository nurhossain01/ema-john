import React, { useEffect, useState } from 'react';
import { addToDb, clearAllShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find(pd => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist]
    }
    setCart(newCart)
    addToDb(product.id)
  }


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);


  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    //step:1 get storedCart id
    for (const id in storedCart) {
      // step:2 get the product by using product id
      const savedProducts = products.find(product => product.id === id);
      // get quantity of the product
      const quantity = storedCart[id];
      if (savedProducts) {
        savedProducts.quantity = quantity;
        savedCart.push(savedProducts)
      }
    }
    setCart(savedCart);
  }, [products])

  const handleClear = () => {
    setCart([]);
    clearAllShoppingCart();
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products?.map(product =>
            <DisplayProducts
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></DisplayProducts>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClear={handleClear}>
          <Link to='/order'>
            <button className='review-order'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;