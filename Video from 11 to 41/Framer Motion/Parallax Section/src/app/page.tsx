'use client'
import Image from "next/image";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Home() {
    

    const { scrollYProgress } = useScroll({
      offset: ["start start", 'end end']
    })
    
    return (
    <main className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -10])

  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image 
            src="/image/1.jpg"
            alt="img"
            fill
          />
        </div>

        <p>Transition</p>
      </div>
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0])

  return (
    <motion.div style={{scale,rotate}} className="relative h-screen">
      <Image 
        src="/image/2.jpeg"
        alt="img"
        fill
      />
    </motion.div>
  )
}

const Section3 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <motion.div style={{scale,rotate}} className="relative h-screen">
      <Image 
        src="/image/2.jpeg"
        alt="img"
        fill
      />
    </motion.div>
  )
}