/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function Home() {
  const imgFull = useRef([])
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      imgFull.current.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top center",
          end: "bottom center",
          markers: true,
          onToggle: self => {
            const thumbnailDiv = document.querySelectorAll(".img-thumbnail")
            if (self.isActive) {
                animateThumbnail(thumbnailDiv[index], true)
            } else {
                animateThumbnail(thumbnailDiv[index], false)
            }
          }
        })
      })

      const animateThumbnail = (thumbnail, isActive) => {
        gsap.to(thumbnail, {
          border: isActive ? "1px soild #fff" : "none",
          opacity: isActive ? "1" : "0.5",
          scale: isActive ? "1.3" : "1",
          zIndex: isActive ? "100" : "1",
          duration: 0.3
        })
      }
    })

    return(() => ctx.revert)
  }, [])

  const getRandomLeft = () => {
    const values = [-15, -7.5, 0, 7.5, 15]
    return values[Math.floor(Math.random() * values.length)] + 'px'
  }

  return (
    <>
    <nav>
      <a href="#">Linear</a>
      <button>Sign up</button>
    </nav>
    <div className="container">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam ratione quaerat delectus veritatis, est doloremque mollitia consectetur laboriosam nulla cum quidem magnam corporis fugit tempora libero nam harum facilis.</h1>
    </div>
    <div className="gallery">
      <div className="minimap">
        <div className="preview">
        {[...Array(10)].map((_, i) => {
            return (
              <div id="thumbnailDiv" key={`i_${i}`} style={{left: getRandomLeft()}} className="img-thumbnail">
                <img id="imgThumbnal" src={`./${i}.jpg`} alt={`Image ${i}`} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="images">
        {[...Array(10)].map((_, i) => {
          return (
            <div ref={el => imgFull.current[i] = el} id="imgDiv" key={`i_${i}`} className="img">
              <img id="imgFull" src={`./${i}.jpg`} alt={`Image ${i}`} />
            </div>
          )
        })}
      </div>
    </div>
    <div className="container">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi quia unde sint distinctio voluptates nulla quidem? Aliquam recusandae atque neque laboriosam, voluptatem veniam doloribus debitis. Itaque, quibusdam odio? Ea.
        </h1>
      </div>
    </>
  );
}
