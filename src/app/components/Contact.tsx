"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-32 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Liquid Glass background layers */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />

      <motion.div
        className="relative max-w-3xl mx-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="mt-2 text-white/80 max-w-xl mx-auto">
          Have a project in mind or want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-lg">
          <a
            href="mailto:rgantagogula@gmail.com"
            className="hover:underline text-white/90 hover:text-white"
          >
            📧 rgantagogula@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rakshith-roy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white/90 hover:text-white"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Rakshithroy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white/90 hover:text-white"
          >
            🖥 GitHub
          </a>
        </div>

        <form className="mt-12 max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-xl"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 rounded-full font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/20 transition backdrop-blur-xl"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}