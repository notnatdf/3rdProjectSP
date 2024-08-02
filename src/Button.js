import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // 버튼 스타일을 위한 CSS 파일

const Button = ({ onClick, label, type, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`custom-button ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "",
};

export default Button;
