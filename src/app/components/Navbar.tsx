"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-black shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-semibold tracking-tight cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rakshith Roy
        </motion.h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 transition cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 transition cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 transition cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/Rakshith_Roy_Resume.pdf"
              download
              className="bg-black text-white hover:bg-gray-900 px-5 py-2 rounded-full font-medium transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white/90 backdrop-blur-md w-full py-6 px-6 absolute top-16 left-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-gray-700 transition cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-gray-700 transition cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-700 transition cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/Rakshith_Roy_Resume.pdf"
                download
                className="bg-black text-white hover:bg-gray-900 px-5 py-2 rounded-full font-medium transition block text-center"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
