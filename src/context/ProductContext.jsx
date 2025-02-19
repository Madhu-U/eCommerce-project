import React, { createContext, useState } from "react";
import data from "../assets/api.json";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const toggleCartItem = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    if (isInCart) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        toggleCartItem,
        loggedIn,
        setLoggedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
