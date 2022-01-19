// New components from new React, without extend classes, its not necessary to use the import React, {Component}

import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick = {onClick}
    >
      {text}
    </button>
  );
};

// default props

Button.defaultProps = {
  color: "green",
  text: "add",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
