import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png"; // Assuming you have this image in src/assets

const AboutMe = () => {
  // Animation variants for staggered appearance of the main content block
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual text and image elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16
                 relative overflow-hidden
                 bg-gray-50 dark:bg-gray-800
                 "
    >
      {/* Animated Background Overlay - Subtle gradients */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-900/30 dark:to-purple-900/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200/30 to-green-200/30 dark:from-cyan-900/30 dark:to-green-900/30 animate-pulse-fast animation-delay-2000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image at the top for mobile, right for desktop */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-end flex-shrink-0 relative p-0 mb-8 md:mb-0 order-first md:order-last"
          variants={itemVariants}
        >
          <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full md:rounded-2xl overflow-hidden border-2 border-blue-300 dark:border-yellow-400 shadow-md mx-auto bg-white/90 dark:bg-gray-900/80">
            <img
              src={me}
              alt="Ashique Murad"
              className="w-full h-full object-cover rounded-full md:rounded-2xl border-none"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </motion.div>

        {/* Story Text - Will be second on mobile, first on desktop */}
        <div className="w-full md:w-2/3 text-center md:text-left flex flex-col justify-center order-last md:order-first">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-yellow-400 dark:to-orange-500 leading-tight"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-left space-y-4"
            variants={itemVariants}
          >
            <span className="block mb-4">
              I’m{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                Ashique Murad
              </span>
              , a curious mind from Bangladesh with a relentless passion for
              technology. Ever since I wrote my first line of code, I knew I
              wanted to build things that mattered — software that solves real
              problems and connects people.
            </span>
            <span className="block mb-4">
              My academic journey in Computer Science and Engineering sharpened
              my skills in{" "}
              <span className="font-semibold">
                Python, Node.js, and backend systems
              </span>
              . But it was the countless projects, sleepless nights, and
              challenges that truly shaped me.
            </span>
            <span className="block mb-4">
              I’ve built{" "}
              <span className="font-semibold">e-commerce platforms</span>,
              intelligent <span className="font-semibold">AI tools</span>, and
              engaging <span className="font-semibold">Telegram bots</span> —
              each project pushing me beyond my limits and broadening my skills.
            </span>
            <span className="block mb-4">
              Exploring{" "}
              <span className="font-semibold">Web3 and decentralized apps</span>{" "}
              opened a new frontier for me, diving into{" "}
              <span className="font-semibold">
                blockchain technologies and smart contracts
              </span>
              .
            </span>
            <span className="block">
              I’m not just a developer; I’m a problem-solver, collaborator, and
              lifelong learner. Whether crafting scalable backends, integrating
              AI, or simplifying user experience — I bring passion, curiosity,
              and dedication to every line of code.
            </span>
          </motion.p>

          {/* Minimalist Buttons with icons and glass effect */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href=""
              download="Ashique_Murad_Resume.pdf"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 0px 16px rgba(0,188,212,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-blue-400 dark:border-yellow-400 text-blue-700 dark:text-yellow-400 font-semibold shadow-md hover:bg-blue-600 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span className="inline-block align-middle mr-2">📄</span> Resume
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 0px 16px rgba(250,204,21,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-blue-400 dark:border-yellow-400 text-blue-700 dark:text-yellow-400 font-semibold shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <span className="inline-block align-middle mr-2">🔗</span>{" "}
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
