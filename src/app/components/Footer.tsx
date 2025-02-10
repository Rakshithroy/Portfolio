"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔹 Contact Section Moved to Footer */}
        <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Whether you&apos;re looking for a software engineer or just want to say hi, I&apos;m always open to new conversations.
        </p>

        {/* 🔹 Contact Links */}
        <div className="mt-6 flex flex-wrap justify-center space-x-6">
          <a href="mailto:Rakshithroygantagogula@gmail.com" className="text-blue-400 hover:scale-110 transition">
            📧 Email
          </a>
          <a href="https://www.linkedin.com/in/rakshith-roy" target="_blank" className="text-blue-400 hover:scale-110 transition">
            💼 LinkedIn
          </a>
          <a href="https://github.com/Rakshithroy" target="_blank" className="text-blue-400 hover:scale-110 transition">
            💻 GitHub
          </a>
          <a href="/Rakshith_Roy_Gantagogula_SE.pdf" 
             download 
            className="text-blue-400 hover:scale-110 transition"
          >
             📂 Download Resume
          </a>


          <a href="https://www.instagram.com/_rakshithroy_/" target="_blank" className="text-blue-400 hover:scale-110 transition">
            📷 Instagram
          </a>
          <a href="https://x.com/rakshithroy2?s=21" target="_blank" className="text-blue-400 hover:scale-110 transition">
            🐦 X (Twitter)
          </a>
        </div>

        {/* 🔹 Location Map */}
        <div className="mt-6">
          <iframe
            title="Location Map"
            className="w-full max-w-md h-64 mx-auto rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3883288177385!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9910c52a47fb%3A0xe6a8df9f0e3fef5a!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1647831369185!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* 🔹 Copyright */}
        <div className="mt-6 text-gray-500">
          <p>© {new Date().getFullYear()} Rakshith Roy | All Rights Reserved</p>
        </div>
      </motion.div>
    </footer>
  );
}
