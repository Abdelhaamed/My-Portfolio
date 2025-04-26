import React from "react";
import "./portfolio.css";
import quran from "../images/quran.png";
import cruds from "../images/cruds.png";
import { motion } from "motion/react";
import fadin from "../framermotion/fadin.js";
function Portfolio() {
  const posts = [
    {
      id: "1",
      img: cruds,
      title: "Cruds pure js",
      demo: "https://abdelhaamed.github.io/Cruds_pure_js-/",
      git: "https://github.com/Abdelhaamed/Cruds_pure_js-",
    },
    {
      id: "2",
      img: quran,
      title: "quran_api",
      demo: "https://abdelhaamed.github.io/quran_api/",
      git: "https://github.com/Abdelhaamed/quran_api",
    },
    {
      id: "3",
      img: cruds,
      title: "Cruds pure js",
      demo: "https://abdelhaamed.github.io/Cruds_pure_js-/",
      git: "https://github.com/Abdelhaamed/Cruds_pure_js-",
    },
    {
      id: "4",
      img: quran,
      title: "quran_api",
      demo: "https://abdelhaamed.github.io/quran_api/",
      git: "https://github.com/Abdelhaamed/quran_api",
    },
  ];
  return (
    <>
      <motion.div
        variants={fadin("up", 0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0 }}
        className="titlep"
      >
        <span>My </span> PORTFOLIO
      </motion.div>
      <div className="card">
        {posts.map((items) => (
          <motion.article
            variants={fadin("down", parseFloat(`0.${items.id}`))}
            initial="initial"
            whileInView="animate"
            whileHover={{
              scale: 1.1,

              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              },
            }}
            viewport={{ once: false, amount: 0 }}
            className="port"
            key={items.id}
          >
            <div className="image">
              <img src={items.img} alt={items.title} />
            </div>
            <div className="adress">
              <p>{items.title}</p>
            </div>
            <div className="button">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={items.git}
                  aria-label={`View ${items.title} on GitHub`}
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={items.demo}
                  aria-label={`View ${items.title}`}
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
