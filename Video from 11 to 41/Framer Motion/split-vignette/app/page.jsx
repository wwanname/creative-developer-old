"use client";
import styles from "./page.module.scss";
import Gallery from "./components/gallery/Gallery";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useSpring } from "framer-motion";
import Description from "./components/description/Description";

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
  },
];

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25; //vì thẻ gallery có chiều rông là 25vw
    const targetY = clientY - (window.innerWidth / 2) * 0.3; //vì thẻ gallery có chiều dài là 30vw
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ name, handle }, i) => {
        return (
          <Gallery
            mousePosition={mousePosition}
            name={name}
            handle={handle}
            key={i}
          />
        );
      })}
      <Description
        mousePosition={mousePosition}
        projects={projects}
        name={projects.name}
      />
    </main>
  );
}
