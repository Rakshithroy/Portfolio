// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "../components/ui/button";
// import { Sun, Moon } from "lucide-react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience"; 
// import BeyondWork from "./components/BeyondWork"; 

// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       if (newMode) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//       localStorage.setItem("theme", newMode ? "dark" : "light");
//       return newMode;
//     });
//   };

//   return (
//     <div className={`relative min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       <Navbar />
      
//       {/* 🔥 Hero Section with Video Background */}
//       <section id="hero" className="relative flex flex-col items-center justify-center h-screen text-center p-6">
//         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
//           <source src="/background-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className={`absolute inset-0 ${darkMode ? "bg-black/60" : "bg-white/60"}`} />
//         <div className="relative z-10">
//         {/* Floating Icons Animation in Hero Section */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//         {["aws.png", "linkedin.png", "github.png", "docker.png"].map((icon, index) => (
//           <motion.img
//             key={index}
//             src={`/logos/${icon}`}
//             className="absolute opacity-50"
//             initial={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
//             animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           />
//         ))}
//       </div>
//           <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//             Hi, I'm Rakshith Roy
//           </motion.h1>
//           <motion.p className="text-xl mt-4 max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//             A Software Engineer passionate about building scalable systems.
//           </motion.p>
//           <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <a href="#projects">
//               <Button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md">
//                 View My Work
//               </Button>
//             </a>
//             <a href="#contact">
//               <Button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg shadow-md">
//                 Contact Me
//               </Button>
//             </a>
//           </div>
//         </div>
//       </section>


//       {/* 🔥 About Section */}
//       <motion.section id="about" className={`py-20 px-6 ${darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"} text-center`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-6 md:space-y-0 md:space-x-6">
//           <img src="/IMG_2296.JPG" alt="Rakshith Roy" className="w-40 h-40 rounded-full shadow-md" />
//           <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Hi, I'm Rakshith Roy, a Software Engineer passionate about scalable systems, cloud computing, and full-stack development. I love building high-performance applications and learning new technologies.
//           </p>
//         </div>
//       </motion.section>

//       {/* 🔥 Experience Section */}
//       <motion.section id="experience" className={`py-20 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} text-center`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">Experience</h2>
//         <div className="mt-6 max-w-4xl mx-auto text-left space-y-6">
//           <div className="p-4 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-md">
//             <h3 className="text-xl text-white font-semibold">Software Engineer Intern</h3>
//             <p className="text-gray-300 dark:text-gray-600">Sacrosanctinfo.LLC | Jan 2024 – Apr 2024</p>
//             <ul className="mt-2 text-gray-300 dark:text-gray-600 list-disc list-inside">
//               <li>Architected scalable backend systems using Java, Spring Core, and Spring Batch.</li>
//               <li>Implemented Terraform for infrastructure automation, reducing deployment time by 40%.</li>
//               <li>Developed APIs for seamless integration with third-party applications.</li>
//             </ul>
//           </div>

//           <div className="p-4 bg-gray-800 dark:bg-gray-100 rounded-lg shadow-md">
//             <h3 className="text-xl text-white font-semibold">Data Engineer Intern</h3>
//             <p className="text-gray-300 dark:text-gray-600">Xnode.ai | Current Role</p>
//             <ul className="mt-2 text-gray-300 dark:text-gray-600 list-disc list-inside">
//               <li>Working on AI-powered analytics and data pipeline optimizations.</li>
//               <li>Developing Slack integration for AI-driven workspace collaboration.</li>
//             </ul>
//           </div>
//         </div>
//       </motion.section>

//       {/* 🔥 Projects Section */}
//       <motion.section id="projects" className="py-20 px-6 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">Projects</h2>
//         <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Here are some of my best works from GitHub and academic projects.
//         </p>
//       </motion.section>

//       {/* 🔥 Skills Section */}
//       <motion.section id="skills" className={`py-20 px-6 ${darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"} text-center`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">Skills</h2>
//         <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Programming: GoLang, Python, Java, JavaScript <br />
//           Backend & Cloud: AWS, Flask, Terraform <br />
//           Databases: SQLite, PostgreSQL, MySQL, MongoDB
//         </p>
//       </motion.section>

//       {/* 🔥 Beyond Work Section */}
//       <motion.section id="beyond-work" className="py-20 px-6 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">Beyond Work</h2>
//         <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Apart from coding, I love traveling to new places, exploring different cultures, and capturing beautiful landscapes.
//         </p>
//       </motion.section>

//       {/* 🔥 Contact Section */}
//       <motion.section id="contact" className={`py-20 px-6 ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"} text-center`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//         <h2 className="text-4xl font-bold">Contact</h2>
//         <img src="/IMG_2296.JPG" alt="Rakshith Roy" className="w-20 h-20 rounded-full mx-auto mb-4" />
//         <p className="mt-4 text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
//           Let's connect! Reach out via email, LinkedIn, or GitHub.
//         </p>
//         <div className="mt-6 flex justify-center space-x-6">
//           <a href="mailto:Rakshithroygantagogula@gmail.com" className="text-blue-500 hover:underline">Email</a>
//           <a href="https://www.linkedin.com/in/rakshith-roy" className="text-blue-500 hover:underline">LinkedIn</a>
//           <a href="https://github.com/Rakshithroy" className="text-blue-500 hover:underline">GitHub</a>
//         </div>
//       </motion.section>

//       {/* 🔥 Footer */}
//       <Footer />

//       {/* 🔥 Dark Mode Toggle */}
//       <button onClick={toggleDarkMode} className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md">
//         {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-700" />}
//       </button>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Sun, Moon } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";  
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import BeyondWork from "./components/BeyondWork";
import Certifications from "./components/Certifications";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Navbar />
      <Hero />
      <About />
      <Education />   
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <BeyondWork />
      <Footer />

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md"
      >
        {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-700" />}
      </button>
    </div>
  );
}
