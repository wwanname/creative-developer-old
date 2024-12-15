import React from "react";
import Homepage from "../Homepage";
import Lists from "../Lists";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  circOut,
} from "framer-motion";

export default function Intro() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.88],
    ["0%", "-200%"],
    {
      type: "spring",
    },
    // { ease: cubicBezier(0.22, 0.005, 0.22, 1)}
    { ease: cubicBezier(0.22, 0.005, 0.22, 1.015) }
  );

  return (
    <div ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 overflow-hidden">
        <motion.div style={{ x }} className="flex shrink-0">
          <Homepage />
          <Lists targetRef={targetRef} scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>
    </div>
  );
}
