"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-4xl text-black font-bold">Experience</h2>
      <div className="mt-8 max-w-4xl mx-auto text-left space-y-8">
        {/* Experience 1 - Kaseya */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl text-black dark:text-white font-semibold">
            Full Stack Developer
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Kaseya, Red Bank, NJ | July 2024 – Present
          </p>
          <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Managed user verification system using Spring Boot and microservices, deployed via Docker, Jenkins, and Kubernetes on AWS.</li>
            <li>Improved API response time by 25% and reduced server load by 30% using Node.js and Express.js.</li>
            <li>Built high-performance REST APIs with Java and Spring Boot, enforced integrity through JUnit-based testing.</li>
            <li>Maintained Flask and Django backend services to streamline frontend-backend data exchange.</li>
            <li>Streamlined CI/CD pipelines and Kubernetes deployments with Python and Jenkins tools.</li>
            <li>Developed responsive single-page applications with React.js and Redux for enhanced UX.</li>
            <li>Optimized IoT cloud app design with Webpack, Babel, and AWS integrations, cutting load times by 20%.</li>
            <li>Ensured application scalability and uptime by deploying on AWS with API Gateway support.</li>
            <li>Revamped Python and Golang content with SPA and RWD principles, improving customer retention by 25%.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl text-black dark:text-white font-semibold">
            Software Developer
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Hexaware Technologies, Bengaluru, India | Nov 2020 – Jul 2022
          </p>
          <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside">
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
