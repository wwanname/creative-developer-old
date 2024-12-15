'use client'
import style from "./style.module.css"
import { useState } from "react";
import { AnimatePresence } from "framer-motion"
import Nav from "./Nav"

export default function Header() {
    const [isActived, setIsActived] = useState(false);

    return (
    <>
      <div onClick={() => setIsActived(!isActived)} className="fixed right-0 z-2 m-5 size-20 bg-[#455CE9] rounded-full cursor-pointer flex items-center justify-center z-50">
        <div className={`${style.burger} ${isActived ? style.burgerActive : style.burger }`} />
      </div>
      <AnimatePresence mode="wait">
        {isActived && <Nav /> }
      </AnimatePresence>
    </>
    );
  }