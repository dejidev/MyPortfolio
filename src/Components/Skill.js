import React from 'react'

const Skill = ({ show }) => {
  return <div className={`${show && "blur-sm"}`}>Skills</div>;
};

export default Skill
