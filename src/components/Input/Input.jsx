import React from "react";
import styles from "./input.module.css";

const Input = ({ type, idName }) => {
  return <input type={type} id={idName}></input>;
};

export default Input;
