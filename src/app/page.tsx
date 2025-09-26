"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import BeyondWork from "./components/BeyondWork";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <BeyondWork />
      <Footer />

      {/* 🔥 Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 p-3 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-lg hover:bg-white/20 hover:shadow-xl transition"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </div>
  );
}
