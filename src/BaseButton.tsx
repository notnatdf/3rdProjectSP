import React from "react";
import "./Button.css"; // 버튼 스타일을 위한 CSS 파일

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const BaseButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  disabled = false,
  className = "",
}) => {
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

export default BaseButton;
