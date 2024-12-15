/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const position = [
    {top: "0%", left: "0%"},
    {top: "0%", left: "10%"},
    {top: "0%", left: "60%"},
    {top: "16%", left: "15%"},
    {top: "16%", left: "40%"},
    {top: "16%", left: "90%"},
    {top: "32%", left: "50%"},
    {top: "32%", left: "75%"},
    {top: "48%", left: "0%"},
    {top: "64%", left: "30%"},
    {top: "64%", left: "50%"},
    {top: "64%", left: "90%"},
    {top: "80%", left: "20%"},
    {top: "80%", left: "70%"},
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    gsap.set(".img", {
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0)"
    })

      const scatterAndShrink = () => {
        gsap.to(".img", {
          top: (i) => position[i].top,
          left: (i) => position[i].left,
          transform: "none",
          width: "75px",
          height: "100px",
          stagger: 0.075,
          duration: 0.75,
          ease: "power2.out"
        })
      }

      gsap.to(".img", {
        scale: 1,
        width: "300px",
        height: "400px",
        stagger: 0.15,
        duration: 0.75,
        ease: "power2.out",
        delay: 1,
        onComplete: scatterAndShrink,
      })

      gsap.from("p", {
        y: 0,
        ease: "power4.inOut",
        duration: 1,
        stagger: {
          amount: 0.15,
        },
        delay: 0.5
      })

      gsap.to("p", {
        top: "40px",
        ease: "power4.inOut",
        duration: 1,
        stagger: {
          amount: 0.15
        },
        delay: 3,
        onComplete: () => {
          const header = document.querySelector(".header")
          if (header) header.remove()
        }
      })

      gsap.from("a", {
        y: 20,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
        stagger: {
          amount: 0.15
        },
        delay: 4
      })

      const imgs = document.querySelectorAll('img')
      const applyBlur = () => {
        const elemetsToBlur = document.querySelectorAll('.nav, .footer, .header, .text, .img:not([data-enlarged="true"])')
        gsap.to(elemetsToBlur, {
          filter: 'blur(20px)',
          duration: 0.75,
          ease: "power2.out"
        })
      }

      const removeBlur = () => {
        const elemetsToBlur = document.querySelectorAll('.nav, .footer, .header, .text, .img:not([data-enlarged="true"])')
        gsap.to(elemetsToBlur, {
          filter: 'blur(0px)',
          duration: 1,
          ease: "power2.out"
        })
      }

      const toggleImageSize = (e) => {
        const img = e.currentTarget
        const isEnlarged = img.getAttribute('data-enlarged') === 'true'
        const originalPosition = JSON.parse(img.getAttribute('data-original-position'))
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (!isEnlarged) {
          const enlargedWidth = 500
          const enlargedHeight = 600
          const centeredLeft =(viewportWidth - enlargedWidth) / 2
          const centeredTop = (viewportHeight- enlargedHeight) / 2
          const topCorrection = 75;
          const correctedTop = centeredTop - topCorrection;

          gsap.to(img, {
            zIndex: 1000,
            top: centeredTop + 'px',
            left: centeredLeft + 'px',
            width: enlargedWidth + 'px',
            height: enlargedHeight + 'px',
            ease: "power4.out",
            duration: 1
          })
          img.setAttribute('data-enlarged', 'true')
          applyBlur()
        } else {
          setTimeout(() => removeBlur(), 100)
          gsap.to(img, {
            zIndex: 1,
            top: originalPosition.top,
            left: originalPosition.left,
            width: '75px',
            height: '100px',
            ease: "power4.out",
            duration: 1
          })
          img.setAttribute('data-enlarged', 'false')
        }
      }

      imgs.forEach((img, i) => {
        img.setAttribute('data-original-position', JSON.stringify(position[i]));
        img.setAttribute('data-enlarged', 'false')
        img.addEventListener('click', toggleImageSize)
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="container">
      <div className="nav">
        <a href="#">Neural Nauance</a>
        <a href="#">Showreel</a>
      </div>
      <div className="footer">
        <a href="#">Behance</a>
        <a href="#">Catalog</a>
      </div>
      <div className="header">
        <div className="text">
          <p>In a futurer</p>
          <div className="text-revealer"></div>
        </div>
        <div className="text">
          <p>not too distant</p>
          <div className="text-revealer"></div>
        </div>
      </div>
      <div className="gallery">
        {[...Array(14)].map((_, index) => {
          return (
            <div key={index} className="img">
              <img src={`/${index}.jpg`} alt={`img ${index}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
