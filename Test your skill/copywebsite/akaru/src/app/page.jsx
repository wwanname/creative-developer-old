"use client";
import React, { lazy, Suspense, useLayoutEffect, useEffect } from "react";
import Intro from "./components/MainSection/Intro";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
  circOut,
} from "framer-motion";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Lenis from "lenis";
import ProjectsRight from "./components/ProjectsRight";
import ProjectsLeft from "./components/ProjectsLeft";
import Expertises from "./components/Expertises";

const Projects = lazy(() => import("./components/Projects")); //
export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], ["100%", "45.4%"], {
    clamp: true,
  });

  useEffect(() => {
    const easeInOut = (t) => t * t;

    const lenis = new Lenis({
      easing: easeInOut,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return <Expertises />;
}
