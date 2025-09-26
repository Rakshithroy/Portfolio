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
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-lg px-5 py-3 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            <h1 className="text-2xl font-semibold tracking-tight cursor-pointer text-white/90">
              Rakshith Roy Gantagogula
            </h1>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white/90">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg text-white/80">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-white transition cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/Rakshith_Roy_Resume.pdf"
                download
                className="px-5 py-2 rounded-full font-medium transition border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden w-full py-6 px-6 absolute top-16 left-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-lg p-6 text-white">
            <ul className="flex flex-col space-y-4 text-lg text-white/85">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition cursor-pointer"
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
                  className="hover:text-white transition cursor-pointer"
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
                  className="hover:text-white transition cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/Rakshith_Roy_Resume.pdf"
                  download
                  className="px-5 py-2 rounded-full font-medium transition border border-white/20 bg-white/10 text-white hover:bg-white/20 block text-center"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
