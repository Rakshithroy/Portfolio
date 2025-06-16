"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "GoLang", level: 85 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 85 },
      { name: "Kotlin", level: 70 },
      { name: "Bash", level: 75 },
      { name: "OOP", level: 95 },
    ],
  },
  {
    category: "Frameworks & Technologies",
    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Jenkins", level: 85 },
      { name: "Git", level: 90 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "Microservices", level: 90 },
      { name: "JUnit", level: 85 },
      { name: "RabbitMQ", level: 75 },
      { name: "Agile/Scrum", level: 95 },
    ],
  },
  {
    category: "Front-End",
    items: [
      { name: "React.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Ember.js", level: 70 },
      { name: "HTML5", level: 90 },
      { name: "CSS3 / SCSS", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Webpack", level: 75 },
    ],
  },
  {
    category: "Operating Systems & Tools",
    items: [
      { name: "Linux (Ubuntu, RHEL)", level: 85 },
      { name: "Windows Server", level: 80 },
      { name: "Jira", level: 90 },
      { name: "Confluence", level: 85 },
      { name: "GitLab CI/CD", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-32 px-6 text-center bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">Skills & Technologies</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A curated showcase of my technical expertise, honed through real-world projects and industry experience.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">{skill.category}</h3>
            {skill.items.map((item, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 bg-black dark:bg-white rounded-full"
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
