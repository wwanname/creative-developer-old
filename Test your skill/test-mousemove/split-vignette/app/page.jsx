/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Gallery from './components/gallery';
import { useMotionValue, useSpring } from "framer-motion"
import { useEffect } from 'react';
import Lenis from 'lenis';
import Projects from "./components/projects"

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak"
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias"
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers"
  },
  {
    name: "Landon Speers",
    handle: "landon_speers"
  }
]

export default function Home() {

useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}, [])

const mouse = {
  x: useMotionValue(0),
  y: useMotionValue(0)
}

const settings = {stiffness: 443, damping: 34, mas: 1}
const smoothMouse = {
    x: useSpring(mouse.x, settings),
    y: useSpring(mouse.y, settings)
}

const onMouseMove = e => {
    const {clientX, clientY} = e
    const cursor = {
        x: window.innerWidth * 0.25,
        y: window.innerWidth * 0.3
    }
    smoothMouse.x.set(clientX - cursor.x / 2)
    smoothMouse.y.set(clientY - cursor.y / 2)
}

  return (
    <main onMouseMove={onMouseMove}>
      {projects.map((project, index) => {
        return (
          <Gallery smoothMouse={smoothMouse} project={project} key={index} />
        )
      })
      }
      <Projects smoothMouse={smoothMouse} projects={projects} />
    </main>
  )
}