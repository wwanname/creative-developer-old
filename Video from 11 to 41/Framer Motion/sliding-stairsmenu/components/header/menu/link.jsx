/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { mountAnim, rotateX } from "./anim";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function link({ data, index }) {
  const { title, description, images } = data;
  const outer = useRef(null);
  const inner = useRef(null);

  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      //Nếu trỏ chuột ở dưới phần tử thì vào trường hợp 1 còn lại là trường hợp 2
      //getBoundingClientRect() để lấy vị trí của conatiner và so sánh vị trí con trỏ chuột (`e.clientX`)
      gsap.set(outer.current, { top: "-100%" }); //-100% là ở trên
      gsap.set(inner.current, { top: "100%" }); //100% là ở dưới
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      //getBoundingClientRect() để lấy vị trí của conatiner và so sánh vị trí con trỏ chuột (`e.clientX`)
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={(e) => {
        manageMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e);
      }}
      variants={rotateX}
      {...mountAnim}
      custom={4 - index}
      className={styles.link}
    >
      <Link href="/">{title}</Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(3)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[0]}`} fill alt="image" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[1]}`} fill alt="image" />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
