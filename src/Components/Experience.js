import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { motion } from "framer-motion";

const Experience = ({ show }) => {
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
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <div className="mb-10">
        <h1 className="text-name text-xl sm:text-2xl py-3">Skills</h1>
        <p className=" font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, a?
        </p>
        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
          >
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              HTML{" "}
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              CSS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              JavaScript
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              ECMA Script
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              React JS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Tailwind CSS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Python
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="pb-5">
        <h1 className="text-name text-xl sm:text-2xl py-3">Qualifications</h1>
        <article className="sm:flex justify-center items-centr">
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <HiAcademicCap />
              <h1 className="pl-2"> Education</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">BSc. Systems Engineering</h2>
                <h3>University of Lagos</h3>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">2020- till-date</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Tomia Community School </h2>
                <h3>Lagos</h3>
                <div className="flex items-center font-extra">
                  <GoCalendar />
                  <p>2016-2019</p>
                </div>
              </div>
            </motion.article>
          </motion.section>

          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <MdWork />
              <h1 className="pl-2"> Experience</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">Frontend Intern</h2>
                <h3>SideHustle Internship</h3>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">2022 - June 2022</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">ALX Software Internship </h2>
                <h3>ALX.</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>Sept 2022 </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#aa8b2d1] mb-3 font-thin"
            >
              <div>
                <h2 className="text-sub ">
                  Searching For a Junior Frontend Developer Role{" "}
                </h2>
                <h3>Hire Me 🙂</h3>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>Today</p>
                </div>
              </div>
            </motion.article>
          </motion.section>
        </article>
      </div>
    </div>
  );
};

export default Experience;
