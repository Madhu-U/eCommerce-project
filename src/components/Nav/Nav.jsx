import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import Logo from "../../assets/images/CornerCartLogo.png";
import { ProductContext } from "../../context/ProductContext";

const Nav = () => {
  const logoNavigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(ProductContext);
  return (
    <>
      <nav>
        <img
          src={Logo}
          alt="Corner Cart"
          onClick={() => {
            logoNavigate("/");
          }}
        />
        <ul>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            style={{ textDecoration: "none" }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            style={{ textDecoration: "none" }}
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
            style={{ textDecoration: "none" }}
          >
            <li>Cart</li>
          </NavLink>
          {loggedIn ? (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              style={{ textDecoration: "none" }}
            >
              <li>Profile</li>
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                style={{ textDecoration: "none" }}
              >
                <li>Login</li>
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
                style={{ textDecoration: "none" }}
              >
                <li>Signup</li>
              </NavLink>
            </>
          )}
        </ul>
        {loggedIn && (
          <button
            onClick={() => setLoggedIn(false)}
            className={styles.logoutBtn}
          >
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav;
