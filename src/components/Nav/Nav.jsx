import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <Link
            to="/"
            className={styles.links}
            style={{ textDecoration: "none" }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/products"
            className={styles.links}
            style={{ textDecoration: "none" }}
          >
            <li>Products</li>
          </Link>
          <Link
            to="/cart"
            className={styles.links}
            style={{ textDecoration: "none" }}
          >
            <li>Cart</li>
          </Link>
          <Link
            to="/login"
            className={styles.links}
            style={{ textDecoration: "none" }}
          >
            <li>Login</li>
          </Link>
          <Link
            to="/signup"
            className={styles.links}
            style={{ textDecoration: "none" }}
          >
            <li>Signup</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
