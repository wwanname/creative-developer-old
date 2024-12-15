"use client";
import styles from "./page.module.scss";
import { projects } from "./data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./components/Card";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const containter = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containter,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={containter} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            range={[i * 0.25, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
