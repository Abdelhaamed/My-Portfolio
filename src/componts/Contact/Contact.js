import React from "react";
import "./contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import fadin from "../framermotion/fadin.js";
import { useState } from "react";
function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [email, setemail] = useState("");
  const [area, setarea] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqelhvn",
        "template_4zmemti",
        form.current,
        "68MHT-D6_AQE0Dic7"
      )
      .then(() => {
        setText("");
        setemail("");
        setarea("");
      });
  };
  return (
    <>
      <motion.div
        variants={fadin("up", 0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0 }}
        className="titlec"
      >
        <span>CONTACT </span> US
      </motion.div>
      <div className="contact">
        <motion.div
          variants={fadin("left", 0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0 }}
          className="social"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=201102784069"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelhamed-youssef-591037236/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin2 />
          </a>
          <a
            href="https://github.com/Abdelhaamed"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
        <div className="form">
          <motion.form
            variants={fadin("right", 0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0 }}
            ref={form}
            onSubmit={sendEmail}
            class=""
          >
            <motion.input
              name="name"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              whileFocus={{
                borderColor: "#00bfff",
                boxShadow: "0px 0px 12px #00bfff",
              }}
              animate={text.length === 1 ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
              placeholder="Full name"
              required
              class=""
            />

            <motion.input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              whileFocus={{
                borderColor: "#00bfff",
                boxShadow: "0px 0px 12px #00bfff",
              }}
              animate={email.length === 1 ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
              placeholder="Email"
              required
              class=""
            />

            <motion.textarea
              name="message"
              placeholder="Message"
              value={area}
              onChange={(e) => setarea(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              whileFocus={{
                borderColor: "#00bfff",
                boxShadow: "0px 0px 12px #00bfff",
              }}
              animate={email.length === 1 ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
              required
              class=""
            ></motion.textarea>

            <button class="">Submit</button>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Contact;
