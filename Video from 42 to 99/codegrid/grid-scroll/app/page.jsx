/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion"
import useDimension from "./useDimension"

export default function Home() {
  //gsap part
  const container = useRef([])
  const blockRows = useRef([])
  const block = useRef([])
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
    const {innerWidth, innerHeight} = window
    const amountOfBlocks = innerHeight * 0.1
    const blocks = Math.ceil(innerWidth / amountOfBlocks)
    const blockRowss = document.querySelectorAll(".blocks-row")
    blockRowss.forEach(row => {
      for (let i = 0; i < blocks; i++) {
        const block = document.createElement("div")
        block.className= "block"
        row.appendChild(block)
      }
    })

    const ctx = gsap.context(() => {
      const updateBlocksOpacity = (blocks, order, isTop, progress) => {
        blocks.forEach((block, index) => {
          let offset = order.indexOf(index) / blocks.length
          let adjustedProgress = (progress - offset) * blocks.length
          let opacity = isTop ?
          1 - Math.min(1, Math.max(0, adjustedProgress)) :
          Math.min(1, Math.max(0, adjustedProgress))

          block.style.opacity = opacity
        });
      }

      const blockContainers = document.querySelectorAll(".blocks-container")
      blockContainers.forEach((container) => {
        const rows = container.querySelectorAll(".blocks-row")
        const numRows = rows.length

        rows.forEach((row, rowIndex) => {
          let blocks = Array.from(row.querySelectorAll(".block"))
          let isTop = container.classList.contains(".top")
          let randomizedOrder = gsap.utils.shuffle(blocks.map((block, index) => index))

          ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress
              let rowDelay = 0.3 * (numRows - rowIndex - 1)
              let adjustedProgress = Math.max(0, Math.min(1, progress - rowDelay))
              updateBlocksOpacity(block.current, randomizedOrder, isTop, adjustedProgress)
            }
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  // framer-motion part
  // useEffect(() => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])

  // const { scrollYProgress } = useScroll({
  //   target: container.current,
  //   offset: ['start end', 'end start']
  // })

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  const blocks = () => {
    const {innerWidth, innerHeight} = window
    const amountOfBlocks = innerHeight * 0.1
    const blocks = Math.ceil(innerWidth / amountOfBlocks)
    return shuffle([...Array(blocks)].map((random, i) => {
      return (
        <div ref={el => block.current[i] = el} key={i} className="block"></div>
      )
    }))
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>Section 1</h1>
      </section>
      <section className="hero-img">
        <Image width={1000} height={1000} src="/1.jpg" alt="1" />
        <div ref={el => container.current[0] = el} className="blocks-container bottom">
          {[...Array(4)].map((_, i) => {
            return (
              <div ref={el => blockRows.current[i] = el} key={i} className="blocks-row">
                {blocks()}
              </div>
            )
          })}
        </div>
        <div ref={el => container.current[1] = el} className="blocks-container top">
          {[...Array(4)].map((_, i) => {
            return (
              <div ref={el => blockRows.current[i] = el} key={i} className="blocks-row">
                {blocks()}
              </div>
            )
          })}
        </div>
      </section>
      <section className="about">
        <h1>Section 2</h1>
      </section>
      <section className="about-img">
        <Image width={1000} height={1000} src="/2.jpg" alt="2" />
        <div ref={el => container.current[2] = el} className="blocks-container bottom">
          {[...Array(4)].map((_, i) => {
            return (
              <div ref={el => blockRows.current[i] = el} key={i} className="blocks-row">
                {blocks()}
              </div>
            )
          })}
        </div>
      </section>
      <section className="footer">
        <div ref={el => container.current[3] = el} className="blocks-container bottom">
          {[...Array(4)].map((_, i) => {
            return (
              <div ref={el => blockRows.current[i] = el} key={i} className="blocks-row">
                {blocks()}
              </div>
            )
          })}
        </div>
        <h1>Section 3</h1>
      </section>
    </div>
  );
}
