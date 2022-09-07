import React from "react";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Social = () => {
  return (
    <div className="text-4xl ">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#233554] py-5 "
      >
        <FaTwitterSquare className="hover:bg-[#64ffda] " />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer "
        className="hover:text-[#233554]  py-5 "
      >
        <FaGithubSquare className="hover:bg-[#64ffda]" />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#233554] py-5"
      >
        <AiFillLinkedin className="hover:bg-[#64ffda]" />
      </a>
    </div>
  );
};

export default Social;
