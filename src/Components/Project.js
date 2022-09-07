import React from 'react'

const Project = ({ show }) => {
  return <div className={`${show && "blur-sm"}`}>Project</div>;
};

export default Project
