import React from "react";
import weather from "../Images/weather.png";
import short from "../Images/shor.png";
import fylo from "../Images/fylo.png";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

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
            <article className="sm:w-1/2 bg-[#233554] p-4 ">
              This Weather application was created with react JS, styled with
              Tailwind CSS. Open weather API was integrated into get the current
              weather forecast and the weather forecast of the next seven days.
              <div className="flex text-3xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLink45Deg className="mr-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </article>
            <img
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
            <span className="text-[#64ffda]">02.</span>Link Shortner Application
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row-reverse ">
            <article className="sm:w-1/2   bg-[#233554] p-4">
              This is a Link shortner created with React JS. Its a challenge by
              Frontend Mentor. ShortCode api was used in the while building the
              link shortner.
              <div className="flex text-3xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLink45Deg className="mr-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </article>
            <img
              src={short}
              alt="weather application"
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
            <article className="sm:w-1/2 bg-[#233554] p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus odio tempora optio officiis assumenda quas aut quos odit
              alias!
              <div className="flex text-3xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLink45Deg className="mr-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </article>
            <img
              src={weather}
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
            <article className="sm:w-1/2 bg-[#233554] p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus odio tempora optio officiis assumenda quas aut quos odit
              alias!
              <div className="flex text-3xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLink45Deg className="mr-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </article>
            <img
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
            <article className="sm:w-1/2 bg-[#233554] p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              possimus odio tempora optio officiis assumenda quas aut quos odit
              alias!
            </article>
            <img
              src={weather}
              alt="weather application"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
