"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import BeyondWork from "./components/BeyondWork";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <BeyondWork />
      <Footer />
    </div>
  );
}
