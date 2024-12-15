'use client'
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export default function Magantic({ children }) {
  const [mouse, setOnMouse] = useState({x: 0, y: 0});
  const ref = useRef(null)

  const onMouseMove = e => {
    const { clientX, clientY } = e
    const {left, top, width, height} = ref.current.getBoundingClientRect();
    const center = {
      x: left + width / 2,
      y: top + height / 2
    }
    const distance = {
      x: clientX - center.x,
      y: clientY - center.y
    }
    setOnMouse({
      x: (distance.x),
      y: (distance.y)
    })
  }

  const onMouseLeave = () => {
    setOnMouse({
      x: 0,
      y: 0
    })
  }
  const { x, y } = mouse

    return (
        <motion.div
            ref={ref}
            animate={{x, y}}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}>
            {children}
        </motion.div>
    )
  }