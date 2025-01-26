import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../styles/card.css"; // Ensure custom styles are applied

const Card = ({ children, className }) => {
  return (
    <div className={`card-custom shadow-md bg-white rounded-lg ${className}`}>
      {children}
    </div>
  );
  
};

// Define PropTypes for the Card component
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // className is optional
};

Card.defaultProps = {
  className: "", // Default to an empty string if no class is provided
};

export default Card;
