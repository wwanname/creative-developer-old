/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react'
import Button from './Button';
import Nav from "./Nav/Nav"

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function index() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="fixed right-12 top-12">
            <motion.div variants={menu} initial="closed" animate={isActive ? "open" : "closed"} className="w-[480px] h-[650px] bg-[#c9fd74] rounded-3xl relative">
                <AnimatePresence mode="wait">
                   {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}