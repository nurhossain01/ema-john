import React from 'react';
import './Header.css'
import Navber from '../Navbar/Navber.jsx';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
    </>
  );
};

export default Header;