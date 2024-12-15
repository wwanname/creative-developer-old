/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);
  const slider = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (slider.current) {
      const scrollPos = window.scrollY;
      const initial = `transform3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
      const zOffset = scrollPos * 0.5;
      slider.current.style.transform = `${initial} translateY(${zOffset}px)`;
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "15%";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "0%";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={slider} className="slider">
      {
        [...Array(19)].map((_, i) => (
          <div key={i} className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={`./${i}.jpg`} alt={`Image ${i}`} />
          </div>
        ))
      }
    </div>
  );
}
