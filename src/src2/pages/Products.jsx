import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import { ProductContext } from "../../context/ProductContext";
import styles from "./products.module.css";

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log();

  return (
    <div className={styles.products__container}>
      {products.map((product) => {
        return <Card productData={product} key={product.id}></Card>;
      })}
    </div>
  );
};

export default Products;
