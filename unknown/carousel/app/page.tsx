import React from 'react'
import '../css/embla.css'
import Main from "./components/Main"
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { align: 'start', dragFree: true, direction: 'rtl' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className='h-screen'>
      {/* <EmblaCarousel options={OPTIONS} /> */}
      <Main />
    </main>
  );
}
