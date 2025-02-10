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
            Software Engineer Intern
          </h3>
          <p className="text-gray-300 dark:text-gray-600">
            Sacrosanctinfo.LLC | Jan 2024 – Apr 2024
          </p>
          <ul className="mt-4 text-gray-300 dark:text-gray-600 list-disc list-inside">
            <li>
              Architected scalable backend systems using Java, Spring Core, and
              Spring Batch.
            </li>
            <li>
              Automated infrastructure provisioning with Terraform, reducing
              deployment time by 40%.
            </li>
            <li>
              Designed secure APIs to enable seamless third-party integrations.
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="p-6 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl text-white dark:text-gray-900 font-semibold">
            Data Engineer Intern
          </h3>
          <p className="text-gray-300 dark:text-gray-600">
            Xnode.ai | Current Role
          </p>
          <ul className="mt-4 text-gray-300 dark:text-gray-600 list-disc list-inside">
            <li>
              Optimized data pipelines for AI-powered analytics and insights.
            </li>
            <li>
             Designed and implemented robust logging and monitoring systems, increasing system observability.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
