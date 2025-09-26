"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-32 px-6 bg-white dark:bg-black text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">Experience</h2>
      <div className="mt-16 max-w-5xl mx-auto text-left space-y-12">
        {/* Experience 1 - CGI */}
        <div className="p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            AI/ML Engineer
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            CGI · Dallas, TX | Jul 2024 – Present
          </p>
          <ul className="mt-6 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
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
        <div className="p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Machine Learning Engineer
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Hexaware Technologies · Bengaluru, India | Jan 2020 – Jul 2022
          </p>
          <ul className="mt-6 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>Designed and deployed an automated churn prediction system using ML algorithms like Logistic Regression, Decision Trees, and Gradient Boosting, improving customer retention by 25%.</li>
            <li>Developed a BERT-based sentiment analysis model with 90% accuracy and automated pipelines for continuous extraction and retraining on banking data.</li>
            <li>Performed detailed preprocessing and feature engineering on transactional, demographic, and service usage datasets to optimize model performance.</li>
            <li>Developed REST APIs in Flask to integrate churn models into CRM systems, enabling real-time retention alerts.</li>
            <li>Created dashboards with Tableau/Power BI to communicate insights, improving adoption by 30%.</li>
          </ul>
        </div>

        {/* Experience 3 - XNODE Inc. */}
        <div className="p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            AI Engineer Intern
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            XNODE Inc. · Dallas, TX (Remote) | Jan 2024 – Jul 2024
          </p>
          <ul className="mt-6 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>Developed secure microservices in FastAPI for Slack integration, enabling storage and retrieval of messages in SQLite.</li>
            <li>Implemented Azure Key Vault for secret management and JWT authentication for security hardening.</li>
            <li>Built and tested LangChain pipelines for structured prompt storage and response generation in GenAI workflows.</li>
            <li>Collaborated with cross-functional teams to align LLM-driven features with product requirements and user needs.</li>
          </ul>
        </div>
        {/* Academic Experience */}
        <div className="p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow transition hover:shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Graduate Research & Academic Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            The University of Texas at Dallas · Richardson, TX | 2023 – 2024
          </p>
          <ul className="mt-6 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
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
