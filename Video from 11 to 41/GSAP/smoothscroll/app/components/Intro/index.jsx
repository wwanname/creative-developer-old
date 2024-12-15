/* eslint-disable react-hooks/rules-of-hooks */
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function index() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" });
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>

      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image
            src={"/images/intro.png"}
            fill={true}
            alt="background image"
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
}
