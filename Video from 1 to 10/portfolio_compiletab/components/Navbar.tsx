'use client'
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <Image className="mx-2 w-10" src="/assets/kevinRushLogo.png" alt="logo" width={550} height={550} />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaSquareTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar