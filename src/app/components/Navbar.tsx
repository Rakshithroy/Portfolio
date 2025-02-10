"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 z-50 transition-all backdrop-blur-lg ${
        isScrolled
          ? "bg-white text-gray-900 shadow-md dark:bg-gray-900 dark:text-white"
          : "bg-transparent text-white dark:bg-gray-900/50 dark:text-white"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔹 Logo / Name */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          Rakshith Roy Gantagogula
        </Link>

        {/* 🔹 Navbar Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-blue-400 transition cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="public\Rakshith_Roy_Gantagogula_SE.pdf"
                download="Rakshith_Roy_Gantagogula_SE.pdf"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition"
            >
             Download Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

