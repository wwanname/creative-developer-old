/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
'use client'
import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useScroll } from "framer-motion";

const colors = [
    "#c32d27",
    "#f5c63f",
    "#457ec4",
    "#356fdb",
]

export default function Cursor({isHovered}) {
    const rafId = useRef(null);
    const circle = useRef([]);
    const delayedMouse = useRef({x: 0, y: 0});
    const size = isHovered ? 300 : 30;
    let delay = 0.02

    // useEffect(() => {
    //     const { scrollY } = useScroll();
        // const YouWantPlayLetsPlay = e => {
        //     paths.current.forEach((path, i) => {
        //         path.setAtribute("startOffset", )
        //     });
    //     scrollY.on('change', YouWantPlayLetsPlay)
    // },[])

    useEffect(() => {

        //setup mousemove
        let xTo = gsap.quickTo(circle.current, "x", {duration: 0.4, ease: "power3"});
        let yTo = gsap.quickTo(circle.current, "y", {duration: 0.4, ease: "power3"});
        const onMouseMove = e => {
            const {clientX, clientY} = e;
            xTo(clientX);
            yTo(clientY);
        }

        //ease
        const lerp = (x, y, a) => x * (1 - a) + y * a
        const animate = () => {
        const {x, y} = delayedMouse.current;
            delayedMouse.current = {
                x: lerp(x, circle.current.x, 0.075),
                y: lerp(y, circle.current.x, 0.075)
            }
            rafId.current = window.requestAnimationFrame(animate) //60fps
        }

        gsap.set(circle.current, {xPercent: -50, yPercent: -50}) //center

        window.addEventListener("mousemove", onMouseMove);
        return(() => window.removeEventListener("mousemove", onMouseMove), window.cancelAnimationFrame(animate))
    }, [])

    return (
        <div className="relative h-screen">
            { [...Array(4)].map((_,i) => {
                return (
                    <div key={i} ref={ref => circle.current[i] = ref} style={{backgroundColor: colors[i], width: size, height: size, filter: `blur(${isHovered ? 30 : 0}px)`, transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`}} className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"></div>
                )
            })}
        </div>
    )
}