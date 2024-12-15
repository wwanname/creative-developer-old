import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Description({ mousePosition, projects, name }) {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;

  return (
    <div className={styles.Description}>
      <div className={styles.DescriptionContainer}>
        {projects.map(({ name }, i) => {
          return (
            <p
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p_${i}`}
            >
              {name}
            </p>
          );
        })}
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image
          src={`/images/${projects[index].handle}/about.jpg`} //index của useState
          alt={`${name}`}
          fill
        />
      </motion.div>
    </div>
  );
}
