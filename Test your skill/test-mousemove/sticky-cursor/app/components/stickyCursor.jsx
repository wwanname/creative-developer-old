/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react";

export default function StickyCursor({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 100 : 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const onMouseMove = e => {
    const { clientX, clientY } = e
    const {left, top, width, height} = stickyElement.current.getBoundingClientRect();
    const center = {
      x: left + width / 2,
      y: top + height / 2
    }
    const distance = {
      x: clientX - center.x,
      y: clientY - center.y
    }

    if (isHovered) {
      smoothMouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1))
      smoothMouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1))
    } else {
      smoothMouse.x.set(clientX - cursorSize / 2);
      smoothMouse.y.set(clientY - cursorSize / 2)
    }
  }

  const onMouseOver = () => {
    setIsHovered(true);
  }

  const onMouseLeave = () => {
    setIsHovered(false);
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    stickyElement.current.addEventListener("mouseover", onMouseOver)
    stickyElement.current.addEventListener("mouseleave", onMouseLeave)
    return(() =>
      window.removeEventListener("mousemove", onMouseMove,
      stickyElement.current.removeEventListener("mouseover", onMouseOver),
      stickyElement.current.removeEventListener("mouseleave", onMouseLeave)
      ))
  }, [isHovered])

    return (
      <>
        <motion.div style={{left: smoothMouse.x, top: smoothMouse.y}} animate={{width: cursorSize, height: cursorSize}} className="fixed bg-black rounded-full pointer-events-none" />
      </>
    )
  }