/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default function Home() {
  const items = useRef([])
  const container = useRef()
  const gallery = useRef()
  const imgGallery = useRef([])
  const imgReview = useRef()
  const minimap = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(Flip, CustomEase, ScrollToPlugin)
    CustomEase.create(
      "hop",
      "M0, 0 C0.028,0.528 0.129,0.74 0.27,0.852 0.415,0.967 0.499,1 1, 1"
    )

    items.current.forEach(item => {
      item.addEventListener("click", () => {
        const newLayout = item.id
        switchLayout(newLayout)
      })
    })

    const switchLayout = (newLayout) => {
        gsap.to(window, {
          scrollTo: {y: 0},
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => switchLayoutHandler(newLayout),
        })
    }

    let activeLayout = "layout-1-gallery"
    const switchLayoutHandler = (newLayout) => {
      const state = Flip.getState(imgGallery.current)

      gallery.current.classList.remove(activeLayout)
      gallery.current.classList.add(newLayout)

      let staggerValue = 0.025
      if (
        (activeLayout === "layout-1-gallery" && newLayout === "layout-2-gallery") ||
        (activeLayout === "layout-3-gallery" && newLayout === "layout-2-gallery")
      ) {
        staggerValue = 0
      }

      Flip.from(state, {
        duration: 1.5,
        ease: "hop",
        stagger: staggerValue
      })

      if (newLayout === "layout-2-gallery") {
        gsap.to([imgReview.current, minimap.current], {
          autoAlpha: 1,
          duration: 0.3,
          delay: 0.5
        })
        window.addEventListener("scroll", handleScroll)
      } else {
        gsap.to([imgReview.current, minimap.current], {
          autoAlpha: 0,
          duration: 0.3,
        })
        window.removeEventListener("scroll", handleScroll)
        gsap.set(gallery.current, {clearProps: "y"})
        gsap.set(minimap.current, {clearProps: "y"})
      }

      activeLayout = newLayout
    }

    const handleScroll = () => {
      if (activeLayout !== "layout-2-gallery") return

      const imgPreviewsHeight = imgReview.current.scrollHeight
      const galleryHeight = gallery.current.scrollHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const scrollFraction = scrollY / (imgPreviewsHeight - windowHeight)
      const galleryTranslateY = -scrollFraction * (galleryHeight - windowHeight) * 1.525
      const minimapTranslateY = scrollFraction * (windowHeight - minimap.current.offsetHeight) * 0.425
      gsap.to(gallery.current, {
        y: galleryTranslateY,
        ease: "none",
        duration: 0.1
      })
      gsap.to(minimap.current, {
        y: minimapTranslateY,
        ease: "none",
        duration: 0.1
      })
    }
  }, [])

  return (
    <>
      <nav>
        <div className="nav-item"><p>wwan</p></div>
        <div className="nav-item"><p ref={el => items.current[0] = el} id="layout-1-gallery">01</p></div>
        <div className="nav-item"><p ref={el => items.current[1] = el} id="layout-2-gallery">02</p></div>
        <div className="nav-item"><p ref={el => items.current[2] = el} id="layout-3-gallery">03</p></div>
        <div className="nav-item"><p>Menu</p></div>
      </nav>

      <div ref={container} className="gallery-container">
        <div ref={gallery} className="gallery layout-1-gallery">
          {[...Array(14)].map((_, i) => {
            return (
            <div key={`i_${i}`} className="img" id={`img${i+1}`}>
              <img ref={el => imgGallery.current[i] = el} src={`./${i}.jpg`} alt={`Image ${i}`} />
            </div>
            )
          })}
        </div>
      </div>
      <div ref={minimap} className="minimap"></div>
      <div ref={imgReview} className="img-previews">
      {[...Array(14)].map((_, i) => {
          return <img key={i} src={`./${i}.jpg`} alt={`Image ${i}`} />
        })}
      </div>
    </>
  );
}
