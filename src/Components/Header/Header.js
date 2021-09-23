import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
        <div className="inputField">
          <input type="text" name="" id="" placeholder="type here to search" />
          <div className="FontAwesomeIcon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
    );
};

export default Header;