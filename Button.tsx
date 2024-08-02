import React from "react";
import "./Button.css"; // 버튼 스타일을 위한 CSS 파일
import Button from "./src/BaseButton.tsx"; // ButtonBase를 다른 이름으로 임포트

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Buttons: React.FC<ButtonProps> = ({
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

export default Buttons;
