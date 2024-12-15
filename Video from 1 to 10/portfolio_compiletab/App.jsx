import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased slec slection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'></div>
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <Navbar />
            <Hero />
        </div>
    </div>
  )
}

export default App