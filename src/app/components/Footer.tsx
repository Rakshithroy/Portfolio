"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 text-center">
      <motion.div
        id="contact"
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          Open to exciting opportunities and meaningful collaborations. Drop me a line!
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg">
          <a href="mailto:Rakshithroygantagogula@gmail.com" className="hover:underline transition">
            📧 Email
          </a>
          <a href="tel:+19727304157" className="hover:underline transition">
            📞 (972) 730-4157
          </a>
          <a href="https://www.linkedin.com/in/rakshith-roy" target="_blank" className="hover:underline transition">
            💼 LinkedIn
          </a>
          <a href="https://github.com/Rakshithroy" target="_blank" className="hover:underline transition">
            💻 GitHub
          </a>
          <a href="/Rakshith_Roy_Resume.pdf" download className="hover:underline transition">
            📂 Download Resume
          </a>
          <a href="https://www.instagram.com/_rakshithroy_/" target="_blank" className="hover:underline transition">
            📷 Instagram
          </a>
          <a href="https://x.com/rakshithroy2?s=21" target="_blank" className="hover:underline transition">
            🐦 X (Twitter)
          </a>
        </div>

        {/* Optional Map */}
        <div className="mt-12">
          <iframe
            title="Location Map"
            className="w-full max-w-lg h-72 mx-auto rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3883288177385!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9910c52a47fb%3A0xe6a8df9f0e3fef5a!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1647831369185!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} Rakshith Roy | All Rights Reserved
        </div>
      </motion.div>
    </footer>
  );
}
