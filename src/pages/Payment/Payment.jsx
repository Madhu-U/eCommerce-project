import React, { useContext } from "react";
import styles from "./payment.module.css";
import { ProductContext } from "../../context/ProductContext";
import cross from "../../assets/images/x-solid.svg";

const Payment = ({ state, change }) => {
  const { cart } = useContext(ProductContext);

  let findTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return Math.round(total * 87.62);
  };

  return (
    <div
      className={styles.paymentContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.address}>
        <h1>Address</h1>
        <h2>Enter your Address</h2>
        <form autoComplete="on">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Full Name"
          />
          <input
            type="text"
            name="address"
            id="address"
            required
            placeholder="Address"
          />
          <div className={styles.addressFields}>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              required
            />
          </div>
          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Pincode"
            required
          />
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="Contact"
            required
          />
          <input type="submit" value="Confirm Address" />
        </form>
      </div>
      <div className={styles.paymentOptions}>
        <h1>Payment</h1>

        <h2>Payment Options</h2>
        <p>Choose your Payment Method</p>
        <div className={styles.radioGroup}>
          <input type="radio" name="payment_option" id="cards" />
          <label htmlFor="cards">Debit/Credit Card</label>
          <input type="radio" name="payment_option" id="upi" />
          <label htmlFor="upi">UPI</label>
          <input type="radio" name="payment_option" id="netBanking" />
          <label htmlFor="netBanking">Net Banking</label>
          <input type="radio" name="payment_option" id="cod" />
          <label htmlFor="cod">Cash On Delivery</label>
        </div>
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          {cart.map((x, i) => {
            return (
              <div key={i}>
                <p>{x.title}</p>
                <p>x 1</p>
                <p>{`₹ ${Math.round(x.price * 87.62)}`}</p>
              </div>
            );
          })}
          <p className={styles.orderTotal}>{`Total: ₹ ${findTotal()}`}</p>
          <p className={styles.terms}>
            By clicking 'Pay Now', you confirm that you have reviewed your order
            and agree to our Terms & Conditions.
          </p>
          <button className={styles.payBtn}>Pay Now</button>
        </div>
      </div>
      <div className={styles.closeIcon} onClick={() => change(!state)}>
        <img src={cross} alt="" />
      </div>
    </div>
  );
};

export default Payment;
