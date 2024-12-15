'use client'
import Image from "next/image";
import { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const container = useRef(null)
  const stickyRef = useRef(null)
  const handContainerRef = useRef(null)
  const handRef = useRef(null)
  const handImageRef = useRef(null)
  const introRef = useRef(null)
  const h1ElementRef = useRef(null)
  const introCopyRef = useRef(null)
  const websiteContentRef = useRef(null)

  const introHeaders = [
    "<span>time to</span> be brave",
    "<span>time to</span> be playful",
    "<span>time to</span> design the future",
    "<span>time to</span> meet harrnish",
    "<span>time to</span> see project one",
  ]

  useGSAP(() => {
    let currentCycle = -1
    let imageReaveled = false

    const updateHeaderText = () => {
      if (h1ElementRef.current) {
        h1ElementRef.current.innerHTML =
          introHeaders[Math.min(currentCycle, introHeaders.length - 1)]
      }
    }
      const pinnedHeight = window.innerHeight * 8

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress
          const rotationProgress = Math.min((progress * 8) / 5, 1)
          const totalRotation = rotationProgress * 1800 - 90
          const rotationInCycle = ((totalRotation + 90) % 360) - 90
          gsap.set(handContainerRef.current, {rotationZ: rotationInCycle})

          const newCycle = Math.floor((totalRotation + 90) / 360)
          if (
            newCycle !== currentCycle &&
            newCycle >= 0 &&
            newCycle < introHeaders.length
          ) {
            currentCycle = newCycle
            updateHeaderText()

            if (newCycle === 3 && !imageReaveled) {
              gsap.to(handImageRef.current, {opacity: 1, duration: 0.3})
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
              })
              imageReaveled = true;
            } else if (newCycle !== 3 && imageReaveled) {
              gsap.to(handImageRef.current, {opacity: 0, duration: 0.3})
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
              })
              imageReaveled = false;
            }

            if (progress <= 6 / 8) {
              const animationProgess = Math.max(0, (progress - 5 / 8) / (1 / 8))
              const newHeight = gsap.utils.interpolate(
                52.75,
                100,
                animationProgess
              )
              const newOpacity = gsap.utils.interpolate(1, 0, animationProgess)
              gsap.set(handRef.current, {height: `${newHeight}%`})
              gsap.set(introRef.current, {opacity: 1})
              gsap.set(h1ElementRef.current, {opacity: newOpacity})
              gsap.set(h1ElementRef.current.querySelector("span"), {opacity: newOpacity})
              console.log(animationProgess)
            } else {
              gsap.set(introRef.current, {opacity: 0})
            }

            if (progress <= 7 / 8) {
              const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8))
              const newScale = gsap.utils.interpolate(1, 20, scaleProgress)
              gsap.set(handRef.current, {scale: newScale})
            }

            if (progress <= 7.5 / 8) {
              const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8))
              const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress)
              gsap.set(handRef.current, {opacity: newOpacity})
            }

            if (progress > 7.5 / 8) {
              const revealProgress = (progress - 7.5 / 8) / (0.5 / 8)
              const newOpacity = gsap.utils.interpolate(0, 1, revealProgress)
              gsap.set(websiteContentRef.current, {opacity: newOpacity})
            } else {
              gsap.set(websiteContentRef.current, {opacity: 0})
            }
          }
        }
      })

      updateHeaderText()
      return() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
  }, {scope: container})

  return (
    <>
    <ReactLenis root options={{lerp: 0.1, duration: 1.5, smoothTouch: true}}>
        <div ref={container} className="container">
          <section ref={stickyRef} className="sticky">
            <div ref={handContainerRef} className="hand-container">
              <div ref={handRef} className="hand">
                <Image ref={handImageRef} src="/portrait.jpg" alt="portrait" fill />
              </div>
            </div>

            <div ref={introRef} className="intro">
              <h1 ref={h1ElementRef}><span>time to</span> be brave</h1>
                <div ref={introCopyRef}>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente dolorum et doloribus molestias velit corrupti consequatur saepe eligendi. Aspernatur?</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatibus fuga recusandae sed beatae est earum voluptates aspernatur ratione error.</p>
                </div>
            </div>

            <div ref={websiteContentRef} className="website-content">
              <h1>Codegrid</h1>
            </div>
          </section>
          <section className="about">
            <p>(Your next section goes here)</p>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
