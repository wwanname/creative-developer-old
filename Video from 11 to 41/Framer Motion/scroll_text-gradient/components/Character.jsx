"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0.25 end", "0.25 start"],
  });

  const words = value.split(" "); //cách chia từ

  return (
    <motion.p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        //sử dụng Array
        const start = i / words.length; //mỗi 1 chữ chia cả đoạn văn
        const end = start + 1 / words.length; //abstract
        {
          /*console.log([start, end]);*/
        }
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[1] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
