"use client";
import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/picsofme.jpg";
import { motion } from "framer-motion";

const About = ({ show }) => {
  return (
    <div className={`${show && "blur-sm"} p-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-name text-xl sm:text-2xl py-3 font-bold"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col sm:flex-row justify-center items-center font-light text-sm sm:text-base gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:w-1/2 text-name sm:p-5 sm:text-lg leading-relaxed"
        >
          <p className="mb-4">
            Hello! I'm <span className="text-[#64ffda] font-semibold">Adetayo Ayodeji</span>,
            a Full Stack Developer with 3+ years of experience specializing in creating
            exceptional, user-centric web applications. My journey in tech has been driven
            by a passion for turning complex problems into elegant, intuitive solutions.
          </p>
          <p className="mb-4">
            I specialize in <span className="text-[#64ffda]">React</span>, <span className="text-[#64ffda]">Next.js</span>,
            and <span className="text-[#64ffda]">TypeScript</span>, building responsive interfaces
            that not only look beautiful but perform flawlessly. Currently, I'm expanding my
            expertise into backend development and AI/ML, always staying at the cutting edge
            of technology.
          </p>
          <p className="mb-6">
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open source, or collaborating with fellow developers to build something amazing.
            Let's create remarkable digital experiences together!
          </p>

          <section className="mt-6 sm:text-base">
            <h3 className="text-[#64ffda] font-semibold mb-4 text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="tel:+2348146573494"
                whileHover={{ x: 5, color: "#64ffda" }}
                className="flex items-center gap-3 transition-colors duration-300"
              >
                <TbPhone className="text-[#64ffda] text-xl" />
                <p>+234 814 657 3494</p>
              </motion.a>
              <motion.a
                href="mailto:adetayoayodeji7@gmail.com"
                whileHover={{ x: 5, color: "#64ffda" }}
                className="flex items-center gap-3 transition-colors duration-300"
              >
                <TbMail className="text-[#64ffda] text-xl" />
                <p>adetayoayodeji7@gmail.com</p>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <MdOutlineMyLocation className="text-[#64ffda] text-xl" />
                <p>Lagos, Nigeria</p>
              </motion.div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:w-1/2 flex justify-center pt-6 relative"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent rounded-lg blur-3xl"></div>

          <div className="relative group">
            {/* Border frame with hover effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

            {/* Image container with overlay */}
            <div className="relative border-2 border-[#64ffda] rounded-lg overflow-hidden">
              {/* Cyan overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/20 via-transparent to-[#0a192f]/40 mix-blend-overlay z-10"></div>

              {/* Image with hover effect */}
              <motion.img
                src={img}
                alt="Adetayo Ayodeji"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover transition-all duration-500 grayscale hover:grayscale-0 relative z-0"
              />

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a192f] to-transparent z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;