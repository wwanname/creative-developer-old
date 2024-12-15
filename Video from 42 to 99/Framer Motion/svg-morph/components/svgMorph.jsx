'use client';
import { interpolate } from "flubber";
import { motion, useTransform, animate, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react";

export default function SVGMorph({paths}) {
  const [indexOfPath, setIndexOfPath] = useState(0);
  const progress = useMotionValue(0)
  const getIndex = paths.map((_, i) => i)
  const path = useTransform(progress, getIndex, paths, {mixer: (a, b) => interpolate(a, b, {maxSegmentLength: 5})})

  useEffect(() => {
    animate(progress, indexOfPath, {duration: 0.5, ease: "easeInOut", delay: 0.4, onComplete: () => {
      if (indexOfPath === paths.length - 1) {
        setIndexOfPath(0);
        progress.set(0)
      } else {
        setIndexOfPath(indexOfPath + 1);
      }
    }})

    // const interpolator = interpolate(paths[0], paths[1])
    // const targetPath = interpolator(0.5)
    // path.current.setAttribute("d", targetPath)
  }, [indexOfPath])

    return (
      <motion.path d={path} fill="white" />
    )
}