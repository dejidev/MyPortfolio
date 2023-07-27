import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 300); // Show the button when scrolled down 300px
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#64ffda] fixed bottom-5 right-4 sm:right-8 lg-right-16 text-[#0a192f] p-1 sm:p-2 text-2xl flex items-center justify-center rounded-lg cursor-pointer transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
