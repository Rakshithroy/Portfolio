"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
      <motion.section
        id="education"
        className="py-20 px-6 text-center relative text-slate-900 dark:text-slate-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">🎓 Education</h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* 🔹 UTD Background Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image 
            src="/icons/UTDCampus.jpg" 
            alt="University of Texas at Dallas" 
            width={1200}
            height={800}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg" /> {/* Overlay for readability */}
        </div>

        {/* 🔹 Education Details */}
        <div className="w-full md:w-1/2 text-left max-w-2xl">
            <h3 className="text-2xl font-semibold">Master of Science in Information Technology & Management</h3>
            <p className="text-slate-500 dark:text-slate-400">University of Texas at Dallas (2022 - 2024)</p>

            <p className="mt-4 text-slate-700 dark:text-slate-300">
            Studying at UT Dallas has been a transformative experience, shaping my technical skills and deepening my understanding of scalable cloud architectures, AI-driven solutions, and enterprise software development.
          </p>

            <p className="mt-2 text-slate-700 dark:text-slate-300">
            From hands-on capstone projects to collaborating with talented peers, UTD provided me with an innovative and research-driven environment to thrive as a software engineer.
          </p>

          {/* 🔹 Relevant Coursework */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">📚 Relevant Coursework:</h4>
              <ul className="mt-2 text-slate-600 dark:text-slate-400 list-disc list-inside">
              <li>Agile Project Management</li>
              <li>Cloud Computing Fundamentals</li>
              <li>Object-Oriented Programming in Python</li>
              <li>Data Structures and Algorithms</li>
              <li>Systems Programming</li>
              <li>Database Foundations</li>
            </ul>
          </div>

          {/* 🔹 Leadership & Achievements */}
          <div className="mt-6 ios-card p-4 rounded-lg shadow-md">
            <h4 className="text-lg text-slate-900 dark:text-white font-semibold">🏆 Leadership & Achievements</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Head of Social Media Team, Lion&apos;s Club (2022 - 2024)
              Directed campaigns that boosted **social media engagement by 40%**, effectively promoting club initiatives.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
