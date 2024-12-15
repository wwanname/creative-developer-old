import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Curve() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  // M= First point (x: 100, y: -1) Q= Second Point (x:-100, y: window.innerHeight) Q-curve (x: -100, center window.innerHeight), (x: 100, y: -1)
  // SVG Path commands:

  // Move To: Picks up the drawing instrument and setting it down at the specified position.
  // Line To: Draws a straight line from the current point to the specified end point
  // Quadratic Bézier Curve:Draws a curve from the current point to the specified point. Use a control point to create the curve.

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathAnimation}
        initial="initial"
        enter="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
