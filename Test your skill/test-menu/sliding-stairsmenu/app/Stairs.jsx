import { motion } from "framer-motion"
import { background, height, mountAnim } from "./anim"
import Menu from "./Menu"

export default function Home({setMenuIsOpen}) {
    return (
        <><Menu closeMenu={() => { setMenuIsOpen(false) } } />
        <div className="top-0 left-0 fixed z-10 h-screen flex transition-all duration-100 pointer-events-none">
            {[...Array(5)].map((_, index) => {
                return <Stair key={index} index={index} />
            })}
            <Background />
        </div></>
    )
  }

function Stair({index}) {
    return (
        <motion.div
        className="w-[20vw] h-full bg-black"
        variants={height}
        {...mountAnim}
        custom={4 - index}/>
    )
}

function Background() {
    return (
        <motion.div
            variants={background}
            {...mountAnim}
            className="w-full h-full absolute bg-black"
        />
    )
}