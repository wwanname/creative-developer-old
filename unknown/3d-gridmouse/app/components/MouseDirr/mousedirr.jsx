/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useTransform, useVelocity } from "framer-motion"

export default function Home() {
    const circle = useRef()
    let size = 200;

    const xMouse = useMotionValue(0)
    const yMouse = useMotionValue(0)

    const lerp = (x, y, a) => x * (1 - a) + y * a
    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const onMouseMove = (e) => {
        const {clientX, clientY} = e;
        const distance = {
            x: clientX - size/2,
            y: clientY - size/2
        }
        xMouse.set(distance.x)
        yMouse.set(distance.y)
        smoothMouse.x.set(lerp(smoothMouse.x.get(), xMouse.get(), 0.1))
        smoothMouse.y.set(lerp(smoothMouse.y.get(), yMouse.get(), 0.1))
        const angle = Math.atan2(distance.y, distance.x)
        const angleDegrees = angle * (180 / Math.PI)
        animate(circle.current, {rotate: `${angleDegrees}deg`}, {duration: 0})
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)
        return(() => window.removeEventListener("mousemove", onMouseMove))
    }, [])

    const VecX = useVelocity(smoothMouse.x)
    const VecY = useVelocity(smoothMouse.y)
    const scaleX = useTransform(VecX, [-3000, 0, 3000], [0.5, 1.0, 0.5])
    const scaleY = useTransform(VecY, [-3000, 0, 3000], [0.2, 1.0, 0.2])

    const { x, y } = smoothMouse
    // const template = (transformProps) => {
    //     const {scaleX, scaleY, angle, x, y} = transformProps
    //     return `rotate(${angle}) scaleX(${scaleX}) scaleY(${scaleY})`
    // }
    return (
        <motion.div ref={circle} style={{ scaleX: scaleY, scaleY: scaleX, width: size, height: size, x, y}} className="rounded-full bg-white antialiased">
        </motion.div>
    );
}
