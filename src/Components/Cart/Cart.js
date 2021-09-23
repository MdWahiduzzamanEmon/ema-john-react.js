import React from 'react';

const Cart = (props) => {
    const carts = props.cart;
    let initPrice = 0;
    for (const price of carts) {
        
        initPrice = initPrice + price.price;
        console.log(initPrice);
    }
    return (
      <div>
        <h3>Order Summary</h3>
        <h5>Items ordered: {props.cart.length} </h5>
        <h2>Price: ${initPrice} </h2>
      </div>
    );
};

export default Cart;