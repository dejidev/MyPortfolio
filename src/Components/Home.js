import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = ({ show }) => {
  return (
    <div className={`${show && "blur-md"} pt-2 px-5 md:px-12 lg:pl-24`}>
      <span className="text-[#64ffda] italic pt-2 pb-8 ">&lt;body&gt;</span>
      <p className=" pb-3  ">Hi, my name is </p>
      <h1 className="font-extrabold sm:text-8xl text-7xl text-name big tracking-wide sm:pt-3">
        Ayodeji Adetayo.
      </h1>
      <h2 className="text-sub text-5xl font-bold pb-3 lg:text-7xl">
        I am a Frontend Developer.
      </h2>
      <p className="py-3 md:w-2/3 text-sub text-xlnppm start">
        I create beautiful and responsive website. lorem1000
      </p>

      <button className="border-[#64ffda] px-8 py-3 my-3 border rounded-sm hover:bg-[#233554] text-xl font-thin">
        Contact Me
      </button>
      <div className="text-[#64ffda] italic ">&lt;/body&gt;</div>
    </div>
  );
};

export default Home;
