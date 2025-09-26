"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  period?: string;
  institution?: string;
  github?: string;
};

const academicProjects: Project[] = [
  {
    title: "Clinical RAG Assistant for Provider Notes",
    institution: "The University of Texas at Dallas (Masters)",
    period: "Jan 2024 – May 2024",
    description:
      "Built a retrieval-augmented generation (RAG) assistant for clinical notes using LangChain, FAISS, and OpenAI/Claude for summarization and Q&A. Implemented chunking (recursive), metadata filtering, and prompt templates with guardrails to reduce hallucinations. Achieved ~32% reduction in time-to-answer in a class study.",
    techStack: ["LangChain", "OpenAI", "Claude", "FAISS", "Python", "FastAPI"],
    github: "https://github.com/Rakshithroy/clinical-rag-assistant"
  },
  {
    title: "ETL Job Monitor with LLM Alerts",
    institution: "The University of Texas at Dallas (Masters)",
    period: "Aug 2023 – Dec 2023",
    description:
      "Designed an ETL monitoring dashboard with anomaly detection and LLM-based natural language alerts. Pipe raw logs → DynamoDB → Postgres; exposed status APIs and a React UI. Added a small GenAI layer for 'Explain this failure' powered by prompt chains.",
    techStack: ["AWS", "DynamoDB", "PostgreSQL", "React", "LangChain", "Python", "FastAPI"],
    github: "https://github.com/Rakshithroy/etl-monitor-llm"
  },
  {
    title: "H&M Personalized Fashion Recommendations",
    institution: "The University of Texas at Dallas (Masters)",
    period: "Jan 2023 – May 2023",
    description:
      "Engineered a recommendation engine combining collaborative filtering and lightweight transformers on product text. Preprocessed millions of interactions with Pandas/NumPy; evaluated with MAP@K.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch"],
    github: "https://github.com/Rakshithroy/hm-recsys"
  },
];

const personalProjects: Project[] = [
  {
    title: "Pull Request Reviewer Agent (OSS Replica)",
    period: "2024",
    description:
      "Recreated a PR review agent that leaves actionable comments on GitHub PRs. Uses static analysis + an LLM critique pass and a cost-aware router. Benchmarked on 20 PRs across Python/TS repos.",
    techStack: ["GitHub API", "LangChain", "OpenAI", "TypeScript", "Node.js", "Docker"],
    github: "https://github.com/Rakshithroy/pr-review-agent"
  },
  {
    title: "LLM Cost Optimizer",
    period: "2024",
    description:
      "CLI + service that compares providers/models, estimates token usage, and suggests compression (prompt refactor, caching, partial retrieval). Logs to SQLite and exports comparison reports.",
    techStack: ["Python", "Typer", "tiktoken", "Pandas", "LangChain"],
    github: "https://github.com/Rakshithroy/llm-cost-optimizer"
  },
  {
    title: "RAG Starter Kit (DynamoDB → Postgres)",
    period: "2023",
    description:
      "End-to-end RAG template: loaders, splitter config, embeddings store, and query chains. Includes a migration utility from DynamoDB JSON to Postgres with pgvector.",
    techStack: ["Python", "pgvector", "PostgreSQL", "DynamoDB", "LangChain", "FastAPI"],
    github: "https://github.com/Rakshithroy/rag-starter-kit"
  },
  {
    title: "Multimodal Recipe Generator",
    period: "2023",
    description:
      "Personal training project: built a recipe generator that accepts both image inputs of ingredients and text prompts to suggest dishes. Used CLIP embeddings for image understanding and combined with GPT for text-to-recipe generation.",
    techStack: ["Python", "PyTorch", "CLIP", "LangChain", "OpenAI"],
    github: "https://github.com/Rakshithroy/multimodal-recipe-generator"
  },
  {
    title: "Simple Reservation System (Go)",
    period: "2022",
    description:
      "Restaurant reservation system handling add/view/cancel with slot checks and file-backed storage.",
    techStack: ["Go", "File System", "Concurrency"],
    github: "https://github.com/Rakshithroy/simple-reservation-system"
  },
  {
    title: "Slack Integration (Flask + SQLite)",
    period: "2024",
    description:
      "Backend connector to send/store Slack messages via REST, storing history in SQLite.",
    techStack: ["Flask", "SQLite", "Slack API"],
    github: "https://github.com/Rakshithroy/slack-integration"
  },
  {
    title: "Terraform Takeaway (AWS ECS + Aurora)",
    period: "2022",
    description:
      "Provisioned ECS (Fargate) and Aurora with Terraform; param-driven modules and env-specific var files.",
    techStack: ["Terraform", "AWS Fargate", "Aurora DB"],
    github: "https://github.com/Rakshithroy/terraform-takeaway"
  },
];

export default function Projects() {
  const [showAcademic, setShowAcademic] = useState(true);
  const [filter, setFilter] = useState("All");

  return (
    <motion.section
      id="projects"
      className="py-32 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-6 text-white">Projects</h2>
      <p className="mt-2 text-white/70 max-w-2xl mx-auto">
        A showcase of my academic and personal projects demonstrating practical solutions and technical depth.
      </p>

      {/* Toggle Button */}
      <div className="mt-10 flex justify-center">
        <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-md overflow-hidden">
          <button
            className={`px-6 py-2 text-sm md:text-base ${showAcademic ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"}`}
            onClick={() => setShowAcademic(true)}
          >
            Academic
          </button>
          <button
            className={`px-6 py-2 text-sm md:text-base ${!showAcademic ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10"}`}
            onClick={() => setShowAcademic(false)}
          >
            Personal & OSS
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <LayoutGroup>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["All", "LLM", "RAG", "MLOps", "Data Eng"].map((chip) => {
            const active = filter === chip;
            return (
              <button
                key={chip}
                onClick={() => setFilter(chip)}
                className={`relative px-4 py-1.5 rounded-full border text-sm backdrop-blur-2xl transition ${
                  active
                    ? "text-white border-white/30"
                    : "text-white/70 border-white/20 hover:bg-white/15"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="chipGlow"
                    className="absolute inset-0 rounded-full bg-white/20 shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{chip}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Project List */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {(showAcademic ? academicProjects : personalProjects)
          .filter((project) => {
            if (filter === "All") return true;
            const tags = (project.techStack || []).map((t) => t.toLowerCase());
            if (filter === "LLM") return tags.includes("langchain") || tags.includes("openai") || tags.includes("claude") || tags.includes("huggingface");
            if (filter === "RAG") return project.title.toLowerCase().includes("rag") || tags.includes("faiss") || tags.includes("pgvector");
            if (filter === "MLOps") return tags.includes("docker") || tags.includes("pulumi") || tags.includes("cicd") || tags.includes("github actions");
            if (filter === "Data Eng") return tags.includes("postgresql") || tags.includes("dynamodb") || tags.includes("spark") || tags.includes("etl");
            return true;
          })
          .map((project, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-lg transition text-left will-change-transform hover:scale-[1.01] hover:[transform:perspective(1000px)_rotateX(1deg)_rotateY(-1deg)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
            {project.period && (
              <p className="text-xs text-white/60 mb-1">{project.period}</p>
            )}
            {project.institution && (
              <p className="text-sm text-white/70 mb-2">{project.institution}</p>
            )}
            <p className="mb-4 text-white/85">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-white/20 bg-white/10 text-white text-xs font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white/90 font-medium hover:text-white underline decoration-white/40 hover:decoration-white"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
