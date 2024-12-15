'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import VideoCarousel from './VideoCarousel'

const Hightlight = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('#link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="hightlights" className='w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc'>
      <div>
        <h1 id="title" className='text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
          Get the hightlights
        </h1>

        <div className='flex flex-warp items-end-gap-5'>
          <p id="link" className='text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20'>
            Watch the film
            <img src="/assets/images/watch.svg" alt="watch" className='ml-2' /> 
          </p>
        </div>
      </div>
      <VideoCarousel />
    </section>
  )
}

export default Hightlight