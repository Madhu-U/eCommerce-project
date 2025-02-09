import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_items}>
        <h1>Shopping Cart</h1>
        {cart.map((product) => {
          return <CartItem productData={product} key={product.id}></CartItem>;
        })}
      </div>
      <h2>Total</h2>
    </div>
  );
};

export default Cart;
