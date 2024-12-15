'use client';
import { useScroll } from "framer-motion";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Intro() {
    const background = useRef(null)
    const introImage = useRef(null)

    // useEffect(() => {
    //     const [animate, setScrollAnimation] = useState("")
    //     const scrollY = useScroll()
    //     const handleScroll = () => {
    //         const scrollAnimation = scrollY.get()
    //         if (scrollAnimation > 50) {
    //             setScrollAnimation("")
    //         } else {
    //             setScrollAnimation("")
    //         }
    //     }

    //     handleScroll()
    //     return scrollY.on("change", handleScroll)
    // }, [])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px"
            }
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`}, 0)
            .to(introImage.current, {height: "200px"}, 0)
        })
        return () => ctx.revert()
    }, [])

  return (
      <div className="relative w-full flex justify-center">
        <div ref={background} className="w-full h-[140dvh] absolute brightness-75">
            <Image
                src={`/images/background.jpeg`}
                fill={true}
                priority={true}
                alt="bg image"
                className="object-cover"
            />
        </div>
        <div className="flex justify-center relative mt-[36dvh]">
            <div ref={introImage} className="brightness-75 w-80 h-[475px] absolute" data-scroll data-scroll-speed="0.3">
                <Image
                    src={`/images/intro.png`}
                    alt="intro img"
                    fill={true}
                    priority={true}
                    className="object-cover object-top"
                />
            </div>
            <h1 className="text-white text-[7vw] font-bold z-10 text-center whitespace-nowrap" data-scroll data-scroll-speed="0.7">SMOOTH SCROLL</h1>
        </div>
      </div>
  )
}
