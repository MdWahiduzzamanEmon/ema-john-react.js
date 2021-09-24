import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { img, name, price, stock, star, features } = props.product;
    return (
      <div className="product-style">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="details-section">
          <p>{name}</p>
          <div className="product-flex">
            <div>
              <h4>${price}</h4>
              <p>only {stock} left in stock - order soon</p>
              <button
                onClick={() => props.handaleToCart(props.product)}
                className="cartBtn"
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
              </button>
            </div>
            <div>
              <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <h4>Features</h4>
              <ul>
                {features.map((feature) => (
                  <li key={feature.description}>
                    {feature.description} : {feature.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;