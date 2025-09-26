"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-32 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Layers */}
      <div aria-hidden className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-rose-500/20 to-amber-400/20 blur-3xl" />
      <h2 className="text-5xl font-bold mb-10 text-white">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-16">
        {/* Profile Image */}
        <div className="glass-card p-1 rounded-full">
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-full overflow-hidden">
            <Image 
              src="/IMG_2296.JPG" 
              fill 
              className="object-cover" 
              alt="Rakshith Roy Gantagogula"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="glass-card text-left max-w-2xl space-y-6 p-8 md:p-10">
          <p className="text-xl text-white/80 leading-relaxed">
            Hi! I&apos;m <span className="font-bold text-white">Rakshith Roy Gantagogula</span> — an AI/ML Engineer with <span className="font-bold">3+ years</span> of experience delivering scalable Generative AI, LLM, and MLOps solutions. I specialize in building <span className="text-cyan-300">end-to-end AI platforms</span>, <span className="text-cyan-300">LLM applications</span>, and <span className="text-cyan-300">cloud-native systems</span> that drive measurable business impact.
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-3">
            <li>🚀 Proficient in <span className="font-bold">Python, GoLang, Java, TypeScript</span> with strong backend and AI/ML focus.</li>
            <li>🤖 Hands-on with <span className="font-bold">PyTorch, HuggingFace, LangChain, TensorFlow</span> for AI/ML development.</li>
            <li>☁️ Cloud & DevOps: <span className="font-bold">AWS (SageMaker, Bedrock, ECS), Docker, Kubernetes, Pulumi/Terraform</span>, CI/CD pipelines.</li>
            <li>📊 Built AI-driven assistants, RAG systems, PR review agents, and churn/NLP models improving productivity by 25–40%.</li>
            <li>🏆 Certified: Databricks Generative AI Fundamentals, AWS Cloud Practitioner, Terraform Associate.</li>
            <li>🎓 Master&apos;s in Information Technology & Management from UT Dallas.</li>
          </ul>
          <p className="text-xl text-white/80 leading-relaxed">
            I thrive at the intersection of AI engineering, cloud infrastructure, and automation — helping organizations unlock productivity, reduce costs, and scale AI adoption. Let&apos;s connect and build the future of AI together!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
