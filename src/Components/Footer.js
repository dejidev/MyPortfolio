import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbWebhook } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleSendEmail = () => {
    window.location.href = "mailto:your_email@example.com";
  };

  return (
    <div className="bg-[#233554] mt-5 px-5 md:px-12 py-5 ">
      <div className="flex items-center justify-center sm:space-x-1 ff">
        <p>&copy; Ayodeji Adetayo, 2023</p>
        <FaEnvelope
          className="cursor-pointer"
          size={20}
          onClick={handleSendEmail}
        />
      </div>
    </div>
  );
};

export default Footer;
