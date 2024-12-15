import React from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";
import styles from "../../../styles/styles.module.scss";

export default function Stairs({ children, backgroundColor }) {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const numberofColumn = 4;
  return (
    <div className={styles.page}>
      <div className={styles.stairs}>
        <motion.div
          {...anim(opacity)}
          className={styles.transitionBackground}
        ></motion.div>
        <div className={styles.transitionContainer}>
          {[...Array(numberofColumn)].map((_, i) => {
            return <motion.div {...anim(expand, numberofColumn - i)} key={i} />; // numberofColumn - i để đảo ngược chiều
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
