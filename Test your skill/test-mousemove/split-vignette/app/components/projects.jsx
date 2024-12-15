/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import style from "./style.module.css"
import { motion } from "framer-motion"
import { useState } from 'react';

export default function index({ projects, smoothMouse }) {
  const [index, setIndex] = useState(0)
  const { x, y } = smoothMouse;

  return (
    <div className={style.gallery}>
        <div className='w-full h-full flex justify-center items-center flex-col z-10 absolute'>
            {
                projects.map((project, i) => {
                    return (
                        <p onMouseEnter={() => setIndex(i)} className='text-4xl uppercase m-0' key={`p_${i}`}>
                            {project.name}
                        </p>
                    )
                })
            }
        </div>
        <motion.div style={{x: x, y: y}} className='fixed top-0 w-[25vw] h-[30vw] rounded-xl overflow-hidden'>
            <Image src={`/images/${projects[index].handle}/about.jpg`} alt="image" fill className='w-full object-cover' />
        </motion.div>
    </div>
  )
}