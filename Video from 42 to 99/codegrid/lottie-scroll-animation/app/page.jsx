'use client'
import { useRef } from "react";
import Lottie from "lottie-web";

export default function Home() {
  const lottieContainer = useRef()
  const endLottie = useRef()

  if (lottieContainer.current) {
    LottieScrollTrigger({
      trigger: lottieContainer.current,
      start: "top center",
      endTrigger: endLottie,
      end: `bottom center+=${
        lottieContainer.current.offsetHeight
      }`,
      renderer: "svg",
      target: lottieContainer.current,
      path: "",
      scrub: 2
    })
  }

  const LottieScrollTrigger = (vars) => {
    let playhead = {frame: 0},
    target = gsap.utils.toArray(vars.target)[0]
    speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
    st = {
      trigger: ".trigger",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1,
      markers: false
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
      container: target,
      renderder: vars.renderder || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: 
    })
  }

  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">wwan</a>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">Expertise</a>
          <a href="#">Agency</a>
          <a href="#">Job</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="lottie-container">
        <div ref={lottieContainer} className="animation"></div>
      </section>

      <section className="gradient"></section>
      <section className="website-content">
        <div ref={endLottie} className="end-lottie"></div>
        <h1>Your content goes here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio aspernatur dolorem! Recusandae, repellat. Distinctio animi ipsa voluptas sequi quae.</p>
      </section>
    </>
  );
}
