'use client'
import Card from "./Card"
import React, {useEffect, useRef} from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const container = useRef(null)
  const cardRefs = useRef([])

  // useEffect(() => {
  //   const lenis = new Lenis()

  //   lenis.on('scroll', (e) => {
  //     console.log(e)
  //   })

  //   lenis.on('scroll', ScrollTrigger.update)

  //   gsap.ticker.add((time)=>{
  //     lenis.raf(time * 1000)
  //   })

  //   gsap.ticker.lagSmoothing(0)
  // }, [])

  useGSAP(() => {
    const cards = cardRefs.current;
    const totalScrollHeight = window.innerHeight * 3
    const position = [14, 38, 62, 86]
    const rotation = [-15, -7.5, 7.5, 15]

    ScrollTrigger.create({
      trigger: container.current.querySelector(".cards"),
      start: "top top",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true
    })

    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}%`,
        ease: "none",
        scrollTrigger: {
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
        }
      })
    })
    cards.forEach((card, index) => {
      const frontEl = card.querySelector(".flip-card-front")
      const backEl = card.querySelector(".flip-card-back")

      const staggerOffset = index  * 0.05
      const startOffset = 1 / 3 + staggerOffset
      const endOffset = 2 / 3 + staggerOffset
      ScrollTrigger.create({
        trigger: container.current.querySelector(".cards"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress
        //if progress >= 1/3 itself   and progress <= 2/3 ifselft
        //the animations run     and progress stop
          if (progress >= startOffset && progress <= endOffset) {
                                                              // heal the speed
            const animationProgress = (progress - startOffset) / (1/3)
            const frontRotation = -180 * animationProgress
            const backRotation = 180 - 180 * animationProgress

            gsap.to(frontEl, {
              rotateY: frontRotation,
              ease: "power1.out"
            })
            gsap.to(backEl, {
              rotateY: backRotation,
              ease: "power1.out"
            })
          }
        }
      })
    })
  }, {scope: container.current})

  return (
    <div className="container" ref={container}>
      <section className="hero">
        <h1>Keep scrolling to <br /> reveal the cards</h1>
      </section>
      <section className="cards">
        {[...Array(4)].map((_, i) => {
          return (
            <Card key={i} id={`card-${i + 1}`} frontSrc="/card-front.jpg" frontAlt="Card Image" backText="Your card details apper here" ref={el => cardRefs.current[i] = el} />
          )
        })}
      </section>
      <section className="footer">
        <h1>Footer or Upcoming Section</h1>
      </section>
    </div>
  )
}
