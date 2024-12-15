/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from "react"
import Body from "./Body"
import Footer from "./Footer"
import Image from "./Image"
import { height } from "./anim"
import { motion } from "framer-motion"

const links = [
    {
      title: "Home",
      href: "/",
      src: "home.png"
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.png"
    },
    {
      title: "About Us",
      href: "/about",
      src: "home.png"
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.png"
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.png"
    }
  ]

export default function Navbar() {

    const [isHovered, setIsHovered] = useState({active: false, index: 0})

    return (
      <motion.div variants={height} initial="initial" animate="open" exit="close" className="overflow-hidden">
        <div className="flex gap-12">
          <div className="flex flex-col justify-between">
            <Body links={links} isHovered={isHovered} setIsHovered={setIsHovered} />
            <Footer />
          </div>
          <Image src={links.src} isHovered={isHovered} />
        </div>
      </motion.div>
    )
}