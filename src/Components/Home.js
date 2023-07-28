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
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <div className={`${show && "blur-md"} pt-2 px-5 md:px-12 lg:pl-24 `}>
      <span className="text-[#64ffda] italic pt-2 pb-8 ff">&lt;body&gt;</span>
      <p className=" p-3  ff">Hi 🙂 , my name is </p>
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
        className="font-extrabold sm:text-8xl text-7xl text-name big tracking-wide sm:pt-3 md:flex mt-4"
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
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.8 }}
        className="text-sub text-5xl font-bold pb-3 lg:text-7xl"
      >
        I am a Frontend Developer.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.8 }}
        className="py-3 md:w-2/3 text-sub ff"
      >
        Welcome! I'm a passionate Frontend Developer with a focus on creating
        stunning, responsive web applications 🔥 . With a strong eye for design
        and a commitment to clean code, I bring ideas to life that leave a
        lasting impression.
      </motion.p>
      <div onClick={() => scrollToElement("contact")}>
        <motion.button className="border-[#64ffda] px-8 py-3 my-3 border rounded-sm hover:bg-[#233554] text-xl font-thin ff">
          Contact Me
        </motion.button>
      </div>
      <div>
        <div id="about" className="md:py-10  py-8">
          <About show={show} />
        </div>
        <div id="project" className="md:py-10  py-8">
          <Project show={show} />
        </div>
        <div id="experience" className="md:py-10  py-8">
          <Experience show={show} />
        </div>
        <div id="contact" className="md:py-10  py-8">
          <Contact show={show} />
        </div>
        <div id="resume" className="md:py-10  py-8">
          {/* <Resume /> */}
        </div>
      </div>
      <div className="text-[#64ffda] italic ff mt-10">&lt;/body&gt;</div>
    </div>
  );
};

export default Home;
