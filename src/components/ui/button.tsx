import React from "react";
import { motion } from "framer-motion";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href,
  ...props
}) => {
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`ios-card px-8 py-4 rounded-full font-semibold transition hover:bg-white/80 dark:hover:bg-gray-800/80 ${className}`}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`ios-card px-8 py-4 rounded-full font-semibold transition hover:bg-white/80 dark:hover:bg-gray-800/80 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
