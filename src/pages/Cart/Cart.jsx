import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./cart.module.css";
import Payment from "../Payment/Payment";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, loggedIn, setLoggedIn } = useContext(ProductContext);
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  let findTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return Math.round(total * 87.62);
  };

  const renderPayments = () => {
    loggedIn ? setFlag(!flag) : navigate("/login");
  };

  return (
    <div>
      <div className={styles.cart_container}>
        <div className={styles.cart_left}>
          <div className={styles.cart_items}>
            <h1>Shopping Cart</h1>
            <p className={styles.productCount}>
              <span>{cart.length}</span> items in your bag.
            </p>
            {findTotal() === 0 && <h2>Your Cart is Empty</h2>}

            <div className={styles.shoppingCart}>
              {cart.map((product) => {
                return (
                  <CartItem productData={product} key={product.id}></CartItem>
                );
              })}
            </div>
          </div>
        </div>
        {cart.length > 0 && (
          <div className={styles.cart_right}>
            <h2>Cart Summary</h2>
            <div className={styles.cartSummary}>
              {cart.map((x, i) => {
                return (
                  <div key={i} className={styles.summaryItem}>
                    <p>{x.title}</p>
                    <p>x 1</p>
                    <p>{`₹ ${Math.round(x.price * 87.62)}`}</p>
                  </div>
                );
              })}
            </div>
            {findTotal() > 0 && (
              <div className={styles.total}>
                <h2>Total :</h2>
                <p>{`₹ ${findTotal()}`}</p>
              </div>
            )}
            {findTotal() > 0 && (
              <button className={styles.pay} onClick={renderPayments}>
                Click to Pay
              </button>
            )}
          </div>
        )}
        {flag && (
          <div className={styles.overlay} onClick={renderPayments}>
            <Payment state={flag} change={setFlag}></Payment>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
