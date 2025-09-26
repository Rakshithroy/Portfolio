"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-32 px-6 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 overflow-hidden text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Liquid Glass background layers */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />

      <motion.div
        className="relative max-w-3xl mx-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Contact Me</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Open to exciting opportunities and meaningful collaborations. Drop me a line!
        </p>

        {/* Quick links */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-lg">
          <a
            href="mailto:rgantagogula@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-gray-900 dark:text-white hover:bg-white/20 transition"
          >
            📧 Email
          </a>
          <a
            href="tel:+19727304157"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-gray-900 dark:text-white hover:bg-white/20 transition"
          >
            📞 (972) 730-4157
          </a>
          <a
            href="https://www.linkedin.com/in/rakshith-roy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-gray-900 dark:text-white hover:bg-white/20 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Rakshithroy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-gray-900 dark:text-white hover:bg-white/20 transition"
          >
            🖥 GitHub
          </a>
        </div>

        {/* At-a-glance details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="glass-card p-4 flex items-center justify-between">
            <span>📍 Location</span>
            <span className="font-medium">Dallas, TX (Hybrid)</span>
          </div>
          <div className="glass-card p-4 flex items-center justify-between">
            <span>🕒 Response</span>
            <span className="font-medium">Within 24 hours</span>
          </div>
          <div className="glass-card p-4 flex items-center justify-between">
            <span>🎯 Roles</span>
            <span className="font-medium">AI/ML Engineer · AI Developer</span>
          </div>
          <div className="glass-card p-4 flex items-center justify-between">
            <span>🌐 Open to</span>
            <span className="font-medium">Full-time · Contract</span>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-2xl overflow-hidden glass-card">
          <iframe
            title="Dallas Map"
            src="https://www.google.com/maps?q=Dallas,TX&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 border-0"
          />
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