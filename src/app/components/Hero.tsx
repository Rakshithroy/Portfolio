"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden"
      >
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        />
        <motion.div
          className="absolute top-0 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        />
        <motion.div
          className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
        />
        <motion.h1
          className="text-6xl md:text-8xl font-semibold text-slate-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rakshith Roy
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-slate-700 dark:text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Crafting scalable systems & elegant digital experiences.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href="#projects">See My Work</Button>
          <Button
            href="#contact"
            className="bg-transparent dark:bg-transparent border border-slate-900/20 dark:border-slate-100/20 hover:bg-white/40 dark:hover:bg-gray-800/40"
          >
            Contact Me
          </Button>
        </div>
        <span className="absolute bottom-10 text-slate-700 dark:text-white/70 animate-bounce">↓ Scroll</span>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center py-32 px-6 text-center text-slate-900 dark:text-slate-100"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl text-lg md:text-xl text-slate-700 dark:text-slate-300">
          I&apos;m a Software Engineer driven by curiosity and a love for elegant code.
          My passion lies in building robust cloud systems and exploring AI-driven solutions.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="flex flex-col items-center justify-center py-32 px-6 text-center text-slate-900 dark:text-slate-100"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="max-w-2xl text-lg md:text-xl text-slate-700 dark:text-slate-300">
          A glimpse into some of my most exciting work, blending technology and creativity.
        </p>
        <Button href="#projects" className="mt-8">
          View All Projects
        </Button>
      </section>
    </main>
  );
}
