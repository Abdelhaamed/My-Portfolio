import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "motion/react";
import fadin from "../framermotion/fadin.js";

function Skills() {
  const skill = [
    {
      id: "1",
      icon: <FaHtml5 />,
      title: "HTML5",
    },
    {
      id: "2",
      icon: <FaCss3Alt />,
      title: "CSS3",
    },
    {
      id: "3",
      icon: <FaJsSquare />,
      title: "JavaScript",
    },
    {
      id: "4",
      icon: <FaBootstrap />,
      title: "BootStrap",
    },
    {
      id: "5",
      icon: <SiTailwindcss />,
      title: "TailWind Css",
    },
    {
      id: "6",
      icon: <FaReact />,
      title: "REACT",
    },
    {
      id: "7",
      icon: <SiRedux />,
      title: "Redux",
    },
    {
      id: "8",
      icon: <SiFramer />,
      title: "Framer Motion",
    },
    {
      id: "9",
      icon: <FaGitAlt />,
      title: "Git",
    },
  ];
  return (
    <>
      <motion.div
        variants={fadin("up", 0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0 }}
        className="title"
      >
        <span>My </span> Skills
      </motion.div>
      <motion.div className="skills">
        {skill.map((item) => (
          <motion.div
            variants={fadin("down", parseFloat(`0.${item.id}`))}
            initial="initial"
            whileInView="animate"
            whileHover={{
              scale: 1.2,

              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              },
            }}
            viewport={{ once: false, amount: 0 }}
            key={item.id}
          >
            {item.icon}
            <div>{item.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
