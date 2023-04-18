import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../public/Logo.png"
import './Navber.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber = () => {

  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut();
  }

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
          {
            user?.uid ? <Link onClick={handleSignOut} className='list-items'>Sign out</Link>
              :
              <>
                <Link className='list-items' to='/login'>Sign in</Link>
                <Link className='list-items' to='/register'>Sign up</Link>
              </>
          }
        </div>
      </div>

    </>
  );
};

export default Navber;