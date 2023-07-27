import React from "react";
import weather from "../Images/weather.png";
import short from "../Images/shor.png";
import fylo from "../Images/fylo.png";
import excuse from "../Images/excuse.png";
import ip from "../Images/ip.png";
import yablaze from "../Images/yablaze.png";
import netflix from "../Images/netflix.png";
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
              A weather application built with React JS and styled using
              Tailwind CSS. It leverages the OpenWeather API to provide
              real-time weather forecasts and weekly weather predictions for
              users.
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
            Application:
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
              This project, inspired by a Frontend Mentor challenge, showcases
              my React JS proficiency. It allows users to shorten long URLs
              using the ShortCode API, providing an easy and convenient way to
              share links.
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
              The IP Tracker Application utilizes the GeoIpfy API and Leaflet JS
              to locate and visualize the geographical position of a given IP
              address. This project demonstrates my ability to work with APIs
              and interactive mapping libraries.
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
            <span className="text-[#64ffda]">04.</span>ExcuseMe! - The Random
            Excuse Generator
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
              Experience a touch of humor with ExcuseMe! This playful and
              amusing app integrates an API to generate random excuses for any
              situation. Need a creative way to dodge a commitment? Or perhaps a
              witty response to a mishap? ExcuseMe! has got you covered!
              <div className="flex text-3xl">
                <a
                  href="https://github.com/dejidev/Make_An_Excuse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://make-excuse.netlify.app/"
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
              src={excuse}
              alt="excuse me"
              className="sm:w-1/2  rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">05.</span>Netflix Clone
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
              Experience the world of cinema, a Next.js and TypeScript-powered
              Netflix Clone. Browse through a vast collection of movies and TV
              shows using real movie APIs. Enjoy a seamless and responsive
              streaming experience, just like the original platform.
              <div className="flex text-3xl">
                <a
                  href="https://github.com/dejidev/Netflix-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="netflix-clone-dejidev.vercel.app"
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
              src={netflix}
              alt="netflix"
              className="sm:w-1/2  rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-[#64ffda]">06.</span>Fylo Landing Page
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
              The Fylo Landing Page is not your ordinary landing page. It stands
              out with an appealing design and smooth user experience. This
              project highlights my keen eye for design and attention to detail.
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
            <span className="text-[#64ffda]">07.</span>Iyablaze Landing Page
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row  ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4"
            >
              Explore the modern and colorful design of the Iyablaze Landing
              Page. This captivating project, built with React, features
              captivating live animations that leave a lasting impression on
              visitors.
              <div className="flex text-3xl">
                <a
                  href="https://make-excuse.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink45Deg className="mr-2" />
                </a>
                <a
                  href="https://loyaltymanage.netlify.app"
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
              src={yablaze}
              alt="yablaze"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
