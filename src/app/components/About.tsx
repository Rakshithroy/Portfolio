"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl text-black font-bold mb-6">Who Am I?</h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-12">
        {/* Profile Image */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
        <Image 
            src="/IMG_2296.JPG" 
            fill 
            className="object-cover"
             alt="My Picture"
        />
        </div>

        {/* About Content */}
        <div className="text-left max-w-2xl space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m <span className="font-semibold">Rakshith Roy Gantagogula</span>, a Software Engineer with a passion for
            <span className="text-blue-500"> scalable systems</span>, <span className="text-blue-500"> cloud computing</span>, and
            <span className="text-blue-500"> full-stack development</span>. I thrive on designing solutions that
            <span className="font-semibold"> enhance efficiency and performance</span>.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>🚀 Strong expertise in <span className="font-semibold">Python, GoLang, and Java</span></li>
            <li>☁️ Experienced with <span className="font-semibold">AWS (S3, EC2, RDS) & Terraform</span></li>
            <li>🛠 Passionate about <span className="font-semibold">building high-performance backend systems</span></li>
            <li>💡 Believe in <span className="font-semibold">continuous learning and innovation</span></li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Let&apos;s <span className="font-semibold">connect and collaborate</span> to build the future of technology together!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
