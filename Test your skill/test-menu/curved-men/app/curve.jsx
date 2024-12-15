'use client'
import { motion } from "framer-motion"

export default function Curve() {

    const initialPath = `M 100 0 L 100 ${window.innerHeight} Q -100 ${window.innerHeight/2} 100 0`
    const targetPath = `M 100 0 L 100 ${window.innerHeight} Q 100 ${window.innerHeight/2} 100 0`

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: 1, ease: [0.75, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: 1, ease: [0.75, 0, 0.24, 1]}
        }
    }

    return (
        <svg className="absolute top-0 -left-24 w-28 h-full fill-[#292929] stroke-none">
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
        </svg>
    )
  }
