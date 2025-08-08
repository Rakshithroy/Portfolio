import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`ios-card px-8 py-4 rounded-full font-semibold transition hover:bg-white/80 dark:hover:bg-gray-800/80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
