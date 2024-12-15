'use client'
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import style from "../../css/style.module.css"

const Arrays = [
    {
        id: "0",
        Number: "2",
        Device: "Digitial Mirrors",
        src: "https://www.datocms-assets.com/110921/1715110050-halo_item_miroirs.jpg?auto=format&fit=crop&crop=focalpoint&fp-x=0.2&fp-y=0.5&ar=390:558&w=2700&h=3863"
    },
    {
        id: "1",
        Number: "4",
        Device: "Batteries",
        src: "https://www.datocms-assets.com/110921/1715110078-halo_item_batteries.jpg?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&ar=390:558&w=2700&h=3863"
    },
    {
        id: "2",
        Number: "1",
        Device: "Halo App",
        src: "https://www.datocms-assets.com/110921/1716480507-halo-tablet.jpg?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&ar=390:558&w=2700&h=3863"
    },
    {
        id: "3",
        Number: "1",
        Device: "Articulating arm",
        src: "https://www.datocms-assets.com/110921/1715110131-halo_item_bras.jpg?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&ar=390:558&w=2700&h=3863"
    },
    {
        id: "4",
        Number: "1",
        Device: "Battery charger",
        src: "https://www.datocms-assets.com/110921/1715110151-halo_item_chargeur.jpg?auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&ar=390:558&w=2700&h=3863"
    },
]

const Text = {
    initial: { opacity: 0.4 },
    open: { opacity: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0.4, transition: { duration: 0.5 } }
  }

  const imgVariants = {
    open: (isActived) => ({
        opacity: 1,
        scale: 1.1,
        x: `-${113 * isActived}%`,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    }),
    closed: {
        opacity: 0,
        scale: 0.1,
        x: 0,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    },
    larger: (isActived) => ({
        opacity: 0.4,
        scale: 0.8,
        x: `-${113 * isActived}%`,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    })
};

const imgVariants2 = {
    open: (isActived) => ({
        opacity: 1,
        scale: 1.5,
        x: `-${113 * isActived}%`,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    }),
    closed: (isActived) => ({
        opacity: 0,
        scale: 0.1,
        x: `-${113 * isActived}%`,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    }),
    larger: (isActived) => ({
        opacity: 0.4,
        scale: 0.8,
        x: `-${113 * isActived}%`,
        transition: { duration: 0.2, cubicBezier: (0.65, 0, 0.35, 1) }
    }),
};

export default function Main() {
    const [isActived, setIsActived] = useState(0);
    const constraintsRef = useRef(null)

    const setAnimate = (index) => {
        let distance = index - isActived;
        let jumpThreshold = 2;

        if (Math.abs(distance) >= jumpThreshold) {
            return imgVariants;
        } else {
            return imgVariants;
        }
    }

    const animate = (index) => {
        if (index == isActived) {
            return "open"
        } if (index < isActived) {
            return "closed"
        } if (index > isActived) {
            return "larger"
        }
    }

    const template = ({x, opacity, scale}) => {
        return `x(${x}) opacity(${opacity}) scale(${scale})`
    }

    return (
            <section className="relative bg-black text-white selection:bg-orange-500 overflow-hidden">
                <AnimatePresence mode="wait">
                    <div ref={constraintsRef} className="flex justify-start items-center w-full h-full left-[40vw] absolute">
                        {
                            Arrays.map((array, index) => {
                                return (<motion.span drag dragConstraints={constraintsRef} className="flex-none scale-110 pr-24" key={index}><motion.img style={{ transform: `scale(${imgVariants[animate(index)].scale}) translateX(${imgVariants[animate(index)].x})`, opacity: imgVariants[animate(index)].opacity, zIndex: -10 * index }} onClick={() => setIsActived(index)} variants={setAnimate(index)} custom={isActived} animate={animate(index)} src={array.src} width={390} height={558} alt="image" className="transition-all duration-300 rounded-lg" /></motion.span>)
                            })
                        }
                    </div>
                </AnimatePresence>
                <div className="py-24 px-20 block">
                    <h2 className="text-[5vw] leading-[5vw] w-[30vw]">Included in One Room+</h2>
                    <ul className="text-2xl pt-10 list-none w-[30vw]">
                        {
                            Arrays.map((array, index) => {
                                return (
                                    <motion.li key={index} onClick={() => setIsActived(index)} variants={Text} initial="initial" animate={isActived == index ? "open" : "closed"} className="py-1 border-solid border-t-[1px] [&:nth-last-child(1)]:border-b-[1px] text-lg flex cursor-pointer">
                                        {array.Number}
                                        <span className="pl-5">{array.Device}</span>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>
                <button className="py-24 px-20 flex items-center pt-20 gap-x-2">
                        <div onClick={() => {if (isActived > 0) {setIsActived(isActived - 1)}}} className={`${style.buttongrayscale} ${isActived != 0 ? style.button : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-name="arrow-left" className="w-full h-full scale-50 text-black" aria-hidden="true"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M19.4 10.018H.6m0 0 8.9-8.9m-8.9 8.9 8.865 8.864"></path></svg>
                        </div>
                        <div onClick={() => {if (isActived < Arrays.length - 1) {setIsActived(isActived + 1)}}} className={`${style.buttongrayscale} ${isActived != 4 ? style.button : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-name="arrow-right" className="w-full h-full scale-50 text-black" aria-hidden="true"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M.6 10.018h18.8m0 0-8.9-8.9m8.9 8.9-8.864 8.864"></path></svg>
                        </div>
                </button>
            </section>
    )
}

