"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    title: "Databricks Academy Accreditation – Generative AI Fundamentals",
    issuer: "Databricks",
    companyLogo: "/icons/databricks.jpeg", // Databricks Logo
    badge: "/icons/Databricks_bage.png", // Databricks Badge
    description: "Accreditation covering foundations of Generative AI, LLMs, and applied use cases on the Databricks platform.",
    link: "https://www.databricks.com/training/certification/academy-accreditation-generative-ai-fundamentals",
  },
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
      className="relative py-32 px-6 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />

      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">🎓 Certifications & Achievements</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Continuous learning keeps me ahead in tech. These credentials validate my skills in cloud, DevOps, and software engineering.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="p-8 glass-card bg-white/70 dark:bg-black/40 transition hover:shadow-xl text-left relative"
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
              <div className="mt-4 flex justify-center glass-card p-4">
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
