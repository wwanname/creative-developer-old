/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, {useEffect} from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react";

const colors = [
    "#c32d27",
    "#f5c63f",
    "#457ec4",
    "#356fdb",
]

export default function framer({isHovered}) {
    let delay = 0.25;
    const delayedMouse = useRef({x: 0, y: 0})
    const size = isHovered ? 300 : 30;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const settings = {stiffness: 190, damping: 18, mass: 1}
    const smoothMouse = {
        x: useSpring(mouse.x, settings),
        y: useSpring(mouse.y, settings)
    }

    const onMouseMove = e => {
        const {clientX, clientY} = e;
        smoothMouse.x.set(clientX - size / 2),
        smoothMouse.y.set(clientY - size / 2)
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return(() => window.removeEventListener("mousemove", onMouseMove))
    }, [])


    return (
        <div className="relative h-screen">
            <motion.div style={{backgroundColor: "#c32d27", width: size, height: size, filter: `blur${isHovered ? 30 : 0 }px`, x: smoothMouse.x, y: smoothMouse.y, transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`}} className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none flex"></motion.div>
        </div>
    )
}