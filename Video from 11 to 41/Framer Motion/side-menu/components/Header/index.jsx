/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import Button from "../Button";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../Nav";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function index() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div //AnimatePresence dùng khi có &&
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
