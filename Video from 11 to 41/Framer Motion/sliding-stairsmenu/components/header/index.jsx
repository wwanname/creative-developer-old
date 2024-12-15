"use client";
import { useState } from "react";
import Burger from "./burger/burger";
import Stairs from "./stairs/stairs";
import { AnimatePresence } from "framer-motion";
import Menu from "./menu/menu";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <Burger setMenuIsOpen={setMenuIsOpen} />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu setMenuIsOpen={setMenuIsOpen} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
