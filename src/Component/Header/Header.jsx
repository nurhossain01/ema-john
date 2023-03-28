import React from 'react';
import './Header.css'
import logo from '../../../public/Logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-list">
        <a href="#" alt=''>Order</a>
        <a href="#" alt=''>Order Review</a>
        <a href="#" alt=''>Manage Inventory</a>
        <a href="#" alt=''>Login</a>
      </div>
    </div>
  );
};

export default Header;