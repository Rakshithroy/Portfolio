"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] mix-blend-normal">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div
          className={`rounded-2xl px-5 py-3 flex justify-between items-center backdrop-blur-2xl mix-blend-normal transition-colors duration-300
    ${scrolled ? "border border-white/30 bg-black/50 shadow-2xl" : "border border-white/20 bg-white/10 shadow-lg"}`}
        >
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
              <a href="/#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white transition">
                Contact
              </a>
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
                <a href="/#about" className="hover:text-white transition" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition" onClick={toggleMenu}>
                  Contact
                </a>
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
