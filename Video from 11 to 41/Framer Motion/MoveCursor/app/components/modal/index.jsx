"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0 },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 1] },
  },
};

export default function Modal({ modal, projects }) {
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLable = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursorLabelX = gsap.quickTo(cursorLable.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLable.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
    return () => {
      window.removeEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        moveContainerX(clientX);
        moveContainerY(clientY);
        moveCursorX(clientX);
        moveCursorY(clientY);
        moveCursorLabelX(clientX);
        moveCursorLabelY(clientY);
      });
    };
  }, []);

  const { active, index } = modal;
  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            return (
              <div
                key={`modal_${index}`}
                style={{ background: project.color }}
                className={styles.modal}
              >
                <Image
                  src={`/images/${project.src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursor}
        className={styles.cursor}
      >
        Cursor
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursorLable}
        className={styles.cursorLable}
      ></motion.div>
    </>
  );
}
