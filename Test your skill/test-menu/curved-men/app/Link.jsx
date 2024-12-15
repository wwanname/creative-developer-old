'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { scale, slide } from "./anim";

export default function index({ setActivedTarget, activedTargert, data, pathname }) {
  const { title, href, index } = data

  return (
    <motion.div custom={index} {...slide} onMouseEnter={() => {setActivedTarget(href)}} onMouseLeave={() => {setActivedTarget(pathname)}} className="relative flex items-center">
      <motion.div variants={scale} animate={activedTargert == href ? "animate" : "exit"} className="size-3 bg-white rounded-full absolute -left-8" />
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
