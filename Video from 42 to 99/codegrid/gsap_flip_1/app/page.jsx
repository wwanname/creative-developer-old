/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap"
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const imgs = useRef([])
  const btn = useRef()
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(Flip, CustomEase)
    CustomEase.create("cubic", "0.83, 0, 0.17, 1")
    let rotationValues = [10, -5, 2, -2]

    const applyRotation = () => {
      imgs.current.forEach((img, index) => {
        const rotation = isFlipped ? 0 : rotationValues[index]
        gsap.to(img, {
          rotate: rotation,
          duration: 2,
          ease: "cubic",
          delay: 0.155
        })
      })
    }

    let state = Flip.getState(imgs.current)
    imgs.current.forEach(img => img.classList.toggle("recorder"))

    Flip.from(state, {
      duration: 2,
      rotate: 0,
      stagger: 0.05,
      ease: "cubic",
      onStart: () => {
        applyRotation()
      },
    })

    const handleClick = () => {
      setIsFlipped(!isFlipped)
      if (btn.current) {
        btn.current.textContent = isFlipped ? "Hide all ideas" : "Explore Areas"
      }
    }

    if (btn.current) {
      btn.current.addEventListener("click", handleClick);
    }
    return () => {
      if (btn.current) {
        btn.current.removeEventListener("click", handleClick);
      }
    }
  }, [isFlipped])

  return (
    <main data-scroll-container>
      <nav>
        <div className="links">
          <a href="#">Work</a>
          <a href="#">Info</a>
          <a href="#">Contact</a>
        </div>
        <div className="cta">
          <a href="#">Sign Up</a>
        </div>
      </nav>
      <footer>
        <a href="#">English</a>
        <a href="#">View Showreel</a>
      </footer>
      <div data-scroll-section className="img-gallery">
        <div className="img-gallery-container">
        {[...Array(5)].map((_, i) => {
          return (
            <div key={i} className="img recorder">
              <img ref={el => imgs.current[i] = el} src={`./${i}.jpg`} alt={`Image ${i}`} />
            </div>
          )
        })}
        </div>
      </div>

      <div data-scroll-section className="hero">
        <h1>Near Future</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia.</p>
      </div>
      <div ref={btn} className="btn">Explore Areas</div>
    </main>
  );
}
