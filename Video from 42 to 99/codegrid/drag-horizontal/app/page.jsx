/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef()
  const timeline = useRef()
  const scroller = useRef()
  const screen = useRef()
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useGSAP(() => {
    gsap.registerPlugin(Draggable)
    const timelineWidth = timeline.current.offsetWidth
    const scrollerWidth = scroller.current.offsetWidth
    // gap = 16, it takes from css (global.css), we don't put any fontSize value to body so this funtion will get the default value, the default fontSize value is 16
    const gap = parseInt(window.getComputedStyle(document.body).fontSize)
    //this function avoid the scroller goes outside
    const maxDragX = timelineWidth - scrollerWidth - 2 * gap

    Draggable.create(scroller.current, {
      type: "x",
      bounds: {
        minX: gap,
        maxX: timelineWidth - scrollerWidth - gap
      },
      onDrag: function() {
        // this.x value is bounds value between minX and maxX, the result is maxX
        // this progress function gives us the value between 0 and 1
        let progress = (this.x - gap) / maxDragX
        let containerX = -400 * (timelineWidth / 100) * progress
        // it means 4 pages multiple arond 1px-20px
        gsap.to(screen.current, {
          x: containerX,
          duration: 1,
          ease: "power3.out"
        })
      }
    })
  }, {scope: container})
  return (
    <main ref={container}>
      <nav>
        <a href="#">Urban Exclipse</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Work</a>
      </nav>

      <div ref={screen} className="container">
        <section id="section-1"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatem!</h1></section>
        <section id="section-2"><div className="img"><Image width={500} height={1000} src="/1.jpg" alt="1" /></div><div className="img"><Image width={500} height={1000} src="/2.jpg" alt="2" /></div><div className="img"><Image width={500} height={1000} src="/3.jpg" alt="3" /></div></section>
        <section id="section-3"><div className="img"><Image width={500} height={1000} src="/4.jpg" alt="4" /></div><div className="img"><Image width={500} height={1000} src="/5.jpg" alt="5" /></div><div className="img"><Image width={500} height={1000} src="/6.jpg" alt="6" /></div></section>
        <section id="section-4"><h1>Lorem ipsum dolor sit amet.</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas corrupti enim, ratione maxime iste recusandae ea reiciendis incidunt aliquam tempore praesentium nam ipsum itaque neque, ipsa modi doloribus cumque ad?</p></section>
        <section id="section-5"><div className="img"><Image width={500} height={1000} src="/7.jpg" alt="7" /></div><div className="img"><Image width={500} height={1000} src="/8.jpg" alt="8" /></div><div className="img"><Image width={500} height={1000} src="/9.jpg" alt="9" /></div></section>
      </div>

      <div ref={timeline} className="timeline">
        <div ref={scroller} className="scroller"><p>[<span>Drag</span>]</p></div>
        {[...Array(50)].map((_, i) => <div key={i} className="marker"></div>)}
      </div>
    </main>
  );
}
