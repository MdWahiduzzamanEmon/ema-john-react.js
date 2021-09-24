import React from 'react';

const Cart = (props) => {
    const carts = props.cart;
    let initPrice = 0;
    for (const price of carts) {
        
      initPrice = (initPrice + price.price);
        // console.log(initPrice);
  }
  const shipping = initPrice > 0 ? 15 : 0;
  const tax = (initPrice + shipping) * .10;
  const grandTotal = initPrice + shipping + tax;

    return (
      <div>
        <h3>Order Summary</h3>
        <h5>Items ordered: {props.cart.length} </h5>
        <h2>Price: ${initPrice.toFixed(2)} </h2>
        <h2>Shipping: ${shipping} </h2>
        <h2>T
          ax: ${tax.toFixed(2)} </h2>
        <h2>Grand total: ${grandTotal.toFixed(2)} </h2>
      </div>
    );
};

export default Cart;