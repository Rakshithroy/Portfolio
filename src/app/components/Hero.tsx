"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center h-screen text-center p-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl text-white font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Digital Universe
        </motion.h1>
        <motion.p
          className="text-xl text-white mt-4 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Hi, I&apos;m Rakshith Roy. A Software Engineer passionate about scalable systems, AI, and cloud computing.
        </motion.p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projects">
            <Button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md">
              Explore My Work
            </Button>
          </a>
          <a href="#contact">
            <Button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg shadow-md">
              Let&apos;s Connect
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
