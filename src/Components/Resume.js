import React from "react";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1mIXHkDjWLDer788Nc_06Hh64BnpT40T6/view?usp=sharing";
  return (
    <div>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <button className="border-[#64ffda] px-8 py-3 my-3 border rounded-sm hover:bg-[#233554] text-xl font-thin ff">
          Checkout my Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
