import React from 'react';
import './Header.css'
import logo from '../../../public/Logo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
        <ul className="nav-list">
          <li><a href="#" alt=''>Order</a></li>
          <li><a href="#" alt=''>Order Review</a></li>
          <li><a href="#" alt=''>Manage Inventory</a></li>
          <li><a href="#" alt=''>Login</a></li>
        </ul>
    </div>
  );
};

export default Header;