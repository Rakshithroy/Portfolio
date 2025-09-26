"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "GoLang", level: 85 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Bash", level: 75 },
    ],
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "HuggingFace", level: 85 },
      { name: "LangChain", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "LLMs / Generative AI", level: 90 },
      { name: "MLOps", level: 85 },
    ],
  },
  {
    category: "Frameworks & Backend",
    items: [
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 80 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (ECS, Lambda, SageMaker, Bedrock, Redshift, DynamoDB)", level: 90 },
      { name: "Azure (Key Vault, Functions, Storage)", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Pulumi / Terraform", level: 80 },
      { name: "CI/CD (GitHub Actions, GitLab, Jenkins)", level: 85 },
    ],
  },
  {
    category: "Databases & Data Engineering",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "DynamoDB", level: 80 },
      { name: "Spark", level: 75 },
      { name: "ETL Pipelines", level: 85 },
    ],
  },
  {
    category: "Visualization & Analytics",
    items: [
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 80 },
      { name: "ReactJS Dashboards", level: 80 },
    ],
  },
  {
    category: "Tools & Collaboration",
    items: [
      { name: "Git", level: 90 },
      { name: "Jira", level: 90 },
      { name: "Confluence", level: 85 },
      { name: "Agile/Scrum", level: 95 },
    ],
  },
  {
    category: "Compliance & Security",
    items: [
      { name: "HIPAA (PHI handling & safeguards)", level: 85 },
      { name: "RBAC & IAM (AWS IAM, OAuth2/JWT)", level: 85 },
      { name: "Secrets Mgmt (Azure Key Vault, AWS KMS)", level: 80 },
      { name: "Encryption at Rest & In Transit (SSE, TLS)", level: 85 },
      { name: "Audit Logging & Monitoring (CloudTrail, CloudWatch)", level: 80 },
      { name: "PII Redaction & Data Masking", level: 80 },
      { name: "Compliance as Code (Policies/Guardrails)", level: 75 }
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-32 px-6 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Skills & Technologies</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A curated showcase of my technical expertise, honed through real-world projects and industry experience.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative p-8 rounded-2xl border border-white/25 bg-white/15 dark:bg-white/10 backdrop-blur-2xl shadow-xl transition hover:shadow-2xl"
          >
            <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">{skill.category}</h3>
            {skill.items.map((item, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
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
