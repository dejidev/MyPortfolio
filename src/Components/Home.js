import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

const Home = ({ show, scrollToElement }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`${show && "blur-md"} pt-2 px-5 md:px-12 lg:pl-24`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#64ffda] italic pt-2 pb-8 ff text-sm"
      >
        &lt;body&gt;
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-3 ff text-[#64ffda] font-semibold"
      >
        Hi there 👋, my name is
      </motion.p>

      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        className="font-extrabold sm:text-8xl text-6xl text-name big tracking-wide sm:pt-3 md:flex mt-2"
      >
        <div>
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>d</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>t</motion.span>
          <motion.span variants={item}>a</motion.span>
          <motion.span variants={item}>y</motion.span>
          <motion.span variants={item}>o</motion.span>
        </div>

        <div className="md:ml-4">
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>y</motion.span>
          <motion.span variants={item}>o</motion.span>
          <motion.span variants={item}>d</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>j</motion.span>
          <motion.span variants={item}>i</motion.span>
          <motion.span variants={item}>.</motion.span>
        </div>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sub text-4xl sm:text-5xl lg:text-7xl font-bold pb-3 mt-4"
      >
        Full Stack Developer & Frontend Specialist.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="py-1 md:w-2/3 text-sub ff text-base sm:text-lg leading-relaxed"
      >
        Welcome! I'm a passionate Full Stack Developer specializing in building exceptional
        digital experiences.I transform complex problems into elegant, user-friendly solutions. 
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex gap-4 my-6"
      >
        <button
          onClick={() => scrollToElement("contact")}
          className="border-2 border-[#64ffda] px-8 py-3 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] text-[#64ffda] text-lg font-semibold ff transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </button>
        <button
          onClick={() => scrollToElement("project")}
          className="bg-[#233554] px-8 py-3 rounded-md hover:bg-[#2d4663] text-name text-lg font-semibold ff transition-all duration-300"
        >
          View Projects
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 flex flex-col items-center"
      >
        <p className="text-sub text-sm mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#64ffda] rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-[#64ffda] rounded-full mt-2" />
        </motion.div>
      </motion.div>

      <div>
        <div id="about" className="md:py-16 py-12">
          <About show={show} />
        </div>
        <div id="project" className="md:py-16 py-12">
          <Project show={show} />
        </div>
        <div id="experience" className="md:py-16 py-12">
          <Experience show={show} />
        </div>
        <div id="contact" className="md:py-16 py-12">
          <Contact show={show} />
        </div>
        <div id="resume" className="md:py-16 py-12">
          <Resume />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[#64ffda] italic ff mt-10 text-sm"
      >
        &lt;/body&gt;
      </motion.div>
    </div>
  );
};

export default Home;