

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
      <motion.section
        id="contact"
        className="py-32 px-6 text-center text-slate-900 dark:text-slate-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Contact Me</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
        Have a project in mind or want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
      </p>

        <form className="mt-12 max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 ios-card rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 ios-card rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 ios-card rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
          ></textarea>
          <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
        </form>
    </motion.section>
  );
}