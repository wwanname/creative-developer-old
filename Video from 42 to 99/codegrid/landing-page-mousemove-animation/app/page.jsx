'use client'
import gsap from "gsap"
import { useLayoutEffect, useEffect, useState } from "react";


export default function Home() {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true) //make sure html didn't render before animation go in
  }, [client])

  useLayoutEffect(() => {
    if (client == true) {
      let ctx = gsap.context(() => {
        gsap.from(".logo a, .contact a", {
          duration: 1.5,
          top: "25px",
          ease: "power4.inOut",
          stagger: {
            amount: 0.1
          },
          delay: 2
        })

        gsap.from("h1", {
          duration: 1.5,
          y: 150,
          ease: "power4.inOut",
          stagger: {
            amount: 0.1,
          }
        }, "<")

        gsap.from("p", {
          duration: 1.75,
          y: 30,
          ease: "power3.inOut",
          stagger: {
            amount: 0.25
          }
        }, "<")

        gsap.from(".loader-wrapper", {
          duration: 2,
          scale: 0.8,
          ease: "power1.inOut"
        })

        gsap.from(".loader", {
          duration: 2,
          top: "100%",
          ease: "power3.inOut"
        })

        gsap.to(".loader-wrapper, .pre-loader", {
          duration: 1,
          top: "-100%",
          ease: "power3.inOut",
          delay: 2
        }, "-1")
      })
      return () => ctx.revert();
    }

    const onMouseMove = (e) => {
      const {clientX, clientY} = e
      let normX = clientX / window.innerWidth - 0.5;
      let normY = clientY / window.innerHeight - 0.5;
      let moveX = normX * 100;
      let moveY = normY * 50;
      let rotateZ = normX * 25
      console.log([moveX, moveY, rotateZ])
      gsap.quickTo
      gsap.to(".bubbles", {
        x: moveX,
        y: moveY,
        rotationZ: rotateZ,
        ease: "power2.out",
        duration: 1.5
      })
    }

    document.addEventListener("mousemove", onMouseMove)
    return (() => document.removeEventListener("mousmove", onMouseMove))
  }, [client])

  return (
    <>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <a href="#">wwan</a>
          <div className="logo-revealer"></div>
        </div>
        <div className="contact">
          <a href="#">Contact</a>
          <div className="container-revealer"></div>
        </div>
        <div className="hero">
          <div className="header">
            <div className="row">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className="h1-revealer"></div>
            </div>
            <div className="row">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className="h1-revealer"></div>
            </div>
            <div className="copy">
              <div className="copy-top">
                {[...Array(5)].map((_, i) => {
                  return (
                  <div key={i} className="row">
                    <p>Lorem ipsum, dolor sit</p>
                    <div className="p-revealer"></div>
                  </div>
                  )
                })}
              </div>
              <div className="copy-bottom">
                <br />
                {[...Array(5)].map((_, i) => {
                  return (
                  <div key={i} className="row">
                    <p>Lorem ipsum, dolor sit</p>
                    <div className="p-revealer"></div>
                  </div>
                  )
                })}
                <br />
                <br />
                <div className="row">
                    <p>Lorem ipsum, dolor sit</p>
                    <div className="p-revealer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bubbles"></div>
    </>
  );
}
