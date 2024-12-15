'use client'
import { useState } from "react"
import style from "./page.module.css"
import useMouse from "./useMouse"
import { motion } from "framer-motion"

export default function Home() {
  const [onSize, setOnSize] = useState(false);
  const { x, y } = useMouse();
  const size = onSize ? 400 : 40;

  return (
    <main className="h-screen">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className={style.mask}>
        <p onMouseEnter={() => {setOnSize(true)}} onMouseLeave={() => {setOnSize(false)}} className="w-[1000px] p-10">A visual designer - with skills that haven&apos;t been replaced by A.I (yet) - making good shit only if the paycheck is equally good.</p>
      </motion.div>
      <div className="w-full h-full flex justify-center items-center text-[#afa18f] text-6xl">
        <p className="w-[1000px]">I&apos;m a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  )
}