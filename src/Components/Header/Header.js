import React from 'react';

import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
      <div className="Header">
        <img className="logo-img" src={logo} alt="" />
        <nav className="nav-bar">
          <a href="/Shop">Shop</a>
          <a href="/Order Review">Order Review</a>
          <a href="/Manage Inventory here">Manage Inventory here</a>
        </nav>
        
      </div>
    );
};

export default Header;