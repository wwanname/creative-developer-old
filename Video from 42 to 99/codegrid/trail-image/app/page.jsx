/* eslint-disable @next/next/no-img-element */
'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containers = useRef([])
  const animationTimeout = useRef(null)
  const currentlyPlaying = useRef(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

    const startAnimation = () => {
      if (currentlyPlaying || containers.current.children.length === 0) return
        currentlyPlaying.current = true
        gsap.to(containers.current, {
          y: 1000,
          scale: 0.5,
          opacity: 0,
          duration: 0.5,
          stagger: 0.025,
          onComplete: function () {
            this.targets().forEach((item) => {
              if (item.parentNode) {
                item.parentNode.removeChild(item)
              }
            })
            currentlyPlaying.current = false
          }
        })
      }

      const manageItemLimits = () => {
        containers.current.forEach(container => {
        while (container.length > 20) {
          container.removeChild(container.firstChild)
        }})
      }

      let xTo = gsap.quickTo(containers, "x", {duration: 0.6, ease: "power3"}),
      yTo = gsap.quickTo(containers, "y", {duration: 0.6, ease: "power3"});

      const onMouseMove = (e) => {
        clearTimeout(animationTimeout.current)
        animationTimeout.current = setTimeout(startAnimation, 100)
        manageItemLimits()
        xTo(e.clientX)
        yTo(e.clientY)
      }

      containers.current.forEach(container => {
        if (container) {
          container.addEventListener("mousemove", onMouseMove)
        }
      })

      return () => {
        containers.current.forEach(container => {
          if (container) {
            container.removeEventListener("mousemove", onMouseMove)
          }
        })
      }})

      return(() => ctx.revert())
  }, [])

  return (
    <>
      <div className="items"></div>
      <h1>Move your mouse <br />to explore</h1>
      {[...Array(18)].map((_, i) => {
        return (
          <div ref={el => containers.current[i] = el} key={i} style={{transform: `translate(-75px, -100px)`}} className="item">
            <img src={`/${i}.jpg`} alt={`Image ${i}`} />
          </div>
        )
      })}
    </>
  );
}
