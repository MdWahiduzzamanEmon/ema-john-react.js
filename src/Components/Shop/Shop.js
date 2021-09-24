import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct,setDisplayProdut] = useState([]);
    
    useEffect(() => {
        fetch("./products.JSON")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setDisplayProdut(data);
          });
    }, [])
  
    const handaleToCart = (products) => {
      const newCart = [...cart,products];
      setCart(newCart);
      // console.log(cart);
    };
    // console.log(products);
  const handleSearch = event => {
    const searchText = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProdut(matchedProduct);
  }
  return (
    <div>
      <div className="inputField">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="type here to search"
        />
        <div className="FontAwesomeIcon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
      <div className="Shop-container">
        <div className="product-details">
          {/* <Product></Product> */}
          {displayProduct.map((product) => (
            <Product
              handaleToCart={handaleToCart}
              key={product.key}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-detials">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;