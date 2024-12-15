'use client'
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuSlide } from "./anim";
import Link from "./Link"
import Curve from "./curve";

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

export default function Nav() {
    const pathname = usePathname()
    const [activedTargert, setActivedTarget] = useState(pathname)

    return (
        <motion.div {...menuSlide} className="h-screen bg-[#292929] fixed top-0 right-0 text-white z-10">
            <div className="h-full p-24 flex flex-col justify-between">
                <div className="flex flex-col text-5xl gap-3 mt-20">
                    <div className="uppercase text-xs mt-10 border-b-2 border-b-[#9a9a9a] text-[#999999]">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return (
                                <Link
                                    key={index}
                                    activedTargert={activedTargert}
                                    setActivedTarget={setActivedTarget}
                                    data={{...data, index}}
                                    pathname={pathname}
                                />
                            )
                        })
                    }
                </div>
                <div className="flex justify-between text-xs gap-10 w-full">
                    <a className="decoration-[0px] font-light">Awwwards</a>
                    <a className="decoration-[0px] font-light">Instagram</a>
                    <a className="decoration-[0px] font-light">Dribble</a>
                    <a className="decoration-[0px] font-light">Linkedin</a>
                </div>
            </div>
            <Curve />
        </motion.div>
    );
}
