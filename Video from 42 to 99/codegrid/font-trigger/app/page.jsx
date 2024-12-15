/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const animateChars = (char, reverse = false) => {
        const staggerOptions = {
          each: 0.34,
          from: reverse ? "start" : "end",
          ease: "linear"
        }
        gsap.fromTo(char, {
          fontWeight: 100
        }, {
          fontWeight: 900,
          duration: 1,
          ease: "none",
          stagger: staggerOptions,
          scrollTrigger: {
            trigger: char[0].closest(".marquee-container"), //closest only work with smallest child
            start: "50% bottom",
            end: "top top",
            scrub: true
          }
        })
      }

      const splitText = new SplitType(".item h1", {types: "chars"})
      const marqueeContainers = document.querySelectorAll(".marquee-container")
      marqueeContainers.forEach((container, index) => {
        let start = "0%"
        let end = "-15%"

        if (index % 2 === 0) {
          start = "0%"
          end = "10%"
        }

        const marquee = container.querySelectorAll(".marquee")
        const words = marquee[0].querySelectorAll(".item h1")

        gsap.fromTo(marquee, {
          x: start,
        }, {
          x: end,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "150% top",
            scrub: true
          }
        })
        words.forEach(word => {
          const reverse = index % 2 !== 0
          const char = word.querySelectorAll(".char")
          animateChars(char, reverse)
        })
      })
    })

    return() => ctx.revert()
  }, [])

  return (
    <div className="container">
      <section className="hero">
        <img src="./hero.jpg" alt="hero" />
      </section>
      <section className="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis obcaecati exercitationem numquam voluptatibus dolores laboriosam doloremque rerum repellendus reprehenderit inventore, ducimus minus delectus voluptates, repellat dicta repudiandae hic? Natus.</p>
      </section>
      <section className="marquees">
        <div className="marquee-container" id="marquee-1">
          <div className="marquee">
            <div className="item"><img src="./1.jpg" alt="1" /></div>
            <div className="item"><img src="./2.jpg" alt="2" /></div>
            <div className="item with-text"><h1>Unique</h1></div>
            <div className="item"><img src="./3.jpg" alt="3" /></div>
            <div className="item"><img src="./4.jpg" alt="4" /></div>
            <div className="item"><img src="./5.jpg" alt="5" /></div>
          </div>
        </div>
        <div className="marquee-container" id="marquee-2">
          <div className="marquee">
            <div className="item"><img src="./1.jpg" alt="1" /></div>
            <div className="item"><img src="./2.jpg" alt="2" /></div>
            <div className="item"><img src="./3.jpg" alt="3" /></div>
            <div className="item with-text"><h1>Release</h1></div>
            <div className="item"><img src="./4.jpg" alt="4" /></div>
            <div className="item"><img src="./5.jpg" alt="5" /></div>
          </div>
        </div>
        <div className="marquee-container" id="marquee-3">
          <div className="marquee">
            <div className="item with-text"><h1>2500</h1></div>
            <div className="item"><img src="./1.jpg" alt="1" /></div>
            <div className="item"><img src="./2.jpg" alt="2" /></div>
            <div className="item"><img src="./3.jpg" alt="3" /></div>
            <div className="item"><img src="./4.jpg" alt="4" /></div>
            <div className="item"><img src="./5.jpg" alt="5" /></div>
          </div>
        </div>
        <div className="marquee-container" id="marquee-4">
          <div className="marquee">
            <div className="item"><img src="./1.jpg" alt="1" /></div>
            <div className="item"><img src="./2.jpg" alt="2" /></div>
            <div className="item"><img src="./3.jpg" alt="3" /></div>
            <div className="item"><img src="./4.jpg" alt="4" /></div>
            <div className="item with-text"><h1>Rarity</h1></div>
            <div className="item"><img src="./5.jpg" alt="5" /></div>
          </div>
        </div>
      </section>
      <section className="services">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo ipsam sit vitae, vero aperiam optio? Nisi, tempora est! Nostrum quod quo libero voluptatem asperiores inventore eos minima dicta eligendi.</p>
      </section>
      <section className="footer">
        <h1>The End</h1>
      </section>
    </div>
  );
}
