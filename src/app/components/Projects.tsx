"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const academicProjects = [
  {
    title: "Cloud-Based Inventory Management System",
    institution: "University of Texas at Dallas",
    description:
      "Designed and developed a distributed inventory management system using AWS (S3, EC2, RDS) for enhanced scalability and reliability. Built microservices architecture with secure APIs to synchronize real-time data across the platform, reducing operational delays by 30%.",
    techStack: ["AWS", "Python", "Flask", "CI/CD", "Microservices"],
  },
  {
    title: "H&M Personalized Fashion Recommendations Dataset",
    institution: "University of Texas at Dallas",
    description:
      "Engineered a personalized recommendation engine using collaborative filtering algorithms, achieving an 85% accuracy rate based on user preferences. Conducted data preprocessing using Python (Pandas, NumPy) to clean and analyze large datasets of customer behavior.",
    techStack: ["Python", "Machine Learning", "SQL", "MongoDB"],
  },
  {
    title: "Software-Controlled Conveyor Belt Project",
    institution: "University of Texas at Dallas",
    description:
      "Developed a modular conveyor belt system with real-time monitoring and control, leveraging distributed computing concepts to improve schedule efficiency by 30%. Implemented resource optimization tools such as JIRA and MS Project, delivering the project 20% under budget.",
    techStack: ["Embedded Systems", "Distributed Computing", "JIRA", "MS Project"],
  },
  {
    title: "Online User Data Verification Using AI",
    institution: "Pragati Engineering College",
    description:
      "Built a face recognition module using OpenCV and TensorFlow, achieving a 90% accuracy rate for automated user verification. Developed end-to-end encrypted data pipelines and secure APIs using Java and Spring, improving system efficiency by 30%.",
    techStack: ["OpenCV", "TensorFlow", "Java", "Spring"],
  },
];

const personalProjects = [
  {
    title: "Simple Reservation System (GoLang)",
    description:
      "Developed a restaurant reservation system that handles adding, viewing, and canceling reservations with time slot availability checks.",
    techStack: ["GoLang", "File System", "Concurrency"],
    github: "https://github.com/Rakshithroy/simple-reservation-system",
  },
  {
    title: "Slack Integration with Flask & SQLite",
    description:
      "Built a backend service that connects Slack with a Flask API to send and store messages, ensuring persistence using SQLite.",
    techStack: ["Flask", "SQLite", "Slack API"],
    github: "https://github.com/Rakshithroy/slack-integration",
  },
  {
    title: "Terraform Takeaway (AWS ECS + Aurora DB)",
    description:
      "Automated AWS infrastructure provisioning for an ECS cluster and an Aurora database using Terraform.",
    techStack: ["Terraform", "AWS Fargate", "Aurora DB"],
    github: "https://github.com/Rakshithroy/terraform-takeaway",
  },
];

export default function Projects() {
  const [showAcademic, setShowAcademic] = useState(true);

  return (
    <motion.section
      id="projects"
      className="py-32 px-6 text-center bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">Projects</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A showcase of my academic and personal projects demonstrating practical solutions and technical depth.
      </p>

      {/* Toggle Button */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          className={`px-8 py-3 rounded-full text-white font-semibold shadow transition ${
            showAcademic ? "bg-black dark:bg-white dark:text-black" : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={() => setShowAcademic(true)}
        >
          Academic Projects
        </button>
        <button
          className={`px-8 py-3 rounded-full text-white font-semibold shadow transition ${
            !showAcademic ? "bg-black dark:bg-white dark:text-black" : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={() => setShowAcademic(false)}
        >
          GitHub
        </button>
      </div>

      {/* Project List */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {(showAcademic ? academicProjects : personalProjects).map((project, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
            {"institution" in project && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.institution}</p>
            )}
            <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {"github" in project && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
