/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { opacity } from "./anim"
import { motion } from "framer-motion"
import Image from 'next/image';

export default function Index({ isHovered, src }) {
    return (
        <motion.div variants={opacity} initial="initial" animate={isHovered.active ? "open" : "closed"} className="block w-[500px] h-[360px] relative m-10">
            <Image src={`/images/${src}`} fill alt="image" className="object-cover" />
        </motion.div>
    )
}