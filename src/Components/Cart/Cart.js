import React from 'react';

const Cart = (props) => {
    return (
      <div>
        <h3>Order Summary</h3>
        <h5>Items ordered: {props.cart.length} </h5>
      </div>
    );
};

export default Cart;