import About from '@/components/About'
import Experiences from '@/components/Experiences'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Technologies from '@/components/Technologies'
import React from 'react'


const page = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Technologies />
        <Project />
        
      </div>
    </div>
  )
}

export default page