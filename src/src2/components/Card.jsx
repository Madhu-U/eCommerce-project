import React, { useContext } from "react";
import starLight from "../../assets/images/star-solid-light.svg";
import starDark from "../../assets/images/star-solid-dark.svg";
import { ProductContext } from "../../context/ProductContext";
import styles from "./card.module.css";

const Card = ({ productData }) => {
  const { id, title, price, rating, tags, thumbnail } = productData;

  const { cart, toggleCartItem } = useContext(ProductContext);

  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    toggleCartItem(productData);
  };

  const priceINR = "₹" + (price * 87.62).toFixed(0);

  return (
    <div className={styles.card_container}>
      <div className={styles.product__img}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles.product__info}>
        <p className={styles.product__title}>{title}</p>
        <div className={styles.product__tags}>
          {tags.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </div>
        <div className={styles.price_info}>
          <p className={styles.product__price}>{priceINR}</p>
          <div className={styles.product__rating}>
            <p className={styles.rating}>{rating}</p>
            <img src={starLight} alt="" />
          </div>
        </div>
        {
          <button
            className={isInCart ? styles.not_in_cart : styles.in_cart}
            onClick={handleClick}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </button>
        }
      </div>
    </div>
  );
};

export default Card;
