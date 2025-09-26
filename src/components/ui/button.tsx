import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="px-8 py-4 rounded-full font-semibold border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-lg hover:bg-white/20 hover:shadow-xl transition"
      {...props}
    >
      {children}
    </button>
  );
};
