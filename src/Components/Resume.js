import React from "react";
import pdf from "./res.pdf";

const Resume = () => {
  return (
      <iframe
        title="Ayodeji_Adetayo"
        id="resume"
        src={pdf}
        className="w-full h-screen pdf"
      ></iframe>
  );
};

export default Resume;
