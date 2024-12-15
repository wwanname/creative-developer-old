/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import gsap from "gsap"
import React, { useLayoutEffect, useRef, useState } from "react"

export default function Home() {
  const items = useRef([])
  const container = useRef()
  const [gallery, setGallery] = useState(false)

  useLayoutEffect(() => {
    if (container.current) {

    const ctx = gsap.context(() => {
      const radius = 300
      const numberOfItems = items.current.length
      const angleIncrement = (2 * Math.PI) / numberOfItems
      const centerX = container.current.offsetWidth / 2
      const centerY = container.current.offsetHeight / 2

      items.current.forEach((item, i) => {
        const angle = i * angleIncrement
        const InitialRotation = (angle * 180 / Math.PI) - 90
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        gsap.set(item, {scale: 0})

        gsap.to(item, {
          left: x + "px",
          top: y + "px",
          rotation: InitialRotation,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 1,
        }, i * 0.1)
      })
    })

    return (() => ctx.revert())
  }
  }, [])

  return (
    <>
      <nav>
        <p>wwan</p>
        <p>Showreel</p>
      </nav>
      <div ref={container} className="container">
        <div className="gallery">
          {
            [...Array(12)].map((_, i) => {
              return (
                <div onClick={() => setGallery(!gallery)} ref={el => items.current[i] = el} key={i} className="item">
                  <img src={`./${i}.jpg`} alt={`Image ${i}`} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
