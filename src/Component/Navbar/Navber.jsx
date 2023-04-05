import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../public/Logo.png"
import './Navber.css'
const Navber = () => {
  return (
    <>
      <div className='header'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-list">
          <Link className='list-items' to='/home'>Home</Link>
          <Link className='list-items' to='/shop'>Shop</Link>
          <Link className='list-items' to='/order'>Order</Link>
          <Link className='list-items' to='/orderReview'>Order Review</Link>
          <Link className='list-items' to='/inventory'>Inventory</Link>
          <Link className='list-items' to='/login'>Login</Link>
        </div>
      </div>

    </>
  );
};

export default Navber;