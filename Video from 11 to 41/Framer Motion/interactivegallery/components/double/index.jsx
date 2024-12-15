"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";

export default function Index({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  let speed = 0.15;
  let requestAnimationFrameId = null;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const deltaXPercent = xPercent - currentXPercent;
    currentXPercent = currentXPercent + deltaXPercent * speed;

    firstImage.current.style.width = 66.66 - currentXPercent * 0.33 + "%";
    secondImage.current.style.width = 33.33 + currentXPercent * 0.33 + "%";

    if (Math.round(currentXPercent) === Math.round(xPercent)) {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
    requestAnimationFrame(animate);
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.double}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[0].src}`} fill={true} alt={"image"} />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <Image src={`/images/${projects[1].src}`} fill={true} alt={"image"} />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
}
