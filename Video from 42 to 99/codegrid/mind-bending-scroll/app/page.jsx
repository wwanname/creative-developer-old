/* eslint-disable @next/next/no-img-element */
'use client'
import React, {useEffect, useLayoutEffect} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".whitespace",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: true
      })
      ScrollTrigger.create({
        trigger: ".header-info",
        start: "top top",
        endTrigger: ".whitespace",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        markers: true
      })
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".header-images",
        end: "bottom bottom",
        onUpdate: (self) => {
          const rotation = self.progress * 360;
          gsap.to(".revealer", {rotation})
        }
      })
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top top",
        endTrigger: ".header-info",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress
          const clipPath = `polygon(
          ${45 - 45 * progress}% ${0 + 0 * progress}%,
          ${55 + 45 * progress}% ${0 + 0 * progress}%,
          ${55 + 45 * progress}% ${100 - 0 * progress}%,
          ${45 - 45 * progress}% ${100 - 0 * progress}%
          )`
          gsap.to(".revealer-1, .revealer-2", {
            clipPath: clipPath,
            ease: "none",
            duration: 0,
          })
        }
      })
      ScrollTrigger.create({
        trigger: ".header-info",
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const left = 32 + 18 * progress
          gsap.to(".revealer", {
            left: `${left}%`,
            ease: "none",
            duration: 0
          })
        }
      })
      ScrollTrigger.create({
        trigger: ".whitespace",
        top: "top 50%",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const scale = 1 + 15 * progress
          gsap.to(".revealer", {
            scale: scale,
            ease: "none",
            duration: 0
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="container">
      <section className="hero">
        <h1>Symphonia</h1>
      </section>

      <section className="info">
        <div className="header-rows">
          <div className="header-row"><h1>Motion</h1></div>
          <div className="header-row"><h1>Stills</h1></div>
        </div>
      </section>

      <section className="header-info">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iusto architecto provident aliquam sint nam sit dolorem animi. Quis, non!</p>
        <div className="header-images">
          <div className="img"><img src="./0.jpg" alt="0" /></div>
          <div className="img"><img src="./1.jpg" alt="1" /></div>
          <div className="img"><img src="./2.jpg" alt="2" /></div>
          <div className="img"><img src="./3.jpg" alt="3" /></div>
        </div>
      </section>

      <section className="whitespace"></section>
      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>
      <section className="website-content">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis distinctio voluptates placeat totam molestiae magni assumenda dicta ex, tempore sint.</h1>
      </section>
    </div>
  );
}
