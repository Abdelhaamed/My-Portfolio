import React from "react";
import img2 from "../images/undraw_programming_65t2.svg";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import fadin from "../framermotion/fadin.js";
const Home = () => {
  const letters = " Abdelhamed  Youssef".split("");
  return (
    <div className="home">
      <motion.div className="container">
        <motion.div
          animate={{
            y: [0, -20, 0],
            filter: [
              "brightness(100%)",
              "brightness(120%)",
              "brightness(100%)",
              "brightness(120%)",
              "brightness(100%)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="leftside"
        >
          <img src={img2} alt="1" />
        </motion.div>
        <motion.div
          variants={fadin("right", 0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0 }}
          className="rightside"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="small"> I'm </span>{" "}
            {letters.map((letter, index) => (
              <motion.span
                className="letter"
                key={index}
                initial={{
                  opacity: 0,
                  y: -100, // البداية من الأسفل
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 1.6,
                    delay: 0.1 * index, // التأخير بين الحروف
                    ease: [0.25, 0.25, 0.25, 0.75],
                    type: "spring",
                    repeat: Infinity, // التكرار
                    repeatType: "reverse", // التأثير العكسي
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 40, // عند الخروج يتحرك للأعلى
                }}
                style={{
                  display: "inline-block",
                  ...(letter === " " ? { width: "6px" } : {}), // إضافة مساحة للمسافة
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            variants={fadin("right", 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0 }}
          >
            Front-End Developer
          </motion.h2>
          <motion.p
            variants={fadin("down", 0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0 }}
          >
            I am a graduate of the faculty of science . During my studies, I
            focused on website programming, complementing it with personal
            learning. I aspire to be the expert who brings your front-ends to
            life.
          </motion.p>
          <div className="butones">
            <motion.button
              whileHover={{
                scale: 1.2,

                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                },
              }}
            >
              <a
                href="https://drive.google.com/file/d/1W9VHKbccd2VU3vqwTafg-b7lQWkaC85_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,

                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                },
              }}
            >
              <Link className="about" to="/Skills">
                About Me
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
