import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function index({ mousePosition, name, handle }) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${handle}/background.jpg`} alt={`${name}`} fill />
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image src={`/images/${handle}/1.jpg`} alt={`${name}`} fill />
      </motion.div>
    </div>
  );
}
