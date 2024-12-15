/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef } from "react"
import Lenis from "lenis"
import useDimension from "./useDimension"

export default function Home() {
  const dimension = useDimension()
  const canvas = useRef()
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const ctx = canvas.current.getContext("2d")
    ctx.fillRect(0, 0, dimension.width, dimension.height)

    let xMousePos = 0
    let yMousePos = 0
    let prevScrollX = 0
    let prevScrollY = 0
    let lastX = null
    let lastY = null
    let hasMouseMoved = false

    ctx.lineWidth = 24;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
    ctx.lineCap = "round"
    ctx.filter = "blur(12px)"

    const drawline = (newX, newY) => {
      if (lastX != null && lastY != null) {
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(newX, newY)
        ctx.stroke()
      }

      // those function remember the past of newX and newY
      lastX = newX
      lastY = newY
    }

    const onMouseMove = (e) => {
      //pageX, pageY remember the position of cursor in the whole page. clientX, clientY won't
      if (hasMouseMoved) {
        lastX = e.pageX
        lastY = e.pageY
                      //active
        hasMouseMoved = true
      } else {
        xMousePos = e.pageX
        yMousePos = e.pageY
        drawline(xMousePos, yMousePos)
      }
    }


    const onScroll = () => {
      const xScrollDelta = window.scrollX - prevScrollX
      const yScrollDelta = window.scrollY - prevScrollY

      if (xScrollDelta != 0 || yScrollDelta != 0) {
        xMousePos += xScrollDelta
        yMousePos += yScrollDelta
        drawline(xMousePos, yMousePos)
      }

      // those function remember the past of window.scrollX and window.scrollY
      prevScrollX = window.scrollX
      prevScrollY = window.scrollY
    }


    document.addEventListener("mousemove", onMouseMove)
    window.addEventListener("scroll", onScroll)
  }, [dimension.height, dimension.scrollX, dimension.scrollY, dimension.width])

  return (
    <>
    <div className="container">
      <nav>
        <div className="logo"><a href="#">Gotheic</a></div>
        <div className="info"><p>Creative Direction</p></div>
        <div className="about"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis impedit magni pariatur laboriosam.</p></div>
      </nav>
        <div className="header">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="hero-img">
          <img src="./1.jpg" alt="banner" />
        </div>
        <div className="copy">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tenetur fugit, laboriosam temporibus officiis pariatur accusantium fuga veniam dolor eligendi, quisquam optio ullam dolores modi tempora quidem officia debitis doloribus!</p>
        </div>
        <div className="img">
          <img src="./2.jpg" alt="banner" />
        </div>
        <div className="copy">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias quasi rerum voluptate laboriosam cum in, repellendus nam dicta at corporis alias explicabo, fugiat quam tempore, voluptas esse soluta dolor?</p>
        </div>
        <div className="img">
          <img src="./3.jpg" alt="banner" />
        </div>
        <div className="header">
          <img src="./logo.png" alt="logo" />
        </div>
    </div>
    <canvas ref={canvas} width={dimension.width} height={dimension.height}></canvas>
    </>
  );
}
