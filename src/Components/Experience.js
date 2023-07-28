import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { motion } from "framer-motion";
import { BiCodeAlt } from "react-icons/bi";
import { SiRobotframework } from "react-icons/si";
import { FaTools } from "react-icons/fa";

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
        duration: 0.5,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <div className="mb-10">
        <h1 className="text-name text-xl sm:text-2xl py-3">Skills</h1>
        <div className="flex items-center text-name text-lg p-3 ">
          <span className="text-[#64ffda]">01.</span>
          <BiCodeAlt />
          <h1 className="pl-2"> Language</h1>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.02, delay: 0.05, staggerChildren: 0.2 }}
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
              TypeScript
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Python{" "}
            </motion.p>
          </motion.div>
        </div>

        <div className="flex items-center text-name text-lg p-3">
          <span className="text-[#64ffda]">02.</span>
          <SiRobotframework />
          <h1 className="pl-2"> Framework</h1>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.02, delay: 0.05, staggerChildren: 0.2 }}
            className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
          >
            {" "}
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
              Next JS
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Node
            </motion.p>
          </motion.div>
        </div>

        <div className="flex items-center text-name text-lg p-3">
          <span className="text-[#64ffda]">03.</span>
          <FaTools />
          <h1 className="pl-2"> Tools</h1>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.02, delay: 0.05, staggerChildren: 0.2 }}
            className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
          >
            {" "}
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Git{" "}
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Github{" "}
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Figma{" "}
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-[#64ffda]  hover:px-6"
            >
              Postman{" "}
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
            whileInView="show"
            transition={{ duration: 0.02, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <HiAcademicCap />
              <h1 className="pl-2"> Education</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l sm:border-l-2 border-[#aa8b2d1] mb-6 font-thin"
            >
              <div>
                <h2 className="text-sub pb-1">BSc. Systems Engineering</h2>
                <h3>University of Lagos</h3>
                <p className="text-sm text-name p-1">
                  As a passionate and dedicated Frontend Developer, I constantly
                  seek to expand my knowledge and skills in web development. My
                  academic journey includes pursuing a BSc. in Systems
                  Engineering from the University of Lagos, where I have been
                  honing my problem-solving abilities and analytical mindset.
                </p>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">2020- till-date</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l sm:border-l-2 border-[#aa8b2d1] mb-6 font-thin"
            >
              <div>
                <h2 className="text-sub ">Tomia Community School </h2>
                <h3>Lagos</h3>
                <p className="text-sm text-name p-1">
                  During my time at TCSSS, I cultivated a strong desire to the
                  principles of software development, sparking my interest in
                  the world of frontend technologies.
                </p>
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
            whileInView="show"
            transition={{ duration: 0.02, delay: 0.05, staggerChildren: 0.2 }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <MdWork />
              <h1 className="pl-2"> Experience</h1>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l sm:border-l-2 border-[#aa8b2d1] mb-6 font-thin"
            >
              <div>
                <h2 className="text-sub ">Frontend Intern</h2>
                <h3>SideHustle Internship</h3>
                <p className="text-sm text-name p-1">
                  My experience as a Frontend Intern at SideHustle Internship
                  exposed me to real-world projects and collaborative
                  development environments, allowing me to contribute to
                  meaningful web applications.
                </p>
                <div className="flex items-center ">
                  <GoCalendar />
                  <p className="p-0">2022 - June 2022</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l sm:border-l-2 border-[#aa8b2d1] mb-6 font-thin"
            >
              <div>
                <h2 className="text-sub ">Frontend Engineering Intern</h2>
                <h3> Resavaton </h3>
                <p className="text-sm text-name p-1">
                  As a Frontend Intern at Resavation, I've had the privilege of
                  working with a dynamic apartment rental startup, creating
                  captivating web interfaces from Figma designs. I've gained
                  hands-on experience with Next.js, developing responsive and
                  interactive user interfaces that align seamlessly with the
                  design vision. I'm passionate about frontend development and
                  eager to contribute my skills and creativity to meaningful
                  projects. Let's connect and explore how I can continue to grow
                  and make an impact at your company.
                </p>
                <div className="flex items-center">
                  <GoCalendar />
                  <p>May 2023 - July 2023 </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l sm:border-l-2 border-[#aa8b2d1] mb-6 font-thin"
            >
              <div>
                <h2 className="text-sub ">
                  Searching For a Junior Frontend Developer/ Frontend Internship
                  Role
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
