/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import gsap from "gsap"
import React, { useRef, useLayoutEffect } from "react"

export default function framer({ children }) {
    const target = useRef()

    useLayoutEffect(() => {
    let xTo = gsap.quickTo(target.current, "x", {duration: 0.4, ease: "power3"})
    let yTo = gsap.quickTo(target.current, "y", {duration: 0.4, ease: "power3"})

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
            xTo(distance.x)
            yTo(distance.y)
        }

        const onMouseLeave = () => {
            gsap.to(target.current, {x: 0, duration: 1})
            gsap.to(target.current, {y: 0, duration: 1})
            xTo(0)
            yTo(0)
            centerMouse(target.current.x, target.current.y)
        }

        const centerMouse = (x, y) => {
            gsap.set(target.current, {x, y, xPercent: -50, yPercent: -50})
        }

        target.current.addEventListener("mousemove", onMouseMove);
        target.current.addEventListener("mouseleave", onMouseLeave);
        return(() => target.current.removeEventListener("mousemove", onMouseMove),
        target.current.removeEventListener("mouseleave", onMouseLeave)
        )
    }, [])

    return (
        React.cloneElement(children, {ref:target})
    )
}