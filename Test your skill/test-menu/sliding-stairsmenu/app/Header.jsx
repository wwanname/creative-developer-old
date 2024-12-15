/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { AnimatePresence } from "framer-motion";
import Burger from "./Burger"
import Stairs from "./Stairs"
import { useState } from "react"

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <><Burger openMenu={() => {setMenuIsOpen(true)}} /><AnimatePresence mode="wait">
            {menuIsOpen && <Stairs setMenuIsOpen={setMenuIsOpen} />}
        </AnimatePresence></>
    )
  }
