"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative py-32 px-6 text-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Experience</h2>
      <div className="mt-16 max-w-5xl mx-auto text-left space-y-16">
        {/* Experience 1 - CGI */}
        <div className="relative p-10 border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-2xl shadow-xl transition hover:shadow-2xl will-change-transform hover:scale-[1.01] hover:[transform:perspective(1000px)_rotateX(0.4deg)_rotateY(-0.4deg)]">
          <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            AI/ML Engineer
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            CGI · Dallas, TX | Jul 2024 – Present
          </p>
          <ul className="mt-6 text-gray-900 dark:text-gray-100 list-disc list-inside space-y-2 marker:text-purple-400/70">
            <li>Architected and deployed a distributed AI/ML platform for multi-billion parameter LLMs, enabling 100+ production AI agents across business units.</li>
            <li>Built a GPT-4/Claude-powered knowledge assistant that automated internal queries, reducing manual workload by ~3 hours/day per department and scaling GenAI adoption from 1K → 4.5K employees.</li>
            <li>Implemented an AI-driven code review agent integrated with GitHub PRs, cutting review cycle time by 30% and lowering post-deployment defects by 15%.</li>
            <li>Designed an ETL pipeline (DynamoDB → PostgreSQL) with a ReactJS dashboard, improving monitoring efficiency and reducing retrieval latency by 40%.</li>
            <li>Developed reusable Python/Node.js libraries for ML workflows, reducing cloud infrastructure costs by 20%.</li>
            <li>Automated infra provisioning and CI/CD deployments with Pulumi, Docker, and GitHub Actions, ensuring consistent multi-env rollouts.</li>
            <li>Enhanced observability with CloudWatch and QuickSight dashboards for real-time AI/ML pipeline monitoring.</li>
          </ul>
        </div>

        {/* Experience 2 - Hexaware */}
        <div className="relative p-10 border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-2xl shadow-xl transition hover:shadow-2xl will-change-transform hover:scale-[1.01] hover:[transform:perspective(1000px)_rotateX(0.4deg)_rotateY(-0.4deg)]">
          <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Machine Learning Engineer
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            Hexaware Technologies · Bengaluru, India | Jan 2020 – Jul 2022
          </p>
          <ul className="mt-6 text-gray-900 dark:text-gray-100 list-disc list-inside space-y-2 marker:text-purple-400/70">
            <li>Designed and deployed an automated churn prediction system using ML algorithms like Logistic Regression, Decision Trees, and Gradient Boosting, improving customer retention by 25%.</li>
            <li>Developed a BERT-based sentiment analysis model with 90% accuracy and automated pipelines for continuous extraction and retraining on banking data.</li>
            <li>Performed detailed preprocessing and feature engineering on transactional, demographic, and service usage datasets to optimize model performance.</li>
            <li>Developed REST APIs in Flask to integrate churn models into CRM systems, enabling real-time retention alerts.</li>
            <li>Created dashboards with Tableau/Power BI to communicate insights, improving adoption by 30%.</li>
          </ul>
        </div>

        {/* Experience 3 - XNODE Inc. */}
        <div className="relative p-10 border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-2xl shadow-xl transition hover:shadow-2xl will-change-transform hover:scale-[1.01] hover:[transform:perspective(1000px)_rotateX(0.4deg)_rotateY(-0.4deg)]">
          <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            AI Engineer Intern
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            XNODE Inc. · Dallas, TX (Remote) | Jan 2024 – Jul 2024
          </p>
          <ul className="mt-6 text-gray-900 dark:text-gray-100 list-disc list-inside space-y-2 marker:text-purple-400/70">
            <li>Developed secure microservices in FastAPI for Slack integration, enabling storage and retrieval of messages in SQLite.</li>
            <li>Implemented Azure Key Vault for secret management and JWT authentication for security hardening.</li>
            <li>Built and tested LangChain pipelines for structured prompt storage and response generation in GenAI workflows.</li>
            <li>Collaborated with cross-functional teams to align LLM-driven features with product requirements and user needs.</li>
          </ul>
        </div>
        {/* Academic Experience */}
        <div className="relative p-10 border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-2xl shadow-xl transition hover:shadow-2xl will-change-transform hover:scale-[1.01] hover:[transform:perspective(1000px)_rotateX(0.4deg)_rotateY(-0.4deg)]">
          <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Graduate Research & Academic Projects
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            The University of Texas at Dallas · Richardson, TX | 2023 – 2024
          </p>
          <ul className="mt-6 text-gray-900 dark:text-gray-100 list-disc list-inside space-y-2 marker:text-purple-400/70">
            <li>Developed a Clinical RAG Assistant for provider notes using LangChain, FAISS, and OpenAI/Claude for summarization and Q&amp;A; reduced time-to-answer by ~32% in a class study.</li>
            <li>Designed an ETL Job Monitor with anomaly detection and LLM-based natural language alerts, leveraging DynamoDB → PostgreSQL pipelines and React dashboards.</li>
            <li>Engineered H&amp;M Personalized Fashion Recommendations combining collaborative filtering and lightweight transformers on product descriptions, evaluated with MAP@K metrics.</li>
            <li>Created multiple personal training projects including LLM Cost Optimizer, PR Review Agent, and a Multimodal Recipe Generator (CLIP + GPT), demonstrating applied Generative AI expertise.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
