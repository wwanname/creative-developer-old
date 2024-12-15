/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Link from "next/link"
import { blur, translate } from "./anim"
import { motion } from "framer-motion"

export default function Body({ links, isHovered, setIsHovered }) {

    const getChars = (words) => {
        let chars = [];
        words.split("").forEach((word, i) => {
            chars.push(
                <motion.span
                    key={word + i}
                    variants={translate}
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    initial="initial"
                    animate="open"
                    exit="close"
                >
                    {word}
                </motion.span>
            )
        });
        return chars
    }

    return (
        <div className="flex flex-wrap mt-32 max-w-5xl">
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return (
                        <Link key={`l_${index}`} href={href}>
                            <motion.p onMouseOver={() => setIsHovered({active: true, index})} onMouseLeave={() => {setIsHovered({active: false, index})}} variants={blur} animate={isHovered.active && isHovered.index != index ? "open" : "close"} className="flex overflow-hidden text-black no-underline uppercase text-6xl pt-4 pr-5 font-light">
                                {getChars(title)}
                            </motion.p>
                        </Link>
                    )
                })
            }
        </div>
    )
}