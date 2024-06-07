import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-lg text-white font-bold py-2 px-4 rounded-full h-16 border-2 border-white text-center transition duration-300  w-44"
      style={{ backgroundColor: '#262522' }}
    >
      {children}
    </button>
  );
};

export default Button;
