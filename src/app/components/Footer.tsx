"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-white py-20 px-6 text-center overflow-hidden glass-footer">
      {/* Liquid Glass background layers */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />
      <motion.div
        id="contact"
        className="relative max-w-4xl mx-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="mt-2 text-white/80 max-w-2xl mx-auto">
          Open to exciting opportunities and meaningful collaborations. Drop me a line!
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-lg">
          <a
            href="mailto:rakshithroygantagogula@gmail.com"
            aria-label="Send email to Rakshith Roy"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            📧 Email
          </a>
          <a
            href="tel:+19727304157"
            aria-label="Call Rakshith Roy"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            📞 (972) 730-4157
          </a>
          <a
            href="https://www.linkedin.com/in/rakshith-roy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Rakshithroy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            💻 GitHub
          </a>
          <a
            href="/Rakshith_Roy_Resume.pdf"
            download
            aria-label="Download resume"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            📂 Download Resume
          </a>
          <a
            href="https://www.instagram.com/_rakshithroy_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Instagram profile"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            📷 Instagram
          </a>
          <a
            href="https://x.com/rakshithroy2?s=21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open X (Twitter) profile"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
          >
            🐦 X (Twitter)
          </a>
        </div>

        {/* Optional Map */}
        <div className="mt-12 glass-card max-w-3xl mx-auto p-2">
          <iframe
            title="Location Map"
            className="w-full h-80 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3883288177385!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9910c52a47fb%3A0xe6a8df9f0e3fef5a!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1647831369185!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Copyright */}
        <div className="mt-10 text-white/70 text-sm">
          © {new Date().getFullYear()} Rakshith Roy | All Rights Reserved
        </div>
      </motion.div>
    </footer>
  );
}
