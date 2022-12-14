import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/images.jfif";
import { motion } from "framer-motion";

const About = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3">About</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center font-thin">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-center text-name sm:p-5 sm:pl-10 sm:text-xl "
        >
          I`m a Frontend Developer with proficiency in React JS. I am a
          hardworking and a passionate job seeker with strong organizational
          skills eager to secure entry-level frontend developer position /
          frontend Internship position. Ready to help the team achieve company
          goals. I have worked on amazing projects.
          <section className=" mt-2 sm:text-xl text-[#64ffda] text-center">
            <div className="flex items-center justify-center my-3">
              <TbPhone />
              <p>+2348146573494</p>
            </div>
            <div className="flex items-center justify-center my-3">
              <TbMail />
              <p>adetayoayodeji7@gmail.com</p>
            </div>
            <div className="flex items-center justify-center my-3">
              <MdOutlineMyLocation />
              <p>Lagos, Nigeria.</p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, zoom: 1 }}
          animate={{
            opacity: 1,
            zoom: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center pt-5"
        >
          <div className=" sm:w-1/2 border-2 border-[#64ffda]">
            <img src={img} alt="" className=" w-full  z-10 m-2 hover:ml-0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
