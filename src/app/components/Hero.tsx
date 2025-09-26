"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x, y });
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        id="hero"
        onMouseMove={handlePointerMove}
        className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      >
        {/* Liquid Glass layered background */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl"
          style={{
            transform: `translate3d(${pointer.x * -20}px, ${pointer.y * -20}px, 0)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl"
          style={{
            transform: `translate3d(${pointer.x * 30}px, ${pointer.y * 30}px, 0)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
        {/* Glass shine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px 200px at ${50 + pointer.x * 30}% ${30 + pointer.y * 20}%, rgba(255,255,255,0.08), transparent 60%)`,
          }}
        />
        <motion.div
          className="relative z-10 max-w-3xl w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl px-8 py-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-semibold text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Rakshith Roy Gantagogula
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            AI/ML Engineer | Finance &amp; Technology | LLMs, Generative AI &amp; MLOps | Python • PyTorch • AWS • HuggingFace | Driving Scalable AI Solutions &amp; Cloud Cost Optimization
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
        </motion.div>
        <span className="absolute bottom-10 text-white/70 animate-bounce">↓ Scroll</span>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center py-32 px-6 bg-white text-black text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="mt-4 max-w-3xl w-full rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-xl p-6">
          <p className="max-w-2xl text-lg md:text-xl text-gray-700">
            🚀 AI/ML Engineer with 3+ years delivering end-to-end ML &amp; Generative AI across finance, healthcare, and tech. I build large-scale LLM training/inference platforms, production-ready MLOps, and optimize cloud for efficiency and cost.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="flex flex-col items-center justify-center py-32 px-6 bg-gray-100 text-black text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <div className="mt-6 grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-lg p-6 text-left">
            <h3 className="font-semibold text-xl">Distributed LLM Platform</h3>
            <p className="mt-2 text-gray-700">Architected a platform for multi-billion parameter LLMs, enabling 100+ production AI agents across business units.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-lg p-6 text-left">
            <h3 className="font-semibold text-xl">AI Assistants &amp; PR Agent</h3>
            <p className="mt-2 text-gray-700">Built GPT-4/Claude assistants and a PR review agent; saved ~3 hours/day per department and cut review time by 30%.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-lg p-6 text-left">
            <h3 className="font-semibold text-xl">ETL Monitoring &amp; NLP</h3>
            <p className="mt-2 text-gray-700">Reduced retrieval latency by 40% with DynamoDB→PostgreSQL ETL + React UI; shipped BERT models improving sentiment accuracy.</p>
          </div>
        </div>
        <a href="#projects" className="mt-10 inline-block text-blue-600 font-semibold underline">
          View All Projects
        </a>
      </section>
    </main>
  );
}
