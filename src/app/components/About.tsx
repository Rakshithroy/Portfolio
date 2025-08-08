"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-32 px-6 text-center text-slate-900 dark:text-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold mb-10 text-slate-900 dark:text-white">Who Am I?</h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-16">
        {/* Profile Image */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-full overflow-hidden shadow-lg">
          <Image 
            src="/IMG_2296.JPG" 
            fill 
            className="object-cover" 
            alt="Rakshith Roy Gantagogula"
          />
        </div>

        {/* About Content */}
          <div className="text-left max-w-2xl space-y-6">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Hi! I&apos;m <span className="font-bold">Rakshith Roy Gantagogula</span> — a Full Stack Developer with <span className="font-bold">4 years</span> of building robust, cloud-native SaaS solutions. Currently shaping Kaseya&apos;s IT ecosystem, I specialize in high-performance <span className="text-blue-600 dark:text-blue-400">APIs</span>, <span className="text-blue-600 dark:text-blue-400">microservices</span>, and <span className="text-blue-600 dark:text-blue-400">end-to-end cloud architectures</span>.
          </p>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-3">
            <li>🚀 Expert in <span className="font-bold">Java (Spring Boot)</span>, <span className="font-bold">Python</span>, <span className="font-bold">JavaScript</span>, and <span className="font-bold">GoLang</span>.</li>
            <li>☁️ Hands-on with <span className="font-bold">AWS, Docker, Kubernetes, Terraform</span>, and CI/CD pipelines.</li>
            <li>💻 Built dynamic reporting tools and scalable REST APIs serving <span className="font-bold">200,000+ users</span>.</li>
            <li>🏆 AWS Certified Cloud Practitioner & HashiCorp Terraform Associate.</li>
            <li>🎓 Master&apos;s in Information Technology & Management from UTD.</li>
          </ul>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              I thrive in Agile teams, bridging backend efficiency with frontend elegance. Let&apos;s connect and craft something impactful together!
            </p>
          </div>
        </div>
      </motion.section>
  );
}
