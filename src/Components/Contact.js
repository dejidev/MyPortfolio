import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = ({ show }) => {
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputSubject = useRef(null);
  const inputMessage = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      inputName.current.value &&
      inputEmail.current.value &&
      inputMessage.current.value &&
      inputSubject.current.value
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_5lhljv5",
          "template_fxvouda",
          form.current,
          "pU6ckL_4izar_lfxg"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setLoading(false);
            e.target.reset();
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );

      setValid(false);
    } else {
      setValid(true);
    }
  };

  if (valid) {
    setTimeout(() => {
      setValid(false);
    }, 3000);
  }

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-name text-xl sm:text-2xl py-3 font-bold"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sub mb-6 "
      >
        I'm currently open to new opportunities and collaborations. Whether you have a
        project in mind, want to discuss potential work, or just want to say hi, feel
        free to reach out!
      </motion.p>

      <article className="sm:flex gap-8">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:w-3/5"
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="sm:flex gap-4" variants={item}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              ref={inputName}
              className="my-2 py-3 px-4 bg-[#233554] w-full sm:w-1/2 placeholder:text-sub rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              ref={inputEmail}
              className="my-2 py-3 px-4 bg-[#233554] w-full sm:w-1/2 placeholder:text-sub rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            />
          </motion.div>

          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            ref={inputSubject}
            className="my-2 py-3 px-4 bg-[#233554] w-full placeholder:text-sub rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            variants={item}
          />

          <motion.textarea
            placeholder="Your Message"
            name="message"
            ref={inputMessage}
            rows="6"
            className="my-2 py-3 px-4 bg-[#233554] w-full placeholder:text-sub rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all resize-none"
            variants={item}
          ></motion.textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className={`border-2 border-[#64ffda] px-8 py-3 my-2 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] text-[#64ffda] text-lg font-semibold transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            variants={item}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Validation Messages */}
          <div className="mt-2">
            {valid && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                ⚠️ Please fill in all fields
              </motion.p>
            )}
            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#64ffda] text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </div>
        </motion.form>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:ml-8 sm:mt-2 mt-8 sm:w-2/5"
        >
          <h3 className="text-name text-lg font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <motion.a
              href="tel:+2348146573494"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-[#233554] rounded-md hover:bg-[#2d4663] transition-all group"
            >
              <div className="bg-[#64ffda]/10 p-3 rounded-lg group-hover:bg-[#64ffda]/20 transition-all">
                <TbPhone className="text-[#64ffda] text-2xl" />
              </div>
              <div>
                <p className="text-sub text-sm">Phone</p>
                <p className="text-name">+234 814 657 3494</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:adetayoayodeji7@gmail.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-[#233554] rounded-md hover:bg-[#2d4663] transition-all group"
            >
              <div className="bg-[#64ffda]/10 p-3 rounded-lg group-hover:bg-[#64ffda]/20 transition-all">
                <TbMail className="text-[#64ffda] text-2xl" />
              </div>
              <div>
                <p className="text-sub text-sm">Email</p>
                <p className="text-name break-all">adetayoayodeji7@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-4 bg-[#233554] rounded-md hover:bg-[#2d4663] transition-all group"
            >
              <div className="bg-[#64ffda]/10 p-3 rounded-lg group-hover:bg-[#64ffda]/20 transition-all">
                <MdOutlineMyLocation className="text-[#64ffda] text-2xl" />
              </div>
              <div>
                <p className="text-sub text-sm">Location</p>
                <p className="text-name">Lagos, Nigeria</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 p-4 bg-[#64ffda]/5 border border-[#64ffda]/20 rounded-md">
            <p className="text-sub text-sm leading-relaxed">
              <span className="text-[#64ffda] font-semibold">Response Time:</span> I typically
              respond within 24 hours...
            </p>
          </div>
        </motion.section>
      </article>
    </motion.div>
  );
};

export default Contact;