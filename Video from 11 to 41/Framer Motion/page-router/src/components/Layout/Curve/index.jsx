"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, slide } from "./anim";
import styles from "../../../styles/styles.module.scss";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};
// {routes[router.route]} = {giá trị đổi tên[giá trị địa chỉ trang web]}

export default function Curve({ children, backgroundColor }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth, //trích xuất window.innerWidth sang width vì browser không tồn tại máy chủ nextjs
        height: window.innerHeight,
      });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.page} style={{ backgroundColor }}>
      <div className={styles.curve}>
        <motion.p {...anim(text)} className={styles.route}>
          {routes[router.route]}
        </motion.p>
        <div
          style={{ opacity: dimensions.width > 0 ? 0 : 1 }} //Avoid flashes when refresh
          className={styles.background}
        ></div>
        {dimensions.width > 0 && <SVG {...dimensions} />}
        {children}
      </div>
    </div>
  );
}

const SVG = ({ width, height }) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
    `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
