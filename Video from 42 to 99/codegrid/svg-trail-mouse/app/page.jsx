/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap"
export default function Home() {
  useLayoutEffect(() => {
    const trails = document.querySelectorAll(".trail")
    const smoothPointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
    const totalPointsArray = [40, 34, 30, 25, 20, 15, 10]

    const onMouseMove = (e) => {
      gsap.to(smoothPointer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      })
    }

      const updatePath = () => {
      trails.forEach((path, index) => {
        let points = path.points || []; //to make x, y value
        points.unshift({...smoothPointer}); //update x, y but still contain historys of them
        while (points.length > totalPointsArray[index]) {
          points.pop()
        }
        path.points = points

        if (points.length > 1) {
          let d = `M ${points[0].x} ${points[0].y}`;
          for (let i = 1; i < points.length; i++) {
            d += `L ${points[i].x} ${points[i].y}`
          }
          path.setAttribute("d", d)
        }
      })
      requestAnimationFrame(updatePath)
    }

    updatePath()

    window.addEventListener("mousemove", onMouseMove)
  }, [])


  return (
    <>
      <svg><path d="" className="trail" style={{stroke: "#fef302"}}></path></svg>
      <svg><path d="" className="trail" style={{stroke: "#9aa8e1"}}></path></svg>
      <svg><path d="" className="trail" style={{stroke: "#f57faa"}}></path></svg>
      <svg><path d="" className="trail" style={{stroke: "#fb2832"}}></path></svg>
      <svg><path d="" className="trail" style={{stroke: "#e27b63"}}></path></svg>
      <svg><path d="" className="trail" style={{stroke: "#e82c31"}}></path></svg>
    </>
  );
}