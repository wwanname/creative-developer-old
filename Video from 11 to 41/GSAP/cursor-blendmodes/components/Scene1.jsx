"use client";
import React from "react";
import Cursor from "@/components/Cursor";
import { useState } from "react";

export default function Scene1() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative flex items-center justify-center h-screen">
      <h1
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered();
        }}
        className="text-[4.5vw] h-auto max-h-[90vw] text-center text-white p-20 z-20"
      >
        The quick brown fox jumps over the lazy dog
      </h1>
      <Cursor isHovered={isHovered} />
    </div>
  );
}
