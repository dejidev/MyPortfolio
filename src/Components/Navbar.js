import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { TbWebhook } from "react-icons/tb";
import { motion } from "framer-motion";
import Social from "./Social";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);
  console.log(show);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-5 px-5 md:px-12  nav ">
      <section className=" flex items-center justify-between ">
        <div className="sm:w-1/4 flex justify-start">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, 300, 300, 0],
              }}
              transition={{ duration: 1 }}
              className="text-6xl "
            >
              <motion.div
                animate={{ rotate: rotate ? [0, 300, 300, 0] : 0 }}
                transition={{ duration: 1 }}
                onClick={() => setRotate(!rotate)}
              >
                <TbWebhook />
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <motion.nav
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, delay: 0.05, staggerChildren: 0.2 }}
          className="hidden sm:flex sm:w-3/4 justify-evenly md:w-1/2 text-[#a8b2d1] items-center"
        >
          <span className="text-[#64ffda] italic">&lt;ul&gt;</span>
          <motion.div variants={item} className="flex flex-col ">
            <Link
              to="/about"
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={item}>
            {" "}
            <Link
              to="/projects"
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Project
            </Link>
          </motion.div>

          <motion.div variants={item}>
            {" "}
            <Link
              to="/experience"
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Experience
            </Link>
          </motion.div>

          <motion.div variants={item}>
            {" "}
            <Link
              to="/skills"
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Skills
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="border-[#64ffda] px-3 py-1 border rounded-sm hover:bg-[#233554]"
          >
            Resume
          </motion.p>
          <span className="text-[#64ffda] italic">&lt;/ul&gt;</span>
        </motion.nav>

        <div className="sm:hidden text-5xl z-10" onClick={() => setShow(!show)}>
          {show ? <MdClose /> : <RiMenu4Fill />}
        </div>
      </section>

      <nav
        className={`sm:hidden top-0 right-0 bg-navv absolute h-screen w-2/3 ease-in-out duration-300 flex items-center justify-center
        ${show ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div
          className={`flex flex-col text-2xl justify-between items-center h-1/2 `}
        >
          <Link to="/about" onClick={() => setShow(!show)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setShow(!show)}>
            Projects
          </Link>
          <Link to="/experience" onClick={() => setShow(!show)}>
            Experience
          </Link>
          <Link to="/skills" onClick={() => setShow(!show)}>
            Skills
          </Link>
          <p>Resume</p>
        </div>
      </nav>
      <div className=" fixed bottom-32 right-4 sm:right-8 lg-right-16">
        <Social />
      </div>
    </div>
  );
};

export default Navbar;
