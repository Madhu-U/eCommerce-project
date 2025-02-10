import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  let findTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return Math.round(total * 87.62);
  };

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_items}>
        <h1>Shopping Cart</h1>
        {cart.map((product) => {
          return <CartItem productData={product} key={product.id}></CartItem>;
        })}
        {findTotal() === 0 && <h2>Your Cart is Empty</h2>}
        {findTotal() > 0 && (
          <div className={styles.total}>
            <h2>Total :</h2>
            <p>{`₹ ${findTotal()}`}</p>
          </div>
        )}
        {findTotal() > 0 && (
          <button className={styles.pay}>Click to Pay</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
