import React from "react";
import weather from "../Images/weather.png";
import short from "../Images/shor.png";
import fylo from "../Images/fylo.png";
import calc from "../Images/calc.png";
import ip from "../Images/ip.png";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Project = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3">Projects</h1>
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">01.</span> Weather Forecast
            Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              This Weather application was created with react JS, styled with
              Tailwind CSS. Open weather API was integrated to get the current
              weather forecast and the weather forecast for the next seven days.
              <div className="flex text-3xl">
                <a
                  href="https://weather-react-p.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/dejidev/Weather-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={weather}
              alt="weather application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">02.</span>Link Shortener
            Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row-reverse ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2   bg-[#233554] p-4"
            >
              This is a Link shortener created with React JS. It's a challenge
              by Frontend Mentor. ShortCode API was used while building the link
              shortener.
              <div className="flex text-3xl">
                <a
                  href="http://urlshor.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/dejidev/URL-Shortener"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={short}
              alt="link_shortner"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">03.</span>IP Tracker Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              This is an IP Address tracker, it takes in the IP address as input
              and locates its location, manually and on a map. The map was made
              with Leaflet JS. GeoIpfy API is used to locate the IP Address.
              <div className="flex text-3xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLink45Deg className="mr-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={ip}
              alt="ip_tracker"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">04.</span>Fylo Landing Page
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row-reverse ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              This is a landing page, but not your regular landing page, because
              it actually looks nice
              <div className="flex text-3xl">
                <a
                  href="https://dejidev.github.io/fylo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/dejidev/fylo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={fylo}
              alt="fylo_landing page"
              className="sm:w-1/2  rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">04.</span>Toggle View Simple
            Mathematical Calculator{" "}
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              A simple calculator with a concentrated style. A red and yellow
              mode this time. Red for dark, Yellow for Light.
              <div className="flex text-3xl">
                <a
                  href="https://dejidev.github.io/Calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://github.com/dejidev/Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={calc}
              alt="Calculator"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
