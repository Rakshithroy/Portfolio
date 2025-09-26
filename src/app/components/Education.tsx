"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="relative py-32 px-6 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">🎓 Education</h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* 🔹 UTD Background Image */}
        <div className="relative w-full md:w-1/2 h-96 glass-card overflow-hidden">
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
        <div className="w-full md:w-1/2 text-left max-w-2xl glass-card p-8">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Master of Science (M.S.) in Information Technology & Management</h3>
          <p className="text-gray-500 dark:text-gray-400">University of Texas at Dallas (2022 - 2024)</p>
          <p className="mt-4 text-gray-900 dark:text-gray-100 leading-relaxed">
            Completed my Master&apos;s at The University of Texas at Dallas with a focus on Artificial Intelligence, Machine Learning, and Cloud Systems. Gained strong expertise in scalable architectures, LLMs/Generative AI, and enterprise software engineering practices.
          </p>
          <p className="mt-2 text-gray-900 dark:text-gray-100 leading-relaxed">
            Academic journey included research-driven projects such as RAG assistants, ETL monitoring dashboards with GenAI insights, and personalized recommender systems. Collaborated with peers and faculty on capstone work bridging AI and cloud engineering.
          </p>

          {/* 🔹 Relevant Coursework */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">📚 Relevant Coursework:</h4>
            <ul className="mt-2 text-gray-800 dark:text-gray-200 list-disc list-inside">
              <li>Machine Learning & Generative AI</li>
              <li>Cloud Computing & Big Data</li>
              <li>Advanced Database Management</li>
              <li>Data Structures & Algorithms</li>
              <li>Systems Programming</li>
              <li>Agile Project Management</li>
            </ul>
          </div>

          {/* 🔹 Leadership & Achievements */}
          <div className="mt-6 glass-card p-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">🏆 Leadership & Achievements</h4>
            <p className="mt-2 text-gray-900 dark:text-gray-100">
              Served as Head of Social Media Team, Lion&apos;s Club (2022 – 2024), leading campaigns that boosted engagement by 40%. Presented graduate-level projects in AI/ML and recognized for innovative use of LangChain and HuggingFace in academic settings.
            </p>
            <ul className="mt-3 text-gray-900 dark:text-gray-100 list-disc list-inside">
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
