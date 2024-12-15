'use client'
import Image, { StaticImageData } from "next/image";
import Picture1 from "@/public/images/1.jpg"
import Picture2 from "@/public/images/2.jpg"
import Picture3 from "@/public/images/3.jpg"
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis"
import {motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap} from "framer-motion"


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className="h-screen" />
        {/* <Slide src={Picture1} left={"-40%"} />
        <Slide src={Picture2} left={"-25%"} />
        <Slide src={Picture3} left={"-75%"} /> */}
          <ParallaxText baseVelocity={30}><Slide src={Picture1} left={"-40%"} /></ParallaxText>
          <ParallaxText baseVelocity={-30}><Slide src={Picture2} left={"-25%"} /></ParallaxText>
          <ParallaxText baseVelocity={30}><Slide src={Picture3} left={"-75%"} /></ParallaxText>
      <div className="h-screen" />
    </main>
  );
}

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {clamp: false})
  const x = useTransform(baseX, (v) => `${wrap(-10, -30, v)}%`)
  const directionFactor = useRef<number>(1)
  useAnimationFrame((time, delta) => {
    if (scrollVelocity.get() < 0) {
      directionFactor.current = -1
    } else if (scrollVelocity.get() > 0) {
      directionFactor.current = 1
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 40000)
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap flex-nowrap flex m-0">
      <motion.div style={{ x }} className="font-semibold uppercase text-6xl whitespace-nowrap flex-nowrap flex gap-x-10">
        <div>{children}</div>
        <div>{children}</div>
      </motion.div>
    </div>
  )
}

interface SlideProps {
  src: StaticImageData;
  left: string;
}

function Slide({left, src}: SlideProps) {
  return (
    <div style={{left: left}} className="relative flex whitespace-nowrap">
      <Text src={src} />
      <Text src={src} />
    </div>
  )
}

interface TextProps {
  src: StaticImageData;
}

function Text({src}: TextProps) {
  return(
    <div className="flex gap-5 items-center">
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} alt="image" fill style={{objectFit: "cover"}} />
      </span>
    </div>
  )
}