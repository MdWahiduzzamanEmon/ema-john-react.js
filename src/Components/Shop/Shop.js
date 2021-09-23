import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch("./products.JSON")
          .then((res) => res.json())
          .then((data) => setProducts(data));
    }, [])
  
    const handaleToCart = (products) => {
        const newCart = [...cart,products];
        setCart(newCart); console.log(cart);
    };
    // console.log(products);
    return (
      <div className="Shop-container">
        <div className="product-details">
          {/* <Product></Product> */}
          {products.map((product) => (
            <Product
              handaleToCart={handaleToCart}
              key={product.key}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-detials">
          <Cart cart={ cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;