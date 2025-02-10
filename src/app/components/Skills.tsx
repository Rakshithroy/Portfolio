"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  {
    category: "Programming & Development",
    items: [
      { name: "Python", level: 90 },
      { name: "GoLang", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript (React, Next.js)", level: 75 },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "AWS (S3, EC2, RDS)", level: 85 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", level: 80 },
      { name: "GitHub Actions", level: 75 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    category: "Agile & Software Development",
    items: [
      { name: "Scrum", level: 85 },
      { name: "Kanban", level: 80 },
      { name: "CI/CD (Jenkins, GitHub Actions)", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold">Skills & Technologies</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A refined selection of my technical skills based on hands-on experience in projects and internships.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl text-black font-semibold mb-4">{skill.category}</h3>
            {skill.items.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="h-2.5 bg-blue-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
