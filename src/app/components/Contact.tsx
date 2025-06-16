

"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-32 px-6 bg-white dark:bg-black text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">Contact Me</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Have a project in mind or want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
      </p>

      <form className="mt-12 max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        ></textarea>
        <button
          type="submit"
          className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}