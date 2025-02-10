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
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold">🎓 Certifications & Achievements</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Continuous learning is key to staying ahead in tech. Here are some of my certifications that validate my expertise in cloud computing, DevOps, and software development.
      </p>

      {/* Certifications Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-left relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Header with Company Logo */}
            <div className="flex items-center space-x-4">
              {/* Company Logo */}
              <Image src={cert.companyLogo} alt={cert.issuer} width={50} height={50} className="rounded-md" />

              <div>
                <h3 className="text-xl text-black font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              </div>
            </div>

            {/* Description */}
            {expanded === index ? (
              <p className="mt-4 text-gray-600 dark:text-gray-300">{cert.description}</p>
            ) : null}

            {/* Badge (For AWS & Terraform) */}
            {cert.badge && (
              <div className="mt-4 flex justify-center">
                <Image src={cert.badge} alt="Certification Badge" width={150} height={150} className="rounded-md" />
              </div>
            )}

            {/* Links */}
            <div className="mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? "Show Less" : "Show More"}
              </button>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-green-500 hover:underline"
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
