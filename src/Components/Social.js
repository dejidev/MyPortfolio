import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";

const Social = () => {
  return (
    <div className="text-2xl sm:text-4xl">
      <a
        href="https://twitter.com/dejidv"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-name "
      >
        <BsTwitter className="hover:py-1" />
      </a>
      <a
        href="https://github.com/dejidev"
        target="_blank"
        rel="noopener noreferrer "
        className="hover:text-name"
      >
        <TbBrandGithub className="my-5 hover:py-1" />
      </a>
      <a
        href="https://www.linkedin.com/in/adetayo-ayodeji"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-name "
      >
        <FaLinkedinIn className="hover:py-1" />
      </a>
    </div>
  );
};

export default Social;
