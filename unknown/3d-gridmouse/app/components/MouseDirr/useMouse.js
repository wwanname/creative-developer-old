/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useMotionValue } from "framer-motion"
import { useEffect } from "react"

export default function useMouse() {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const onMouseMove = (e) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX)
        mouse.y.set(clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)
        return(() => window.removeEventListener("mousemove", onMouseMove))
    }, [])

    return mouse
}