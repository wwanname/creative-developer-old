"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thridText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.set(slider.current, {
      // Dùng để scroll lên sẽ chuôi ngược lại
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: window.innerHeight,
        scrub: 0.25,
        markers: true,
        onUpdate: (e) => (direction = e.direction),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      //reset lại hoạt ảnh về ban đầu theo hướng âm (từ phải sang trái)
      xPercent = 0;
    }

    if (xPercent > 0) {
      //reset lại hoạt ảnh về ban đầu theo hướng dương (từ trái sang phải)
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thridText.current, { xPercent: xPercent });
    xPercent -= 0.1 * direction; // Di chuyển hướng âm
    requestAnimationFrame(animation);
  };

  return (
    <main className={styles.main}>
      <Image src="/background.jpg" fill={true} alt="background" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
          <p ref={thridText}>Freelance Developer -</p>
        </div>
      </div>
    </main>
  );
}
