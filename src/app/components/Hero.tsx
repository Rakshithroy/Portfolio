"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden bg-gradient-to-b from-black to-gray-900"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rakshith Roy
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Crafting scalable systems & elegant digital experiences.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#projects">
            <Button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
              See My Work
            </Button>
          </a>
          <a href="#contact">
            <Button className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black">
              Contact Me
            </Button>
          </a>
        </div>
        <span className="absolute bottom-10 text-white/70 animate-bounce">↓ Scroll</span>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center py-32 px-6 bg-white text-black text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700">
          I'm a Software Engineer driven by curiosity and a love for elegant code. 
          My passion lies in building robust cloud systems and exploring AI-driven solutions.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="flex flex-col items-center justify-center py-32 px-6 bg-gray-100 text-black text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700">
          A glimpse into some of my most exciting work, blending technology and creativity.
        </p>
        <a href="#projects" className="mt-8 inline-block text-blue-600 font-semibold underline">
          View All Projects
        </a>
      </section>
    </main>
  );
}
