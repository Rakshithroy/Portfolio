"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl text-black font-bold">Experience</h2>
      <div className="mt-8 max-w-4xl mx-auto text-left space-y-8">
        {/* Experience 1 */}
        <div className="p-6 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl text-white dark:text-gray-900 font-semibold">
            Full Stack Developer
          </h3>
          <p className="text-gray-300 dark:text-gray-600">
            Asana, Inc., New Jersey, USA | July 2024 – Present
          </p>
          <ul className="mt-4 text-gray-300 dark:text-gray-600 list-disc list-inside">
            <li>Architected front-end features with Angular, Java, and Python, improving performance by 40%.</li>
            <li>Enhanced system performance by 30% through optimized React.js and Python backends.</li>
            <li>Engineered Golang-based microservices, reducing deployment time by 40%.</li>
            <li>Boosted API performance with Node.js and Express.js, cutting server load by 30%.</li>
            <li>Integrated secure OAuth 2.0 with JWT to protect medical records.</li>
            <li>Audited and optimized databases supporting over 500,000 records with minimal latency.</li>
            <li>Achieved 90% test coverage using JUnit, Selenium, Cypress, and reduced defects by 40%.</li>
            <li>Developed FastAPI-based APIs with 30% faster response times.</li>
            <li>Led Agile teams with a 92% on-time delivery success rate.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="p-6 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl text-white dark:text-gray-900 font-semibold">
            Software Developer
          </h3>
          <p className="text-gray-300 dark:text-gray-600">
            Hexaware Technologies, Bengaluru, India | Nov 2020 – Jul 2022
          </p>
          <ul className="mt-4 text-gray-300 dark:text-gray-600 list-disc list-inside">
            <li>Built Mosaic Cloud Platform modules with Angular, Python, and Scala, improving system performance by 40%.</li>
            <li>Developed responsive UIs using React, Next.js, and Redux, cutting load times by 9%.</li>
            <li>Created optimized RESTful APIs with Node.js, improving response speed by 25%.</li>
            <li>Established Postman-based test framework with 95% automation coverage.</li>
            <li>Modernized UI to meet WCAG 2.1 standards using Angular and Bootstrap.</li>
            <li>Integrated AWS & Azure cloud services for scalable deployment.</li>
            <li>Automated pipelines using Terraform, Jenkins, and Kubernetes, enabling zero-downtime releases.</li>
            <li>Scaled high-traffic e-commerce platform using Docker and Kafka.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
