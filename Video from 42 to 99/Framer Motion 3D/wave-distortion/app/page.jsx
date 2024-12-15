"use client";
import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Scene = dynamic(() => import("../components/Scene"), {
  ssr: false,
});

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main>
      <div ref={container} className="h-[300dvh]">
        <div className="sticky top-0 h-screen">
          <Scene scrollProgress={scrollYProgress} />
        </div>
      </div>
      <div className="h-screen" />
    </main>
  );
}
