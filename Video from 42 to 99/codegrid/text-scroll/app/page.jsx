/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  const footerTrigger = useRef()
  const stickyBar = useRef();
  const rows = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const footerTriggerHeight = footerTrigger.current.offsetHeight
    const stickyBarCenter = () => stickyBar.current.offsetTop + stickyBar.current.offsetHeight / 2;

    const ctx = gsap.context(() => {
      rows.current.forEach(row => {
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${stickyBarCenter() - 550} center`,
          end: () => `top+=${stickyBarCenter() - 450} center`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = window.innerWidth < 900 ? 10 : 15;
            const minGap = window.innerWidth < 900 ? 0.5 : 1;
            const currentGap = minGap + (maxGap - minGap) * progress;
            row.style.gap = `${currentGap}em`;
          }
        });
        ScrollTrigger.create({
          trigger: row,
          start: () => `top+=${stickyBarCenter() - 400} center`,
          end: () => `top+=${stickyBarCenter() - 300} center`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const maxGap = window.innerWidth < 900 ? 0.5 : 1;
            const minGap = window.innerWidth < 900 ? 10 : 15;
            const currentGap = minGap + (maxGap - minGap) * progress;
            row.style.gap = `${currentGap}em`;
          }
        });
      });
      ScrollTrigger.create({
        trigger: footerTrigger.current,
        start: "top bottom",
        end: () => `top+=${footerTriggerHeight - window.innerHeight} center`,
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const startTop = 50
          const endTop = 92
          const newTop = startTop + (endTop - startTop) * self.progress
          stickyBar.current.style.top = `${newTop}%`
        }
      })

      ScrollTrigger.create({
        trigger: footerTrigger.current,
        start: () => `top+=${footerTriggerHeight - (window.innerHeight + 100)} bottom`,
        end: "bottom",
        scrub: true,
        onUpdate: (self) => {
          const fontSizeStart = window.innerWidth < 900 ? 2.5 : 1.25
          const fontSizeEnd = 9
          const newFontSize = fontSizeStart + (fontSizeEnd - fontSizeStart) * self.progress
          stickyBar.current.querySelectorAll("p").forEach((p) => {
            p.style.fontSize = `${newFontSize}vw`
          })
        }
      })
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container">
      <div ref={stickyBar} className="sticky-bar">
        <div className="item"><p>Barret</p></div>
        <div className="item"><p>&</p></div>
        <div className="item"><p>Hale</p></div>
      </div>
      <section className="hero">
        <img src="./bg1.jpg" alt="bg1" />
      </section>
      <div className="clients">
        {[...Array(15)].map((_, i) => (
          <div ref={el => rows.current[i] = el} key={i} className="row">
            <div className="logo"><p>Logo {i * 2 + 1}</p></div>
            <div className="logo"><p>Logo {i * 2 + 2}</p></div>
          </div>
        ))}
      </div>
      <section ref={footerTrigger} className="trigger-footer">
        <img src="./bg2.jpg" alt="bg2" />
      </section>
    </div>
  );
}
