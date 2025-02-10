import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import heroImg from "../../assets/images/Shopping-hero.svg";

const Home = () => {
  const navToProducts = useNavigate();
  return (
    <div className={styles.home_container}>
      <div className={styles.heading}>
        <div className={styles.content}>
          <h1>Discover the Best Finds at CornerCart</h1>
          <h2>
            Curated products, unbeatable prices, and seamless shopping—all in
            one place.
          </h2>
          <button
            onClick={() => {
              navToProducts("/products");
            }}
          >
            Shop Now
          </button>
        </div>
        <img src={heroImg} alt="" />
      </div>
      <div className={styles.testimonials}>
        <h2>Customer Testimonials</h2>
        <h3>What our Customers are Saying</h3>
        <div className={styles.reviews}>
          <blockquote>
            <p>
              &quot;CornerCart makes shopping so easy. I love the variety!&quot;
            </p>
            <cite> – Priya S.</cite>
          </blockquote>
          <blockquote>
            <p>
              &quot;Fast delivery and great quality. Highly recommend!&quot;
            </p>
            <cite> – Rahul K.</cite>
          </blockquote>
          <blockquote>
            <p>&quot;I found exactly what I needed and more!&quot;</p>
            <cite> – Ananya T.</cite>
          </blockquote>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h2>Newsletter Signup</h2>
        <div className={styles.signup}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.newsletterEmail}
          />
          <input type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Home;
