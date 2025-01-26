import React from "react";
import "../Styles/input.css"; // Updated import path

const Input = ({ placeholder, className, ...props }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`input-custom ${className}`}
      {...props}
    />
  );
};

export default Input;
