/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import { motion } from "framer-motion"
import react, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    opened: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    close: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({projects, isActive}) {
  const {active, index} = isActive;
  const container = useRef(null);
  const circle = useRef(null);
  const view = useRef(null);

  useLayoutEffect(() => {
    let xContainer = gsap.quickTo(container.current, "left", {duration: 0.8, ease:"power3"})
    let yContainer = gsap.quickTo(container.current, "top", {duration: 0.8, ease:"power3"})
    let xCircle = gsap.quickTo(circle.current, "left", {duration: 0.3, ease:"power2"})
    let yCircle = gsap.quickTo(circle.current, "top", {duration: 0.3, ease:"power2"})
    let xView = gsap.quickTo(view.current, "left", {duration: 0.2, ease:"power2"})
    let yView = gsap.quickTo(view.current, "top", {duration: 0.2, ease:"power2"})

    const onMouseMove = (e) => {
        const {clientX, clientY} = e
        xContainer(clientX);
        yContainer(clientY);
        xCircle(clientX);
        yCircle(clientY);
        xView(clientX);
        yView(clientY);
      }

    window.addEventListener(('mousemove'), onMouseMove)
    return(() => window.removeEventListener(('mousemove'), onMouseMove))
  }, [])

  return (
    <>
        <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "opened" : "closed"} className='absolute h-[360px] w-[400px] pointer-events-none overflow-hidden'>
            <div style={{top: index * -100 + "%"}} className='relative w-full h-full transition-all duration-300'>
                {
                    projects.map((project, index) => {
                        const {src, color} = project
                        return (
                            <div key={`modal_${index}`} style={{background: color}} className='flex justify-center items-center h-full '>
                                <Image
                                    src={`/images/${src}`}
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
        <motion.div ref={circle} variants={scaleAnimation} initial="initial" animate={active ? "opened" : "closed"} className='size-20 rounded-full bg-[#455CE9] text-white absolute z-2 flex justify-center items-center font-extralight text-xs pointer-events-none'></motion.div>
        <motion.div ref={view} variants={scaleAnimation} initial="initial" animate={active ? "opened" : "closed"} className=' size-20 rounded-full text-white absolute z-2 flex justify-center items-center font-extralight text-xs pointer-events-none bg-transparent'>View</motion.div>
    </>
  )
}
