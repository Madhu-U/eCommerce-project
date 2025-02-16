import React from "react";
import styles from "./input.module.css";

const Input = ({ type, idName, name, value, handle }) => {
  return (
    <input
      type={type}
      id={idName}
      name={name}
      value={value}
      onChange={handle}
    ></input>
  );
};

export default Input;
