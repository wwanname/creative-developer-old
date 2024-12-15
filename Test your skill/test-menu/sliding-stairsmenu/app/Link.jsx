/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useAnimate } from "framer-motion"
import Link from "next/link"
import { rotateX, mountAnim } from "./anim"
import style from "./style.module.css"
import { useRef } from "react"
import Image from "next/image"

export default function index({data, index}) {
    const {title, description, images} = data
    const outer = useRef(null)
    const inner = useRef(null)
    const [scope, animate] = useAnimate()

    const animateIn = () => {
        animate([outer.current, inner.current], {top: "0%"}, {duration: 0.3})
    }

    const animateOut = (e) => {
        const bounds = scope.current.getBoundingClientRect()
        const direction = e.clientY < bounds.top + (bounds.height / 2) ? -1 : 1;

        animate(outer.current, {top: `${direction * 100}%`}, {duration: 0.3})
        animate(inner.current, {top: `${direction * -100}%`}, {duration: 0.3})
    }

    return (
        <motion.div
            ref={scope}
            onMouseEnter={() => {animateIn()}}
            onMouseOut={(e) => {animateOut(e)}}
            variant={rotateX}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={index}
            className={style.link}
        >
            <Link href="/">{title}</Link>
            <div ref={outer} className={style.outer}>
                <div ref={inner} className={style.inner}>
                    {
                        [...Array(2)].map((_, index) => {
                            return <SliderContent key={index} image={images} description={description} />
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
  }

  function SliderContent({image, description}) {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <Image
                    src={`/images/${image[0]}`}
                    fill
                    alt="image"
                    className="object-cover"
                />
            </div>
            <p className="text-black">{description}</p>
            <div className={style.imageContainer}>
                <Image
                    src={`/images/${image[1]}`}
                    fill
                    alt="image"
                    className="object-cover"
                />
            </div>
            <p className="text-black">{description}</p>
        </div>
    )
  }