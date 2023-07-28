import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = ({ show }) => {
  const [valid, setValid] = useState(false);

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
          },
          (error) => {
            console.log(error.text);
          }
        );

      setValid(false);
      e.target.reset();
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
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className={`${show && "blur-sm"} pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className="text-name text-xl sm:text-2xl py-3">Contact Me </h1>
      <article className="sm:flex">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:w-1/2"
          variants={variants}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.5, delay: 0.05, staggerChildren: 0.2 }}
        >
          <motion.div className="sm:flex " variants={item}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={inputName}
              className="my-2 py-2 bg-[#233554] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-sub sm:mr-2"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              ref={inputEmail}
              className="my-2 py-2 bg-[#233554] w-full sm:w-1/2 placeholder:pl-2 placeholder:text-sub "
            />
          </motion.div>
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            ref={inputSubject}
            className="my-2 py-2 bg-[#233554] w-full placeholder:pl-2 placeholder:text-sub "
            variants={item}
          />
          <motion.textarea
            placeholder="Message"
            name="message"
            ref={inputMessage}
            className="my-2 pt-16 bg-[#233554] w-full placeholder:pl-2 placeholder:text-sub "
            variants={item}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="border-[#64ffda] px-3 py-2 my-2 items-start border rounded-sm hover:bg-[#233554] text-xl font-thin"
            variants={item}
          >
            Send
          </motion.button>
          <div>
            {valid && <p className="text-red-500">Enter all Input Fields...</p>}
          </div>
        </motion.form>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:ml-8 sm:mt-2 mt-8 sm:text-xl"
        >
          <div className="flex items-center my-3">
            <TbPhone />
            <p>+2348146573494</p>
          </div>
          <div className="flex items-center my-3">
            <TbMail />
            <p>adetayoayodeji7@gmail.com</p>
          </div>
          <div className="flex items-center my-3">
            <MdOutlineMyLocation />
            <p>Lagos, Nigeria.</p>
          </div>
        </motion.section>
      </article>
    </motion.div>
  );
};

export default Contact;
