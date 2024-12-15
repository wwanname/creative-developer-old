import { AnimatePresence, motion } from "framer-motion"
import PerspectiveText from "./PerspectiveText"

export default function Button({ isActive, toggleMenu }) {
    return (
        <AnimatePresence>
        <div className="absolute top-0 right-0 w-28 h-10 rounded-3xl cursor-pointer overflow-hidden">
            <motion.div animate={{top: isActive ? "-100%" : "0%"}} transition={{duration: 0.5, type: "tween", ease: [0.75, 0, 0.25, 1]}} className="relative w-full h-full">
                <div onClick={() => {toggleMenu()}} className="w-full h-full bg-[#c9fd74] text-black">
                    <PerspectiveText label="Menu" />
                </div>
                <div onClick={() => {toggleMenu()}} className="w-full h-full text-[#c9fd74] bg-black">
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
        </AnimatePresence>
    )
  }