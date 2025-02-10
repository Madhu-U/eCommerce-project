import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About CornerCart</h1>
      <h2>Who We Are</h2>
      <p>
        At CornerCart, we believe that great finds are just around the corner.
        Our mission is to bring you a curated selection of products that combine
        quality, affordability, and style. Whether you're shopping for the
        latest trends or timeless essentials, we make it easy to discover what
        you need—all in one place.
      </p>
      <hr />
      <h2>Our Story</h2>
      <p>
        Founded with the idea of making online shopping more personal and
        accessible, CornerCart started as a small project with a big vision: to
        create an online marketplace that feels like your favorite neighborhood
        store. What began as a simple idea has grown into a platform trusted by
        thousands of shoppers looking for reliable products and seamless
        experiences.
      </p>
      <hr />

      <h2>Why Shop with Us?</h2>
      <ul>
        <li>
          Curated Selection: Every product is handpicked to ensure quality and
          value.
        </li>
        <li>
          Affordable Prices: We believe great products don’t have to come with a
          hefty price tag.
        </li>
        <li>
          Seamless Shopping Experience: From browsing to checkout, we’ve
          designed our platform to be fast, easy, and hassle-free.
        </li>
        <li>
          Customer First: Our customers are at the heart of everything we do.
          We're here to help you find exactly what you need, when you need it.
        </li>
      </ul>
      <hr />

      <h2>Our Commitment</h2>
      <p>
        We’re committed to offering more than just products—we’re here to offer
        peace of mind. That means clear communication, secure transactions, and
        a dedication to your satisfaction. If you ever have questions or need
        support, our team is just a click away.
      </p>
      <hr />

      <h2>Join Our Journey</h2>
      <p>
        At CornerCart, we're not just building a store—we're building a
        community of savvy shoppers who know where to find the best deals and
        quality items. We’re constantly growing, evolving, and looking for ways
        to improve your shopping experience.
      </p>
    </div>
  );
};

export default About;
