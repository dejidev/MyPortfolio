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
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const items = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      id: "01",
      icon: <BiCodeAlt />,
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
    },
    {
      id: "02",
      icon: <SiRobotframework />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      id: "03",
      icon: <FaTools />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Docker", "Figma", "Postman", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    <div className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}>
      {/* Skills Section */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-name text-xl sm:text-2xl py-3 font-bold"
        >
          Skills & Technologies
        </motion.h1>

        {skillCategories.map((category) => (
          <div key={category.id} className="mb-8">
            <div className="flex items-center text-name text-lg p-3">
              <span className="text-[#64ffda] font-semibold">{category.id}.</span>
              <span className="text-[#64ffda] ml-2">{category.icon}</span>
              <h2 className="pl-2 font-semibold">{category.title}</h2>
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
              >
                {category.skills.map((skill, index) => (
                  <motion.p
                    key={index}
                    variants={item}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#1a2942",
                      color: "#64ffda",
                      transition: { duration: 0.2 }
                    }}
                    className="bg-[#233554] px-5 py-3 m-2 rounded-md cursor-pointer transition-all"
                  >
                    {skill}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Qualifications Section */}
      <div className="pb-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-name text-xl sm:text-2xl py-3 font-bold"
        >
          Experience & Education
        </motion.h1>

        <article className="sm:flex justify-center items-start gap-8">
          {/* Experience Section */}
          <motion.section
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <MdWork className="text-[#64ffda]" />
              <h2 className="pl-2 font-semibold">Professional Experience</h2>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">Frontend Developer</h3>
                <h4 className="text-[#64ffda]">FarmChops</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Leading complete frontend rebuild of agricultural e-commerce platform from ground up.
                  Implemented secure user authentication system, fully functional product catalog, shopping cart,
                  and checkout flow with real-time inventory updates. Developing innovative "Pay Later" and "Pay for Me"
                  features to increase conversion rates and user accessibility. Building comprehensive admin dashboard
                  for product, order, and vendor management (in production).
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>Jun 2025 - Present</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">Software Engineer - Frontend Developer</h3>
                <h4 className="text-[#64ffda]">NITHUB</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Architected and developed frontend for AI-powered recruitment platform, handling complex candidate
                  matching algorithms and real-time data visualization. Developed comprehensive job management dashboard
                  with advanced filtering, search, and analytics features. Collaborated with cross-functional teams on
                  event management system and internal task management application. Built intuitive drag-and-drop interface
                  with direct database synchronization, improving task management workflow efficiency by 60%. Designed and
                  built responsive clone of a Google form for an event management system.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>Jan 2025 - Present</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">Frontend Engineer</h3>
                <h4 className="text-[#64ffda]">Resavation</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Developed core user-facing features for apartment rental platform, including user profiles, registration
                  flows, and profile modification interfaces. Designed and built responsive profile questionnaire interface
                  with dynamic form validation and error handling. Integrated RESTful APIs for questionnaire data submission
                  and retrieval, enabling intelligent user matching algorithms.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>Jun 2023 - Dec 2023</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">Frontend Intern</h3>
                <h4 className="text-[#64ffda]">SideHustle Internship</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Gained hands-on experience in collaborative development environments. Contributed to real-world
                  web applications, working with cross-functional teams to deliver meaningful features and improve
                  user experiences.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>2022 - Jun 2022</p>
                </div>
              </div>
            </motion.article>
          </motion.section>

          {/* Education Section */}
          <motion.section
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sm:w-1/2"
          >
            <div className="flex items-center text-name text-lg pb-3">
              <HiAcademicCap className="text-[#64ffda]" />
              <h2 className="pl-2 font-semibold">Education</h2>
            </div>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">BSc. Systems Engineering</h3>
                <h4 className="text-[#64ffda]">University of Lagos, Nigeria</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Pursuing a Bachelor's degree in Systems Engineering with a focus on software development
                  and AI/ML. Building strong analytical and problem-solving foundations through coursework
                  in data structures, algorithms, database systems, and software engineering principles.
                  Active participant in tech communities and coding workshops.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>2020 - 2026 (Expected)</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] mb-8 font-light"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">High School Diploma</h3>
                <h4 className="text-[#64ffda]">Tomia Community Senior Secondary School</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Developed early passion for software development and technology. Completed foundational
                  programming courses and built personal coding projects that sparked interest in frontend
                  development and web technologies.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>2016 - 2019</p>
                </div>
              </div>
            </motion.article>

            {/* Open to Work Section */}
            <motion.article
              variants={items}
              className="pl-3 border-l-2 border-[#64ffda] bg-[#233554] rounded-md p-4"
            >
              <div className="ml-4">
                <h3 className="text-sub text-lg font-semibold">Open to Opportunities</h3>
                <h4 className="text-[#64ffda]">Frontend Developer Roles</h4>
                <p className="text-sm text-name py-2 leading-relaxed">
                  Currently seeking full-time frontend developer positions or exciting freelance opportunities.
                  Open to remote, hybrid, or onsite roles where I can contribute my skills in React, Next.js,
                  and TypeScript to build impactful products.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <GoCalendar className="mr-2" />
                  <p>Available Immediately</p>
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