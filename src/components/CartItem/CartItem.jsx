import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import styles from "./cartItem.module.css";

const CartItem = ({ productData }) => {
  const { id, title, price, thumbnail, brand, description } = productData;
  const priceINR = "₹" + (price * 87.62).toFixed(0);
  const { cart, toggleCartItem } = useContext(ProductContext);

  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    toggleCartItem(productData);
  };

  return (
    <>
      <div className={styles.cart_info}>
        <div className="img">
          <img src={thumbnail} alt="" />
        </div>
        <hr />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p className={styles.brand}>By {brand}</p>
          <p className={styles.desc}>{description}</p>
          <button
            className={isInCart ? styles.in_cart : styles.not_in_cart}
            onClick={handleClick}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </button>
        </div>
        <hr />
        <div className={styles.price_info}>{priceINR}</div>
      </div>
    </>
  );
};

export default CartItem;
