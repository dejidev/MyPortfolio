import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { TbWebhook } from "react-icons/tb";
import { motion } from "framer-motion";
import Social from "./Social";
import ScrollToTopButton from "./ScrollToTop";

const Navbar = ({ scrollToElement }) => {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);

  const resumeLink =
    "https://drive.google.com/file/d/1l88v3dLomdgIxzpZGFZdU-8td0EOTFyZ/view?usp=drive_link";

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
    <div className="py-5 px-5 md:px-12  ff ">
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
                <TbWebhook onClick={() => setShow(false)} />
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <motion.nav
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, delay: 0.05, staggerChildren: 0.2 }}
          className="hidden sm:flex sm:w-3/4 justify-evenly lg:w-2/3 text-[#a8b2d1] items-center font-harline text-sm"
        >
          <span className="text-[#64ffda] italic ">&lt;ul&gt;</span>
          <motion.div variants={item} className="flex flex-col ">
            <button
              onClick={() => scrollToElement("about")}
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              About
            </button>
          </motion.div>
          <motion.div variants={item}>
            <button
              onClick={() => scrollToElement("project")}
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Project{" "}
            </button>
          </motion.div>

          <motion.div variants={item}>
            <button
              onClick={() => scrollToElement("experience")}
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Experience
            </button>
          </motion.div>

          <motion.div variants={item}>
            <button
              onClick={() => scrollToElement("contact")}
              className="hover:text-[#64ffda] focus:text-[#64ffda]"
            >
              Contact
            </button>
          </motion.div>

          {/* <motion.p variants={item}>Resume</motion.p> */}
          <motion.div variants={item}>
            <button
              // onClick={() => scrollToElement("resume")}
              className="border-[#64ffda] px-3 py-1 border rounded-sm hover:bg-[#233554]"
            >
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </motion.div>
          <span className="text-[#64ffda] italic">&lt;/ul&gt;</span>
        </motion.nav>

        <div className="sm:hidden text-5xl z-10" onClick={() => setShow(!show)}>
          {show ? <MdClose /> : <RiMenu4Fill />}
        </div>
      </section>

      <nav
        className={`sm:hidden top-0 right-0 bg-navv absolute h-screen w-2/3 z-4 ease-in-out duration-300 flex items-center justify-center
        ${show ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div
          className={`flex flex-col text-2xl justify-between items-center h-1/2 `}
        >
          <span onClick={() => scrollToElement("home")}>
            <button onClick={() => setShow(!show)}>Home</button>
          </span>
          <span onClick={() => scrollToElement("about")}>
            <button onClick={() => setShow(!show)}>About </button>
          </span>
          <span onClick={() => scrollToElement("project")}>
            <button onClick={() => setShow(!show)}>Projects </button>
          </span>
          <span onClick={() => scrollToElement("experience")}>
            <button onClick={() => setShow(!show)}> Experience</button>
          </span>
          <span onClick={() => scrollToElement("contact")}>
            <button onClick={() => setShow(!show)}>Contact Me</button>
          </span>
          <p>
            {" "}
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              {" "}
              Resume
            </a>
          </p>
        </div>
      </nav>
      <div className=" fixed bottom-32 right-4 sm:right-8 lg-right-16">
        <Social />
      </div>
      <ScrollToTopButton className=" " />
    </div>
  );
};

export default Navbar;
