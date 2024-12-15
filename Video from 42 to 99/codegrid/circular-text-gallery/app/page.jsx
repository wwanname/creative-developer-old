/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import gsap from "gsap";
import { data } from "./data"
import React, { useLayoutEffect, useRef } from "react";

export default function Home() {
  const items = useRef([])
  useLayoutEffect(() => {
    const numberOfItems = 49
    const radius = 1100
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const angleIncrement = (2 * Math.PI) / numberOfItems
    items.current.forEach((item, i) => {
      const angle = i * angleIncrement
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      const rotation = (angle * 180) / Math.PI

      gsap.set(item, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
      })
    })

    const updatePosition = () => {
      const scrollAmout = window.scrollY * 0.0004
      items.current.forEach((item, i) => {
        const angle = i * angleIncrement + scrollAmout
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        const rotation = (angle * 180) / Math.PI

        gsap.to(item, {
          duration: 0.05,
          x: x + "px",
          y: y + "px",
          rotation: rotation,
          ease: "elastic.out"
        })
      })
    }

    document.addEventListener("scroll", updatePosition)
  }, [])

  return (
    <>
      <div className="cursor">
        {
          [...Array(19)].map((_, i) => {
            return (
              <img key={i} src={`../public/${i}.jpg`} alt={`Image ${i}`} style={{clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}} />
            )
          })
        }
      </div>
      <nav>
        <a href="#">wwan</a>
        <p>Unlock</p>
      </nav>
      <footer>
        <div className="links">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
        <p>Description</p>
      </footer>

      <div className="container">
        <div className="gallery">
          {data.map((data, i) => {
            const {name, id} = data;
            return (
              <div ref={el => items.current[i] = el} key={i} className="item">
                <p>
                  {name}
                  <span>{`${Math.floor(Math.random() * 50) + 1}`}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
