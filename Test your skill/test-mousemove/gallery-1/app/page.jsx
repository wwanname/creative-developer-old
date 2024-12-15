'use client';
import { useState } from 'react';
import Project from './components/project';
import Modal from './components/modal';

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]

export default function Home() {

  const [isActive, setIsActive] = useState({active: false, index: 0})

  return (
  <main className='flex h-screen justify-center items-center'>
    <div className='w-[1000px]'>
      {
        projects.map( (project, index) => {
          return <Project key={index} title={project.title} setIsActive={setIsActive} index={index} />
        })
      }
    </div>
    <Modal projects={projects} isActive={isActive} />
  </main>
  )
}
