/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function framer({ children }) {
    const target = useRef()
    const [mouse, setMouse] = useState({x:0, y:0})

    const onMouseMove = e => {
        const { clientX, clientY } = e;
        const { top, left, width, height } = target.current.getBoundingClientRect()
        const center = {
            x: left + width / 2,
            y: top + height / 2
        }
        const distance = {
            x: clientX - center.x,
            y: clientY - center.y
        }
        setMouse({
            x: distance.x,
            y: distance.y
        })
    }

    const onMouseLeave = () => {
        setMouse({x:0, y:0})
    }

    const {x, y} = mouse
    return (
        <motion.div ref={target} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
        animate={{x, y}}
        transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}>{children}</motion.div>
    )
}