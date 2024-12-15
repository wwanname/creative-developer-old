/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from "framer-motion"
import style from "./style.module.css"

export default function index({ project, smoothMouse }) {
  const { x, y } = smoothMouse;

  return (
    <div className={style.gallery}>
        <div className='w-full h-full relative'>
            <Image src={`/images/${project.handle}/background.jpg`} alt="image" fill />
        </div>
        <motion.div style={{x: x, y: y}} className='fixed top-0 w-[25vw] h-[30vw] rounded-xl overflow-hidden'>
            <Image src={`/images/${project.handle}/1.jpg`} alt="image" fill className='w-full object-cover' />
        </motion.div>
    </div>
  )
}