"use client";
import styles from "./styles.module.scss";
import Nav from "../Nav/nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import Link from "../Nav/Link/link";
import Curve from "../Nav/Curve/index";

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Work",
    href: "/work",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        />
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.div
              variants={menuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.menu}
            >
              <div className={styles.body}>
                <div className={styles.nav}>
                  <div className={styles.header}>
                    <p>Navigation</p>
                  </div>
                  {navItems.map((data, index) => {
                    return <Link key={index} data={{ ...data, index }}></Link>;
                  })}
                </div>
                <div className={styles.footer}>
                  <a>Awwwards</a>
                  <a>Instagram</a>
                  <a>Dribble</a>
                  <a>LinkedIn</a>
                </div>
              </div>
              <Curve />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
