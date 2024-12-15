import React from "react";
import { Links, FooterLinks } from "./data";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const perspective = {
  inital: {
    opacity: 0,
    rotateX: 90,
    translateX: 80,
    translateY: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 1 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};

const sliderIn = {
  inital: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        {FooterLinks.map((Link, i) => {
          return (
            <motion.a
              key={`f_${i}`}
              href={Link.href}
              variants={sliderIn}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {Link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
