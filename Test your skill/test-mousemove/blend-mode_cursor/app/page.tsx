'use client'
import React, {useState} from "react"
import Cursor from "./cursor"
import Scene from "./scene"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Scene setIsHovered={setIsHovered} />
      <Cursor isHovered={isHovered} />
    </>
  );
}
