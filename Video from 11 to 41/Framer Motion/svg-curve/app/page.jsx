/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const path = useRef(null);
  let progress = 0;
  let time = Math.PI / 2;
  let x = 0.5;
  let requestID = null;

  useEffect(() => {
    setPath(progress);
    window.addEventListener("resize", () => {
      setPath(progress);
    });
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7; // vì 0.7 là 70vw của .body
    path.current.setAttributeNS(
      "",
      "d",
      `M 0 50 Q ${width * x} ${50 + progress} ${width} 50` //50 là vì .line svg có 100px, để vẽ middle thì chia 2
    ); //vì cùng tên với path nên dùng setAttributeNS
  };

  const manageMouseEnter = () => {
    if (requestID) {
      window.cancelAnimationFrame(requestID);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2; //sped
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      requestID = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div
          onMouseEnter={manageMouseEnter}
          onMouseMove={manageMouseMove}
          onMouseLeave={manageMouseLeave}
          className={styles.line}
        >
          <span className={styles.box}></span>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>
        <div className={styles.description}>
          <p>Smart Development</p>
          <p>
            Combining unique design and rich technology, we build digital
            products exactly as they were designed, without shortcuts or
            simplifications.
          </p>
        </div>
        <div className={styles.tagsContainer}>
          <p>Areas</p>
          <div className={styles.tags}>
            <p>E-commerce</p>
            <p>Finance</p>
            <p>Education</p>
            <p>Social</p>
            <p>Entertainment</p>
            <p>Medicine</p>
          </div>
        </div>
      </div>
    </div>
  );
}
