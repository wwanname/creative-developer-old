import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";
import styles from "../../../styles/styles.module.scss";

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className={styles.inner}>
      <motion.div {...anim(slide)} className={styles.slide} />
      <motion.div {...anim(perspective)} className={styles.page}>
        <motion.div {...anim(opacity)}>
          <div className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
