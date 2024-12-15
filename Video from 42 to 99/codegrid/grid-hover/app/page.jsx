/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef } from "react"

export default function Home() {
  const containerRef = useRef()

  const block = () => {
    return <>
    {[...Array(15)].map((_, i) => {
      return (
        <div key={i} className="block"></div>
      )
    })}
    </>
  }

  useEffect(() => {
    const blocks = containerRef.current.querySelectorAll(".block")

    blocks.forEach((block) => {
      const onMouseEnter = () => {
        block.classList.add("active")
        setTimeout(() => {
          block.classList.remove("active")
        }, 300)
      }

      block.addEventListener("mouseenter", onMouseEnter)
      return(() => block.removeEventListener("mouseenter", onMouseEnter))
    })
  }, [])

  return (
    <div className="container" ref={containerRef}>
      <div className="img-container">
        <div className="img">
          <img src="./img-9.jpg" alt="img" />
        </div>
        <div className="img-overlay"></div>
        <div className="flex">
        {[...Array(10)].map((_, index) => {
          return (
            <div key={index} className="column">
              {block()}
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
