"use client";
import { useEffect } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";

export default function Home() {
  const animateImgaes = (event) => {
    frame.forEach((el) => {
      let xPos = event.clientX / window.innerWidth - 0.5,
        yPos = event.clienY / window.innerHeight - 0.5;

      gsap.to(el, {
        duration: 0.5,
        rotationY: xPos * 10,
        rotationX: yPos * 10,
        stagger: 0.055,
      });
    });
  };

  const initHero = () => {
    gsap.set([nav, gallery], { autoAlpha: 0 });
    gsap.set(title, { y: "-100%" });
    gsap.set(frames, { height: 0 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      if (!isEnabled) return;
      animateImgaes(event);
    });

    window.onload = () => {
      initHero();
    };
  }, []);

  return (
    <main className={styles.app}>
      <section className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span>
              <b>WADM</b> - We Are Digital Marker
            </span>
          </div>
          <div className={styles.icon}>
            <span>&#11044</span>
          </div>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.gallery}>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_1.jpg" alt="" />
              </figure>
            </div>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_2.jpg" alt="" />
              </figure>
            </div>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_3.jpg" alt="" />
              </figure>
            </div>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_4.jpg" alt="" />
              </figure>
            </div>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_5.jpg" alt="" />
              </figure>
            </div>
            <div className={styles.frame}>
              <figure className={styles.figure}>
                <img src="/floating_6.jpg" alt="" />
              </figure>
            </div>
          </div>

          <div className={styles.title}>
            <h1>N</h1>
            <h1>2</h1>
            <h1>5</h1>
            <h1>4</h1>
            <h1></h1>
            <h1>-</h1>
            <h1></h1>
            <h1>A</h1>
            <h1>M</h1>
            <h1>B</h1>
            <h1>S</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
