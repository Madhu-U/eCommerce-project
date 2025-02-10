import React from "react";

const Label = ({ forValue, name }) => {
  return <label htmlFor={forValue}>{name}</label>;
};

export default Label;
