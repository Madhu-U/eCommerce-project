import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./footer.module.css";
import instagram from "../../assets/images/instagram.svg";
import x from "../../assets/images/x.svg";
import facebook from "../../assets/images/facebook.svg";

const Footer = () => {
  const footerNavigate = useNavigate();
  return (
    <footer>
      <div className={styles.quick_links}>
        <ul>
          <li
            onClick={() => {
              footerNavigate("/about");
            }}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            onClick={() => {
              footerNavigate("/privacyPolicy");
            }}
          >
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
          <li
            onClick={() => {
              footerNavigate("/TOS");
            }}
          >
            <Link to="/tos">Terms of Service</Link>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <h2>Our Socials</h2>
        <div className={styles.icons}>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={x} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <div className={styles.links}>
          <a href="#">support@cornercart.com</a>
          <p>+91-XXXX-XXXXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
