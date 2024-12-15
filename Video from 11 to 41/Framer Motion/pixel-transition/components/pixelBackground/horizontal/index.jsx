/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

//indexOfColumn, randomDelay, delays là cái gì không biết//

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delays) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * delays[0] },
  }),
  closed: (delays) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * delays[0] },
  }),
};

export default function index({ menuIsActive }) {
  const shuffle = (a) => {
    //by fisher-yates shuffle
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColumn) => {
    const { innerWidth, innerHeight } = window; // trích xuất
    const blockSize = Math.ceil(innerWidth * 0.052); //chiều rộng cửa sổ chia cho 5 vw
    const amountOfBlocks = Math.ceil(innerHeight / blockSize); //chiều dài chia cho 1 khối đã tính ở trên
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      // thủ thuật Array
      return (
        <motion.div
          key={`div_${i}`}
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={[
            indexOfColumn + randomDelay,
            20 /*20 là số lượng cột*/ - indexOfColumn + randomDelay,
          ]}
        ></motion.div>
      );
    });
  };

  return (
    <div className={styles.pixelBackground}>
      {[...Array(20)].map((_, i) => {
        // thủ thuật Array
        return (
          <div key={i} className={styles.column}>
            {getBlocks(i)}
          </div>
        );
      })}
    </div>
  );
}
