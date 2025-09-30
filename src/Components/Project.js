import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

// Import your images
import farmchops from "../Images/farmchops.png"; // Add this image
import digitax from "../Images/digitax.png"; // Add this image
import aiRecruiter from "../Images/recruiter.png"; // Add this image
import movieImg from "../Images/movie.png";
import imgGal from "../Images/img-gallery.png";
import vidd from "../Images/videRec.png";
// import ip from "../Images/ip.png";
// import yablaze from "../Images/yablaze.png";

const Project = ({ show }) => {
  // Animation variants for better control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: "01",
      title: "FarmChops E-Commerce Platform",
      description: "Leading a complete rebuild of an agricultural e-commerce platform from the ground up. Features include secure authentication, fully functional product catalog, shopping cart, and checkout flow with real-time inventory. Currently developing innovative 'Pay Later' and 'Pay for Me' features, vendor onboarding portal, and comprehensive admin dashboard for end-to-end platform management.",
      image: farmchops, // Make sure to add this image
      liveLink: "https://staging.farmchops.com/",
      githubLink: "https://github.com/Farmchops/FarmChops-Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      reverse: false
    },
    {
      id: "02",
      title: "Digitax - Animated Landing Page",
      description: "A modern, high-performance landing page showcasing advanced animation capabilities and cutting-edge design. Built with React, TypeScript, and Framer Motion, featuring smooth scroll animations, parallax effects, and sophisticated micro-interactions. Achieved 95+ Lighthouse performance score through meticulous optimization and code splitting techniques.",
      image: digitax, // Make sure to add this image
      liveLink: "http://digitax-red.vercel.app/",
      githubLink: "https://github.com/dejidev/DIGITAX",
      tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      reverse: true
    },
    {
      id: "03",
      title: "AI Recruiter Platform",
      description: "Architected and developed a comprehensive AI-powered recruitment platform from scratch. Features include machine learning integration for automated candidate screening, real-time analytics dashboard, advanced search and filtering across candidate profiles, secure authentication system, and intuitive job management interface with rich text editing capabilities.",
      image: aiRecruiter, // Make sure to add this image
      liveLink: "https://ai-recruiter-v1.vercel.app/",
      githubLink: "https://github.com/dejidev/AI-RECRUITER",
      tags: ["React", "TypeScript", "Express.js", "MongoDB"],
      reverse: false
    },
    {
      id: "04",
      title: "Movie Box",
      description: "A Netflix-inspired streaming platform built with Next.js. Browse through an extensive collection of movies and TV shows using real-time movie APIs. Features include responsive design, seamless navigation, dynamic search functionality, and an immersive user interface that delivers a premium streaming experience.",
      image: movieImg,
      liveLink: "https://movie-box-lac-one.vercel.app/",
      githubLink: "https://github.com/dejidev/Movie-Box",
      tags: ["Next.js", "React", "API Integration", "Tailwind CSS"],
      reverse: true
    },
    {
      id: "05",
      title: "Image Gallery",
      description: "An elegant image gallery application that merges sophisticated design with seamless functionality. Features secure backend authentication, robust API integration for image search and retrieval, and a visually appealing, user-friendly interface. Demonstrates expertise in full-stack development, security implementation, and attention to detail.",
      image: imgGal,
      liveLink: "https://image-gallery-dejidev.vercel.app",
      githubLink: "https://github.com/dejidev/Image-Gallery",
      tags: ["Next.js", "Authentication", "API Integration"],
      reverse: false
    },
    {
      id: "06",
      title: "HelpMeOut Screen Recorder",
      description: "A browser extension that elevates screen recording with elegant design and effortless functionality. Features a beautifully crafted installation page, intuitive recording controls, and seamless user experience. Built with focus on design excellence and user-centric functionality.",
      image: vidd,
      liveLink: "https://video-recorder-orpin.vercel.app/",
      githubLink: "https://github.com/dejidev/video_recorder",
      tags: ["React", "Browser Extension", "Web APIs"],
      reverse: true
    },
    // {
    //   id: "07",
    //   title: "IP Tracker Application",
    //   description: "An interactive IP tracking application utilizing the GeoIpfy API and Leaflet JS for geographical visualization. Demonstrates proficiency in working with external APIs and interactive mapping libraries, providing real-time location data with an intuitive interface.",
    //   image: ip,
    //   liveLink: "#",
    //   githubLink: "#",
    //   tags: ["React", "Leaflet JS", "API Integration"],
    //   reverse: false
    // },
    // {
    //   id: "08",
    //   title: "Iyablaze Landing Page",
    //   description: "A modern, colorful landing page featuring captivating live animations and vibrant design elements. Built with React, this project showcases creative design capabilities and smooth animation implementations that create memorable user experiences.",
    //   image: yablaze,
    //   liveLink: "https://loyaltymanage.netlify.app",
    //   githubLink: "https://loyaltymanage.netlify.app",
    //   tags: ["React", "Animations", "Modern Design"],
    //   reverse: true
    // }
  ];

  return (
    <div className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-name text-xl sm:text-2xl py-3 font-bold"
      >
        Featured Projects
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <section key={project.id} className="pb-12 sm:pb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-name sm:text-xl py-3 font-semibold"
            >
              <span className="text-[#64ffda]">{project.id}.</span> {project.title}
            </motion.h2>

            <div className={`flex justify-center items-center flex-col ${project.reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
              } gap-0 sm:gap-4`}>

              {/* Image Section */}
              {/* <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="sm:w-1/2 w-full overflow-hidden rounded-t-lg sm:rounded-lg shadow-lg"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </motion.div> */}



              {/* Image Section */}
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="sm:w-1/2 w-full relative group rounded-t-lg sm:rounded-lg shadow-lg"
              >
                {/* Decorative background (behind image) */}
                <div className="absolute inset-0 rounded-lg blur-3xl bg-gradient-to-br from-[#64ffda]/10 to-transparent pointer-events-none" />

                {/* Border frame with hover effect */}
                <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 pointer-events-none" />

                <div className="relative border-2 border-[#64ffda] rounded-lg overflow-hidden bg-transparent">
                  {/* Very subtle cyan overlay (won't darken). Fades out on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/6 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10" />

                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover transition-all duration-500 relative z-0 group-hover:brightness-105"
                    />
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a192f] to-transparent z-10"></div>
                </div>
              </motion.div>




              {/* Content Section */}
              <motion.article
                variants={contentVariants}
                className="sm:w-1/2 w-full bg-[#233554] p-5 sm:p-6 text-sm sm:text-base rounded-b-lg sm:rounded-lg shadow-lg"
              >
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-[#64ffda] bg-[#1a2942] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex text-2xl gap-4">
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#64ffda" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <BsLink45Deg />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#64ffda" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <AiFillGithub />
                  </motion.a>
                </div>
              </motion.article>
            </div>
          </section>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;