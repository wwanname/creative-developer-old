/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import Projects from "@/components/projects"

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img className="h-full" src="/assets/placeholder.png"></img>
})

export default function Home() {
  useEffect( () => {
    window.scrollTo(0,0);
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="h-[60vw] bg-[#0f0f0f] mt-[100dvh] mb-[100dvh] relative items-center justify-center">
        <Projects />
        <Earth />
    </main>
  )
}