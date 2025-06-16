import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition"
      {...props}
    >
      {children}
    </button>
  );
};
