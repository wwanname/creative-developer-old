'use client';
import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Description() {
  return (
      <div className='relative text-[3vw] uppercase mt-[30vw] ml-[10vw]'>
        {
          phrases.map((phrase, index) => {
            return <AnimatedText key={index}>{phrase}</AnimatedText>
          })
        }
      </div>
  )
}

function AnimatedText({children}) {
  const text = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "bottom bottom",
          end: "+=400px bottom",
        }
      })

      timeline
        .from(text.current, {opacity: 0, left: "-200px", ease: "power3.out"})
    })
    return () => ctx.revert()
  }, [])

  return <p ref={text} className='relative m-0'>{children}</p>
}