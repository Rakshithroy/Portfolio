"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    companyLogo: "/icons/aws.png", // AWS Logo
    badge: "/icons/AWS.sa.png", // AWS Digital Badge
    description: "Validates expertise in designing distributed systems on AWS.",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    companyLogo: "/icons/hashicorp.png", // HashiCorp Logo
    badge: "/icons/terraform.a.png", // Terraform Digital Badge
    description: "Demonstrates proficiency in Terraform and Infrastructure as Code (IaC).",
    link: "https://www.hashicorp.com/certification/terraform-associate",
  },
  {
    title: "Advanced Python Programming",
    issuer: "Udemy",
    companyLogo: "/icons/Udemy.png", // Udemy Logo
    badge: null, // No Badge for Udemy
    description: "Covers advanced Python concepts for automation, backend, and data science.",
    link: "#",
  },
  {
    title: "Complete Developer’s Guide in GoLang",
    issuer: "Udemy",
    companyLogo: "/icons/Udemy.png", // Udemy Logo
    badge: null, // No Badge for Udemy
    description: "Comprehensive guide to GoLang for backend and system programming.",
    link: "#",
  },
];

export default function Certifications() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      id="certifications"
      className="py-32 px-6 text-center bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">🎓 Certifications & Achievements</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Continuous learning keeps me ahead in tech. These credentials validate my skills in cloud, DevOps, and software engineering.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg text-left relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <Image src={cert.companyLogo} alt={cert.issuer} width={50} height={50} className="rounded-md" />
              <div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              </div>
            </div>

            {expanded === index && (
              <p className="mt-4 text-gray-700 dark:text-gray-300">{cert.description}</p>
            )}

            {cert.badge && (
              <div className="mt-4 flex justify-center">
                <Image src={cert.badge} alt="Certification Badge" width={150} height={150} className="rounded-md" />
              </div>
            )}

            <div className="mt-4 flex items-center gap-4">
              <button
                className="text-blue-600 hover:underline font-medium"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? "Show Less" : "Show More"}
              </button>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-medium"
                >
                  View Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
