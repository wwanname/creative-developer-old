/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap"

export default function Home() {
  const items = useRef([])
  const container = useRef()
  const target = useRef([])
  let currentAngle = 0
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0
  let isMouseOverSpan = false

  const updateGallery = (mouseX, mouseY, show = true) => {
    targetX = mouseX - container.current.getBoundingClientRect().left/2
    targetY = mouseY - container.current.getBoundingClientRect().top/2

    currentX += (targetX - currentX) * 0.01;
    currentY += (targetY - currentY) * 0.01;

    const numberOfItems = items.current.length
                        // 360deg        / total items
    const angleIncrement = (2 * Math.PI) / numberOfItems
    const radius = 300
    currentAngle += 0.001;

    items.current.forEach((item, index) => {
      const angle = currentAngle + index * angleIncrement;
              //posCursor  //radi   //posCircle      //centerItems        (pos = position)
      const x = currentX + radius * Math.cos(angle) - item.offsetWidth /2
      const y = currentY + radius * Math.sin(angle) - item.offsetHeight /2

      gsap.to(item, {
        x: x,
        y: y,
        scale: 0.1,
        opacity: show ? 1 : 0,
        duration: 0.5,
        ease: "power1.out"
      })
    })
  }

  useEffect(() => {
    const targetEnter = (e) => {
      isMouseOverSpan = true
      //center cursor
      targetX = e.clientX - window.innerWidth/4.4;
      targetY = e.clientY - window.innerHeight/4.4;

      //auto update
      gsap.ticker.add(() => {
        if (isMouseOverSpan) {
          updateGallery(targetX, targetY, true)
        }
      })

      target.current.forEach(target => {
        if (target) {
          target.parentNode.style.color = "#545454"
        }
      })
    }

    const targetLeave = (e) => {
      isMouseOverSpan = false;
      updateGallery(0, 0, false)

      target.current.forEach((target) => {
        if (target) {
          target.parentNode.style.color = "#fff"
        }
      })
    }

    target.current.forEach(target => {
      if (target) {
        target.addEventListener("mouseenter", targetEnter)
        target.addEventListener("mouseleave", targetLeave)
      }
    })

    return(() => {
    target.current.forEach(target => {
      if (target) {
        target.removeEventListener("mouseenter", targetEnter),
        target.removeEventListener("mouseleave", targetLeave)
      }
    })})
  }, [])

  return (
    <>
      <div className="hero-copy">
        <p>We are digital agency. From concept to
          <span ref={el => target.current[0] = el}>execution</span>, we design experiences,
          <span ref={el => target.current[1] = el}>product</span> and services that help our international
          <span ref={el => target.current[2] = el}>clients</span> create emotional and meaningful
          <span ref={el => target.current[3] = el}>connections</span> between their brand and people
        </p>
      </div>
      <nav>
        <p>wwan &nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;26092017</p>
        <p>YouTube</p>
      </nav>
      <footer>
        <p>Subscribe</p>
        <p>wwan</p>
      </footer>
      <div ref={container} className="container">
        <div className="gallery">
          {[...Array(11)].map((_, i) => {
            return <div ref={(el) => (items.current[i] = el)} key={i} className="item">
              <img src={`/assets/${i}.jpg`} alt={`Image ${i}`} />
            </div>
          })}
        </div>
      </div>
    </>
  );
}
