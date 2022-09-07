import React from 'react'

const About = ({ show }) => {
  return <div className={`${show && "blur-sm"}`}>About</div>;
};

export default About
