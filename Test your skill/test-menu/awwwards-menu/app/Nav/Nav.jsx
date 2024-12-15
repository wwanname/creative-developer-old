/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { motion } from "framer-motion"
import { links, footerLinks } from "./data"
import { perspective, slideIn } from "./anim"
import Link from "next/link"
import style from "./style.module.css"

export default function Nav() {
    return (
        <div className="flex flex-col justify-between h-full pt-24 pr-10 pb-12 pl-10 box-border">
            <div className="flex flex-col gap-2">
                {
                    links.map((link, i) => {
                        const { title, href } = link
                        return (
                            <Link key={`b_${i}`} href={href}>
                                <div className={style.linkContainer}>
                                        <motion.div custom={i} {...perspective}>
                                            <a>
                                                {title}
                                            </a>
                                        </motion.div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <motion.div className="flex flex-wrap">
                {
                    footerLinks.map((link, i) => {
                        const {title, href} = link;
                        return (
                            <motion.a className="w-1/2 mt-1" {...slideIn} custom={i} href={href} key={`f_${i}`}>{title}</motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
  }
