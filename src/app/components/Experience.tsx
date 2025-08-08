"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
      <motion.section
        id="experience"
        className="py-32 px-6 text-center text-slate-900 dark:text-slate-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Experience</h2>
      <div className="mt-16 max-w-5xl mx-auto text-left space-y-12">
        {/* Experience 1 - Escape 360 Cafe */}
        <motion.div
          className="p-10 ios-card rounded-2xl transition hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
            Full Stack Developer
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Escape 360 Cafe | Jun 2023 – Jan 2024
          </p>
          <ul className="mt-6 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-2">
            <li>Built a full-stack ordering platform with React, Node.js and MongoDB, powering online and in-store sales.</li>
            <li>Implemented real-time order tracking and an admin dashboard, cutting fulfillment time by 20%.</li>
            <li>Designed a mobile-first, glassy UI with Tailwind CSS for a seamless customer experience.</li>
            <li>Dockerized services and deployed on AWS for reliable, scalable operation.</li>
          </ul>
        </motion.div>

        {/* Experience 2 - Xnode AI */}
        <motion.div
          className="p-10 ios-card rounded-2xl transition hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
            Software Development Engineer
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Xnode AI | Feb 2024 – May 2024
          </p>
          <ul className="mt-6 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-2">
            <li>Developed Next.js features for an AI analytics platform used by early enterprise adopters.</li>
            <li>Created TypeScript APIs connecting front-end dashboards with Python-based inference services.</li>
            <li>Collaborated in an agile team to introduce automated testing and GitHub Actions CI.</li>
            <li>Optimized React state management and caching, improving page load times by 15%.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
